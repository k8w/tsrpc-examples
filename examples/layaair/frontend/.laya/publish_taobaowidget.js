// v1.0.2
const ideModuleDir = global.ideModuleDir;
const workSpaceDir = global.workSpaceDir;

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const del = require(ideModuleDir + "del");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');

let copyLibsTask = ["copyPlatformLibsJsFile"];
let versiontask = ["version2"];

let 
    config,
	releaseDir,
	tempReleaseDir;
let versionCon; // 版本管理version.json
let commandSuffix,
	layarepublicPath;

gulp.task("preCreate_TBWidget", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	tempReleaseDir = global.tempReleaseDir;
	config = global.config;
	commandSuffix = global.commandSuffix;
	layarepublicPath = global.layarepublicPath;
});

gulp.task("copyPlatformFile_TBWidget", versiontask, function() {
	releaseDir = path.dirname(releaseDir);
	let adapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "taobaowidgetfiles");
	let hasPublishPlatform = 
		fs.existsSync(path.join(releaseDir, "client")) &&
		fs.existsSync(path.join(releaseDir, "widget")) &&
		fs.existsSync(path.join(releaseDir, "mini.project.json"));
	let copyLibsList;
	if (hasPublishPlatform) {
		copyLibsList = [`${adapterPath}/widget/component/adapter.js`];
	} else {
		copyLibsList = [`${adapterPath}/**/*.*`];
	}
	var stream = gulp.src(copyLibsList, {base: adapterPath});
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("copyFiles2Pages_TBWidget", ["copyPlatformFile_TBWidget"], function() {
	return gulp.src(`${tempReleaseDir}/**/*.*`).pipe(gulp.dest(`${releaseDir}/widget/component`));
});

gulp.task("delFiles_TBWidget", ["copyFiles2Pages_TBWidget"], function(cb) {
	let delList = [`${tempReleaseDir}/**`];
	del(delList, { force: true }).then(paths => {
		cb();
	}).catch((err) => {
		throw err;
	})
});

gulp.task("modifyFile_TBWidget", ["delFiles_TBWidget"], function() {
	if (config.version || config.enableVersion) {
		let versionPath = path.join(releaseDir, "widget", "component", "version.json");
		versionCon = fs.readFileSync(versionPath, "utf-8");
		versionCon = JSON.parse(versionCon);
	}
	// 修改index.js
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	let indexFilePath = path.join(releaseDir, "widget", "component", indexJsStr);
	if (!fs.existsSync(indexFilePath)) {
		return;
	}
	let indexFileContent = fs.readFileSync(indexFilePath, "utf-8");
	indexFileContent = indexFileContent.replace(/(window.screenOrientation\s*=\s*"\w+"[,;]?)/gm, "/**$1*/");
	indexFileContent = indexFileContent.replace(/loadLib(\(['"]libs\/)/gm, `require("./libs/`);
	indexFileContent = indexFileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	indexFileContent = indexFileContent.replace(/require\(\"\.\/laya([-\w]*)\.js\"\)/gm, `require("./laya$1.js")`);
	// 特殊的，增加清除缓存
	indexFileContent = indexFileContent.replace(/(require(\(['"][\w\/\.]+['"]\));?)/gm, "delete require.cache[require.resolve$2];\n$1");
	fs.writeFileSync(indexFilePath, indexFileContent, "utf-8");
})

gulp.task("modifyMinJs_TBWidget", ["modifyFile_TBWidget"], function() {
	// 如果保留了平台文件，如果同时取消使用min类库，就会出现文件引用不正确的问题
	if (config.keepPlatformFile) {
		let fileJsPath = path.join(releaseDir, "widget", "component", "game.js");
		let content = fs.readFileSync(fileJsPath, "utf-8");
		content = content.replace(/min\/laya(-[\w\d]+)?\.tbpluginmini\.min\.js/gm, "laya.tbpluginmini.js");
		fs.writeFileSync(fileJsPath, content, 'utf-8');
	}
	if (!config.useMinJsLibs) {
		return;
	}
	let fileJsPath = path.join(releaseDir, "widget", "component", "game.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	content = content.replace(/(min\/)?laya(-[\w\d]+)?\.tbpluginmini(\.min)?\.js/gm, "min/laya.tbpluginmini.min.js");
	fs.writeFileSync(fileJsPath, content, 'utf-8');
});

gulp.task("modifyLibsJs_TBWidget", ["modifyMinJs_TBWidget"], function() {
	const NONCORESTR = "var window = $global.window;\nvar document = window.document;\nvar XMLHttpRequest = window.XMLHttpRequest;\nvar Laya = window.Laya;\nvar Config = window.Config;\nvar Config3D = window.Config3D;\nvar Laya3D = window.Laya3D;\nvar performance = window.performance;\nvar CANNON = window.CANNON;\nvar spine = window.spin;\n";
	const CORESTR = "var window = $global.window;\nvar document = window.document;\nvar XMLHttpRequest = window.XMLHttpRequest;\n";
	// libs
	let libsPath = path.join(releaseDir, "widget", "component", "libs", config.useMinJsLibs ? "min" : "");
	let libsList = fs.readdirSync(libsPath);
	for (let libName, fullPath, con, len = libsList.length, i = 0; i < len; i++) {
		libName = libsList[i];
		fullPath = path.join(libsPath, libName);
		if (path.extname(fullPath) !== ".js") {
			continue;
		}
		con = fs.readFileSync(fullPath, "utf8");
		if (/laya(-[\w\d]+)?\.core/gm.test(libName)) {
			con = CORESTR + con;
		} else {
			con = NONCORESTR + con;
		}
		fs.writeFileSync(fullPath, con, "utf8");
	}
	// bundle.js
	let bundleJsStr = (versionCon && versionCon["js/bundle.js"]) ? versionCon["js/bundle.js"] :  "js/bundle.js";
	let bundlePath = path.join(releaseDir, "widget", "component", bundleJsStr);
	let con = fs.readFileSync(bundlePath, "utf8");
	// as 侵入式的修改bundle.js
	if (fs.existsSync(path.join(workSpaceDir, "asconfig.json"))) {
		let fileList = fs.readdirSync(path.join(workSpaceDir, "src"));
		for (let i = 0, len = fileList.length, fileItem, filePath, isDir; i < len; i++) {
			fileItem = fileList[i];
			filePath = path.join(workSpaceDir, "src", fileItem);
			isDir = fs.statSync(filePath).isDirectory();
			if (isDir && (con.includes(`window.${fileItem} = {};`) || con.includes(`window.${fileItem}={}`))) {
				// 因为压缩时不能禁用逗号，只能穷尽所有可能
				con = con.replace(`window.${fileItem} = {};`, `var ${fileItem} = window.${fileItem} = {};`)
					.replace(`;window.${fileItem}={};`, `;var ${fileItem}=window.${fileItem}={};`)
					.replace(`,window.${fileItem}={};`, `;var ${fileItem}=window.${fileItem}={};`)
					.replace(`,window.${fileItem}={},`, `;var ${fileItem}=window.${fileItem}={};`)
					.replace(`;window.${fileItem}={},`, `;var ${fileItem}=window.${fileItem}={};`)
				if (!con.includes(`;var ${fileItem}=window.${fileItem}={};`)) {
					con = con.replace(`window.${fileItem}={}`, `;var ${fileItem}=window.${fileItem}={};`)
				}
			}
		}
	}
	con = NONCORESTR + con;
	fs.writeFileSync(bundlePath, con, "utf8");
	// laya.js
	let layaJsStr = (versionCon && versionCon["laya.js"]) ? versionCon["laya.js"] :  "laya.js";
	let layaPath = path.join(releaseDir, "widget", "component", layaJsStr);
	if (fs.existsSync(layaPath)) {
		let con = fs.readFileSync(layaPath, "utf8");
		con = CORESTR + con;
		fs.writeFileSync(layaPath, con, "utf8");
	}
});

gulp.task("version_TBWidget", ["modifyLibsJs_TBWidget"], function() {
	// 如果保留了平台文件，如果同时开启版本管理，就会出现文件引用不正确的问题
	if (config.keepPlatformFile) {
		let fileJsPath = path.join(releaseDir, "widget", "component", "game.js");
		let content = fs.readFileSync(fileJsPath, "utf-8");
		content = content.replace(/laya(-[\w\d]+)?\.tbpluginmini/gm, "laya.tbpluginmini");
		content = content.replace(/index(-[\w\d]+)?\.js/gm, "index.js");
		fs.writeFileSync(fileJsPath, content, 'utf-8');
	}
	if (config.version) {
		let versionPath = path.join(releaseDir, "widget", "component", "version.json");
		let gameJSPath = path.join(releaseDir, "widget", "component", "game.js");
		let srcList = [versionPath, gameJSPath];
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(`${releaseDir}/widget/component`));
	}
});

gulp.task("buildTBWidgetProj", ["version_TBWidget"], function() {
	console.log("all tasks completed");
});