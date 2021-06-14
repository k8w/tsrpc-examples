import { ApiCall } from "tsrpc";
import { ReqNormalAction, ResNormalAction } from "../../shared/protocols/action/PtlNormalAction";

export async function ApiNormalAction(call: ApiCall<ReqNormalAction, ResNormalAction>) {
    call.succ({
        result: 'Success'
    })
}