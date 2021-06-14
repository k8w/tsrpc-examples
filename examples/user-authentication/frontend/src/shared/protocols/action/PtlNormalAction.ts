import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqNormalAction extends BaseRequest {

}

export interface ResNormalAction extends BaseResponse {
    result: string
}

export const conf: BaseConf = {
    needLogin: true
};