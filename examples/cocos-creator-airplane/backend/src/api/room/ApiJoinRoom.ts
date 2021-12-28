import { ApiCallWs } from "tsrpc";
import { Room } from "../../models/Room";
import { ReqJoinRoom, ResJoinRoom } from "../../shared/protocols/room/PtlJoinRoom";

// TEST
let room = new Room(123);

export async function ApiJoinRoom(call: ApiCallWs<ReqJoinRoom, ResJoinRoom>) {
    let op = room.join(call.conn);
    if (!op.isSucc) {
        return call.error(op.errMsg);
    }

    call.succ({
        roomState: room.state
    });
}