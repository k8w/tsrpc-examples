import fs from "fs/promises";
import * as path from "path";
import { HttpConnection, HttpServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

// Flow: Serve static files
server.flows.preRecvBufferFlow.push(async v => {
    let conn = v.conn as HttpConnection;
    if (conn.httpReq.method === 'GET') {
        if (conn.httpReq.url?.startsWith('/uploads/')) {
            let file = await fs.readFile(decodeURIComponent(conn.httpReq.url.replace(/^\//, ''))).catch(e => { });
            if (file) {
                server.logger.log('GET', conn.httpReq.url);
                conn.httpRes.end(file);
                return undefined;
            }
        }

        conn.httpRes.end('404 Not Found')
        return undefined;
    }

    return v;
})

// Entry function
async function main() {
    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // Ensure "uploads" dir is exists
    await fs.mkdir('uploads').catch(e => { });

    await server.start();
};

main().catch(e => {
    // Exit if any error during the startup
    server.logger.error(e);
    process.exit(-1);
});