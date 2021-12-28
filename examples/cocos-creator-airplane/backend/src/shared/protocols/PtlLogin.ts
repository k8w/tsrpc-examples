import { CurrentUser } from "../types/CurrentUser";
import { BaseConf, BaseRequest, BaseResponse } from "./base";

export interface ReqLogin extends BaseRequest {
    nickname: string
}

export interface ResLogin extends BaseResponse {
    currentUser: CurrentUser
}

export const conf: BaseConf = {

}