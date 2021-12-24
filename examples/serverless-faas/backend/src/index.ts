import { init, server } from "./models/server";

// 普通 NodeJS 环境入口点
async function main() {
    await init();
    await server.start();
};
main();