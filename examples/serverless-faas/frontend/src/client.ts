import { HttpClient } from "tsrpc-browser";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create Client
export const client = new HttpClient(serviceProto, {
    server: "https://service-23pfz6cm-1253954497.gz.apigw.tencentcs.com/release/helloworld-1634897828/",
    // Remove this to use binary mode (remove from the server too)
    json: true,
    logger: console,
});