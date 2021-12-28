import { uint } from "tsrpc";

export interface CurrentUser {
    id: uint,
    nickname: string
}