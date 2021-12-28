import { ApiCallWs } from "tsrpc";
import { ReqLogin, ResLogin } from "../shared/protocols/PtlLogin";

let nextPlayerId = 1;

export async function ApiLogin(call: ApiCallWs<ReqLogin, ResLogin>) {
    let playerId = nextPlayerId++;

    call.conn.currentUser = {
        id: playerId,
        nickname: call.req.nickname
    }

    call.succ({
        currentUser: call.conn.currentUser
    })
}