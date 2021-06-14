import { HttpServer } from "tsrpc";
import { BaseRequest, BaseResponse, Cookie } from "../shared/protocols/base";

export async function enableCookie(server: HttpServer) {
    server.flows.preApiReturnFlow.push(v => {
        if (v.return.isSucc) {
            let req = v.call.req as BaseRequest;
            let res = v.return.res as BaseResponse;
            // Reset by API handler, or return as they are in the request
            res.__cookie = res.__cookie ?? req.__cookie;
        }
        return v;
    });
}