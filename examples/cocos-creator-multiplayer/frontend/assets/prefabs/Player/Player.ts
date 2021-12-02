
import { Component, MeshRenderer, SkeletalAnimation, Texture2D, tween, Tween, Vec3, _decorator } from 'cc';
import { gameConfig } from '../../scripts/shared/game/gameConfig';
import { PlayerState } from '../../scripts/shared/game/state/PlayerState';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property(SkeletalAnimation)
    ani!: SkeletalAnimation;

    @property(MeshRenderer)
    mesh!: MeshRenderer;
    @property(Texture2D)
    texSelf!: Texture2D;
    @property(Texture2D)
    texOther!: Texture2D;

    playerId!: number;
    isSelf = false;
    state!: PlayerState;
    now: number = 0;

    private _tweens: Tween<any>[] = [];
    private _targetPos = new Vec3;

    start() {
        this.ani.getState('win').speed = 4;
    }

    init(state: PlayerState, isSelf: boolean) {
        this.playerId = state.id;
        this.isSelf = isSelf;
        this.mesh.material!.setProperty('mainTexture', this.isSelf ? this.texSelf : this.texOther);
    }

    updateState(state: PlayerState, now: number) {
        this.state = state;
        this.now = now;

        if (state.dizzyEndTime && state.dizzyEndTime >= now) {
            this.setAni('win');
        }
        else {
            if (this._lastAni === 'win') {
                this.setAni('idle')
            }
        }

        this.isSelf ? this._resetState(state, now) : this._tweenState(state, now);
    }

    // 直接更新
    private _resetState(state: PlayerState, now: number) {
        // 更新位置
        this._targetPos.set(state.pos.x, 0, -state.pos.y);
        if (!this.node.position.equals(this._targetPos)) {
            this.setAni('run');
            // 朝向
            let newForward = this._targetPos.clone().subtract(this.node.position).normalize();
            this.node.forward = new Vec3(newForward);
            // 位置
            this.node.setPosition(this._targetPos);
        }
        else {
            this.setAni('idle');
        }
    }

    // 插值更新
    private _tweenState(state: PlayerState, now: number) {
        // 更新位置
        let newPos = new Vec3(state.pos.x, 0, -state.pos.y);
        if (!this._targetPos.equals(newPos)) {
            // 清理 Tween
            this._tweens?.forEach(v => v.stop());
            this._tweens = [];
            this.node.setPosition(this._targetPos);

            // 插值朝向
            let newForward = new Vec3(newPos).subtract(this.node.position).normalize();
            this._tweens.push(tween({ forward: this.node.forward }).to(0.1, { forward: newForward }, {
                onUpdate: (v: any) => {
                    this.node.forward = new Vec3(v.forward);
                }
            }).start())

            // 新的位置
            this._targetPos.set(newPos)
            this.setAni('run');
            this._tweens.push(tween(this.node).to(1 / gameConfig.syncRate, {
                position: this._targetPos
            }).call(() => {
                this.setAni('idle')
            }).start());
        }
    }

    private _lastAni?: string;
    setAni(ani: string) {
        if (this.state.dizzyEndTime && this.state.dizzyEndTime >= this.now) {
            ani = 'win';
        }

        if (this._lastAni === ani) {
            return;
        }
        this._lastAni = ani;

        this.ani.crossFade(ani, 0.1);
    }

}

function Texture(Texture: any) {
    throw new Error('Function not implemented.');
}
