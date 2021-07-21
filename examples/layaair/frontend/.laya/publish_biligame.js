// v1.8.0
const ideModuleDir = global.ideModuleDir;
const workSpaceDir = global.workSpaceDir;

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');

let copyLibsTask = ["copyPlatformLibsJsFile"];
let versiontask = ["version2"];

let 
    config,
    releaseDir;
let versionCon; // 版本管理version.json
let commandSuffix,
	layarepublicPath;

gulp.task("preCreate_Bili", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	config = global.config;
	commandSuffix = global.commandSuffix;
	layarepublicPath = global.layarepublicPath;
});

gulp.task("copyPlatformFile_Bili", ["preCreate_Bili"], function() {
	let adapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "bilifiles");
	let hasPublishPlatform = 
		fs.existsSync(path.join(releaseDir, "game.js")) &&
		fs.existsSync(path.join(releaseDir, "game.json"));
	let copyLibsList;
	if (hasPublishPlatform) {
		copyLibsList = [`${adapterPath}/weapp-adapter.js`];
	} else {
		copyLibsList = [`${adapterPath}/*.*`];
	}
	var stream = gulp.src(copyLibsList);
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("modifyFile_Bili", versiontask, function() {
	// 修改game.json文件
	let gameJsonPath = path.join(releaseDir, "game.json");
	let content = fs.readFileSync(gameJsonPath, "utf8");
	let conJson = JSON.parse(content);
	conJson.deviceOrientation = config.biliInfo.orientation;
	content = JSON.stringify(conJson, null, 4);
	fs.writeFileSync(gameJsonPath, content, "utf8");

	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	// bili小游戏项目，修改index.js
	let filePath = path.join(releaseDir, indexJsStr);
	if (!fs.existsSync(filePath)) {
		return;
	}
	let fileContent = fs.readFileSync(filePath, "utf8");
	fileContent = fileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	fs.writeFileSync(filePath, fileContent, "utf8");
});

gulp.task("modifyMinJs_Bili", ["modifyFile_Bili"], function() {
	// 如果保留了平台文件，如果同时取消使用min类库，就会出现文件引用不正确的问题
	if (config.keepPlatformFile) {
		let fileJsPath = path.join(releaseDir, "game.js");
		let content = fs.readFileSync(fileJsPath, "utf-8");
		content = content.replace(/min\/laya(-[\w\d]+)?\.bilimini\.min\.js/gm, "laya.bilimini.js");
		fs.writeFileSync(fileJsPath, content, 'utf-8');
	}
	if (!config.useMinJsLibs) {
		return;
	}
	let fileJsPath = path.join(releaseDir, "game.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	content = content.replace(/(min\/)?laya(-[\w\d]+)?\.bilimini(\.min)?\.js/gm, "min/laya.bilimini.min.js");
	fs.writeFileSync(fileJsPath, content, 'utf-8');
});

gulp.task("version_Bili", ["modifyMinJs_Bili"], function() {
	// 如果保留了平台文件，如果同时开启版本管理，就会出现文件引用不正确的问题
	if (config.keepPlatformFile) {
		let fileJsPath = path.join(releaseDir, "game.js");
		let content = fs.readFileSync(fileJsPath, "utf-8");
		content = content.replace(/laya(-[\w\d]+)?\.bilimini/gm, "laya.bilimini");
		content = content.replace(/index(-[\w\d]+)?\.js/gm, "index.js");
		fs.writeFileSync(fileJsPath, content, 'utf-8');
	}
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		let gameJSPath = releaseDir + "/game.js";
		let srcList = [versionPath, gameJSPath];
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(releaseDir));
	}
});

gulp.task("buildBiliProj", ["version_Bili"], function() {
	console.log("all tasks completed");
});