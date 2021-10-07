const fs = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');

let dirs = fs.readdirSync(path.resolve(__dirname, '../examples'));

dirs.forEach(dir => {
    console.log(dir);

    if (!isDir(path.resolve(__dirname, '../examples', dir,))) {
        return;
    }

    let num = 0;
    if (isDir(path.resolve(__dirname, '../examples', dir, 'backend'))) {
        ++num;
        process.chdir(path.resolve(__dirname, '../examples', dir, 'backend'));
        execSync('ncu -u -t minor && npm i --registry https://registry.npm.taobao.org', { stdio: 'inherit' });
    }

    if (isDir(path.resolve(__dirname, '../examples', dir, 'frontend'))) {
        ++num;
        process.chdir(path.resolve(__dirname, '../examples', dir, 'frontend'));
        execSync('ncu -u -t minor && npm i --registry https://registry.npm.taobao.org', { stdio: 'inherit' });
    }

    if (!num) {
        process.chdir(path.resolve(__dirname, '../examples', dir));
        execSync('ncu -u -t minor && npm i --registry https://registry.npm.taobao.org', { stdio: 'inherit' });
    }
})

function isDir(dir) {
    return fs.existsSync(dir) && fs.statSync(dir).isDirectory()
}