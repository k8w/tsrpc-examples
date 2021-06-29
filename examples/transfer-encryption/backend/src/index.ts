import * as path from "path";
import { HttpServer } from "tsrpc";
import { EncryptUtil } from "./shared/models/EncryptUtil";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*',
    debugBuf: true
});

// Encrypt
server.flows.preSendBufferFlow.push(v => {
    v.buf = EncryptUtil.encrypt(v.buf);
    return v;
});
// Decrypt
server.flows.preRecvBufferFlow.push(v => {
    v.buf = EncryptUtil.decrypt(v.buf);
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