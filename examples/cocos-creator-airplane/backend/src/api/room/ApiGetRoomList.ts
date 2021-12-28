import { ApiCall } from "tsrpc";
import { ReqGetRoomList, ResGetRoomList } from "../../shared/protocols/room/PtlGetRoomList";

export async function ApiGetRoomList(call: ApiCall<ReqGetRoomList, ResGetRoomList>) {
    // TODO
    call.error('API Not Implemented');
}