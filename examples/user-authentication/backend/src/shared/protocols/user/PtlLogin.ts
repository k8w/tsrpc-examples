import { CurrentUser } from '../../models/CurrentUser';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqLogin extends BaseRequest {
    username: string,
    password: string
}

export interface ResLogin extends BaseResponse {
    __ssoToken: string;
    user: CurrentUser;
}

export const conf: BaseConf = {

};