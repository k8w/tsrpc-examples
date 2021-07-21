// v1.9.3
const ideModuleDir = global.ideModuleDir;
const workSpaceDir = global.workSpaceDir;

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const del = require(ideModuleDir + "del");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');
const iconv =  require(ideModuleDir + "iconv-lite");
const request = require(ideModuleDir + "request");
const { getEngineVersion, canUsePluginEngine } = require("./pub_utils");

let fullRemoteEngineList = ["laya.core.js", "laya.webgl.js", "laya.filter.js", "laya.ani.js", "laya.d3.js", "laya.html.js", "laya.particle.js", "laya.ui.js", "laya.d3Plugin.js", "bytebuffer.js", "laya.device.js", "laya.physics.js", "laya.physics3D.js", "laya.tiledmap.js", "worker.js", "workerloader.js"];
let copyLibsTask = ["copyPlatformLibsJsFile"];
let versiontask = ["version2"];

let 
    config,
	releaseDir,
    toolkitPath,
    tempReleaseDir, // OPPO临时拷贝目录
	projDir; // OPPO快游戏工程目录
let versionCon; // 版本管理version.json
let commandSuffix,
	adbPath,
	opensslPath,
	layarepublicPath;

// 创建OPPO项目前，拷贝OPPO引擎库、修改index.js
gulp.task("preCreate_OPPO", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	config = global.config;
	commandSuffix = global.commandSuffix;
	adbPath = global.adbPath;
	opensslPath = global.opensslPath;
	layarepublicPath = global.layarepublicPath;
	tempReleaseDir = global.tempReleaseDir;

	toolkitPath = path.join(layarepublicPath, "oppo", "quickgame-toolkit");
	
	if (config.useMinJsLibs) {
		fullRemoteEngineList = fullRemoteEngineList.map((item, index) => {
			return item.replace(".js", ".min.js");
		})
	}
});

gulp.task("copyPlatformFile_OPPO", ["preCreate_OPPO"], function() {
	return;
});

// 新建OPPO项目-OPPO项目与其他项目不同，需要安装OPPO quickgame node_modules，并打包成.rpk文件
gulp.task("installModules_OPPO", versiontask, function() {
	releaseDir = path.dirname(releaseDir);
	projDir = path.join(releaseDir, config.oppoInfo.projName);
    // 如果IDE里对应OPPO包已经install node_modules了，忽略这一步
    if (fs.existsSync(path.join(toolkitPath, "node_modules"))) {
        return;
    }
	// 安装OPPO quickgame node_modules
	return new Promise((resolve, reject) => {
		console.log("开始安装OPPO quickgame node_modules，请耐心等待...");
		let cmd = `npm${commandSuffix}`;
		let args = ["install"];
        let opts = {
			cwd: toolkitPath,
			shell: true
		};
        let cp = childProcess.spawn(cmd, args, opts);
        
		cp.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);
		});
		
		cp.stderr.on('data', (data) => {
			console.log(`stderr: ${data}`);
			// reject();
		});
		
		cp.on('close', (code) => {
			console.log(`子进程退出码：${code}`);
			resolve();
		});
	});
});

// 拷贝文件到OPPO快游戏
gulp.task("copyFileToProj_OPPO", ["installModules_OPPO"], function() {
	// 将临时文件夹中的文件，拷贝到项目中去
	let originalDir = `${tempReleaseDir}/**/*.*`;
	let stream = gulp.src(originalDir);
	return stream.pipe(gulp.dest(path.join(projDir)));
});

// 拷贝icon到OPPO快游戏
gulp.task("copyIconToProj_OPPO", ["copyFileToProj_OPPO"], function() {
	let originalDir = config.oppoInfo.icon;
	let stream = gulp.src(originalDir);
	return stream.pipe(gulp.dest(path.join(projDir)));
});

// 清除OPPO快游戏临时目录
gulp.task("clearTempDir_OPPO", ["copyIconToProj_OPPO"], function() {
	// 删掉临时目录
	return del([tempReleaseDir], { force: true });
});

// 生成release签名(私钥文件 private.pem 和证书文件 certificate.pem )
gulp.task("generateSign_OPPO", ["clearTempDir_OPPO"], function() {
    if (!config.oppoSign.generateSign) {
        return;
    }
	// https://doc.quickapp.cn/tools/compiling-tools.html
	return new Promise((resolve, reject) => {
		let cmd = `${opensslPath}`;
		let args = ["req", "-newkey", "rsa:2048", "-nodes", "-keyout", "private.pem", 
					"-x509", "-days", "3650", "-out", "certificate.pem"];
		let opts = {
			cwd: projDir,
			shell: true
		};
		let cp = childProcess.spawn(cmd, args, opts);
		cp.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);
		});

		cp.stderr.on('data', (data) => {
			console.log(`stderr: ${data}`);
			data += "";
			if (data.includes("Country Name")) {
				cp.stdin.write(`${config.oppoSign.countryName}\n`);
				console.log(`Country Name: ${config.oppoSign.countryName}`);
			} else if (data.includes("Province Name")) {
				cp.stdin.write(`${config.oppoSign.provinceName}\n`);
				console.log(`Province Name: ${config.oppoSign.provinceName}`);
			} else if (data.includes("Locality Name")) {
				cp.stdin.write(`${config.oppoSign.localityName}\n`);
				console.log(`Locality Name: ${config.oppoSign.localityName}`);
			} else if (data.includes("Organization Name")) {
				cp.stdin.write(`${config.oppoSign.orgName}\n`);
				console.log(`Organization Name: ${config.oppoSign.orgName}`);
			} else if (data.includes("Organizational Unit Name")) {
				cp.stdin.write(`${config.oppoSign.orgUnitName}\n`);
				console.log(`Organizational Unit Name: ${config.oppoSign.orgUnitName}`);
			} else if (data.includes("Common Name")) {
				cp.stdin.write(`${config.oppoSign.commonName}\n`);
				console.log(`Common Name: ${config.oppoSign.commonName}`);
			} else if (data.includes("Email Address")) {
				cp.stdin.write(`${config.oppoSign.emailAddr}\n`);
				console.log(`Email Address: ${config.oppoSign.emailAddr}`);
				// cp.stdin.end();
			}
			// reject();
		});

		cp.on('close', (code) => {
			console.log(`子进程退出码：${code}`);
			// 签名是否生成成功
			let 
				privatePem = path.join(projDir, "private.pem"),
				certificatePem = path.join(projDir, "certificate.pem");
			let isSignExits = fs.existsSync(privatePem) && fs.existsSync(certificatePem);
			if (!isSignExits) {
				throw new Error("签名生成失败，请检查！");
			}
			resolve();
		});
	});
});

// 拷贝sign文件到指定位置
gulp.task("copySignFile_OPPO", ["generateSign_OPPO"], function() {
    if (config.oppoSign.generateSign) { // 新生成的签名
        // 移动签名文件到项目中（Laya & OPPO快游戏项目中）
        let 
            privatePem = path.join(projDir, "private.pem"),
            certificatePem = path.join(projDir, "certificate.pem");
        let isSignExits = fs.existsSync(privatePem) && fs.existsSync(certificatePem);
        if (!isSignExits) {
            return;
        }
        let 
            xiaomiDest = `${projDir}/sign/release`,
            layaDest = `${workSpaceDir}/sign/release`;
        let stream = gulp.src([privatePem, certificatePem]);
        return stream.pipe(gulp.dest(xiaomiDest))
                    .pipe(gulp.dest(layaDest));
    } else if (config.oppoInfo.useReleaseSign && !config.oppoSign.generateSign) { // 使用release签名，并且没有重新生成
        // 从项目中将签名拷贝到OPPO快游戏项目中
        let 
            privatePem = path.join(workSpaceDir, "sign", "release", "private.pem"),
            certificatePem = path.join(workSpaceDir, "sign", "release", "certificate.pem");
        let isSignExits = fs.existsSync(privatePem) && fs.existsSync(certificatePem);
        if (!isSignExits) {
            return;
        }
        let 
            xiaomiDest = `${projDir}/sign/release`;
        let stream = gulp.src([privatePem, certificatePem]);
        return stream.pipe(gulp.dest(xiaomiDest));
    }
});

gulp.task("deleteSignFile_OPPO", ["copySignFile_OPPO"], function() {
	if (config.oppoSign.generateSign) { // 新生成的签名
		let 
            privatePem = path.join(projDir, "private.pem"),
            certificatePem = path.join(projDir, "certificate.pem");
		return del([privatePem, certificatePem], { force: true });
	}
});

gulp.task("modifyFile_OPPO", ["deleteSignFile_OPPO"], function() {
	// 修改manifest.json文件
	let manifestPath = path.join(projDir, "manifest.json");
	let IDEManifestPath = path.join(toolkitPath, "tpl", "manifest.json");
	if (!fs.existsSync(IDEManifestPath) && !fs.existsSync(manifestPath)) {
		return;
	}
	let manifestContent;
	if (fs.existsSync(manifestPath)) {
		manifestContent = fs.readFileSync(manifestPath, "utf8");
	} else {
		manifestContent = fs.readFileSync(IDEManifestPath, "utf8");
	}
	let manifestJson = JSON.parse(manifestContent);
	manifestJson.package = config.oppoInfo.package;
	manifestJson.name = config.oppoInfo.name;
	manifestJson.orientation = config.oppoInfo.orientation;
	manifestJson.config.logLevel = config.oppoInfo.logLevel || "off";
	manifestJson.versionName = config.oppoInfo.versionName;
	manifestJson.versionCode = config.oppoInfo.versionCode;
	manifestJson.minPlatformVersion = config.oppoInfo.minPlatformVersion;
	manifestJson.icon = `./${path.basename(config.oppoInfo.icon)}`;
	if (config.oppoInfo.subpack) {
		manifestJson.subpackages = config.oppoSubpack;
		// 检测分包目录是否有入口文件
		console.log('检查分包文件...');
		 
		if (manifestJson.subpackages) { 
			for(let i = 0; i < manifestJson.subpackages.length; i ++) {
				let conf = manifestJson.subpackages[i];
				if (conf.root) {
					let rootPath = path.join(projDir, conf.root);
					if (!fs.existsSync(rootPath)) {

						throw new Error(`分包文件/目录 ${rootPath} 不存在！`);
					}
					let jsIndex = rootPath.lastIndexOf('.js');
					let jsPath = rootPath;
					if (jsIndex < 0 || jsIndex !=  rootPath.length - 3) {
						jsPath =  path.join(rootPath, 'main.js'); 
					}
					if (!fs.existsSync(jsPath)) {

						throw new Error(`分包文件/目录 ${jsPath} 不存在！`);
					}
				}
			}
		}		
	} else {
		delete manifestJson.subpackages;
	}
	fs.writeFileSync(manifestPath, JSON.stringify(manifestJson, null, 4), "utf8");

	if (config.version) {
		let versionPath = projDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	// OPPO项目，修改main.js
	let filePath = path.join(projDir, "main.js");
	let fileContent;
	if (!fs.existsSync(filePath)) {
		fileContent = `window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 OPPO MiniGame NetType/WIFI Language/zh_CN';
require("./libs/laya.quickgamemini.js");\nrequire("index.js");`;
	} else {
		// 额外的，如果有引擎插件相关代码，需要删掉
		fileContent = fs.readFileSync(filePath, "utf8");
		fileContent = fileContent.replace(/if\s\(window\.requirePlugin\)\s{\n[\w\"\.\-\/\(\);\s\n]*\n}\selse\s{\n[\w\"\.\-\/\(\);\s\n]*\n}\n/gm, "");
	}
	fs.writeFileSync(filePath, fileContent, "utf8");

	// OPPO项目，修改index.js
	let indexFilePath = path.join(projDir, indexJsStr);
	if (!fs.existsSync(indexFilePath)) {
		return;
	}
	let indexFileContent = fs.readFileSync(indexFilePath, "utf8");
	indexFileContent = indexFileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	fs.writeFileSync(indexFilePath, indexFileContent, "utf8");
});

gulp.task("modifyMinJs_OPPO", ["modifyFile_OPPO"], function() {
	let fileJsPath = path.join(projDir, "main.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	if (!config.useMinJsLibs) { // 默认保留了平台文件，如果同时取消使用min类库，就会出现文件引用不正确的问题
		content = content.replace(/min\/laya(-[\w\d]+)?\.quickgamemini\.min\.js/gm, "laya.quickgamemini.js");
	} else {
		content = content.replace(/(min\/)?laya(-[\w\d]+)?\.quickgamemini(\.min)?\.js/gm, "min/laya.quickgamemini.min.js");
	}
	fs.writeFileSync(fileJsPath, content, 'utf-8');
});

gulp.task("version_OPPO", ["modifyMinJs_OPPO"], function () {
	// main.js默认不覆盖，如果同时开启版本管理，就会出现文件引用不正确的问题
	let fileJsPath = path.join(projDir, "main.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	content = content.replace(/laya(-[\w\d]+)?\.quickgamemini/gm, "laya.quickgamemini");
	content = content.replace(/index(-[\w\d]+)?\.js/gm, "index.js");
	fs.writeFileSync(fileJsPath, content, 'utf-8');

	if (config.version) {
		let versionPath = projDir + "/version.json";
		let mainJSPath = projDir + "/main.js";
		let srcList = [versionPath, mainJSPath];
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(projDir));
	}
});

// 处理引擎插件
// 我们会将所有的libs下的文件放到engine里，但不能认定libs下全是我们的引擎，所以还是要加判断
gulp.task("pluginEngin_OPPO", ["version_OPPO"], function(cb) {
	let manifestJsonPath = path.join(projDir, "manifest.json");
	let manifestJsonContent = fs.readFileSync(manifestJsonPath, "utf8");
	let conJson = JSON.parse(manifestJsonContent);
	let copyBinPath;

	if (!config.uesEnginePlugin) { // 没有使用引擎插件，还是像以前一样发布
		delete conJson.plugins;
		manifestJsonContent = JSON.stringify(conJson, null, 4);
		fs.writeFileSync(manifestJsonPath, manifestJsonContent, "utf8");
		return cb();
	}
	// 引擎源码项目
	// 将所有的min拷贝进来
	if (config.useMinJsLibs) {
		copyBinPath = path.join(workSpaceDir, "bin", "libs", "min");
	} else { // 如果不是min
		copyBinPath = path.join(workSpaceDir, "bin", "libs");
	}
	// 针对min引擎文件，很多配置文件也需要该，同时改
	if (config.version) {
		let versionPath = projDir + "/version.json";
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
	if (isOldAsProj || isNewTsProj) {
		// 下载对应版本js引擎，按照普通项目走
		console.log(`ts源码项目(${isNewTsProj})或as源码项目(${isOldAsProj})，开始处理引擎`);
		let engineNum = EngineVersion.split("beta")[0];
		let suffix = EngineVersion.includes("beta") ? `_beta${EngineVersion.split("beta")[1]}` : "";
		let engineURL;
		if (canUsePluginEngine(EngineVersion, "2.7.2")) { // 2.7.2 开始，下载地址更新为 cos 服务器
			engineURL = `https://ldc-1251285021.cos.ap-shanghai.myqcloud.com/download/Libs/LayaAirJS_${engineNum}${suffix}.zip`;
		} else {
			engineURL = `http://ldc.layabox.com/download/LayaAirJS_${engineNum}${suffix}.zip`;
		}
		let engineDownPath = path.join(releaseDir, `LayaAirJS_${engineNum}${suffix}.zip`);
		let engineExtractPath = path.join(releaseDir, `LayaAirJS_${engineNum}${suffix}`);
		if (config.useMinJsLibs) {
			copyBinPath = path.join(engineExtractPath, "js", "libs", "min");
		} else { // 如果不是min
			copyBinPath = path.join(engineExtractPath, "js", "libs");
		}
		// 情况1) 如果已经下载过引擎了，直接开始处理引擎插件
		if (fs.existsSync(copyBinPath)) {
			console.log("情况1) 如果已经下载过引擎了，直接开始处理引擎插件");
			return dealPluginEngine().then(() => {
				// return cb();
			}).catch((err) => {
				console.error("ts源码项目及as源码项目，下载或处理oppo引擎插件项目失败(code 1)!");
				throw err;
			});
		}
		// 情况2) 下载并解压引擎，然后开始处理引擎插件
		console.log("情况2) 下载并解压引擎，然后开始处理引擎插件");
		return downFileToDir(engineURL, engineDownPath).then(() => {
			console.log("下载引擎库成功，开始解压");
			return extractZipFile(engineDownPath, engineExtractPath);
		}).then(() => {
			console.log("解压成功，开始处理引擎插件");
			return dealPluginEngine();
		}).then(() => {
			// return cb();
		}).catch((err) => {
			console.error("ts源码项目及as源码项目，下载或处理oppo引擎插件项目失败(code 2)!");
			throw err;
		})
	}
	// 情况3) 非源码项目，开始处理引擎插件
	console.log("情况3) 非源码项目，开始处理引擎插件");
	return dealPluginEngine().then(() => {
		// return cb();
	}).catch((err) => {
		throw err;
	});

	function dealPluginEngine() {
		// 使用引擎插件
		let localUseEngineList = [];
		let copyEnginePathList;
		return new Promise(function(resolve, reject) {
			console.log(`修改main.js和manifest.json`);
			// 1) 修改main.js和manifest.json
			// 修改main.js
			let gameJsPath = path.join(projDir, "main.js");
			let gameJscontent = fs.readFileSync(gameJsPath, "utf8");
			gameJscontent = gameJscontent.replace(`require("${indexJsStr}");`, `requirePlugin('layaPlugin');\nrequire("${indexJsStr}");`);
			fs.writeFileSync(gameJsPath, gameJscontent, "utf8");
			
			// 修改manifest.json，使其支持引擎插件
			conJson.plugins = {
				"laya-library": {
					"version": EngineVersion,
					"provider": "",
					"path": "laya-library"
				}
			}
			manifestJsonContent = JSON.stringify(conJson, null, 4);
			fs.writeFileSync(manifestJsonPath, manifestJsonContent, "utf8");
			resolve();
		}).then(function() {
			return new Promise(function(resolve, reject) {
				console.log(`确定用到的插件引擎`);
				// 2) 确定用到了那些插件引擎，并将插件引擎从index.js的引用中去掉
				let indexJsPath = path.join(projDir, indexJsStr);
				let indexJsCon = fs.readFileSync(indexJsPath, "utf8");
				let item, fullRequireItem;
				for (let i = 0, len = fullRemoteEngineList.length; i < len; i++) {
					item = fullRemoteEngineList[i];
					fullRequireItem = config.useMinJsLibs ? `require("./libs/min/${item}")` : `require("./libs/${item}")`;
					if (indexJsCon.includes(fullRequireItem)) {
						localUseEngineList.push(item);
						indexJsCon = indexJsCon.replace(fullRequireItem + ";", "").replace(fullRequireItem + ",", "").replace(fullRequireItem, "");
					}
				}
				// 源码项目需要特殊处理
				if (isNewTsProj || isOldAsProj) {
					indexJsCon = indexJsCon.replace(`require("./laya.js");`, "").replace(`require("./laya.js"),`, "").replace(`require("./laya.js")`, "");
					let item, libPath/*, oppoConfigList = []*/;
					for (let i = 0, len = fullRemoteEngineList.length; i < len; i++) {
						item = fullRemoteEngineList[i];
						libPath = path.join(copyBinPath, item);
						if (fs.existsSync(libPath) && !["bytebuffer", "laya.physics3D", "worker", "workerloader"].includes(item.replace(".min.js", "").replace(".js", ""))) {
							localUseEngineList.push(item);
							// config.useMinJsLibs ?  oppoConfigList.push(`libs/min/${item}`) : oppoConfigList.push(`libs/${item}`);
						}
					}
					// let bundleJsStr = (versionCon && versionCon["js/bundle.js"]) ? versionCon["js/bundle.js"] :  "js/bundle.js";
					// oppoConfigList.push(bundleJsStr);
					// configoppoConfigFile(oppoConfigList, true);
				}
				fs.writeFileSync(indexJsPath, indexJsCon, "utf8");
				// 再次修改game.js，仅引用使用到的类库
				let pluginCon = "", normalCon = "";
				localUseEngineList.forEach(function(item) {
					pluginCon += `\trequirePlugin("laya-library/${item}");\n`;
					normalCon += `\trequire("laya-library/${item}");\n`;
				});
				let finalyPluginCon = `if (window.requirePlugin) {\n${pluginCon}\n} else {\n${normalCon}\n}`;
				let gameJsPath = path.join(projDir, "main.js");
				let gameJsCon = fs.readFileSync(gameJsPath, "utf8");
				gameJsCon = gameJsCon.replace(`requirePlugin('layaPlugin');`, finalyPluginCon);
				fs.writeFileSync(gameJsPath, gameJsCon, "utf8");
				resolve();
			});
		}).then(function() {
			return new Promise(function(resolve, reject) {
				console.log(`将本地的引擎插件移动到laya-libs中`);
				// 3) 将本地的引擎插件移动到laya-libs中
				copyEnginePathList = [`${copyBinPath}/{${fullRemoteEngineList.join(",")}}`];
				gulp.src(copyEnginePathList).pipe(gulp.dest(`${projDir}/laya-library`));
				setTimeout(resolve, 500);
			});
		}).then(function() {
			return new Promise(function(resolve, reject) {
				console.log(`将libs中的本地引擎插件删掉`);
				// 4) 将libs中的本地引擎插件删掉
				let deleteList = [`${projDir}/libs/{${localUseEngineList.join(",")}}`, `${projDir}/libs/min/{${localUseEngineList.join(",")}}`];
				del(deleteList, { force: true }).then(resolve);
			});
		}).then(function() {
			return new Promise(async function(resolve, reject) {
				console.log(`完善引擎插件目录`);
				// 5) 引擎插件目录laya-libs中还需要新建几个文件，使该目录能够使用
				let 
					layalibsPath = path.join(projDir, "laya-library"),
					engineIndex = path.join(layalibsPath, "index.js"),
					engineplugin = path.join(layalibsPath, "plugin.json");
					// enginesignature = path.join(layalibsPath, "signature.json");
				// index.js
				if (!fs.existsSync(layalibsPath)) {
					throw new Error("引擎插件目录创建失败，请与服务提供商联系!");
				}
				let layaLibraryList = fs.readdirSync(layalibsPath);
				let indexCon = "";
				layaLibraryList.forEach(function(item) {
					indexCon += `require("./${item}");\n`;
				});
				fs.writeFileSync(engineIndex, indexCon, "utf8");
				// plugin.json
				let pluginCon = {"main": "index.js"};
				fs.writeFileSync(engineplugin, JSON.stringify(pluginCon, null, 4), "utf8");
				// signature.json
				// let signatureCon = {
				// 	"provider": provider,
				// 	"signature": []
				// };
				// localUseEngineList.unshift("index.js");
				// let fileName, md5Str;
				// for (let i = 0, len = localUseEngineList.length; i < len; i++) {
				// 	fileName = localUseEngineList[i];
				// 	let md5Str = await getFileMd5(path.join(projDir, "laya-library", fileName));
				// 	signatureCon.signature.push({
				// 		"path": fileName,
				// 		"md5": md5Str
				// 	});
				// }
				// fs.writeFileSync(enginesignature, JSON.stringify(signatureCon, null, 4), "utf8");
				resolve();
			});
		}).catch(function(e) {
			throw e;
		})
	}
});

function downFileToDir(uri, dest){
	return new Promise((resolve, reject) => {
		if (!uri || !dest) {
			reject(new Error(`downFileToDir 参数不全: ${uri}/${dest}`));
			return;
		}

		let 
			totalLen = 9999,
			progress = 0,
			layaresponse;
		var stream = fs.createWriteStream(dest);
		request(uri).on('error', function(err) {
			console.log("tool down err:" + err);
			reject(err);
		}).on("data", function(data) {
			progress += data.length;
			let downPercent = (progress / totalLen * 100).toFixed(3);
			// console.log(`down: ${downPercent}%`);
		}).on("response", function(response) {
			layaresponse = response;
			totalLen = response.caseless.dict['content-length'];
		}).pipe(stream).on('close', function() {
			if (layaresponse.statusCode == 200) {
				console.log("下载成功!");
				resolve();
			} else {
				reject(new Error(`下载失败，连接关闭 -> ${uri}`));
			}
		});
	});
}

function extractZipFile(zipPath, extractDir) {
	return new Promise((resolve, reject) => {
		if (!zipPath || !extractDir) {
			reject(new Error(`extractZipFile 参数不全: ${zipPath}/${extractDir}`));
			return false;
		}

		zipPath = `"${zipPath}"`;
		let unzipexepath = path.join(ideModuleDir, "../", "out", "codeextension", "updateversion", "tools", "unzip.exe");
		unzipexepath = `"${unzipexepath}"`;
		let cmd;
        if (process.platform === 'darwin') {
            cmd = "unzip -o " + zipPath + " -d " + "\"" + extractDir + "\"";
        } else {
            cmd = unzipexepath + " -o " + zipPath + " -d " + "\"" + extractDir + "\"";
		}
		childProcess.exec(cmd, (error, stdout, stderr) => {
			if (error || stderr) {
				reject(error || stderr);
				return;
			}
			resolve();
		});
	});
}

// 打包rpk
gulp.task("buildRPK_OPPO", ["pluginEngin_OPPO"], function() {
	// 在OPPO轻游戏项目目录中执行:
    // quickgame pack || quickgame pack release
    // quickgame subpack --no-build-js || quickgame subpack release --no-build-js
	let cmdStr = "";
	let packStr = "pack";
	let nobuildjs = "";
	if (config.oppoInfo.subpack) {
		packStr = "subpack";
		nobuildjs = "--no-build-js";
	}
    if (config.oppoInfo.useReleaseSign) {
        cmdStr = "release";
    }
	return new Promise((resolve, reject) => {
		let cmd = path.join(toolkitPath, "lib", "bin", `quickgame${commandSuffix}`);
		let args = [packStr, cmdStr, nobuildjs];
		let opts = {
			cwd: projDir,
			shell: true
		}; 
		let cp = childProcess.spawn(`"${cmd}"`, args, opts);
		// let cp = childProcess.spawn('npx.cmd', ['-v']);
		cp.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);
		});

		cp.stderr.on('data', (data) => {
			console.log(`stderr: ${data}`);
			console.log(`stderr(iconv): ${iconv.decode(data, 'gbk')}`);
			// reject();
		});

		cp.on('close', (code) => {
			console.log(`子进程退出码：${code}`);
			// rpk是否生成成功
			let distRpkPath = path.join(projDir, "dist", `${config.oppoInfo.package}${config.oppoInfo.useReleaseSign ? ".signed" : ""}.rpk`);
			if (!fs.existsSync(distRpkPath)) {
				throw new Error("rpk生成失败，请检查！");
			}
			resolve();
		});
	});
});

gulp.task("pushRPK_OPPO", ["buildRPK_OPPO"], function() {
	if (!config.oppoInfo.adbDebug) {
        return;
    }
	// 在OPPO轻游戏项目目录中执行:
    // adb push dist/game.rpk sdcard/games
	// adb push layarepublicPath/oppo/instant_app_settings.properties
	// adb shell am force-stop com.nearme.instant.platform
	// adb shell am start -n com.nearme.instant.platform/com.oppo.autotest.main.InstantAppActivity
	return new Promise((resolve, reject) => {
		if (!config.oppoInfo.subpack) {
			return resolve();
		}
		
		let cmd = `${adbPath}`;
		let args = ["shell", "mkdir", `sdcard/subPkg`];
		let opts = {
			cwd: projDir,
			shell: true
		};
		let cp = childProcess.spawn(cmd, args, opts);
		// let cp = childProcess.spawn('npx.cmd', ['-v']);
		cp.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);
		});

		cp.stderr.on('data', (data) => {
			console.log(`stderr: ${data}`);
			// reject();
		});

		cp.on('close', (code) => {
			console.log(`pre) push_RPK 子进程退出码：${code}`);
			resolve();
		});
	}).then(() => {


		return new Promise((resolve, reject) => {
			if (!config.uesEnginePlugin) {
				resolve();
				return;
			}else {
				// 如果使用引擎插件，解压完整包
				let distRpkPath = path.join(projDir, "dist", `${config.oppoInfo.package}${config.oppoInfo.useReleaseSign ? ".signed" : ""}.rpk`);
				console.log("解压完整包",distRpkPath); 
				let tmpDir = path.join(projDir, "dist", `tmp`);
				if (!fs.existsSync(tmpDir)) {
					fs.mkdirSync(tmpDir);
				}
				extractZipFile(distRpkPath, tmpDir).then(() => {
					console.log('解压完整包完成');
					resolve();
				});
			}
		})
	}).then(() => {
		return new Promise((resolve, reject) => {
			let cmd = `${adbPath}`;
			let sdGamesPath = config.oppoInfo.subpack ? "sdcard/subPkg" : "sdcard/games";
			let args = ["push", `dist${config.uesEnginePlugin ?"/tmp" : "" }/${config.oppoInfo.package}${config.oppoInfo.useReleaseSign ? ".signed" : ""}.rpk`, sdGamesPath];
			let opts = {
				cwd: projDir,
				shell: true
			}; 
			let cp = childProcess.spawn(cmd, args, opts);
			// let cp = childProcess.spawn('npx.cmd', ['-v']);
			cp.stdout.on('data', (data) => {
				console.log(`stdout: ${data}`);
			});
	
			cp.stderr.on('data', (data) => {
				console.log(`stderr: ${data}`);
				// reject();
			});
	
			cp.on('close', (code) => {
				console.log(`1) push_RPK 子进程退出码：${code}`);
				resolve();
			});
		})
	}).then(() => {
		return new Promise((resolve, reject) => {
			// 如果是分包，需要修改里面的内容
			let oppoPropPath = path.join(layarepublicPath, "oppo", "instant_app_settings.properties");
			if (config.oppoInfo.subpack) {
				fs.writeFileSync(oppoPropPath, "default_tab=game_split", "utf8");
			} else {
				fs.writeFileSync(oppoPropPath, "default_tab=game", "utf8");
			}
			let cmd = `${adbPath}`;
			let args = ["push", oppoPropPath, "sdcard/"];
			let opts = {
				cwd: projDir,
				shell: true
			};
			let cp = childProcess.spawn(cmd, args, opts);
			// let cp = childProcess.spawn('npx.cmd', ['-v']);
			cp.stdout.on('data', (data) => {
				console.log(`stdout: ${data}`);
			});
	
			cp.stderr.on('data', (data) => {
				console.log(`stderr: ${data}`);
				// reject();
			});
	
			cp.on('close', (code) => {
				console.log(`2) push_RPK 子进程退出码：${code}`);
				resolve();
			});
		});
	}).then(() => {
		return new Promise((resolve, reject) => {
			let cmd = `${adbPath}`;
			let args = ["shell", "am", "force-stop", "com.nearme.instant.platform"];
			let opts = {
				cwd: projDir,
				shell: true
			};
			let cp = childProcess.spawn(cmd, args, opts);
			// let cp = childProcess.spawn('npx.cmd', ['-v']);
			cp.stdout.on('data', (data) => {
				console.log(`stdout: ${data}`);
			});
	
			cp.stderr.on('data', (data) => {
				console.log(`stderr: ${data}`);
				// reject();
			});
	
			cp.on('close', (code) => {
				console.log(`3) push_RPK 子进程退出码：${code}`);
				resolve();
			});
		});
	}).then(() => {
		return new Promise((resolve, reject) => {
			let cmd = `${adbPath}`;
			let args = ["shell", "am", "start", "-n", "com.nearme.instant.platform/com.oppo.autotest.main.InstantAppActivity"];
			let opts = {
				cwd: projDir,
				shell: true
			};
			let cp = childProcess.spawn(cmd, args, opts);
			// let cp = childProcess.spawn('npx.cmd', ['-v']);
			cp.stdout.on('data', (data) => {
				console.log(`stdout: ${data}`);
			});
	
			cp.stderr.on('data', (data) => {
				console.log(`stderr: ${data}`);
				// reject();
			});
	
			cp.on('close', (code) => {
				console.log(`4) push_RPK 子进程退出码：${code}`);
				resolve();
			});
		});
	});
});

gulp.task("buildOPPOProj", ["pushRPK_OPPO"], function() {
	console.log("all tasks completed");
});