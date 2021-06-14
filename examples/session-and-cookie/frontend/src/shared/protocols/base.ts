export interface BaseRequest {
    __cookie?: Cookie;
}

export interface BaseResponse {
    __cookie?: Cookie;
}

export interface Cookie {
    sessionId?: string,
    [key: string]: any
}