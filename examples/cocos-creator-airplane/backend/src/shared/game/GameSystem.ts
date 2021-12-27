import { gameConfig } from "./gameConfig";
import { GameSystemEvent } from "./GameSystemEvent";
import { GameSystemInput } from "./GameSystemInput";
import { GameSystemState } from "./GameSystemState";

/**
 * 前后端复用的状态计算模块
 */
export class GameSystem {

    // 当前状态
    state: GameSystemState;

    constructor(state: GameSystemState) {
        this.state = state;
    }

    // 应用输入，计算状态变更
    applyInput(input: GameSystemInput) {
        switch (input.type) {
            // 击中敌机
            case 'PlayerHitEnemy': {
                let enemyIndex = this.state.enemies.findIndex(v => v.id === input.enemyId);
                let player = this.state.players.find(v => v.id === input.playerId);
                if (player && enemyIndex > -1) {
                    this.state.enemies.splice(enemyIndex, 1);
                    // 得 1 分
                    player.score += 1;
                    this.emit('enemyDie', { enemyId: input.enemyId })
                }
                break;
            }
            // 吃到子弹道具
            case 'PlayerHitFightIcon': {
                let fightIconIndex = this.state.fightIcons.findIndex(v => v.id === input.fightIconId);
                let player = this.state.players.find(v => v.id === input.playerId);
                if (player && fightIconIndex > -1) {
                    let fightIcon = this.state.fightIcons[fightIconIndex];
                    this.state.fightIcons.splice(fightIconIndex, 1);
                    player.currentBulletType = fightIcon.type;
                }
                break;
            }
            // 玩家受到伤害
            case 'PlayerHurt': {
                let player = this.state.players.find(v => v.id === input.playerId);
                if (player) {
                    player.life = Math.max(0, player.life - input.hurtLife);
                    if (player.life === 0) {
                        this.state.players.removeOne(v => v.id === input.playerId);
                        this.emit('playerDie', { playerId: player.id })
                    }
                }
                break;
            }
            // 移动并攻击
            case 'PlayerMove': {
                let player = this.state.players.find(v => v.id === input.playerId);
                if (player) {
                    // Update Pos
                    player.pos.x += input.offset.x;
                    player.pos.y += input.offset.y;
                    // Update Bullets
                    player.bullets.push(...input.createBullets);
                }
                break;
            }
            // 子弹碰撞，抵消
            case 'BulletHit': {
                let player = this.state.players.find(v => v.id === input.player.id);
                let enemy = this.state.enemies.find(v => v.id === input.enemy.id);
                if (player && enemy) {
                    player.bullets.removeOne(v => v.id === input.player.bulletId);
                    enemy.bullets.removeOne(v => v.id === input.enemy.bulletId);
                }
                break;
            }
            // 时间流逝
            case 'TimePast': {
                // 更新己方子弹位置
                this.state.players.forEach(player => {
                    player.bullets.forEach(bullet => {
                        bullet.pos.x = bullet.init.pos.x + bullet.init.direction.x * gameConfig.player.bulletSpeed * (this.state.now - bullet.init.time);
                        bullet.pos.y = bullet.init.pos.y + bullet.init.direction.y * gameConfig.player.bulletSpeed * (this.state.now - bullet.init.time);
                    })
                })

                // 更新敌机
                this.state.enemies.forEach(enemy => {
                    // 更新敌机位置
                    const enemyTime = this.state.now - enemy.init.time;
                    enemy.pos.y = enemy.init.pos.y - gameConfig.enemy.speed * enemyTime;

                    // 更新敌机子弹位置
                    enemy.bullets.forEach(bullet => {
                        bullet.pos.y = bullet.init.pos.y - gameConfig.enemy.bulletSpeed * (this.state.now - bullet.init.time);
                    })

                    // 敌机发射子弹
                    if ((this.state.now - enemy.lastBulletTime) >= gameConfig.enemy.bulletGapTime) {
                        enemy.bullets.push({
                            id: enemy.nextId.bullet++,
                            pos: { ...enemy.pos },
                            init: {
                                time: this.state.now,
                                pos: { ...enemy.pos },
                            }
                        })
                        enemy.lastBulletTime = this.state.now;
                    }
                });

                // 创建新敌机
                this._createEnemies();

                break;
            }
        }
    }

    private _createEnemies() {
        // 前 10 秒
        // 每 1 秒创建一个敌机

        // 10~20秒
        // 每3秒一个组合，然后每秒一个敌机

        // 20秒以后
        // 每 2 秒一个组合(组合1 / 组合2 / xxx)
    }

    // 简易的事件侦听器
    private _eventHandlers: { [key: string]: Function[] } = {};
    on<T extends keyof GameSystemEvent>(eventName: T, handler: (e: GameSystemEvent[T]) => void): (e: GameSystemEvent[T]) => void {
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
        return handler;
    }
    off<T extends keyof GameSystemEvent>(eventName: T, handler?: (e: GameSystemEvent[T]) => void): void {
        if (!handler) {
            this._eventHandlers[eventName] = [];
            return;
        }

        this._eventHandlers[eventName]?.removeOne(v => v === handler);
    }
    emit<T extends keyof GameSystemEvent>(eventName: T, eventData: GameSystemEvent[T]) {
        this._eventHandlers[eventName]?.forEach(v => v(eventData));
    }

}