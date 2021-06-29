import * as path from "path";
import { HttpConnection, HttpServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

// Custom HTTP Reponse
server.flows.preRecvBufferFlow.push(v => {
    let conn = v.conn as HttpConnection;

    if (conn.httpReq.method === 'GET') {
        // 特定 URL: /test
        if (conn.httpReq.url === '/test') {
            conn.httpRes.end('test test')
            return undefined;
        }

        // 默认 GET 响应
        conn.httpRes.end('Hello World');
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