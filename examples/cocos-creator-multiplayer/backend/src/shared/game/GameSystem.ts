import { gameConfig } from "./gameConfig";
import { ArrowState } from "./state/ArrowState";
import { PlayerState } from "./state/PlayerState";

// 状态定义
export interface GameSystemState {
    // 当前的时间（游戏时间）
    now: number,
    // 玩家
    players: PlayerState[],
    // 飞行中的箭矢
    arrows: ArrowState[],
    // 箭矢的 ID 生成
    nextArrowId: number
}

/**
 * 前后端复用的状态计算模块
 */
export class GameSystem {

    // 当前状态
    private _state: GameSystemState = {
        now: 0,
        players: [],
        arrows: [],
        nextArrowId: 1
    }
    get state(): Readonly<GameSystemState> {
        return this._state
    }

    // 重设状态
    reset(state: GameSystemState) {
        this._state = Object.merge({}, state);
    }

    // 应用输入，计算状态变更
    applyInput(input: GameSystemInput) {
        if (input.type === 'PlayerMove') {
            let player = this._state.players.find(v => v.id === input.playerId);
            if (!player) {
                return;
            }

            if (player.dizzyEndTime && player.dizzyEndTime > this._state.now) {
                return;
            }
            player.pos.x += input.speed.x * input.dt;
            player.pos.y += input.speed.y * input.dt;
        }
        else if (input.type === 'PlayerAttack') {
            let player = this._state.players.find(v => v.id === input.playerId);
            if (player) {
                let newArrow: ArrowState = {
                    id: this._state.nextArrowId++,
                    fromPlayerId: input.playerId,
                    targetPos: { ...input.targetPos },
                    targetTime: input.targetTime
                };
                this._state.arrows.push(newArrow);
                this.onNewArrow.forEach(v => v(newArrow));
            }
        }
        else if (input.type === 'PlayerJoin') {
            this.state.players.push({
                id: input.playerId,
                pos: { ...input.pos }
            })
        }
        else if (input.type === 'PlayerLeave') {
            this.state.players.remove(v => v.id === input.playerId);
        }
        else if (input.type === 'TimePast') {
            this._state.now += input.dt;

            // 落地的 Arrow
            for (let i = this._state.arrows.length - 1; i > -1; --i) {
                let arrow = this._state.arrows[i];
                if (arrow.targetTime <= this._state.now) {
                    // 伤害判定
                    let damagedPlayers = this._state.players.filter(v => {
                        return (v.pos.x - arrow.targetPos.x) * (v.pos.x - arrow.targetPos.x) + (v.pos.y - arrow.targetPos.y) * (v.pos.y - arrow.targetPos.y) <= gameConfig.arrowAttackRadius * gameConfig.arrowAttackRadius
                    });
                    damagedPlayers.forEach(p => {
                        // 设置击晕状态
                        p.dizzyEndTime = this._state.now + gameConfig.arrowDizzyTime;

                        // Event
                    })

                    this._state.arrows.splice(i, 1);
                }
            }
        }
    }

    /*
     * 事件
     * 某些转瞬即逝的事件，可能不会直观的体现在前后两帧状态的变化中，但表面层又需要知晓。
     * 例如一颗狙击枪的子弹，在少于一帧的时间内创建和销毁，前后两帧的状态中都不包含这颗子弹；但表现层却需要绘制出子弹的弹道。
     * 此时，可以通过事件的方式通知表现层。
     */
    // 发射箭矢
    onNewArrow: ((arrow: ArrowState) => void)[] = [];

}

export interface PlayerMove {
    type: 'PlayerMove',
    playerId: number,
    speed: { x: number, y: number },
    // 移动的时间 (秒)
    dt: number,
}
export interface PlayerAttack {
    type: 'PlayerAttack',
    playerId: number,
    // 落点坐标
    targetPos: { x: number, y: number },
    // 落点时间（游戏时间）
    targetTime: number
}
export interface PlayerJoin {
    type: 'PlayerJoin',
    playerId: number,
    pos: { x: number, y: number }
}
export interface PlayerLeave {
    type: 'PlayerLeave',
    playerId: number
}
// 时间流逝
export interface TimePast {
    type: 'TimePast',
    dt: number
}
// 输入定义
export type GameSystemInput = PlayerMove
    | PlayerAttack
    | PlayerJoin
    | PlayerLeave
    | TimePast;