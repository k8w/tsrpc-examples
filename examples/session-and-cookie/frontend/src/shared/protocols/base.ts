export interface BaseRequest {
    __session?: { [key: string]: any };
    __cookie?: { [key: string]: any };
}

export interface BaseResponse {
    __session?: { [key: string]: any };
    __cookie?: { [key: string]: any };
}