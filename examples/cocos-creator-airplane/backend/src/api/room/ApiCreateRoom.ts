import { ApiCall } from "tsrpc";
import { ReqCreateRoom, ResCreateRoom } from "../../shared/protocols/room/PtlCreateRoom";

export async function ApiCreateRoom(call: ApiCall<ReqCreateRoom, ResCreateRoom>) {
    // TODO
    call.error('API Not Implemented');
}