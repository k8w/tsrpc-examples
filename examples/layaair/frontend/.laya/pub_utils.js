// v1.0.0
const ideModuleDir = global.ideModuleDir;
const workSpaceDir = global.workSpaceDir;

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function getEngineVersion() {
	let coreLibPath = path.join(workSpaceDir, "bin", "libs", "laya.core.js");
	let isHasCoreLib = fs.existsSync(coreLibPath);
	let isOldAsProj = fs.existsSync(`${workSpaceDir}/asconfig.json`) && !isHasCoreLib;
	let isNewTsProj = fs.existsSync(`${workSpaceDir}/src/tsconfig.json`) && !isHasCoreLib;
	let EngineVersion;
	if (isHasCoreLib) {
		let con = fs.readFileSync(coreLibPath, "utf8");
		let matchList = con.match(/Laya\.version\s*=\s*['"]([0-9\.]+(beta)?.*)['"]/);
		if (!Array.isArray(matchList)) {
			return null;
		}
		EngineVersion = matchList[1];
	} else { // newts项目和旧版本as项目
		if (isOldAsProj) {
			let coreLibFilePath = path.join(workSpaceDir, "libs", "laya", "src", "Laya.as");
			if (!fs.existsSync(coreLibFilePath)) {
				return null;
			}
			let con = fs.readFileSync(coreLibFilePath, "utf8");
			let matchList = con.match(/version:String\s*=\s*['"]([0-9\.]+(beta)?.*)['"]/);
			if (!Array.isArray(matchList)) {
				return null;
			}
			EngineVersion = matchList[1];
		} else if (isNewTsProj) {
			let coreLibFilePath = path.join(workSpaceDir, "libs", "Laya.ts");
			if (!fs.existsSync(coreLibFilePath)) {
				return null;
			}
			let con = fs.readFileSync(coreLibFilePath, "utf8");
			let matchList = con.match(/static\s*version:\s*string\s*=\s*['"]([0-9\.]+(beta)?.*)['"]/);
			if (!Array.isArray(matchList)) {
				return null;
			}
			EngineVersion = matchList[1];
		}
	}
	// 特殊处理，因为历史原因，我们有一些4位的正式版本，调整为3位
	if (EngineVersion && /[\d\.]+/.test(EngineVersion) && EngineVersion.split(".").length > 3) {
		let verList = EngineVersion.split(".");
		verList.length = 3;
		EngineVersion = verList.join(".");
	}
	return EngineVersion;
}

function getFileMd5(filePath) {
	return new Promise(function(resolve, reject) {
		let md5 = crypto.createHash('md5');
		let stream = fs.createReadStream(filePath);
		stream.on("data", function(data) {
			md5.update(data);
		});
		stream.on("end", function() {
			let md5Str = md5.digest('hex');
			return resolve(md5Str);
		});
	});
}

function canUsePluginEngine(libsVersion, minVersionNum) {
	let compileMacthList = minVersionNum.match(/^(\d+)\.(\d+)\.(\d+)/);
	let matchList = libsVersion.match(/^(\d+)\.(\d+)\.(\d+)/);
	let 
		s1n = Number(matchList[1]), // src first number
		s2n = Number(matchList[2]),
		s3n = Number(matchList[3]),
		t1n = Number(compileMacthList[1]), // to first number
		t2n = Number(compileMacthList[2]),
		t3n = Number(compileMacthList[3]);
    if (s1n > t1n) {
        return true;
	}
    if (s1n === t1n && s2n > t2n) {
        return true;
    }
    if (s1n === t1n && s2n === t2n && s3n >= t3n) {
        return true;
    }
    return false;
}

module.exports = { getEngineVersion, getFileMd5, canUsePluginEngine }
