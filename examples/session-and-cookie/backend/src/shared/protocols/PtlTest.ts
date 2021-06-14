import { BaseRequest, BaseResponse } from './base';

export interface ReqTest extends BaseRequest {

}

export interface ResTest extends BaseResponse {
    // From Session
    testSession?: string
}