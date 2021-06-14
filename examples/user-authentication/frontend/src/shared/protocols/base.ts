export interface BaseRequest {
    __ssoToken?: string;
}

export interface BaseResponse {
    // Init or refresh sso token
    __ssoToken?: string;
}

export interface BaseConf {
    needLogin?: boolean,
    needRoles?: string[]
}