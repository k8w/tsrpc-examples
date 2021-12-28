import { uint } from "tsrpc";
import { BaseConf, BaseRequest, BaseResponse } from "./base";

export interface ReqLogin extends BaseRequest {
    nickname: string
}

export interface ResLogin extends BaseResponse {
    playerId: uint
}

export const conf: BaseConf = {

}