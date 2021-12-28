import { uint } from "tsrpc-proto";

// 坐标系：X-Y 原点在中间下方
/*
[ ]  [ ]  [ ]

[ ]  [ ]  [ ]     
                  ↑ y
[ ]  [x]  [ ]     → x
*/

export interface GameSystemState {
    // 游戏时间
    now: number,

    // 场景状态
    players: PlayerState[],
    enemies: EnemyState[],
    fightIcons: FightIconState[],

    // ID 生成器
    nextId: {
        enemy: uint,
        fightIcon: uint
    },

    // 上次创建敌机的时间
    lastCreateEnemyTime: number,
}


// 玩家
export interface PlayerState {
    id: uint,
    nickname: string,
    // 得分
    score: number,
    // 生命值
    life: number,
    // 当前子弹
    currentBulletType: PlayerBulletType,
    // 位置
    pos: { x: number, y: number },
    bullets: {
        id: uint,
        type: PlayerBulletType,
        pos: { x: number, y: number },
        // 初始状态
        init: {
            time: number,
            pos: { x: number, y: number },
            direction: { x: number, y: number }
        }
    }[],
    nextId: {
        bullet: uint
    }
}

export type PlayerBulletType = 'M' | 'H' | 'S';

// 敌机
export interface EnemyState {
    id: uint,
    // 敌机类型
    type: EnemyType,
    pos: { x: number, y: number },
    init: {
        time: number,
        pos: { x: number, y: number },
    }
    bullets: {
        id: uint,
        pos: { x: number, y: number },
        // 初始状态
        init: {
            time: number,
            // 目前只能向下飞
            pos: { x: number, y: number },
        }
    }[],
    // 上次发射子弹的时间
    lastBulletTime: number,
    nextId: {
        bullet: uint
    }
}

export enum EnemyType {
    E1,
    E2
};

// 子弹图标
export interface FightIconState {
    id: uint,
    type: PlayerBulletType,
    init: {
        time: number,
        pos: { x: number, y: number }
    }
}