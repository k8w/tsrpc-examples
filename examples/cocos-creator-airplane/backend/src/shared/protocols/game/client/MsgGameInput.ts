import { BulletHit, PlayerHitEnemy, PlayerHitFightIcon, PlayerHurt, PlayerMove } from "../../../game/GameSystemInput";

/** 发送自己的输入 */
export interface MsgGameInput {
    sn: number,
    inputs: ClientInput[]
}

export type ClientInput = Omit<PlayerMove, 'playerId'>
    | Omit<PlayerHitEnemy, 'playerId'>
    | Omit<PlayerHitFightIcon, 'playerId'>
    | Omit<PlayerHurt, 'playerId'>
    | Omit<BulletHit, 'playerId'>;
