// v1.8.18
//是否使用IDE自带的node环境和插件，设置false后，则使用自己环境(使用命令行方式执行)
const useIDENode = process.argv[0].indexOf("LayaAir") > -1 ? true : false;
const useCMDNode = process.argv[1].indexOf("layaair2-cmd") > -1 ? true : false;
const pubLayame = process.argv.length >= 4 && process.argv[3].startsWith("--config") && process.argv[3].endsWith("layame.json");
function useOtherNode(){
	return useIDENode||useCMDNode ||pubLayame;
}
//获取Node插件和工作路径
const ideModuleDir = useOtherNode() ? process.argv[1].replace("gulp\\bin\\gulp.js", "").replace("gulp/bin/gulp.js", "") : "";
const workSpaceDir = useOtherNode() ? process.argv[2].replace("--gulpfile=", "").replace("\\.laya\\publish.js", "").replace("/.laya/publish.js", "") + "/" : "./../";
global.ideModuleDir = ideModuleDir;
global.workSpaceDir = workSpaceDir;
//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const uglify = require(ideModuleDir + 'gulp-uglify-es').default;
const jsonminify = require(ideModuleDir + "gulp-jsonminify");
const image = require(ideModuleDir + "gulp-image");
const rev = require(ideModuleDir + "gulp-rev");
const revdel = require(ideModuleDir + "gulp-rev-delete-original");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');
const del = require(ideModuleDir + "del");
const requireDir = require(ideModuleDir + 'require-dir');
const babel = require(ideModuleDir + 'gulp-babel'); 

// 结合compile.js使用
global.publish = true;
const fileList = ["compile.js", "pub_utils.js", "publish_xmgame.js", "publish_oppogame.js", "publish_vivogame.js", "publish_biligame.js",
				"publish_alipaygame.js", "publish_wxgame.js", "publish_bdgame.js", "publish_qqgame.js", "publish_bytedancegame.js", "publish_hwgame.js",
				"publish_taobaominiapp.js", "publish_youkugame.js", "publish_taobaowidget.js", "publish_layame.js"];
requireDir('./', {
	filter: function (fullPath) {
		// 只用到了compile.js和publish.js
		if (fileList.includes(path.basename(fullPath))) {
			return true;
		} else {
			return false;
		}
	}
});

const QUICKGAMELIST = ["xmgame", "oppogame", "vivogame", "hwgame"];

// 清理临时文件夹，加载配置
let config,
	releaseDir,
	binPath,
	platform = "web",
	isOpendataProj = false,
	platformCopyTask = [],// 平台脚本拷贝任务
	platformTask = [], // 平台需要执行的任务
	commandSuffix = ".cmd",
	adbPath = "adb",
	opensslPath = "openssl";
let execTask;
//任务对照列表
const copyTasks = {
	"layame": "copy",
	"taobaowidget": "preCreate_TBWidget",
	"youkugame": "copyPlatformFile_youku",
	"taobaominiapp": "preCreate_TBMini",
	"hwgame": "copyPlatformFile_HW",
	"bytedancegame": "copyPlatformFile_ByteDance",
	"biligame": "copyPlatformFile_Bili",
	"Alipaygame": "copyPlatformFile_Alipay",
	"vivogame": "copyPlatformFile_VIVO",
	"oppogame": "copyPlatformFile_OPPO",
	"xmgame": "copyPlatformFile_XM",
	"bdgame": "copyPlatformFile_BD",
	"qqgame": "copyPlatformFile_QQ",
	"wxgame": "fitwasm_WX",
	"web": "copyPlatformLibsJsFile"
}
const tasks = {
	"layame": "buildLayaMeProj",
	"taobaowidget": "buildTBWidgetProj",
	"youkugame": "buildYKProj",
	"taobaominiapp": "buildTBMiniProj",
	"hwgame": "buildHWProj",
	"bytedancegame": "buildByteDanceProj",
	"biligame": "buildBiliProj",
	"Alipaygame": "buildAlipayProj",
	"vivogame": "buildVivoProj",
	"oppogame": "buildOPPOProj",
	"xmgame": "buildXiaomiProj",
	"bdgame": "buildBDProj",
	"qqgame": "buildQQProj",
	"wxgame": "buildWXProj",
	"web": "version2"
}
// 是否build指定部分（debug版本layame) 
let buildOptions = null;
function toBuildPart(part) {
	if (!buildOptions) {
		return true;
	}
	if ('all' == part ) {
		return buildOptions.type == 'all';
	} 
    if (buildOptions.type == 'all') {
        return true;
    }
    return (buildOptions.buildList.includes(part));
}
if (!useOtherNode() && process.argv.length > 5 && process.argv[4] == "--config") {
	platform = process.argv[5].replace(".json", "");
}
if (useOtherNode() && process.argv.length >= 4 && process.argv[3].startsWith("--config") && process.argv[3].endsWith(".json")) {
	platform = process.argv[3].match(/(\w+).json/)[1];
	platformCopyTask.push(copyTasks[platform]);
	platformTask.push(tasks[platform]);
	execTask = process.argv[4];
}
let isDebugLayaMe = false;
gulp.task("loadConfig", function (cb) {
	let _path;
	if (!useOtherNode()) {
		_path = platform + ".json";
		releaseDir = "../release/" + platform;
		binPath = "../bin/";
	}
	if (useOtherNode()) {
		_path = path.join(workSpaceDir, ".laya", `${platform}.json`);
		releaseDir = path.join(workSpaceDir, "release", platform).replace(/\\/g, "/");
		binPath = path.join(workSpaceDir, "bin").replace(/\\/g, "/");
	}  
	global.platform = platform;
	let file = fs.readFileSync(_path, "utf-8");
	if (file) {
		if (platform == 'layame') {
			let tmpconfig = JSON.parse(file);
			if (tmpconfig.debugLayaMe) { 
				// 如本地调试版layame
				releaseDir = path.join(workSpaceDir, 'layaMe').replace(/\\/g, "/");
				isDebugLayaMe = true;
			}
		}
		if ([...QUICKGAMELIST, "taobaominiapp", "taobaowidget"].includes(platform)) {
			file = file.replace(/\$basePath/g, releaseDir + "/temprelease");
		} else {
			file = file.replace(/\$basePath/g, releaseDir);
		}
		config = JSON.parse(file);
		global.config = config;
		if (isDebugLayaMe) {
			buildOptions = config.buildOptions;
		}
		// 我们遇到一个bug，当使用min库，同时开启es6toes5后，es6toes5时会将min库部分变量忽略，导致程序出错
		// 我们原来的逻辑: 1) 将min库es6toes5 2) 将转换后的库重新压缩
		// 所以，当使用min库同时开启es6toes5时，我们将: 1) 使用普通库 2) 开启js压缩
		if (config.useMinJsLibs && config.es6toes5) {
			config.useMinJsLibs = false;
			config.compressJs = true;
		}
	}
	// 是否是开放域项目
	let projInfoPath = path.join(workSpaceDir, path.basename(workSpaceDir) + ".laya");
	let isExist = fs.existsSync(projInfoPath);
	if (isExist) {
		try {
			let projInfo = fs.readFileSync(projInfoPath, "utf8");
			projInfo = projInfo && JSON.parse(projInfo);
			isOpendataProj = projInfo.layaProType === 12;
		} catch (e) {}
	}
	// 其他变量的初始化
	let layarepublicPath = path.join(ideModuleDir, "../", "code", "layarepublic");
	if (!fs.existsSync(layarepublicPath)) {
		layarepublicPath = path.join(ideModuleDir, "../", "out", "layarepublic");
	}
	global.layarepublicPath = layarepublicPath;

	if (process.platform === "darwin") {
		commandSuffix = "";
	}
	global.commandSuffix = commandSuffix;

	// 检查环境中是否存在adb和openssl
	let otherLibsPath = path.join(layarepublicPath, "../", "vs", "layaEditor", "libs");
	childProcess.exec("adb version", (error, stdout, stderr) => {
		if (error) {
			if (process.platform === "darwin") {
				adbPath = path.join(otherLibsPath, "adb", "darwin", "adb");
			} else {
				adbPath = path.join(otherLibsPath, "adb", "win", "adb.exe");
			}
			adbPath = `"${adbPath}"`;
		}
		global.adbPath = adbPath;
		if (global.opensslPath) {
			cb();
		}
	});
	childProcess.exec("openssl version", (error, stdout, stderr) => {
		if (error) {
			if (process.platform === "darwin") {
				opensslPath = path.join(otherLibsPath, "openssl", "darwin", "bin", "openssl");
			} else {
				opensslPath = path.join(otherLibsPath, "openssl", "win", "bin", "openssl.exe");
				let opensslCnfPath = path.join(otherLibsPath, "openssl", "win", "bin", "openssl.cfg");
				// 特别的，当windows没有openssl时，需要额外的OPENSSL_CONF设置变量
				// childProcess.execSync(`set OPENSSL_CONF=${opensslCnfPath}`);
				process.env.OPENSSL_CONF = opensslCnfPath;
				console.log("OPENSSL_CONF: " + childProcess.execSync("echo %OPENSSL_CONF%"));
			}
			opensslPath = `"${opensslPath}"`;
		}
		global.opensslPath = opensslPath;
		if (global.adbPath) {
			cb();
		}
	});
});

// 清理release文件夹
gulp.task("clearReleaseDir", ["compile"], function (cb) {
	if (platform === "layame" && execTask !== "clearReleaseDir") { // 特殊的，layame项目不执行清理命令
		return cb();
	}
	if (config.clearReleaseDir) {
		let delList = [`${releaseDir}/**`, releaseDir + "_pack"];
		if (config.packfileTargetValue) {
			delList.push(config.packfileTargetValue);
		}
		// 小米快游戏，使用即存的项目，删掉Laya工程文件，保留小米环境项目文件
		if (platform === "xmgame") {
			let xmProj = path.join(releaseDir, config.xmInfo.projName);
			// 这里不是node-glob语法，详见: https://github.com/sindresorhus/del
			delList = [`${xmProj}/**`, `!${xmProj}`, `!${xmProj}/node_modules/**`, `!${xmProj}/sign/**`, `!${xmProj}/{babel.config.js,main.js,manifest.json,package.json,package-lock.json}`];
		} else if (platform === "oppogame") {
			let oppoProjSrc = path.join(releaseDir, config.oppoInfo.projName);
			delList = [`${oppoProjSrc}/**`, `!${oppoProjSrc}`, `!${oppoProjSrc}/{manifest.json,main.js}`];
		} else if (platform === "vivogame") {
			let vvProj = path.join(releaseDir, config.vivoInfo.projName);
			let vvProjSrc = path.join(vvProj, "src");
			// 这里不是node-glob语法，详见: https://github.com/sindresorhus/del
			delList = [`${vvProj}/engine/**`, `${vvProj}/laya-library/**`, `${vvProj}/config/**`,
						`${vvProjSrc}/**`, `!${vvProjSrc}`, `!${vvProjSrc}/{game.js,manifest.json}`];
		} else if (platform === "hwgame") {
			let hwProjSrc = path.join(releaseDir, config.hwInfo.projName);
			delList = [`${hwProjSrc}/**`, `!${hwProjSrc}`, `!${hwProjSrc}/{game.js,manifest.json}`];
		}
		// 保留平台配置文件
		if (config.keepPlatformFile) {
			if (["wxgame", "qqgame", "Alipaygame", "bytedancegame"].includes(platform)) {
				delList = delList.concat(`!${releaseDir}`, `!${releaseDir}/{game.js,game.json,project.config.json}`);
			} else if (platform === "bdgame") {
				delList = delList.concat(`!${releaseDir}`, `!${releaseDir}/{game.js,game.json,project.swan.json}`);
			} else if (platform === "biligame") {
				delList = delList.concat(`!${releaseDir}`, `!${releaseDir}/{game.js,game.json}`);
			} else if (platform === "taobaominiapp") { // 特殊的，淘宝平台，仅删除确定为我们的文件
				// 删除 node_modules/layaengine/libs 下引擎文件，以及 node_modules/layaengine/laya.js 文件
				// 删除 pages/index 下除 game.js,game.json,game.axml 外所有文件
				// release/taobaominiapp/node_modules/layaengine/adapter.js 必更新
				// 删除最外层除 .tea .mini-ide node_modules pages app.acss app.js app.json mini.project.json package.json
				delList = [`${releaseDir}/node_modules/layaengine/libs`, `${releaseDir}/node_modules/layaengine/laya.js`,
							`${releaseDir}/**`, `!${releaseDir}`, `!${releaseDir}/.tea/**`, `!${releaseDir}/.mini-ide/**·`,
							`!${releaseDir}/node_modules/**`, `!${releaseDir}/pages/**`, `!${releaseDir}/{app.acss,app.js,app.json,mini.project.json,package.json}`,
							// `${releaseDir}/node_modules/layaengine`, `!${releaseDir}/node_modules/layaengine`, `!${releaseDir}/node_modules/layaengine/{adapter.js,index.js/package.json}`,
							`${releaseDir}/pages/index/**`, `!${releaseDir}/pages/index`, `!${releaseDir}/pages/index/{game.js,game.json,game.axml}`];
			} else if (platform === "taobaowidget") {
				delList = [`${releaseDir}/widget/component/**`, `!${releaseDir}/widget/component`, `!${releaseDir}/widget/component/{game.js,game.json,game.axml,game.acss,package.json}`];
			}
		}
		del(delList, { force: true }).then(paths => {
			cb();
		}).catch((err) => {
			throw err;
		})
	} else cb();
});

// copy bin文件到release文件夹
gulp.task("copyFile", ["clearReleaseDir"], function () {
	let baseCopyFilter = [`${workSpaceDir}/bin/**/*.*`, `!${workSpaceDir}/bin/indexmodule.html`, `!${workSpaceDir}/bin/import/*.*`];
	// 只拷贝index.js中引用的类库
	if (config.onlyIndexJS) {
		baseCopyFilter = baseCopyFilter.concat(`!${workSpaceDir}/bin/libs/**/*.*`);
	}
	if (platform === "wxgame" && isOpendataProj) { // 开放域项目微信发布，仅拷贝用到的文件
		config.copyFilesFilter = [`${workSpaceDir}/bin/js/bundle.js`, `${workSpaceDir}/bin/index.js`, `${workSpaceDir}/bin/game.js`];
		if (config.projectType !== "as") { // 开放域精简类库
			config.copyFilesFilter.push(`${workSpaceDir}/bin/libs/laya.opendata.js`);
		}
	} else if (platform === "wxgame") { // 微信项目，不拷贝index.html，不拷贝百度bin目录中的文件
		config.copyFilesFilter = baseCopyFilter.concat([`!${workSpaceDir}/bin/{project.swan.json,swan-game-adapter.js}`]);
	} else if (platform === "bdgame") { // 百度项目，不拷贝index.html，不拷贝微信bin目录中的文件
		config.copyFilesFilter = baseCopyFilter.concat([`!${workSpaceDir}/bin/{project.config.json,weapp-adapter.js}`]);
	} else if (platform === "layame") { // layame项目，不拷贝js/libs文件夹，不拷贝index.js文件
		config.copyFilesFilter = baseCopyFilter.concat([`!${workSpaceDir}/bin/{js/**/*.*,libs/**/*.*,index.js,version.json}`]);

	} else { // 除微信、百度外，不拷贝微信、百度在bin目录中的文件
		config.copyFilesFilter = baseCopyFilter.concat([`!${workSpaceDir}/bin/{game.js,game.json,project.config.json,weapp-adapter.js,project.swan.json,swan-game-adapter.js}`]);
	}
	// bili/alipay/qq，不拷贝index.html
	if (platform !== "web") {
		config.copyFilesFilter = config.copyFilesFilter.concat([`!${workSpaceDir}/bin/index.html`]);
	}
	// 快游戏，需要新建一个快游戏项目，拷贝的只是项目的一部分，将文件先拷贝到文件夹的临时目录中去
	if ([...QUICKGAMELIST, "taobaominiapp", "taobaowidget"].includes(platform)) {
		releaseDir = global.tempReleaseDir = path.join(releaseDir, "temprelease").replace(/\\/g, "/");
	}
	if (config.exclude) { // 排除文件
		config.excludeFilter.forEach(function(item, index, list) {
			releaseDir = releaseDir.replace(/\\/g, "/");
			config.excludeFilter[index] = item.replace(releaseDir, binPath);
		});
		config.copyFilesFilter = config.copyFilesFilter.concat(config.excludeFilter);
	}
	global.releaseDir = releaseDir;
	if (isDebugLayaMe) {
		if (!toBuildPart('ui')) {
			if(!fs.existsSync(releaseDir)) {
				fs.mkdirSync(releaseDir);
			}
			return;
		}
	}
	var stream = gulp.src(config.copyFilesFilter, { base: `${workSpaceDir}/bin` });
	return stream.pipe(gulp.dest(releaseDir));
});

// 使用min版本引擎
gulp.task("useMinJsLibs", ["copyFile"], function () {
	if (!config.useMinJsLibs) {
		return;
	}
	if (platform === "wxgame" && isOpendataProj) { // 开放域项目微信发布，拷贝文件时已经拷贝类库文件了
		return;
	}
	// 开放域项目，as语言，没有libs目录，mac系统报错
	let libs = path.join(workSpaceDir, "bin", "libs");
	if (!fs.existsSync(libs)) {
		return;
	}
	if (platform === "layame") {
		return;
	}
	// 分析index.js
	let indexJSPath = path.join(releaseDir, "index.js");
	let indexJsContent = fs.readFileSync(indexJSPath, "utf8");
	let libsList = indexJsContent.match(/loadLib\(['"]libs\/[\w-./]+\.(js|wasm)['"]\)/g);
	if (!libsList) {
		return;
	}
	let 
		item,
		libsName = "",
		minLibsName = "";
	for (let i = 0, len = libsList.length; i < len; i++) {
		item = libsList[i];
		libsName = item.match(/loadLib\(['"]libs\/([\w-./]+\.(js|wasm))['"]\)/);
		minLibsName = `min/${libsName[1].replace(".js", ".min.js")}`;
		indexJsContent = indexJsContent.replace(libsName[1], minLibsName);
	}
	fs.writeFileSync(indexJSPath, indexJsContent);
});

// copy libs中的js文件到release文件夹
gulp.task("copyLibsJsFile", ["useMinJsLibs"], function () {
	if (platform === "layame") {
		return;
	}
	// 分析index.js
	let indexJSPath = path.join(releaseDir, "index.js");
	let indexJsContent = fs.readFileSync(indexJSPath, "utf8");
	indexJsContent = indexJsContent.replace(/(loadLib\(['"]libs\/[\w-./]+\.wasm\.wasm['"]\))/g, "// $1");
	fs.writeFileSync(indexJSPath, indexJsContent, "utf8");
	if (!config.onlyIndexJS) {
		return;
	}
	if (platform === "wxgame" && isOpendataProj) { // 开放域项目微信发布，拷贝文件时已经拷贝类库文件了
		return;
	}
	// 开放域项目，as语言，没有libs目录，mac系统报错
	let libs = path.join(workSpaceDir, "bin", "libs");
	if (!fs.existsSync(libs)) {
		return;
	}
	let libsList = indexJsContent.match(/loadLib\(['"]libs\/[\w-./]+\.(js|wasm)['"]\)/g);
	if (!libsList) {
		libsList = [];
	}
	let 
		item,
		libsName = "",
		libsStr = "";
	for (let i = 0, len = libsList.length; i < len; i++) {
		item = libsList[i];
		libsName = item.match(/loadLib\(['"]libs\/([\w-./]+\.(js|wasm))['"]\)/);
		libsStr += libsStr ? `,${libsName[1]}` : libsName[1];
	}
	// 发布web项目，如果使用了physics3D，默认拷贝runtime
	if (platform === "web" && libsStr.includes("laya.physics3D")) {
		if (config.useMinJsLibs) {
			libsStr += ',min/laya.physics3D.runtime.min.js';
		} else {
			libsStr += ',laya.physics3D.runtime.js';
		}
	}
	let copyLibsList = [`${workSpaceDir}/bin/libs/{${libsStr}}`];
	if (!libsStr.includes(",")) {
		copyLibsList = [`${workSpaceDir}/bin/libs/${libsStr}`];
	}
	var stream = gulp.src(copyLibsList, { base: `${workSpaceDir}/bin` });
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("fitwasm", ["copyLibsJsFile"], function() {
	let 
		phy3dWasmJs = path.join(releaseDir, "libs", "laya.physics3D.wasm.js"),
		phy3dWasmMinJs = path.join(releaseDir, "libs", "min", "laya.physics3D.wasm.min.js");
	let isPhy3dWasmJsExist = fs.existsSync(phy3dWasmJs);
	let isPhy3dWasmMinJsExist = fs.existsSync(phy3dWasmMinJs);
	if (!isPhy3dWasmJsExist && !isPhy3dWasmMinJsExist) {
		return;
	}
	let phy3dWasmName = isPhy3dWasmJsExist ? phy3dWasmJs : phy3dWasmMinJs;
	con = fs.readFileSync(phy3dWasmName, "utf8");
	if (isPhy3dWasmJsExist) {
		con = con.replace(/laya\.physics3D\.wasm\.wasm/mg, "libs/laya.physics3D.wasm.wasm");
	}
	if (isPhy3dWasmMinJsExist) {
		con = con.replace(/laya\.physics3D\.wasm\.wasm/mg, "libs/min/laya.physics3D.wasm.wasm");
	}
	fs.writeFileSync(phy3dWasmName, con, "utf8");
})

gulp.task("copyPlatformLibsJsFile", ["fitwasm"], function () {
	if (platform === "wxgame" && isOpendataProj) { // 开放域项目微信发布，拷贝文件时已经拷贝类库文件了
		return;
	}
	// 开放域项目，as语言，没有libs目录，mac系统报错
	let libs = path.join(workSpaceDir, "bin", "libs");
	if (!fs.existsSync(libs)) {
		return;
	}
	if (platform === "web") {
		return;
	}
	if (platform === "layame") {
		return;
	}
	let platformLibName = "";
	switch (platform) {
		case "wxgame":
			platformLibName = "laya.wxmini.js";
			break;
		case "qqgame":
			platformLibName = "laya.qqmini.js";
			break;
		case "bdgame":
			platformLibName = "laya.bdmini.js";
			break;
		case "Alipaygame":
			platformLibName = "laya.Alipaymini.js";
			break;
		case "biligame":
			platformLibName = "laya.bilimini.js";
			break;
		case "bytedancegame":
			platformLibName = "laya.ttmini.js";
			break;
		case "oppogame":
			platformLibName = "laya.quickgamemini.js";
			break;
		case "vivogame":
			platformLibName = "laya.vvmini.js";
			break;
		case "xmgame":
			platformLibName = "laya.xmmini.js";
			break;
		case "hwgame":
			platformLibName = "laya.hwmini.js";
			break;
		case "taobaominiapp":
			platformLibName = "laya.tbmini.js";
			break;
		case "taobaowidget":
			platformLibName = "laya.tbpluginmini.js";
			break;
	}
	let copyPath = `${workSpaceDir}/bin/libs`;
	if (config.useMinJsLibs) {
		platformLibName = platformLibName.replace(".js", ".min.js");
		copyPath = path.join(copyPath, "min");
	}
	let copyLibPath = path.join(copyPath, platformLibName);
	var stream = gulp.src(copyLibPath, { base: `${workSpaceDir}/bin` });
	return stream.pipe(gulp.dest(releaseDir));
});

// es6toes5
gulp.task("es6toes5", platformCopyTask, function() {
	if (config.es6toes5) {
		process.env.BROWSERSLIST_IGNORE_OLD_DATA = true;
		return gulp.src(`${releaseDir}/**/*.js`, { base: releaseDir })
		.pipe(babel({
			presets: ['@babel/env'],
			compact: false // 1) 为规避500K限制，不能为"auto" 2) 为便于调试，并防止开发者误解已经经过压缩，调整为false
		})) 
		.on('error', function (err) {
			console.warn(err.toString());
		})
		.pipe(gulp.dest(releaseDir));
	}
})

// 压缩json
gulp.task("compressJson", ["es6toes5"], function () {
	if (platform === "layame" && isDebugLayaMe) {
		if (!toBuildPart('all')) { 
			return;
		}
	}
	if (config.compressJson) {
		return gulp.src(config.compressJsonFilter, { base: releaseDir })
			.pipe(jsonminify())
			.pipe(gulp.dest(releaseDir));
	}
});

// 压缩js
gulp.task("compressJs", ["compressJson"], function () {
	let compressJsFilter = null;
	if (platform === "layame" && isDebugLayaMe) {
		if (!toBuildPart('all')) { 
			return;
		}
	}
	if (!config.compressJs) {
		if (config.es6toes5 && config.useMinJsLibs) { // 如果开启了es6toes5并使用了压缩版类库
			console.log("发布提示:\n 您当前开启了es6toes5并使用了压缩版类库，为了保证符合预期，脚本将对min文件夹下类库进行压缩");
			compressJsFilter = [`${releaseDir}/libs/min/**/*.js`];
		}
	} else {
		if (config.es6toes5 && config.useMinJsLibs) { // 如果开启了es6toes5并使用了压缩版类库
			console.log("发布提示:\n 您当前开启了es6toes5并使用了压缩版类库，为了保证符合预期，脚本将对min文件夹下类库进行压缩");
			compressJsFilter = config.compressJsFilter;
			let index = compressJsFilter.indexOf(`!${releaseDir}/libs/min/**/*.js`)
			if (index !== -1) {
				compressJsFilter.splice(index, 1);
			}
		} else {
			compressJsFilter = config.compressJsFilter;
		}
	}
	if (!compressJsFilter) {
		return;
	}

	let options = {
		mangle: {
			keep_fnames:true
		}
	}
	if (["taobaominiapp", "taobaowidget"].includes(platform)) {
		options = {
			mangle: {
				keep_fnames:true,
				// sequences: false, // 不使用逗号
				reserved: ["window"]
			}
		}
	}
	console.log("compressJsFilter: ", compressJsFilter);
	return gulp.src(compressJsFilter, { base: releaseDir })
		.pipe(uglify(options))
		.on('error', function (err) {
			console.warn(err.toString());
		})
		.pipe(gulp.dest(releaseDir));
});

// 压缩png，jpg
gulp.task("compressImage", ["compressJs"], function () {
	// if (platform === "layame") {
	// 	return;
	// }
	if (platform === "layame" && isDebugLayaMe) {
		if (!toBuildPart('ui')) { 
			return;
		}
	}
	if (config.compressImage) {
		return gulp.src(config.compressImageFilter, { base: releaseDir })
			.pipe(image({
				pngquant: true,			//PNG优化工具
				optipng: false,			//PNG优化工具
				zopflipng: true,		//PNG优化工具
				jpegRecompress: false,	//jpg优化工具
				mozjpeg: true,			//jpg优化工具
				guetzli: false,			//jpg优化工具
				gifsicle: false,		//gif优化工具
				svgo: false,			//SVG优化工具
				concurrent: 10,			//并发线程数
				quiet: true 			//是否是静默方式
				// optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
				// pngquant: ['--speed=1', '--force', 256],
				// zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
				// jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
				// mozjpeg: ['-optimize', '-progressive'],
				// guetzli: ['--quality', 85]
			}))
			.pipe(gulp.dest(releaseDir));
	}
});

// 生成版本管理信息
gulp.task("version1", ["compressImage"], function () {
	if (platform === "layame") {
		return;
	}
	if (config.version) {
		return gulp.src(config.versionFilter, { base: releaseDir })
			.pipe(rev())
			.pipe(gulp.dest(releaseDir))
			.pipe(revdel())
			.pipe(rev.manifest("version.json"))
			.pipe(gulp.dest(releaseDir));
	}
});

// 更新index.js的hash值
gulp.task("renameIndexJs", ["version1"], function (cb) {
	if (platform === "layame") {
		return cb();
	}
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		let versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
		let indexJSPath;
		let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
		indexJSPath = releaseDir + "/" + indexJsStr;

		return new Promise((resolve, reject) => {
			let srcList = [versionPath, indexJSPath];
			gulp.src(srcList)
				.pipe(revCollector())
				.pipe(gulp.dest(releaseDir));
			setTimeout(resolve, 1500);
		}).then(function() {
			return new Promise(async function(resolve, reject) {
				// index-xxx.js => index.js
				let indexJsOrigin = path.join(releaseDir, "index.js")
				fs.renameSync(indexJSPath, indexJsOrigin);
				gulp.src(indexJsOrigin, { base: releaseDir })
					.pipe(rev())
					.pipe(gulp.dest(releaseDir))
					.pipe(revdel())
					.pipe(rev.manifest({
						path: versionPath,
						merge: true
					}))
					.pipe(gulp.dest("./")); // 注意，这里不能是releaseDir (https://segmentfault.com/q/1010000002876613)
				setTimeout(cb, 2000);
			})
		}).catch(function(e) {
			throw e;
		})
	} else {
		cb();
	}
}); 
// 修改版本文件名
gulp.task("renameVersionJson", ["renameIndexJs"] , function () {
	
	if (platform === "layame") {
		return;
	}
	if (config.version) {
		// 如果启用版本管理，则修改version文件名
		console.log('releaseDir', releaseDir);
		let versionJsonJsOrigin = path.join(releaseDir, "version.json");
		let versionPath = versionJsonJsOrigin;// releaseDir + "/version.json";
		gulp.src(versionJsonJsOrigin, { base: releaseDir })
		.pipe(rev()) 
		.pipe(rev.manifest({
			path: versionPath,
			merge: true
		}))
		.pipe(gulp.dest("./"))
		.on('end', function () {
			
			let versionJsonJsOrigin = path.join(releaseDir, "version.json");
			let versionConStr = fs.readFileSync(versionJsonJsOrigin, "utf8");
			let versionCon = JSON.parse(versionConStr);
			console.log('versionCon',versionCon );
			let renameVersionJson = path.join(releaseDir, versionCon['version.json']);
			// fs.renameSync(versionJsonJsOrigin, renameVersionJson); 
			// 最后再删除versionjson
			fs.writeFileSync(renameVersionJson, versionConStr, 'utf8');
			

			// 修改js/bundle.js里加载version.json路径
			var bundleJSPath = path.join(releaseDir, versionCon['js/bundle.js']) ;
			bundleJSStr = fs.readFileSync(bundleJSPath, "utf8"); 
			bundleJSStr = bundleJSStr.replace('Laya.ResourceVersion.enable(\"version.json\"', `Laya.ResourceVersion.enable("${versionCon['version.json']}"`);
			fs.writeFileSync(bundleJSPath, bundleJSStr, "utf8");
			
		});
		
	}
});
// 替换index.html/game.js/main.js以及index.js里面的变化的文件名
gulp.task("version2", ["renameVersionJson"], function () {
	if (platform === "layame") {
		return;
	}
	if (config.version) {
		//替换index.html和index.js里面的文件名称
		let htmlPath = releaseDir + "/index.html";
		let versionPath = releaseDir + "/version.json";
		let gameJSPath = releaseDir + "/game.js";
		let mainJSPath = releaseDir + "/main.js";
		let indexJSPath;
		let versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
		let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
		indexJSPath = releaseDir + "/" + indexJsStr;
		// 替换config.packfileFullValue中的路径
		let packfileStr = JSON.stringify(config.packfileFullValue).replace(/\\\\/g, "/");
		let tempPackfile = `${workSpaceDir}/.laya/configTemp.json`;
		fs.writeFileSync(tempPackfile, packfileStr, "utf8");

		let srcList = [versionPath, indexJSPath, tempPackfile];
		if (fs.existsSync(htmlPath)) {
			srcList.push(htmlPath);
		}
		if (fs.existsSync(gameJSPath)) {
			srcList.push(gameJSPath);
		}
		if (fs.existsSync(mainJSPath)) {
			srcList.push(mainJSPath);
		}
		return gulp.src(srcList) 
			.pipe(revCollector())
			.pipe(gulp.dest(releaseDir));
	}
});

// 筛选4M包
gulp.task("packfile", platformTask, function() {
	if (platform === "layame") {
		return;
	}
	let taobaoFolders = "";
	switch (platform) {
		case "taobaominiapp":
			taobaoFolders = "pages/index";
			break;
		case "taobaowidget":
			taobaoFolders = "widget/component";
			break;
		default:
			taobaoFolders = "quickgame";
	}
	if (config.version) {
		releaseDir = releaseDir.replace("temprelease", taobaoFolders);
		// 从release目录取得带有版本号的目录
		let tempPackfile = `${workSpaceDir}/.laya/configTemp.json`;
		let releasePackfile = `${releaseDir}/configTemp.json`;
		let packfileStr = fs.readFileSync(releasePackfile, "utf8");
		config.packfileFullValue = JSON.parse(packfileStr);
		// 删掉临时目录
		fs.unlinkSync(tempPackfile);
		fs.unlinkSync(releasePackfile);
	}
	if (["taobaominiapp", "taobaowidget"].includes(platform)) {
		releaseDir = releaseDir.replace("/temprelease", "").replace(`/${taobaoFolders}`, "");
		for (let len = config.packfileFullValue.length, i = 0; i < len; i++) {
			config.packfileFullValue[i] = config.packfileFullValue[i].replace("temprelease", "");
		}
	}
	if (config.packfile) { // 提取本地包(文件列表形式)
		return gulp.src(config.packfileFullValue, { base: releaseDir })
			.pipe(gulp.dest(config.packfileTargetValue || releaseDir + "_pack"));
	}
	if (platform === "layame") {
		return;
	}
	if (config.version) { 
		let versionJsonJsOrigin = path.join(releaseDir, "version.json");
		fs.unlinkSync(versionJsonJsOrigin);
	}
});  
// 起始任务
gulp.task("publish", ["packfile"] , function () { 
	console.log("All tasks completed!");
});