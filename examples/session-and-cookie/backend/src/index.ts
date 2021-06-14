import * as path from "path";
import { HttpServer } from "tsrpc";
import { enableCookie } from "./models/enableCookie";
import { ServerSession } from "./models/ServerSession";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

// Enable Cookie
enableCookie(server);

// Enable Session
new ServerSession().enable(server);

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