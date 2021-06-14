import { ApiCall } from "tsrpc";
import { ReqClear, ResClear } from "../shared/protocols/PtlClear";

export async function ApiClear(call: ApiCall<ReqClear, ResClear>) {
    call.succ({
        __cookie: {}
    })
}