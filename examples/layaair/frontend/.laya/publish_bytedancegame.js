// v1.1.3
const ideModuleDir = global.ideModuleDir;
const workSpaceDir = global.workSpaceDir;

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const del = require(ideModuleDir + "del");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');
const { getEngineVersion, getFileMd5, canUsePluginEngine } = require("./pub_utils");

const provider = "tt13aa65178c90228a";
const minPluginVersion = "2.7.0";
let fullRemoteEngineList = ["laya.core.js", "laya.filter.js", "laya.ani.js", "laya.tiledmap.js", "laya.d3.js", "laya.html.js", "laya.particle.js", "laya.ui.js", "laya.webgl.js", "laya.filter.js", "laya.d3Plugin.js"];
let copyLibsTask = ["copyPlatformLibsJsFile"];
let versiontask = ["version2"];

let 
    config,
    releaseDir;
let versionCon; // 版本管理version.json
let commandSuffix,
	layarepublicPath;

gulp.task("preCreate_ByteDance", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	config = global.config;
	commandSuffix = global.commandSuffix;
	layarepublicPath = global.layarepublicPath;

	if (config.useMinJsLibs) {
		fullRemoteEngineList = fullRemoteEngineList.map((item, index) => {
			return item.replace(".js", ".min.js");
		})
	}
});

gulp.task("copyPlatformFile_ByteDance", ["preCreate_ByteDance"], function() {
	let adapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "bytefiles");
	let hasPublishPlatform = 
		fs.existsSync(path.join(releaseDir, "game.js")) &&
		fs.existsSync(path.join(releaseDir, "game.json")) &&
		fs.existsSync(path.join(releaseDir, "project.config.json"));
	let copyLibsList;
	if (hasPublishPlatform) {
		copyLibsList = [`${adapterPath}/microgame-adapter.js`];
	} else {
		copyLibsList = [`${adapterPath}/*.*`];
	}
	var stream = gulp.src(copyLibsList);
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("modifyFile_ByteDance", versiontask, function() {
	// 修改game.json文件
	let gameJsonPath = path.join(releaseDir, "game.json");
	let content = fs.readFileSync(gameJsonPath, "utf8");
	let conJson = JSON.parse(content);
	conJson.deviceOrientation = config.bytedanceInfo.orientation;
	if (config.bytedanceInfo.subpack) { // 分包
		conJson.subPackages = config.bytedanceSubpack;
			
		// 检测分包目录是否有入口文件
		console.log('检查分包文件...');
		if (conJson.subPackages) { 
			for(let i = 0; i < conJson.subPackages.length; i ++) {
				let conf = conJson.subPackages[i];
				if (conf.root) {
					let rootPath = path.join(releaseDir, conf.root);
					if (!fs.existsSync(rootPath)) {

						throw new Error(`分包文件/目录 ${rootPath} 不存在！`);
					}
					let jsIndex = rootPath.lastIndexOf('.js');
					let jsPath = rootPath;
					if (jsIndex < 0 || jsIndex !=  rootPath.length - 3) {
						jsPath =  path.join(rootPath, 'game.js'); 
					}
					if (!fs.existsSync(jsPath)) {

						throw new Error(`分包文件/目录 ${jsPath} 不存在！`);
					}
				}
			}
		}
	} else {
		delete conJson.subPackages;
	}
	content = JSON.stringify(conJson, null, 4);
	fs.writeFileSync(gameJsonPath, content, "utf8");

	if (config.version || config.enableVersion) {
		let versionPath = releaseDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	// 修改index.js
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	let indexFilePath = path.join(releaseDir, indexJsStr);
	if (!fs.existsSync(indexFilePath)) {
		return;
	}
	let indexFileContent = fs.readFileSync(indexFilePath, "utf8");
	indexFileContent = indexFileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	fs.writeFileSync(indexFilePath, indexFileContent, "utf8");
})

gulp.task("modifyMinJs_ByteDance", ["modifyFile_ByteDance"], function() {
	// 如果保留了平台文件，如果同时取消使用min类库，就会出现文件引用不正确的问题
	if (config.keepPlatformFile) {
		let fileJsPath = path.join(releaseDir, "game.js");
		let content = fs.readFileSync(fileJsPath, "utf-8");
		content = content.replace(/min\/laya(-[\w\d]+)?\.ttmini\.min\.js/gm, "laya.ttmini.js");
		fs.writeFileSync(fileJsPath, content, 'utf-8');
	}
	if (!config.useMinJsLibs) {
		return;
	}
	let fileJsPath = path.join(releaseDir, "game.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	content = content.replace(/(min\/)?laya(-[\w\d]+)?\.ttmini(\.min)?\.js/gm, "min/laya.ttmini.min.js");
	fs.writeFileSync(fileJsPath, content, 'utf-8');
});

gulp.task("version_ByteDance", ["modifyMinJs_ByteDance"], function() {
	// 如果保留了平台文件，如果同时开启版本管理，就会出现文件引用不正确的问题
	if (config.keepPlatformFile) {
		let fileJsPath = path.join(releaseDir, "game.js");
		let content = fs.readFileSync(fileJsPath, "utf-8");
		content = content.replace(/laya(-[\w\d]+)?\.ttmini/gm, "laya.ttmini");
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

gulp.task("pluginEngin_ByteDance", ["version_ByteDance"], function(cb) {
	if (!config.uesEnginePlugin) { // 没有使用引擎插件，还是像以前一样发布
		let gameJsonPath = path.join(releaseDir, "game.json");
		let gameJsonContent = fs.readFileSync(gameJsonPath, "utf8");
		let conJson = JSON.parse(gameJsonContent);
		if (conJson.plugins) {
			delete conJson.plugins;
			gameJsonContent = JSON.stringify(conJson, null, 4);
			fs.writeFileSync(gameJsonPath, gameJsonContent, "utf8");

			let gameJsPath = path.join(releaseDir, "game.js");
			let gameJscontent = fs.readFileSync(gameJsPath, "utf8");
			gameJscontent = gameJscontent.replace(/requirePlugin\("[\w\/\.]+"\);?\n?/mg, "");
			fs.writeFileSync(gameJsPath, gameJscontent, "utf8");
		}
		return cb();
	}
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	
	// 获取version等信息
	let coreLibPath = path.join(workSpaceDir, "bin", "libs", "laya.core.js");
	let isHasCoreLib = fs.existsSync(coreLibPath);
	let isOldAsProj = fs.existsSync(`${workSpaceDir}/asconfig.json`) && !isHasCoreLib;
	let isNewTsProj = fs.existsSync(`${workSpaceDir}/src/tsconfig.json`) && !isHasCoreLib;
	let EngineVersion = getEngineVersion();
	if (!EngineVersion) {
		throw new Error(`读取引擎版本号失败，请于服务提供商联系!`);
	}
	if (!EngineVersion || EngineVersion.includes("beta") || !canUsePluginEngine(EngineVersion, minPluginVersion)) {
		throw new Error(`该版本引擎无法使用引擎插件功能(engineVersion: ${EngineVersion})`);
	}
	console.log(`通过版本号检查:  ${EngineVersion}`);
	// 使用引擎插件
	let localUseEngineList = [];
	let copyEnginePathList;
	new Promise(function(resolve, reject) {
		console.log(`修改game.js和game.json`);
		// 1) 修改game.js和game.json
		// 修改game.js
		let gameJsPath = path.join(releaseDir, "game.js");
		let platformJs = config.useMinJsLibs ? `require("./libs/min/laya.ttmini.min.js");` : `require("./libs/laya.ttmini.js");`;
		let gameJscontent = `require("microgame-adapter.js");\n${platformJs}\nrequirePlugin('layaPlugin');\nwindow.loadLib = require;\nrequire("./${indexJsStr}");`;
		fs.writeFileSync(gameJsPath, gameJscontent, "utf8");
		// 修改game.json，使其支持引擎插件
		let gameJsonPath = path.join(releaseDir, "game.json");
		let gameJsonContent = fs.readFileSync(gameJsonPath, "utf8");
		let conJson = JSON.parse(gameJsonContent);
		conJson.plugins = {
			"layaPlugin": {
				"version": EngineVersion,
				"provider": provider,
				"path": "laya-libs"
			}
		}
		gameJsonContent = JSON.stringify(conJson, null, 4);
		fs.writeFileSync(gameJsonPath, gameJsonContent, "utf8");
		resolve();
	}).then(function() {
		return new Promise(function(resolve, reject) {
			console.log(`确定用到的插件引擎`);
			// 2) 确定用到了那些插件引擎，并将插件引擎从index.js的引用中去掉
			let indexJsPath = path.join(releaseDir, indexJsStr);
			let indexJsCon = fs.readFileSync(indexJsPath, "utf8");
			let item, fullRequireItem;
			for (let i = 0, len = fullRemoteEngineList.length; i < len; i++) {
				item = fullRemoteEngineList[i];
				fullRequireItem = config.useMinJsLibs ? `require("./libs/min/${item}")` : `require("./libs/${item}")`;
				if (indexJsCon.includes(fullRequireItem)) {
					let _item = item.replace(".min.js", ".js"), _minItem = item;
					localUseEngineList.push(_item);
					indexJsCon = indexJsCon.replace(fullRequireItem + ";", "").replace(fullRequireItem + ",", "").replace(fullRequireItem, "");
					// 如果引用了压缩的类库，将其重命名为未压缩的类库，并拷贝到libs中
					if (config.useMinJsLibs) {
						let oldMinlibPath = path.join(releaseDir, "libs", "min", _minItem);
						let newMinlibPath = path.join(releaseDir, "libs", "min", _item);
						let newlibPath = path.join(releaseDir, "libs", _item);
						fs.renameSync(oldMinlibPath, newMinlibPath);
						// fs.copyFileSync(newlibPath, newMinlibPath);
						let con = fs.readFileSync(newMinlibPath, "utf8");
						fs.writeFileSync(newlibPath, con, "utf8");
						fs.unlinkSync(newMinlibPath);
					}
				}
			}
			if (isOldAsProj || isNewTsProj) { // 如果as||ts_new语言，开发者将laya.js也写入index.js中了，将其删掉
				fullRequireItem = `require("./laya.js")`;
				if (indexJsCon.includes(fullRequireItem)) {
					indexJsCon = indexJsCon.replace(fullRequireItem + ";", "").replace(fullRequireItem + ",", "").replace(fullRequireItem, "");
				}
			}
			fs.writeFileSync(indexJsPath, indexJsCon, "utf8");
			// ts/js再次修改game.js，仅引用使用到的类库
			// as||ts_new因为本地只有laya.js，无法仅引用使用到的类库
			if (!isOldAsProj && !isNewTsProj) {
				let pluginCon = "";
				localUseEngineList.forEach(function(item) {
					pluginCon += `requirePlugin("layaPlugin/${item}");\n`;
				});
				let gameJsPath = path.join(releaseDir, "game.js");
				let gameJsCon = fs.readFileSync(gameJsPath, "utf8");
				gameJsCon = gameJsCon.replace(`requirePlugin('layaPlugin');`, pluginCon);
				fs.writeFileSync(gameJsPath, gameJsCon, "utf8");
			}
			resolve();
		});
	}).then(function() {
		return new Promise(function(resolve, reject) {
			console.log(`将本地的引擎插件移动到laya-libs中`);
			// 3) 将本地的引擎插件移动到laya-libs中
			let libsPath = /** config.useMinJsLibs ? `${releaseDir}/libs/min` : */`${releaseDir}/libs`;
			copyEnginePathList = [`${libsPath}/{${localUseEngineList.join(",")}}`];
			if (isOldAsProj || isNewTsProj) { // 单独拷贝laya.js
				copyEnginePathList = [`${releaseDir}/laya.js`];
			}
			gulp.src(copyEnginePathList).pipe(gulp.dest(`${releaseDir}/laya-libs`));
			setTimeout(resolve, 500);
		});
	}).then(function() {
		return new Promise(function(resolve, reject) {
			console.log(`将libs中的本地引擎插件删掉`);
			// 4) 将libs中的本地引擎插件删掉
			del(copyEnginePathList, { force: true }).then(resolve);
		});
	}).then(function() {
		return new Promise(async function(resolve, reject) {
			console.log(`完善引擎插件目录`);
			// 5) 引擎插件目录laya-libs中还需要新建几个文件，使该目录能够使用
			if (isOldAsProj || isNewTsProj) { // 单独拷贝laya.js
				localUseEngineList.push("laya.js");
			}
			let 
				layalibsPath = path.join(releaseDir, "laya-libs"),
				engineIndex = path.join(layalibsPath, "index.js"),
				engineplugin = path.join(layalibsPath, "plugin.json"),
				enginesignature = path.join(layalibsPath, "signature.json");
			// index.js
			if (!fs.existsSync(layalibsPath)) {
				throw new Error("引擎插件目录创建失败，请与服务提供商联系!");
			}
			let indexCon = "";
			localUseEngineList.forEach(function(item) {
				indexCon += `require("./${item}");\n`;
			});
			fs.writeFileSync(engineIndex, indexCon, "utf8");
			// plugin.json
			let pluginCon = {"main": "index.js"};
			fs.writeFileSync(engineplugin, JSON.stringify(pluginCon, null, 4), "utf8");
			// signature.json，目前平台方将其作为保留用途，不会做插件的md5校验；IDE仍将生成md5
			let signatureCon = {
				"provider": provider,
				"signature": []
			};
			localUseEngineList.unshift("index.js");
			let fileName, md5Str;
			for (let i = 0, len = localUseEngineList.length; i < len; i++) {
				fileName = localUseEngineList[i];
				let md5Str = await getFileMd5(path.join(releaseDir, "laya-libs", fileName));
				signatureCon.signature.push({
					"path": fileName,
					"md5": md5Str
				});
			}
			fs.writeFileSync(enginesignature, JSON.stringify(signatureCon, null, 4), "utf8");
			resolve();
		});
	})
	.then(function() {
		cb();
	}).catch(function(e) {
		throw e;
	})
});

gulp.task("buildByteDanceProj", ["pluginEngin_ByteDance"], function() {
	console.log("all tasks completed");
});