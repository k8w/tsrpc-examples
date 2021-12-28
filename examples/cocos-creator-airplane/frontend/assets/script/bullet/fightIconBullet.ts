
import { _decorator, Component, Node, Collider, ITriggerEvent } from 'cc';
import { Constant } from '../framework/constant';
import { GameManager } from '../GameController';
const { ccclass, property } = _decorator;



@ccclass('FightIconBullet')
export class FightIconBullet extends Component {

    //图标的移动速度
    @property
    public iconSpeed: number = 0.3;

    private _iconXSpeed: number = 0.3;
    private _fight;

    onLoad() {
        //this.init();

    }

    public init() {
        let collider = this.getComponent(Collider);
        collider.on('onTriggerEnter', this.onTrigger, this);
        this._iconXSpeed = this.iconSpeed;

    }

    update(deltaTime: number) {

        if (this.node.position.x >= 15) { this._iconXSpeed = -this.iconSpeed; }
        else if (this.node.position.x <= -15) { this._iconXSpeed = this.iconSpeed; }
        this.node.setPosition(this.node.position.x + this._iconXSpeed, this.node.position.y, this.node.position.z + this.iconSpeed);

        //物体超出屏幕外
        if (this.node.position.z >= 60) {
            if (this._fight) {
                //销毁改物体
                this._fight.fightIconKill(this.node);
            }
        }


    }


    private onTrigger(event: ITriggerEvent) {

        //console.log(event.otherCollider.getGroup(),'自身收到受到碰撞',event.selfCollider.getGroup())
        if (event.otherCollider.getGroup() == Constant.ITEM_GROUP.SELF_PLANE) {
            this._fight.fightIconKill(this.node);//selfplane
        }

    }


    public show(gameManagerParent: GameManager) {
        this._fight = gameManagerParent;
        this.init();
    }
}


