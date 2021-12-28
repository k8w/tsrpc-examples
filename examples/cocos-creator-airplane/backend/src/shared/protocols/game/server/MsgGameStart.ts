import { uint } from "tsrpc";
import { GameSystemState } from "../../../game/GameSystemState";

export interface MsgGameStart {
    frameIndex: uint,
    gameState: GameSystemState
}