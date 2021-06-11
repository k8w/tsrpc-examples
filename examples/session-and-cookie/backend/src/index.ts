import * as path from "path";
import { HttpServer } from "tsrpc";
import { BaseRequest, BaseResponse } from "./shared/protocols/base";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

// Return session and cookie as they are, except reset by res
server.flows.preApiReturnFlow.push(v => {
    if (v.return.isSucc) {
        let req = v.call.req as BaseRequest;
        let res = v.return.res as BaseResponse;
        res.__session = res.__session ?? req.__session;
        res.__cookie = res.__cookie ?? req.__cookie;
    }
    return v;
});

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