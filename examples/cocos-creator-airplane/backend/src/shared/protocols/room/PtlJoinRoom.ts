import { uint } from "tsrpc-proto";
import { RoomState } from "../../types/RoomState";
import { BaseConf, BaseRequest, BaseResponse } from "../base";

export interface ReqJoinRoom extends BaseRequest {
    roomId: uint;
}

export interface ResJoinRoom extends BaseResponse {
    roomState: RoomState;
}

export const conf: BaseConf = {

}