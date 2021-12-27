import { uint } from "tsrpc";

export interface GameSystemEvent {
    playerDie: {
        playerId: uint
    },
    enemyDie: {
        enemyId: uint
    }
}