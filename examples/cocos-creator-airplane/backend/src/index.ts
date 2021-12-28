import 'k8w-extend-native';
import * as path from "path";
import { WsServer } from "tsrpc";
import { Room } from './models/Room';
import { serviceProto } from './shared/protocols/serviceProto';
import { CurrentUser } from './shared/types/CurrentUser';

// Create the Server
export const server = new WsServer(serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true
});

// Initialize before server start
async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
};

// Entry function
async function main() {
    await init();
    await server.start();
}
main();

// 扩展 Connection 字段
declare module 'tsrpc' {
    export interface BaseConnection {
        currentUser: CurrentUser,
        room?: Room,
    }
}