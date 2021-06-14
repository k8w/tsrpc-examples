import { ApiCall } from "tsrpc";
import { UserUtil } from "../../models/UserUtil";
import { ReqLogout, ResLogout } from "../../shared/protocols/user/PtlLogout";

export async function ApiLogout(call: ApiCall<ReqLogout, ResLogout>) {
    call.req.__ssoToken && UserUtil.destroySsoToken(call.req.__ssoToken);
    call.succ({
        __ssoToken: ''
    });
}