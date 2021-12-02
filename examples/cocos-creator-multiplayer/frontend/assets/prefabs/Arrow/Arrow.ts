
import { Component, Vec3, _decorator } from 'cc';
import { MathUtil } from '../../scripts/models/MathUtil';
import { ArrowState } from '../../scripts/shared/game/state/ArrowState';
const { ccclass, property } = _decorator;

const ARROW_TOP = 7;

@ccclass('Arrow')
export class Arrow extends Component {

    id!: number;
    state!: ArrowState;

    private _startPos = new Vec3;
    private _endPos = new Vec3;

    init(state: ArrowState) {
        this.id = state.id;
        this.state = state;
        this._startPos.set(state.startPos.x, 0, -state.startPos.y);
        this._endPos.set(state.targetPos.x, 0, -state.targetPos.y);
    }

    updateState(state: ArrowState, now: number) {
        let percent = MathUtil.limit((now - state.startTime) / (state.targetTime - state.startTime), 0, 1);

        //下一个目标位置
        let newPos = this._startPos.clone().lerp(this._endPos, percent)
        //下一个目标位置的高度 
        newPos.y = ARROW_TOP * Math.cos(percent * Math.PI - Math.PI / 2);

        //武器朝向下一个目标位置, 形成曲线飞行的感觉
        let newForward = newPos.clone().subtract(this.node.position).normalize();
        if (!newForward.equals(Vec3.ZERO)) {
            this.node.forward = newForward;
        }

        this.node.position = newPos;
    }

}