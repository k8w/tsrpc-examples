import { ApiCall } from "tsrpc";
import { ReqGuestAction, ResGuestAction } from "../../shared/protocols/action/PtlGuestAction";

export async function ApiGuestAction(call: ApiCall<ReqGuestAction, ResGuestAction>) {
    call.succ({
        result: 'Success'
    })
}