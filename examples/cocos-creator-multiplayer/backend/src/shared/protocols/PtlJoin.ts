import { GameSystemState } from "../game/GameSystem";

export interface ReqJoin {

}

export interface ResJoin {
    playerId: number,
    gameState: GameSystemState
}

// export const conf = {}