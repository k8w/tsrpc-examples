import { ApiCallWs } from "tsrpc";
import { roomInstance } from "..";
import { ReqJoinRoom, ResJoinRoom } from "../shared/protocols/PtlJoinRoom";

export async function ApiJoinRoom(call: ApiCallWs<ReqJoinRoom, ResJoinRoom>) {
    let uid = roomInstance.join(call.req, call.conn);

    call.succ({
        uid: uid,
        roomState: roomInstance.state
    })
}