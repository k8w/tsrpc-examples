import { ApiCall } from "tsrpc";
import { ReqGetCookie, ResGetCookie } from "../shared/protocols/PtlGetCookie";

let times = 0;

export async function ApiGetCookie(call: ApiCall<ReqGetCookie, ResGetCookie>) {
    call.succ({
        __cookie: {
            ...call.req.__cookie,
            testCookie: 'Cookie ' + (++times),
        }
    })
}