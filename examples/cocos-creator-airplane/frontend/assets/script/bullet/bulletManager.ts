
import { _decorator, Component, Node, Collider, find, ITriggerEvent, Script } from 'cc';
import { Constant } from '../framework/constant';
import { GameManager } from '../gameManager';

const { ccclass, property } = _decorator;


@ccclass('bulletManager')
export class bulletManager extends Component {


    public bulletSpeed = 1;
    public playerBullet: boolean = true;    //自己玩家发射的子弹
    public bulletType: number;         //玩家发射的子弹类型

    public enemyBullet: boolean = false;    //敌机发射的子弹
    private _bullet1;

    onLoad() {
        let consider = this.getComponent(Collider);
        consider.on('onTriggerEnter', this.onTrigger, this);
        this.bulletType = Constant.BULLET_DIRECTION.CENTRAL;

    }

    start() {

    }



    update(deltaTime: number) {
        if (this.playerBullet && !this.enemyBullet) {
            //子弹移动
            if (this.bulletType == Constant.BULLET_DIRECTION.CENTRAL) {
                this.node.setPosition(this.node.position.x, this.node.position.y, this.node.position.z - this.bulletSpeed);
            }
            else if (this.bulletType == Constant.BULLET_DIRECTION.LEFT) {
                this.node.setPosition(this.node.position.x - 0.2 * this.bulletSpeed, this.node.position.y, this.node.position.z - this.bulletSpeed);
            }
            else if (this.bulletType == Constant.BULLET_DIRECTION.RIGHT) {
                this.node.setPosition(this.node.position.x + 0.2 * this.bulletSpeed, this.node.position.y, this.node.position.z - this.bulletSpeed);
            }

            //地图边界值为-100，即子弹到达屏幕外以后
            if (this.node.position.z <= -100) {
                //此处该脚本挂载在预制物上，
                if (this._bullet1) {
                    this._bullet1.onBulletKilled(this.node);
                }
            }
        }
        else if (this.enemyBullet && !this.playerBullet) {
            //console.log("敌人子弹的位置",this.node.getPosition());

            this.node.setPosition(this.node.position.x, this.node.position.y, this.node.position.z + 1);
            
            //地图边界值为100，即子弹到达屏幕外以后
            if (this.node.position.z >= 100) {
                if (this._bullet1) {
                    this._bullet1.onBulletKilled(this.node);
                }
            }

        }


    }


    //碰撞产生
    private onTrigger(event: ITriggerEvent) {
        //console.log("子弹碰撞", event.selfCollider.type, event.selfCollider.getGroup(), event.selfCollider.node.layer, event.selfCollider.node.name)
        //console.log("子弹的组",event.selfCollider.getGroup(),event.selfCollider.node.name, event.otherCollider.getGroup(),event.otherCollider.node.name);

        //这里注意一下，在设置物理组的时候，敌机设置的是（2^2）组，即为4，玩家飞机设置的是（2^3）组，即为8组，
        if (event.selfCollider.getGroup() == Constant.ITEM_GROUP.SELF_BULLET && event.otherCollider.getGroup() == Constant.ITEM_GROUP.ENEMY_PLANE) {

            if (this._bullet1) {
                this._bullet1.onBulletKilled(this.node);

            }
        }
        else if (event.selfCollider.getGroup() == Constant.ITEM_GROUP.ENEMY_BULLET && event.otherCollider.getGroup() == Constant.ITEM_GROUP.SELF_PLANE) {
            if (this._bullet1) {
                this._bullet1.onBulletKilled(this.node);
            }
        }

    }

    //给子弹设置分组，true为自身子弹，组别为3，false为敌机子弹（其余子弹），组别为2
    public setBulletGroup(isSelf: boolean) {
        //自身子弹组别为3，其余为2，默认为2
        if (isSelf) {
            //自身子弹设置组别为3
            this.playerBullet = true;
            this.enemyBullet = false;
            const group = (1 << 0) + (1 << 1);
            this.node.getComponent(Collider).setGroup(group);
        }
        else {
            //敌机子弹设置组别为2
            this.playerBullet = false;
            this.enemyBullet = true;
            const group = 1 << 1;
            this.node.getComponent(Collider).setGroup(group);
        }

    }

    public show(gameManagerParent: GameManager, bulletSpeed: number) {
        this._bullet1 = gameManagerParent;
        this.bulletSpeed = bulletSpeed;
    }
}

