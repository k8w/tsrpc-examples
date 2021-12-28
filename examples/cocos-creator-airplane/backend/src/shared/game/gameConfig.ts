import { EnemyType } from "./GameSystemState";

export const gameConfig = {
    syncRate: 10,

    enemy: {
        bulletSpeed: 20,
        // 第一次发射子弹的延迟时间
        bulletDelayTime: 1500,
        // 每次发射子弹的间隔
        bulletGapTime: 500,
        // 出现位置（Y轴）
        bornY: 1800,
        // 敌机出现时间间隔（毫秒）
        bornGapTime: 1000,
        // 敌机速度
        speed: {
            [EnemyType.E1]: 10,
            [EnemyType.E2]: 20,
        }
    },

    player: {
        bulletSpeed: 10,
    },
}