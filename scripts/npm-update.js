const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let dirs = fs.readdirSync(path.resolve(__dirname, '../examples'));

dirs.forEach(dir => {
    console.log(dir);
    process.chdir(path.resolve(__dirname, '../examples', dir, 'backend'));
    execSync('ncu -u -t minor', { stdio: 'inherit' });
    process.chdir(path.resolve(__dirname, '../examples', dir, 'frontend'));
    execSync('ncu -u -t minor', { stdio: 'inherit' });
})