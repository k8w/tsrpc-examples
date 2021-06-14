import * as path from "path";
import { HttpServer } from "tsrpc";
import { enableAuthentication } from "./models/enableAuthentication";
import { parseCurrentUser } from "./models/parseCurrentUser";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

parseCurrentUser(server);
enableAuthentication(server);

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