import { uint } from "tsrpc-proto";
import { BaseConf, BaseRequest, BaseResponse } from "../base";

export interface ReqCreateRoom extends BaseRequest {

}

export interface ResCreateRoom extends BaseResponse {
    roomId: uint
}

export const conf: BaseConf = {

}