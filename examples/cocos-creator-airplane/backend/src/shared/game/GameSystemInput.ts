import { uint } from "tsrpc-proto";
import { PlayerState } from "./GameSystemState";

// 移动并攻击
export interface PlayerMove {
    type: 'PlayerMove',
    playerId: uint,
    offset: { x: number, y: number },
    createBullets: PlayerState['bullets']
}

// 命中敌机
export interface PlayerHitEnemy {
    type: 'PlayerHitEnemy',
    playerId: uint,
    enemyId: uint
}

// 吃到 FightIcon
export interface PlayerHitFightIcon {
    type: 'PlayerHitFightIcon',
    playerId: uint,
    fightIconId: uint
}

// 被敌机击中
export interface PlayerHurt {
    type: 'PlayerHurt',
    playerId: uint,
    // 伤害血量
    hurtLife: number,
}

// 子弹互相碰撞，双双消失
export interface BulletHit {
    type: 'BulletHit',
    playerId: uint,
    playerBulletId: uint,
    enemyId: uint,
    enemyBulletId: uint
}

// 时间流逝
export interface TimePast {
    type: 'TimePast',
    dt: number
}

// 输入定义
export type GameSystemInput = PlayerMove | PlayerHitEnemy | PlayerHitFightIcon | PlayerHurt | BulletHit | TimePast;