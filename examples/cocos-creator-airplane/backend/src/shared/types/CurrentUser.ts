import { uint } from "tsrpc-proto";

export interface CurrentUser {
    id: uint,
    nickname: string
}