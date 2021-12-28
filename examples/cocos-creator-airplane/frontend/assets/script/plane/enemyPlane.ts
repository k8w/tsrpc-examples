
import { _decorator, Component, Node, Collider, ITriggerEvent, physics, PhysicsSystem, find, Game, Prefab, NodePool, instantiate, Vec2, Vec3, AudioSource } from 'cc';
import { bulletManager } from '../bullet/bulletManager';
import { Constant } from '../framework/constant';
import { GameManager } from '../GameController';
const { ccclass, property } = _decorator;


@ccclass('enemyPlane')
export class enemyPlane extends Component {


    @property(Node)
    public dieEffectSmall: Node = null!;
    //@property
    public enemySpeed: number = 0.5;

    @property
    public enemyBulletSpeed: number = 60;
    @property(AudioSource)
    public audio:AudioSource = null!

    private _enemyplane;
    private _isDie: boolean = false;
    private _bulletTiem: number = 0;
    private _isBullet: boolean = true;


    onLoad() {
        //this.init();
    }
    public init() {
        let consider = this.getComponent(Collider);
        consider.on('onTriggerEnter', this.onTrigger, this);
        this._isDie = false;
        this.dieEffectSmall.active = false;

        this._bulletTiem = 0;

    }

    onDisable() {
        this.audio.getComponent(AudioSource).stop();
    }

    update(deltaTime: number) {
        if (!this._isDie) {

            this.node.setPosition(this.node.position.x, this.node.position.y, this.node.position.z + this.enemySpeed);
            this._bulletTiem++;
            if (this._bulletTiem >= this.enemyBulletSpeed) {
                if (this._enemyplane) {
                    if (this._isBullet) {
                        let enemy_pos: Vec3 = this.node.getPosition();
                        this._enemyplane.enemy1Bullet(enemy_pos, this.node)
                        this._bulletTiem = 0;
                    }

                }

            }
        }
        else if (this._isDie) {
            //敌机摧毁后使其逐渐变小，形成下落的感觉
            if (this.node.scale.x > 0 && this.node.scale.y > 0 && this.node.scale.z > 0) { this.node.setScale(this.node.scale.x - 0.5, this.node.scale.y - 0.5, this.node.scale.z - 0.5) }

        }

        //飞机到达地图下边界60处以后，将会飞出屏幕，所以定为60未边界点
        if (this.node.position.z >= 60) {
            //find('GameManager').getComponent(GameManager).onEnemyKilled(this.node);
            if (this._enemyplane) {
                this._enemyplane.onEnemyKilled(this.node);
            }
        }


    }


    private onTrigger(event: ITriggerEvent) {

        //敌机1的分组上4，这里后面可以考虑一下自己改掉
        if (event.otherCollider.getGroup() == Constant.ITEM_GROUP.SELF_PLANE || event.otherCollider.getGroup() == Constant.ITEM_GROUP.SELF_BULLET) {
            //console.log("敌机碰撞",event.selfCollider.getGroup(),event.selfCollider.node.layer,event.selfCollider.node.name);
            //find('GameManager').getComponent(GameManager).onEnemyKilled(this.node);
            if (this._enemyplane) {
                //击落敌机记分
                this._enemyplane.score = this._enemyplane.score + 1;

                this._isDie = true

                this.dieEffectSmall.active = true;

                //console.log(this.dieEffectSmall.activeInHierarchy,this.dieEffectSmall.active)

                this.dieEffectSmall.active = true;
                this.node.setPosition(this.node.position)
                event.selfCollider.off('onTriggerEnter')

                this.scheduleOnce(function () {
                    this._enemyplane.onEnemyKilled(this.node);
                }, 1);

            }
        }


    }





    //从gameManager执行后到这里顺带初始化数据
    public show(gameManagerParent: GameManager, speed: number, isBullet) {
        this._enemyplane = gameManagerParent;
        this.enemySpeed = speed;
        this._isBullet = isBullet;
        this.init()
    }
}

