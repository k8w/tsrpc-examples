import { BaseConf, BaseRequest, BaseResponse } from "../base";

/** 准备 */
export interface ReqSetReady extends BaseRequest {
    isReady: boolean
}

export interface ResSetReady extends BaseResponse {

}

export const conf: BaseConf = {

}