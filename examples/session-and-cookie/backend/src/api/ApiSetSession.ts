import { ApiCall } from "tsrpc";
import { ReqSetSession, ResSetSession } from "../shared/protocols/PtlSetSession";

let times = 0;

export async function ApiSetSession(call: ApiCall<ReqSetSession, ResSetSession>) {
    ++times;
    await call.setSession('testSession', 'Session ' + times);
    call.succ({})
}