import { uint } from "tsrpc-proto";
import { GameSystemState } from "../../../game/GameSystemState";

export interface MsgGameStart {
    frameIndex: uint,
    gameState: GameSystemState
}