// v1.1.5
const ideModuleDir = global.ideModuleDir;
const workSpaceDir = global.workSpaceDir;

var Stream = require('stream');
//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const del = require(ideModuleDir + "del");

let copyLibsTask = ["copyPlatformLibsJsFile"];
let versiontask = ["version2"];
let exec = require('child_process').exec; 
let tsconfigPath = path.join(workSpaceDir, "tsconfig.json");
let isTS = fs.existsSync(tsconfigPath);
let buildOptions = null;
gulp.task("preCreate_LayaMe", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	config = global.config;
	buildOptions = config.buildOptions;
	commandSuffix = global.commandSuffix;
});
// 是否build指定部分（debug版本layame) 
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
function toBuildTs() {
	if (!buildOptions) {
		return true;
	} 
	return buildOptions.hasScript;
}

gulp.task("del", ["preCreate_LayaMe"], function(cb) {
    let buildFolder = path.join(workSpaceDir, "build");
	if (!isTS || !fs.existsSync(buildFolder)) {
		return cb();
	}
	let delList = [`${buildFolder}/**`];
	del(delList, { force: true }).then(paths => {
		cb();
	}).catch((err) => {
		throw err;
	})
});

gulp.task("tsc", ["del"], function(cb) {
	if (!isTS) {
		return cb();
	}
	if(!toBuildTs()) {
		return cb(); 
	}
	console.log('tsconfigPath', tsconfigPath);
	let tscPath = path.join(ideModuleDir, ".bin", `tsc${commandSuffix}`);
	return exec(` "${tscPath}" -p "${tsconfigPath}"`, {
		cwd: workSpaceDir,
		shell: true 
	}, function(error, stdout, stderr) {
		let errStr = stderr || '';
		if (errStr.indexOf(": node: ") >= 0 || errStr.indexOf("'node'") >= 0) {
			// 提示未安装node
			console.log("err");
			console.log("node not installed");
		} else { 
			if (error) console.log("error", error);
			if (stdout) console.log("stdout", stdout);
			if (stderr) console.log("stderr", stderr);
			cb();
		}
	});
});
function getFolderList(rootPath, fileList, fileType, deep= 0) {
    if (!fs.existsSync(rootPath)) {
        return fileList;
    }
    let dirList = fs.readdirSync(rootPath);
    let fileName, fileFullPath;
    for (let i = 0, len = dirList.length; i < len; i++) {
        fileName = dirList[i];
        fileFullPath = path.join(rootPath, fileName);
        if (fs.statSync(fileFullPath).isDirectory()) {
            getFolderList(fileFullPath, fileList, fileType, deep + 1);
        } else {
            if (!!fileType && !fileFullPath.endsWith(fileType)) {
                continue;
            }
            fileList.push({path: fileFullPath,deep:deep});
        }
    }
}
// 把ui里type为view的runtime删除
gulp.task("deletRuntime", ["tsc"], function() { 
	// const pageUIFolder = path.join(releaseDir, "pageUI");
	// let sceneList= []; 
	// getFolderList(pageUIFolder, sceneList, ".json");
	// for (let i = 0, len = sceneList.length; i < len; i++) {
	// 	let filePath = sceneList[i].path;
	// 	let fileCon = fs.readFileSync(filePath, "utf8"); 
	// 	let jsonData = JSON.parse(fileCon);
	// 	if (jsonData.type == 'View') {
	// 		if (jsonData.props && jsonData.props.runtime) {
	// 			delete jsonData.props.runtime;
	// 			fs.writeFileSync(filePath, JSON.stringify(jsonData), 'utf8');
	// 		}
	// 	}  
	// }         
});
// 将引入的库的路径改为src根目录的LayaMeMain,并且将引入的该类合并到最终发布目录的根目录下的LayaMeMain.js里
function sortJS (a, b) {
	
	return b.c - a.c;
}

function getFInfoByPath(path, list) {
	for (let i = 0, len = list.length; i < len; i++) {
		let info = list[i];
		if (info.path === path) {
			return info;
		}
	}
	return  null;
}
gulp.task("mergrToLayaMeMain", ["deletRuntime"], function() {
	if (!toBuildPart('LayaMeMain')) {
		return;
	}
	let source = "src";
	if (isTS) {
		source = "build";
	}
	let sourceFolder = path.join(workSpaceDir, source); 
	const scriptPath = path.join(sourceFolder, "script");
	let jsList= [];
	let scriptStrList = [];
	let filePath, fileCon, deep;  
	// 遍历所有的script，合并到LayaMeMain.js 
	jsList= [];
	scriptStrList = [];
 
	getFolderList(scriptPath, jsList, ".js");
	// sort jsList
	let needSort = false;
	let sortList = [];
	let otherList = [];
	for (let i = 0, len = jsList.length; i < len; i++) {
		let jsInfo = jsList[i];
		filePath = jsInfo.path; 
		fileCon = fs.readFileSync(filePath, "utf8"); 
		jsInfo.content = fileCon;  
		let extendsCls = fileCon.match((/\ s*extends \s*(.+?)\{/));
		if (extendsCls) { 
			if (extendsCls[1]) {
				extendsCls = extendsCls[1].trim();
				if (extendsCls && !extendsCls.includes('.')) { // not include Laya.
					let importCls = fileCon.match(`import\\s*[{| ]\\s*${extendsCls}\\s*[}| ]\\s*from (.+?)["']`)  ; 
					// console.log( extendsCls,  jsInfo.path, !!importCls );
					if (importCls && importCls[1]) { 
						importCls = importCls[1].trim();
						importCls = importCls.substr(1);	console.log( importCls);
						let deep = jsInfo.deep;
						let currPath = null; 
						let _index = importCls.lastIndexOf('./');
						let parenPath = '';
						if (_index >= 0) {
							let fPath = jsInfo.path;
							let _index2 = fPath.indexOf('/') >= 0 ? fPath.lastIndexOf('/') : fPath.lastIndexOf('\\') ;
							currPath = fPath.substring(0,_index2);
							currPath = path.join(jsInfo.path,parenPath + '../', importCls) + '.js';
							jsInfo.extendsCls = extendsCls;// currPath;
							// console.log(jsInfo);
							needSort = true;
							if (!sortList.includes(jsInfo)) {
								sortList.push(jsInfo); 
							}
							let importJs = getFInfoByPath(currPath, jsList);
							if (!importJs) {
								throw new Error('not found', currPath);
							}
							if (!jsInfo.c) {
								jsInfo.c = 0;
							} 
							importJs.c = jsInfo.c + 1;
							if (!sortList.includes(importJs)) {
								sortList.push(importJs); 
							} 
							// console.log(currPath,_index,parenPath, jsInfo.path, importCls, extendsCls);

						}
						 
					}
				}
			}
		} 
		// .vs .fs 解析
		let fileConTmp = fileCon + '';
		let vsOrfsImport = fileConTmp.match(/import \s*(.+?) from \s*(.+?).[fv]s['"]/);
		
		while (vsOrfsImport) {
			let importVar = vsOrfsImport[1];
			let filetype = vsOrfsImport[0];
			let importFile = vsOrfsImport[2];
			importFile = importFile.replace("'", '');
			importFile = importFile.replace('"', '');
			if (filetype.indexOf('.vs') >= 0) {
				filetype = '.vs';
			} else { 
				filetype = '.fs';
			}
			importFile = importFile + filetype; 
			let importFilePath = path.join(filePath,'../',importFile );
			console.log('importFilePath', importFilePath);
			fileConTmp = fileConTmp.replace(vsOrfsImport[0], '');
			// console.log('fileConTmp', fileConTmp);
			vsOrfsImport = fileConTmp.match(/import \s*(.+?) from \s*(.+?).[fv]s['"]/);
			let srcPath = path.join(workSpaceDir, 'src'); 
		    importFilePath = importFilePath.replace(sourceFolder, srcPath);

			let importFileStr = fs.readFileSync(importFilePath, 'utf8');
			importFileStr = importFileStr.replace(/\r?\n/gm, '\\n');
			importFileStr = importFileStr.replace(/"/gm,'\'');
			importFileStr = importFileStr.replace(/\t/gm,'\\t');
			importFileStr = importFileStr.replace(/\\n\s*/g,'\\n');
			importFileStr = importFileStr.replace(/\\n\\n/g,'\\n');
			// let lineList = importFileStr.split('\n');
			// let rStr = '';
			// for(let i = 0,len = lineList.length; i < len; i ++) {
			// 	let lineStr = lineList[i];
			// 	lineStr = lineStr.replace(/\r?\n/gm, '\\n');
			// 	lineStr = lineStr.replace(/"/gm,'\\"');
			// 	lineStr = lineStr.replace(/\t/gm,'\\t');
			// 	lineStr = lineStr.trim();
			// 	rStr = rStr + lineStr + '\\n';
			// } 
			// // fs.writeFileSync(importFilePath + '2',rStr.replace(/\\n/gm,'\n'), 'utf8');
			jsInfo.content =  `var ${importVar} = "${importFileStr}";\n` + jsInfo.content;
		}
	}  
	// console.log('ssssssssss',sortList);
	if (needSort) { 
		sortList.sort(sortJS); 
		for (let i = 0, len = sortList.length; i < len; i++) {
			let jsInfo = sortList[i];
			scriptStrList.push(jsInfo.content);   
		}  
	}   
	for (let i = 0, len = jsList.length; i < len; i++) {
		let jsInfo = jsList[i]; 
		if (!needSort || !sortList.includes(jsInfo)) { 
			scriptStrList.push(jsInfo.content); 
		}  
	}    
	let layaMeMainStr = '';  
	const layaMeMainPath = path.join(sourceFolder, "LayaMeMain.js");
	if (fs.existsSync(layaMeMainPath)) { 
		layaMeMainStr = fs.readFileSync(layaMeMainPath, "utf8");
	}
	if (scriptStrList.length > 0) {
		let scriptStrAll = scriptStrList.join('\n');
		layaMeMainStr = scriptStrAll + layaMeMainStr;
	}       	
	if (layaMeMainStr) { 
		// console.log(jsList.length,'layaMeMainStr' , layaMeMainStr);
		layaMeMainStr = layaMeMainStr.replace(/import/mg, "// import"); 
		// 去掉class前面的字符
		layaMeMainStr = layaMeMainStr.replace(/export\s+default\s+[class\.]+\s*/mg, "class ");
		layaMeMainStr = layaMeMainStr.replace(/export\s+[class\.]+\s*/mg, "class ");
		fs.writeFileSync(`${releaseDir}/LayaMeMain.js`, layaMeMainStr, "utf8");
	} 
});
// 修改extends Laya.Script3D 为 extends GameScript
// 修改 config.json，把.ts替换为.js
function commentImport (str){
	
	str = str.replace(/import/mg, "// import"); 	
	return str;
}
function changeComponentsFile() {
    var stream = new Stream.Transform({ objectMode: true });
	let source = "src";
	if (isTS) {
		source = "build";
	}
	let sourceFolder = path.join(workSpaceDir, source); 
	const scriptPath = path.join(sourceFolder, "script");
	const componentsPath = path.join(sourceFolder, "components"); 
	const actionScriptPath = path.join(sourceFolder, "actionScript", "actionFunc.js"); 
	const uiScriptPath = path.join(sourceFolder, "uiScript"); 
	let importPathList = [scriptPath, componentsPath, actionScriptPath, uiScriptPath];
    stream._transform = function (originalFile, unused, callback) {
        let fPath = originalFile.path; 
		// throw new Error();
		let file = null;
		const getFile = () => {
			if (!file) {
				file = originalFile.clone({ contents: false });
			}
			return file;
		} 
		// console.log('fPth', fPath, componentsPath);
		// 注释import
		for(let k =0; k <importPathList.length; k ++) {
			let _path = importPathList[k];
			if (fPath.startsWith(_path)) { 
				file = getFile();
				let stringData = String(file.contents); 
				stringData = commentImport(stringData);
				let finalBinaryData = Buffer.from(stringData);
				file.contents = finalBinaryData;
			}
		}
        if (fPath.indexOf('components') >= 0) {
			if ( fPath.endsWith('.js')) { 
				file = getFile();
				let stringData = String(file.contents); 
				stringData = stringData.replace(/extends\s+[Laya.Script3D\.]+\s*{/mg, "extends GameScript {");
				let finalBinaryData = Buffer.from(stringData);
				file.contents = finalBinaryData;
			 
			} else  if (fPath.endsWith('config.json')) { 
				file = getFile();
				let stringData = String(file.contents); 
				stringData = stringData.replace(/.ts\"/mg, '.js"');
				let finalBinaryData = Buffer.from(stringData);
				file.contents = finalBinaryData; 
			} 
        } 
		// 去掉class前面的字符
		if (fPath.endsWith('.js')) { 
			file = getFile(); 
			let stringData = String(file.contents); 
			stringData = stringData.replace(/export\s+default\s+[class\.]+\s*/mg, "class ");
			stringData = stringData.replace(/export\s+[class\.]+\s*/mg, "class ");
			let finalBinaryData = Buffer.from(stringData);
			file.contents = finalBinaryData; 
		}
		if (file) {
			callback(null, file); 
		} else {
			callback(null, originalFile);
		}
    }; 
    return stream;
}

gulp.task("genPreloadMap", ["mergrToLayaMeMain"], function() {
	let atlasList = [];
	getFolderList(releaseDir,atlasList, '.atlas');
	let preloadJson = {
		atlas: [],
		atlasPng:[],
		textures: []

	};
	let releaseDirTmp = releaseDir.replace(/\\/g, '/');
	for(let i = 0,len = atlasList.length; i < len; i ++) {
		let file = atlasList[i].path;  
	  	file = file.replace(/\\/g, '/');
		file = file.replace(releaseDirTmp, ''); 
		file = file.replace('/', '');
		preloadJson.atlas.push(file);
		preloadJson.atlasPng.push( file.replace('.atlas', '.png'));
	}
	let texturesList = [];
	let texturesDir = path.join(releaseDir, 'textures');
	getFolderList(texturesDir,texturesList, '.png');
	getFolderList(texturesDir,texturesList, '.jpg');
	getFolderList(texturesDir,texturesList, '.jpeg');
	
	let texturesDirTmp = releaseDir.replace(/\\/g, '/');
	for(let i = 0,len = texturesList.length; i < len; i ++) {
		let file = texturesList[i].path;  
	  	file = file.replace(/\\/g, '/');
		file = file.replace(texturesDirTmp, ''); 
		file = file.replace('/', '');
		preloadJson.textures.push(file); 
	}
	fs.writeFileSync(path.join(releaseDir, 'preload.json'), JSON.stringify(preloadJson, null ,4), 'utf8');
	// console.log('atlasList', preloadJson);
});
gulp.task("copy", ["genPreloadMap"], function() {
	 
	let source = "src";
	if (isTS) {
		source = "build";
	}
	let sourceFolder = path.join(workSpaceDir, source); 
	let layameInfo = config.layameInfo;
	let filter1list = [];

	if (toBuildPart('uiScript')) {
		filter1list.push('uiScript/**/*.*'); 
	}
	if (toBuildPart('actionScript')) {
		filter1list.push('actionScript/**/*.*'); 
	}
	if (toBuildPart('components')) {
		filter1list.push('components/**/*.*'); 
	}
	let filter1  = ``;
	if (filter1list.length > 1) {
		filter1  = `${sourceFolder}/{`;
		filter1 += filter1list.join(',');
		filter1 += '}';
	} else if (filter1list.length == 1) {
		filter1  = `${sourceFolder}/{,`;
		filter1 += filter1list[0];
		filter1 += '}';
	} else {
		return;
	}  
	let filters = [filter1]; 
	// console.log('filter1', filter1);throw new Error();
	if (isTS) { 
		let filter2 = `${workSpaceDir}/src/{,`; 
		let filter2list =[];
		if (toBuildPart('uiScript')) {
			filter2list.push('uiScript/**/!(*.ts)'); 
		}
		if (toBuildPart('actionScript')) {
			filter2list.push('actionScript/**/!(*.ts)'); 
		}
		if (toBuildPart('components')) {
			filter2list.push('components/**/!(*.ts)'); 
		}   
		if (filter2list.length > 1) {
			filter2 += filter2list.join(','); 
		} else if (filter2list.length == 1) { 
			filter2 += filter2list[0];
		}   
		filter2 += '}';
		filters.push(
			filter2
		); 		
	} 	
	return gulp.src(filters)
	.pipe(changeComponentsFile())
	.pipe(gulp.dest(releaseDir));
}); 

gulp.task("buildLayaMeProj", versiontask, function() {
	console.log("all tasks completed");
});