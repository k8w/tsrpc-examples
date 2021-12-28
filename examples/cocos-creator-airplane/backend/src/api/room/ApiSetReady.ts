import { ApiCall } from "tsrpc";
import { ReqSetReady, ResSetReady } from "../../shared/protocols/room/PtlSetReady";

export async function ApiSetReady(call: ApiCall<ReqSetReady, ResSetReady>) {
    if (!call.conn.room) {
        return call.error('您还未加入房间')
    }

    call.conn.room.setReady(call.conn.currentUser.id, call.req.isReady);
    call.succ({})
}