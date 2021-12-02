import { PlayerAttack, PlayerMove } from "../../game/GameSystem";

export interface MsgClientInput {
    sn: number,
    inputs: ClientInput[]
};

export type ClientInput = Omit<PlayerMove, 'playerId'> | Omit<PlayerAttack, 'playerId'>;