import { ApiCall } from "tsrpc";
import { ReqSetCookie, ResSetCookie } from "../shared/protocols/PtlSetCookie";

let times = 0;

export async function ApiSetCookie(call: ApiCall<ReqSetCookie, ResSetCookie>) {
    ++times;
    call.succ({
        __cookie: {
            ...call.req.__cookie,
            testCookie: 'Cookie ' + times,
        }
    })
}