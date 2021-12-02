import { Component, EventTouch, Node, Vec2, Vec3, _decorator } from 'cc';
import { MathUtil } from '../../scripts/models/MathUtil';
const { ccclass, property } = _decorator;

const v3_1 = new Vec3;
export interface JoystickOptions {
    onOperate: (output: JoystickOutput) => void,
    onOperateEnd: () => void,
}

export interface JoystickOutput {
    // 0 ~ 1
    x: number,
    // 0 ~ 1
    y: number
}

@ccclass('Joystick')
export class Joystick extends Component {

    @property
    radius: number = 128;

    @property(Node)
    disk: Node = null as any;

    @property(Node)
    stick: Node = null as any;


    private _options!: JoystickOptions;
    public get options(): JoystickOptions {
        return this._options;
    }
    public set options(v: JoystickOptions) {
        this._options = v;
    }

    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouch, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);

        this.disk.active = false;
    }

    private _touchStartPos?: Vec2;
    onTouch(e: EventTouch) {
        if (!e.touch) {
            return;
        }

        this.disk.active = true;
        let loc = e.touch.getUILocation();

        if (!this._touchStartPos) {
            this._touchStartPos = loc.clone();
            this.disk.setPosition(loc.x, loc.y, 0);
        }

        let diskPos = this.disk.position;

        let stickPos: Vec3 = v3_1.set(loc.x - diskPos.x, loc.y - diskPos.y, 0);
        let length = stickPos.length();
        if (length === 0) {
            this.stick.setPosition(0, 0, 0);
            return;
        }
        let newLength = MathUtil.limit(length, 0, this.radius);
        stickPos.multiplyScalar(newLength / length);

        // if (length > newLength) {
        //     let newDiskPos = this.disk.position.clone().add(stickPos);
        //     this.disk.setPosition(newDiskPos);
        // }
        this.stick.setPosition(stickPos);

        stickPos.normalize();
        this.options?.onOperate({
            x: stickPos.x || 0,
            y: stickPos.y || 0
        })
    }

    onTouchEnd(e: EventTouch) {
        this.disk.active = false;
        this._touchStartPos = undefined;
        this.options?.onOperateEnd();
    }

}
