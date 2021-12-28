
import { _decorator, Component, Node, Collider, ITriggerEvent } from 'cc';
import { Constant } from '../framework/constant';
import { GameManager } from '../gameManager';

const { ccclass, property } = _decorator;



@ccclass('selfPlane')
export class selfPlane extends Component {

    @property(Node)
    public dieEffect: Node = null;  //死亡特效
    @property(Node)
    public lifeBlood: Node = null;  //血条
    @property(Node)
    public lifeBloodBg: Node = null;    //血条背景

    @property
    public lifeValue: number = 10;
    public _isDie: boolean = false;

    private _collisionFrequency: number;    //碰撞次数
    private _selfPlane;


    onLoad() {
        this.init();
    }

    public init() {
        let collider = this.getComponent(Collider);
        collider.on('onTriggerEnter', this.onTrigger, this);
        this._isDie = false;
        this.dieEffect.active = false;
        this._collisionFrequency = 0;
        //设置血条大小
        this.lifeBlood.setScale(0.2, 1, 0.01)  //根据自身飞机设置的大小，固定值

    }

    start() {
        

    }

    private onTrigger(event: ITriggerEvent) {
        //自身的layer为2的0次方==》即为1，组为8
        //console.log("自身飞机", event.selfCollider.node.layer,event.selfCollider.node.name, event.selfCollider.attachedRigidBody.getGroup());
        //console.log(event.selfCollider.getGroup(),event.otherCollider.getGroup())

        //console.log(event.otherCollider.getGroup(),'自身收到受到碰撞',event.selfCollider.getGroup())
        if (event.otherCollider.getGroup() == Constant.ITEM_GROUP.ENEMY_BULLET || event.otherCollider.getGroup() == Constant.ITEM_GROUP.ENEMY_PLANE) {
            this._collisionFrequency++;
            //检测碰撞次数是否为最高可碰撞次数
            if (this._collisionFrequency == this.lifeValue) { this.lifeBlood.setScale(0, this.lifeBlood.scale.y, this.lifeBlood.scale.z) }
            if (this._collisionFrequency < this.lifeValue) {
                //碰撞次数小于最高可碰撞次数
                let number = (this.lifeValue - this._collisionFrequency) / this.lifeValue;
                this.lifeBlood.setScale(this.lifeBloodBg.scale.x * number, this.lifeBlood.scale.y, this.lifeBlood.scale.z);

                let posX = (this._collisionFrequency / this.lifeValue) * this.lifeBloodBg.scale.x * 10;
                this.lifeBlood.setPosition(-posX / 2, this.lifeBlood.position.y, this.lifeBlood.position.z);
                this.lifeBlood.active = true;
                this.lifeBloodBg.active = true;
                

            }
            //如果碰撞次数等于或者超过生命值以后，就宣布死亡
            else if (this._collisionFrequency >= this.lifeValue) {
                this._isDie = true;
                this.dieEffect.active = true;
                this._selfPlane.selfPlaneIsDie = true;
            }

        }
        else if (event.otherCollider.getGroup() == Constant.ITEM_GROUP.FIGHT_BULLET) {
            if (event.otherCollider.node.name == Constant.FIGHT_BULLET_NAME.BULLET_M) {
                //M型号子弹
                this._selfPlane.getComponent(GameManager).isWhichBullet = Constant.FIGHT_BULLET_GROUP.BULLET_M;
            }
            else if (event.otherCollider.node.name == Constant.FIGHT_BULLET_NAME.BULLET_S) {
                //S型号子弹
                this._selfPlane.getComponent(GameManager).isWhichBullet = Constant.FIGHT_BULLET_GROUP.BULLET_S;

            }
            else if (event.otherCollider.node.name == Constant.FIGHT_BULLET_NAME.BULLET_H) {
                //H型号子弹
                this._selfPlane.getComponent(GameManager).isWhichBullet = Constant.FIGHT_BULLET_GROUP.BULLET_H;
            }

        }

    }

    update(deltaTime: number) {

    }

    public show(gameManagerParent: GameManager) {
        this._selfPlane = gameManagerParent;
    }
}


