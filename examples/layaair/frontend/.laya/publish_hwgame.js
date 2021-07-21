// v1.0.7
const ideModuleDir = global.ideModuleDir;
const workSpaceDir = global.workSpaceDir;

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const https = require("https");
const childProcess = require("child_process");
const del = require(ideModuleDir + "del");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');
const iconv =  require(ideModuleDir + "iconv-lite");
const request = require(ideModuleDir + "request");

let copyLibsTask = ["copyPlatformLibsJsFile"];
let versiontask = ["version2"];

let 
    config,
	releaseDir,
    toolkitPath,
    tempReleaseDir, // 华为临时拷贝目录
	projDir; // 华为快游戏工程目录
let versionCon; // 版本管理version.json
let commandSuffix,
	adbPath,
	opensslPath,
	layarepublicPath;
let isDevices = false;

// 创建华为项目前，拷贝华为引擎库、修改index.js
gulp.task("preCreate_HW", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	config = global.config;
	commandSuffix = global.commandSuffix;
	adbPath = global.adbPath;
	opensslPath = global.opensslPath;
	layarepublicPath = global.layarepublicPath;
	tempReleaseDir = global.tempReleaseDir;

    toolkitPath = path.join(layarepublicPath, "pub_huawei");
});

gulp.task("copyPlatformFile_HW", ["preCreate_HW"], function() {
	let hwAdapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "hwfiles");
	let copyLibsList = [`${hwAdapterPath}/**/*.*`];
	var stream = gulp.src(copyLibsList);
	return stream.pipe(gulp.dest(tempReleaseDir));
});

// 新建华为项目-华为项目与其他项目不同，需要安装华为 quickgame node_modules，并打包成.rpk文件
gulp.task("installModules_HW", versiontask, function() {
	releaseDir = path.dirname(releaseDir);
	projDir = path.join(releaseDir, config.hwInfo.projName);
    // 如果IDE里对应华为包已经install node_modules了，忽略这一步
    if (fs.existsSync(path.join(toolkitPath, "node_modules"))) {
        return;
    }
	// 安装华为 quickgame node_modules
	return new Promise((resolve, reject) => {
		console.log("开始安装华为 toolkit node_modules，请耐心等待...");
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

// 拷贝文件到华为快游戏
gulp.task("copyFileToProj_HW", ["installModules_HW"], function() {
	// 将临时文件夹中的文件，拷贝到项目中去
	let originalDir = `${tempReleaseDir}/**/*.*`;
	let stream = gulp.src(originalDir);
	return stream.pipe(gulp.dest(path.join(projDir)));
});

// 拷贝icon到华为快游戏
gulp.task("copyIconToProj_HW", ["copyFileToProj_HW"], function() {
	let originalDir = config.hwInfo.icon;
	let stream = gulp.src(originalDir);
	return stream.pipe(gulp.dest(path.join(projDir)));
});

// 清除华为快游戏临时目录
gulp.task("clearTempDir_HW", ["copyIconToProj_HW"], function() {
	// 删掉临时目录
	return del([tempReleaseDir], { force: true });
});

// 生成release签名(私钥文件 private.pem 和证书文件 certificate.pem )
gulp.task("generateSign_HW", ["clearTempDir_HW"], function() {
    if (!config.hwSign.generateSign) {
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
				cp.stdin.write(`${config.hwSign.countryName}\n`);
				console.log(`Country Name: ${config.hwSign.countryName}`);
			} else if (data.includes("Province Name")) {
				cp.stdin.write(`${config.hwSign.provinceName}\n`);
				console.log(`Province Name: ${config.hwSign.provinceName}`);
			} else if (data.includes("Locality Name")) {
				cp.stdin.write(`${config.hwSign.localityName}\n`);
				console.log(`Locality Name: ${config.hwSign.localityName}`);
			} else if (data.includes("Organization Name")) {
				cp.stdin.write(`${config.hwSign.orgName}\n`);
				console.log(`Organization Name: ${config.hwSign.orgName}`);
			} else if (data.includes("Organizational Unit Name")) {
				cp.stdin.write(`${config.hwSign.orgUnitName}\n`);
				console.log(`Organizational Unit Name: ${config.hwSign.orgUnitName}`);
			} else if (data.includes("Common Name")) {
				cp.stdin.write(`${config.hwSign.commonName}\n`);
				console.log(`Common Name: ${config.hwSign.commonName}`);
			} else if (data.includes("Email Address")) {
				cp.stdin.write(`${config.hwSign.emailAddr}\n`);
				console.log(`Email Address: ${config.hwSign.emailAddr}`);
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
gulp.task("copySignFile_HW", ["generateSign_HW"], function() {
	// debug签名拷贝，默认拷贝
	let 
            privatePem = path.join(toolkitPath, "sign", "debug", "private.pem"),
            certificatePem = path.join(toolkitPath, "sign", "debug", "certificate.pem");
	let isSignExits = fs.existsSync(privatePem) && fs.existsSync(certificatePem);
	if (!isSignExits) {
		return;
	}
	let 
		signDest = `${projDir}/sign/debug`;
	let stream = gulp.src([privatePem, certificatePem]);
	stream.pipe(gulp.dest(signDest));
		
    if (config.hwSign.generateSign) { // 新生成的签名
        // 移动签名文件到项目中（Laya & 华为快游戏项目中）
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
    } else if (config.hwInfo.useReleaseSign && !config.hwSign.generateSign) { // 使用release签名，并且没有重新生成
        // 从项目中将签名拷贝到华为快游戏项目中
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

gulp.task("deleteSignFile_HW", ["copySignFile_HW"], function() {
	if (config.hwSign.generateSign) { // 新生成的签名
		let 
            privatePem = path.join(projDir, "private.pem"),
            certificatePem = path.join(projDir, "certificate.pem");
		return del([privatePem, certificatePem], { force: true });
	}
});

gulp.task("modifyFile_HW", ["deleteSignFile_HW"], function() {
	// 修改manifest.json文件
	let manifestPath = path.join(projDir, "manifest.json");
	let manifestJson;
	if (fs.existsSync(manifestPath)) {
		let manifestContent = fs.readFileSync(manifestPath, "utf8");
		manifestJson = JSON.parse(manifestContent);
	} else {
		manifestJson = {
			"package": "",
			"name": "",
			"appType": "fastgame",
			"icon": "",
			"versionName": "",
			"versionCode": 0,
			"minPlatformVersion": 1000,
			"config": {
				"logLevel": "off"
			},
			"display": {
				"orientation": "portrait"
			}
		}
	}
	manifestJson.package = config.hwInfo.package;
	manifestJson.name = config.hwInfo.name;
	manifestJson.display.orientation = config.hwInfo.orientation;
	manifestJson.config.logLevel = config.hwInfo.logLevel || "off";
	manifestJson.versionName = config.hwInfo.versionName;
	manifestJson.versionCode = config.hwInfo.versionCode;
	manifestJson.minPlatformVersion = config.hwInfo.minPlatformVersion;
	manifestJson.icon = `/${path.basename(config.hwInfo.icon)}`;
	if (config.hwInfo.subpack) {
		let hwSubpackList = [];
		for (let i = 0, len = config.hwSubpack.length; i < len; i++) {
			hwSubpackList.push({
				name: config.hwSubpack[i].name,
				resource: config.hwSubpack[i].root
			})
		}
		manifestJson.subpackages = hwSubpackList;

		// 检测分包目录是否有入口文件
		console.log('检查分包文件...');
	
		if (manifestJson.subpackages) { 
			for(let i = 0; i < manifestJson.subpackages.length; i ++) {
				let conf = manifestJson.subpackages[i];
				if (conf.name) {
					let rootPath = path.join(projDir, conf.name);
					if (!fs.existsSync(rootPath)) {

						throw new Error(`分包文件/目录 ${rootPath} 不存在！`);
					} 
					let jsPath =  path.join(rootPath, 'game.js'); ; 
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
	// 华为项目，修改game.js
	let filePath = path.join(projDir, "game.js");
	if (!fs.existsSync(filePath)) {
		let fileContent = `require("./huawei-adapter.js");\nrequire("./libs/laya.hwmini.js");\nrequire("index.js");`;
		fs.writeFileSync(filePath, fileContent, "utf8");
	}

	// 华为项目，修改index.js
	let indexFilePath = path.join(projDir, indexJsStr);
	if (!fs.existsSync(indexFilePath)) {
		return;
	}
	let indexFileContent = fs.readFileSync(indexFilePath, "utf8");
	indexFileContent = indexFileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	fs.writeFileSync(indexFilePath, indexFileContent, "utf8");
});

gulp.task("modifyMinJs_HW", ["modifyFile_HW"], function() {
	let fileJsPath = path.join(projDir, "game.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	if (!config.useMinJsLibs) { // 默认保留了平台文件，如果同时取消使用min类库，就会出现文件引用不正确的问题
		content = content.replace(/min\/laya(-[\w\d]+)?\.hwmini\.min\.js/gm, "laya.hwmini.js");
	} else {
		content = content.replace(/(min\/)?laya(-[\w\d]+)?\.hwmini(\.min)?\.js/gm, "min/laya.hwmini.min.js");
	}
	fs.writeFileSync(fileJsPath, content, 'utf-8');
});

gulp.task("version_HW", ["modifyMinJs_HW"], function () {
	// main.js默认不覆盖，如果同时开启版本管理，就会出现文件引用不正确的问题
	let fileJsPath = path.join(projDir, "game.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	content = content.replace(/laya(-[\w\d]+)?\.hwmini/gm, "laya.hwmini");
	content = content.replace(/index(-[\w\d]+)?\.js/gm, "index.js");
	fs.writeFileSync(fileJsPath, content, 'utf-8');

	if (config.version) {
		let versionPath = projDir + "/version.json";
		let mainJSPath = projDir + "/game.js";
		let srcList = [versionPath, mainJSPath];
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(projDir));
	}
});

// 打包rpk
gulp.task("buildRPK_HW", ["version_HW"], function() {
	// 在华为快游戏项目目录中执行:
    // node .\signtool\package\index.js .\web .\dist com.demo .\release\private.pem .\release\certificate.pem
	let 
		signtoolPath = path.join(toolkitPath, "index.js"),
		releasePath = projDir,
		distPath = path.join(projDir, "dist"),
		name = config.hwInfo.package,
		privatePem = path.join(projDir, "sign", "debug", "private.pem"),
		certificatePemPath = path.join(projDir, "sign", "debug", "certificate.pem");
    if (config.hwInfo.useReleaseSign) {
        privatePem = path.join(projDir, "sign", "release", "private.pem"),
		certificatePemPath = path.join(projDir, "sign", "release", "certificate.pem");
    }
	return new Promise((resolve, reject) => {
		let cmd = `node`;
		let args = [`"${signtoolPath}"`, `"${releasePath}"`, `"${distPath}"`, name, `"${privatePem}"`, `"${certificatePemPath}"`];
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
			console.log(`stderr(iconv): ${iconv.decode(data, 'gbk')}`);
			// reject();
		});

		cp.on('close', (code) => {
			console.log(`子进程退出码：${code}`);
			// rpk是否生成成功
			let distRpkPath = path.join(distPath, `${name}.rpk`);
			if (!fs.existsSync(distRpkPath)) {
				throw new Error("rpk生成失败，请检查！");
			}
			resolve();
		});
	});
});


gulp.task("getDevices_HW", ["buildRPK_HW"], function(cb) {
	let cmd = `${adbPath} devices`;
	childProcess.exec(cmd, (error, stdout, stderr) => {
		if (error) {
			console.error("获取设备失败...");
			return cb();
		}
		if (stdout && stdout.match(/\bdevice\b/)) {
			isDevices = true;
		}
		console.log(`检测到设备: ${isDevices}`);
		return cb();
	});
});

// 更新快应用加载器
gulp.task("updateAPK_HW", ["getDevices_HW"], function(cb) {
	if (!config.hwInfo.apkUpdate || !isDevices) {
        return cb();
	}
	let remoteInfo, remoteAPKVer, localAPKVer;
	new Promise((resolve, reject) => {
		https.get('https://deveco.huawei.com/FastIDE/update/api/update/engineVersion/', (res) => {
			res.on('data', (data) => {
				remoteInfo = JSON.parse(data);
				remoteAPKVer = remoteInfo.version;
				console.log("remote apk version: ", remoteAPKVer);
				resolve();
			});
		}).on('error', (e) => {
			reject(`获取远端快应用加载器失败: ${e}`);
		});
	}).then(() => {
		return new Promise((resolve, reject) => { 
			// Unable为找不到快应用加载器
			let cmd = `${adbPath} shell dumpsys package com.huawei.fastapp.dev | `;
			if (process.platform === "darwin") {
				cmd += `grep "versionName\\|Unable"`;
			} else { 
				cmd += `findstr "versionName Unable"`
			} 
			childProcess.exec(cmd, (error, stdout, stderr) => {
				if (stdout && stdout.indexOf("Unable") >= 0) { 
					// 未安装 
					localAPKVer = '0.0.0.0_dev';
					console.log("未安装快应用加载器");
					return resolve();
				}
				if (error) {
					console.log("获取快应用加载器本地版本号失败: ");
					console.log(error);
					console.log(stderr);
					return resolve(error);
				}
				let matchList = stdout.match(/versionName=(.+)/);
				if (!Array.isArray(matchList)) {
					console.log("获取快应用加载器本地版本号失败: ");
					return resolve();
				}
				localAPKVer = matchList[1];
				console.log("local apk version: ", localAPKVer);
				resolve();
			});
		});
	}).then(() => {
		return new Promise((resolve, reject) => {
			if (remoteAPKVer === localAPKVer || donotUpdate(remoteAPKVer, localAPKVer)) {
				console.log("您的快应用加载器是最新版本!");
				return resolve();
			}
			let url = remoteInfo.url;
			let apkName = path.basename(url);
			let apkDownRoot = path.join(toolkitPath, "fastapp");
			let apkDownPath = path.join(apkDownRoot, apkName);
			// 1) 如果本地已经有最新版本的快应用加载器，则不再下载
			if (fs.existsSync(apkDownPath)) {
				console.log("您本地有最新版本的快应用加载器，将直接安装!");
				return installAPK().then(() => {
					return resolve();
				}).catch((err) => {
					return reject(err);
				})
			}
			// 2) 下载并安装快应用加载器
			console.log("正在下载快应用加载器，请稍等...");
			!(fs.existsSync(apkDownRoot)) && fs.mkdirSync(apkDownRoot);
			downFileToDir(url, apkDownPath).then(() => {
				return installAPK();
			}).then(() => {
				return resolve();
			}).catch((err) => {
				return reject(err);
			})

			// 安装apk
			function installAPK() {
				return new Promise((resolve, reject) => {
					console.log("正在安装快应用加载器，请稍等...");
					let cmd = `${adbPath} install -r ${apkDownPath}`;
					childProcess.exec(cmd, (error, stdout, stderr) => {
						if (error) {
							console.error("安装快应用加载器本地版本号失败: ");
							console.error(error);
							console.error(stderr);
							return reject(error);
						}
						console.log("安装快应用加载器成功!");
						resolve();
					});
				})
			}
		});
	}).then(() => {
		return cb();
	}).catch((re) => {
		console.error("更新快应用加载器失败: ", re);
		return cb();
	});
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
				reject(new Error("下载失败，连接关闭"));
			}
		});
	});
}

gulp.task("pushRPK_HW", ["updateAPK_HW"], function() {
	if (!config.hwInfo.adbDebug || !isDevices) {
        return;
    }
	// 在华为快游戏项目目录中执行:
	// adb shell am force-stop com.huawei.fastapp.dev
	// adb push {rpk_file_path} /data/local/tmp/
	// adb shell am start --es rpkpath /data/local/tmp/{rpk_file_name} --ei debugmode 1 --activity-clear-top com.huawei.fastapp.dev/com.huawei.fastapp.app.RpkRunnerActivity
	return new Promise((resolve, reject) => {
		// adb shell am force-stop com.huawei.fastapp.dev
		console.log(`1) force-stop: `);
		let cmd = `${adbPath}`;
		let args = ["shell", "am", "force-stop", "com.huawei.fastapp.dev"];
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
			console.log(`force-stop 子进程退出码：${code}`);
			resolve();
		});
	}).then(() => {
		return new Promise((resolve, reject) => {
			// adb push {rpk_file_path} /data/local/tmp/
			console.log(`2) push_RPK: `);
			let rpkFilePath = path.join(projDir, "dist", `${config.hwInfo.package}.rpk`);
			let cmd =  `${adbPath}`;
			let args = ["push", `"${rpkFilePath}"`, "/data/local/tmp/"];
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
				console.log(`push_RPK 子进程退出码：${code}`);
				resolve();
			});
		});
	}).then(() => {
		return new Promise((resolve, reject) => {
			// adb shell am start --es rpkpath /data/local/tmp/{rpk_file_name} --ei debugmode 1 --activity-clear-top com.huawei.fastapp.dev/com.huawei.fastapp.app.RpkRunnerActivity
			console.log(`3) 启动apk，加载rpk: `);
			let cmd = `${adbPath}`;
			let args = ["shell", "am", "start", "--es", "rpkpath", `file://data/local/tmp/${config.hwInfo.package}.rpk`, "--ei", "debugmode", "1", "--activity-clear-top", "com.huawei.fastapp.dev/com.huawei.fastapp.app.RpkRunnerActivity"];
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
				console.log(`启动apk，加载rpk: 子进程退出码：${code}`);
				resolve();
			});
		});
	});
});

function donotUpdate(remoteAPKVer, localAPKVer) {
	let remoteAPKVerN = remoteAPKVer.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)/);
	let localAPKVerN = localAPKVer.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)/);
	let 
		l1n = Number(localAPKVerN[1]), // local first number
		l2n = Number(localAPKVerN[2]),
		l3n = Number(localAPKVerN[3]),
		l4n = Number(localAPKVerN[4]),
		r1n = Number(remoteAPKVerN[1]), // remote first number
		r2n = Number(remoteAPKVerN[2]),
		r3n = Number(remoteAPKVerN[3]);
		r4n = Number(remoteAPKVerN[4]);
    if (l1n > r1n) {
        return true;
	}
    if (l1n === r1n && l2n > r2n) {
        return true;
    }
    if (l1n === r1n && l2n === r2n && l3n > r3n) {
        return true;
	}
	if (l1n === r1n && l2n === r2n && l3n === r3n && l4n >= r4n) {
        return true;
    }
    return false;
}

gulp.task("buildHWProj", ["pushRPK_HW"], function() {
	console.log("all tasks completed");
});