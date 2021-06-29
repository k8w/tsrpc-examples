import fs from "fs/promises";
import path from 'path';
import { HttpConnection, HttpServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

// Custom HTTP Reponse
server.flows.preRecvBufferFlow.push(async v => {
    let conn = v.conn as HttpConnection;

    if (conn.httpReq.method === 'GET') {
        // Static File Service
        if (conn.httpReq.url) {
            // Check whether the file is existed
            let resFilePath = path.join('res', conn.httpReq.url)
            let isExisted = await fs.access(resFilePath).then(() => true).catch(() => false);
            if (isExisted) {
                // Response the file
                let content = await fs.readFile(resFilePath);
                conn.httpRes.end(content);
                return undefined;
            }
        }

        // default GET response
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