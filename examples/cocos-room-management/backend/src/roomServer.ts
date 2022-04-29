import { RoomServer } from "./RoomServer/RoomServer";

// env config
const port = parseInt(process.env['PORT'] || '3001');
const matchServerUrl = process.env['MATCH_SERVER_URL'] || 'http://127.0.0.1:3000';
const thisServerUrl = process.env['THIS_SERVER_URL'] || ('ws://127.0.0.1:' + port);

export const roomServer = new RoomServer({
    // 可改为通过环境变量调整配置参数
    port: port,
    matchServerUrl: matchServerUrl,
    thisServerUrl: thisServerUrl
});

// Entry function
async function main() {
    await roomServer.init();
    await roomServer.start();
}
main();