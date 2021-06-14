import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqGuestAction extends BaseRequest {

}

export interface ResGuestAction extends BaseResponse {
    result: string
}

export const conf: BaseConf = {
    needLogin: false
};