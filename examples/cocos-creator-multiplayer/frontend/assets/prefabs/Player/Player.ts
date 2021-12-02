
import { Component, _decorator } from 'cc';
import { PlayerState } from '../../scripts/shared/game/state/PlayerState';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    playerId!: number;
    isSelf = false;

    init(state: PlayerState) {
        this.playerId = state.id;
        this.setPos(state.pos);
    }

    // 把 GameSystem 空间映射到游戏空间
    setPos(pos: { x: number, y: number }) {
        this.node.setPosition(pos.y, 0, pos.x);
    }

}