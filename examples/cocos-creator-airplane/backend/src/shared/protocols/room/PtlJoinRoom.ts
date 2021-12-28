import { uint } from "tsrpc-proto";
import { BaseConf, BaseRequest, BaseResponse } from "../base";

export interface ReqJoinRoom extends BaseRequest {
    roomId: uint;
}

export interface ResJoinRoom extends BaseResponse {
    
}

export const conf: BaseConf = {

}