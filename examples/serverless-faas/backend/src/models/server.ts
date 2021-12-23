import path from "path";
import { HttpServer } from "tsrpc";
import { serviceProto } from "../shared/protocols/serviceProto";

// Create the Server
export const server = new HttpServer(serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true
});

// Initialize before server start
export async function init(delay?: boolean) {
    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, '../api/'), delay);

    // TODO
    // Prepare something... (e.g. connect the db)
};