import { ApiCallWs } from "tsrpc";
import { roomInstance } from "..";
import { ReqJoin, ResJoin } from "../shared/protocols/PtlJoin";

export async function ApiJoin(call: ApiCallWs<ReqJoin, ResJoin>) {
    let playerId = roomInstance.join(call.req, call.conn);

    call.succ({
        playerId: playerId,
        gameState: roomInstance.gameSystem.state
    })
}