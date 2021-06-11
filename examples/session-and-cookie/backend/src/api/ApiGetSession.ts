import { ApiCall } from "tsrpc";
import { ReqGetSession, ResGetSession } from "../shared/protocols/PtlGetSession";

let times = 0;

export async function ApiGetSession(call: ApiCall<ReqGetSession, ResGetSession>) {
    call.succ({
        __session: {
            ...call.req.__session,
            testSession: 'Session ' + (++times)
        }
    })
}