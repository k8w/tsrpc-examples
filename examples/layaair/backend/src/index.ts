import * as path from "path";
import { HttpConnection, HttpServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*',
    socketTimeout: 0,
    keepAliveTimeout: 0
});

server.flows.preRecvBufferFlow.push(v => {
    let conn = v.conn as HttpConnection;
    if (conn.httpReq.method === 'GET') {
        conn.httpRes.end('TSRPC Server');
        return undefined;
    }

    return v;
})

// Entry function
async function main() {
    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)

    await server.start();
};

main().catch(e => {
    // Exit if any error during the startup
    server.logger.error(e);
    process.exit(-1);
});