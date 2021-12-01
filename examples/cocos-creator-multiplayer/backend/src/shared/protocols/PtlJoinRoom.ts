import { PlayerState } from "../states/Player";
import { RoomState } from "../states/RoomState";

export interface ReqJoinRoom {
    nickname: string;
    skinId: number;
}

export interface ResJoinRoom {
    uid: number,
    roomState: RoomState
}

// export const conf = {}