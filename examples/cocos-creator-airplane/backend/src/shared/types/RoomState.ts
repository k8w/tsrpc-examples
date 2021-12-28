import { uint } from "tsrpc-proto";

export interface RoomState {
    id: uint;
    players: { id: uint, nickname: string, isReady: boolean }[];
    status: 'wait' | 'ready' | 'start';
}