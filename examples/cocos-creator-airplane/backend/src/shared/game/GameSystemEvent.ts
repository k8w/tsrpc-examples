import { uint } from "tsrpc-proto";

export interface GameSystemEvent {
    playerDie: {
        playerId: uint
    },
    enemyDie: {
        enemyId: uint
    }
}