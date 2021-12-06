import 'k8w-extend-native';
import * as path from "path";
import { WsConnection, WsServer } from "tsrpc";
import { Room } from './models/Room';
import { serviceProto, ServiceType } from './shared/protocols/serviceProto';

// 创建 TSRPC WebSocket Server
export const server = new WsServer(serviceProto, {
    port: 3000,
    json: true
});

// 断开连接后退出房间
server.flows.postDisconnectFlow.push(v => {
    let conn = v.conn as WsConnection<ServiceType>;
    if (conn.playerId) {
        roomInstance.leave(conn.playerId, conn);
    }

    return v;
});

export const roomInstance = new Room(server);

// 初始化
async function init() {
    // 挂载 API 接口
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
};

// 启动入口点
async function main() {
    await init();
    await server.start();
}
main();