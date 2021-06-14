import { ApiCall } from "tsrpc";
import { ReqAdminAction, ResAdminAction } from "../../shared/protocols/action/PtlAdminAction";

export async function ApiAdminAction(call: ApiCall<ReqAdminAction, ResAdminAction>) {
    call.succ({
        result: 'Success'
    })
}