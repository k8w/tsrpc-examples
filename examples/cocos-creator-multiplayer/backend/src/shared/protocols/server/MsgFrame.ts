import { GameSystemInput } from "../../game/GameSystem";

export interface MsgFrame {
    inputs: GameSystemInput[],
    lastSn?: number
}