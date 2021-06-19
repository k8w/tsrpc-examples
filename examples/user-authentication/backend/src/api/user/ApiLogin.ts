import { ApiCall } from "tsrpc";
import { UserUtil } from "../../models/UserUtil";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";

export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
    let user = UserUtil.users.find(v => v.username === call.req.username && v.password === call.req.password);
    if (!user) {
        call.error('Error username or password');
        return;
    }

    let sso = await UserUtil.createSsoToken(user.uid);

    call.succ({
        __ssoToken: sso,
        user: user
    })
}