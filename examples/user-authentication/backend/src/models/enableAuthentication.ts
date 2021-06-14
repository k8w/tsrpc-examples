import { HttpServer } from "tsrpc";
import { BaseConf } from "../shared/protocols/base";

export function enableAuthentication(server: HttpServer) {
    server.flows.preApiCallFlow.push(call => {
        let conf: BaseConf | undefined = call.service.conf;

        // NeedLogin
        if (conf?.needLogin && !call.currentUser) {
            call.error('You need login before do this', { code: 'NEED_LOGIN' });
            return undefined;
        }

        // NeedRoles
        if (conf?.needRoles?.length && !call.currentUser?.roles.some(v => conf!.needRoles!.indexOf(v) > -1)) {
            call.error('You do NOT have authority to do this', { code: 'NO_AUTHORITY' });
            return undefined;
        }

        return call;
    })
}