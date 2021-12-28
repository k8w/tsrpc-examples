
import { _decorator, Component, Node, UITransform, Vec2, Vec3, find, Script, game, Label, CameraComponent, Camera, EventTouch, v3 } from 'cc';
import { GameManager } from '../gameManager';
import { MovingSceneBg } from './common/movingSceneBg';
import { Tips } from './common/tips';

const { ccclass, property } = _decorator;

@ccclass('uiMain')
export class uiMain extends Component {
    @property(Node)
    public playerPlane: Node = null;    //玩家飞机
    @property(Node)
    public gameManager: Node = null;
    @property(Node)
    public gameOverUi: Node = null;     //结束界面
    @property(Node)
    public gameStartUi: Node = null;    //开始界面
    @property(Node)
    public bgMap: Node = null;
    //积分面板
    @property(Node)
    public scorePanel: Node = null;
    @property
    public planeSpeed = 1;
    @property
    public bgSpeed: number = 10;
    @property
    public _screenY: number = 41;   //屏幕的边界

    @property(CameraComponent)
    public ceram: CameraComponent = null!;  //相机组

    private _posRight: Vec3;
    onLoad() {
        this.init();
    }

    //初始化
    public init() {
        this.bgMap.getComponent(MovingSceneBg).bgSpeed = 0;
        this.setTouch();
        this.gameManager.getComponent(GameManager).starting = false;
    }

    start() {

    }

    update(deltaTime: number) {
        if (this.gameManager.getComponent(GameManager).selfPlaneIsDie) {
            this.gameOverUi.active = true;
        }



    }


    // public static getLocalDegree (rotateValue: Vec2, rotateVector: Vec3, node: Node) {
    // 	// because input is base on engine z and x axis, so it's like
    //     /*
    //         |
    //     ____|_____\ x
    //         |     /
    //         |
    //        \ /
    //        z
    //     */
    //     // now we need to handle direction with the camera observe direction, so we need to reversal the z axis, the z is primary movement's y axis
    //     // the x and y is zero when beginning, that's mean it point to x axis, but camera point to -z direction, so need to minus 90
    //     let x = rotateValue.x;
    //     let y = rotateValue.y;
    //     let deg = Math.atan2(-y, x) - Math.PI * 0.5;
    //     let _tempVec3
    //     let _tempVec3_2
    //     Vec3.rotateY( _tempVec3, rotateVector, Vec3.ZERO, deg);
    //     node.getWorldPosition(_tempVec3_2);
    //     _tempVec3_2.add(_tempVec3);
    //     MathUtil.convertToNodeSpace(_tempVec3, _tempVec3_2, node);
    //     _tempVec3.y = 0;
    //     _tempVec3.normalize();
    //     return MathUtil.radiansToDegrees(Math.atan2(_tempVec3.x, _tempVec3.z));
    // }

    public setTouch() {
        this.node.on(Node.EventType.TOUCH_START, (event) => {
            console.log('touch-start');

            this.scorePanel.active = true;
            this.gameManager.getComponent(GameManager).shooting = true;
            this.gameManager.getComponent(GameManager).starting = true;
            if (this.gameManager.getComponent(GameManager).timing) {
                this.gameManager.getComponent(GameManager).timing = false;
                this.gameManager.getComponent(GameManager).glodeDifficulty();
            }

            this.gameStartUi.active = false;
            this.bgMap.getComponent(MovingSceneBg).bgSpeed = this.bgSpeed;

        }, this);


        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            console.log('touch-move');

            let pos_mouse: Vec2 = event.getDelta();



            //飞机移动，现在还有点问题，飞机会飞出屏幕外，到时候得加个限制或者重写
            //console.log(pos_mouse.x, this.playerPlane.position)
            //this.node.getComponent(UITransform).convertToWorldSpaceAR
            //this.playerPlane.setPosition(pos_mouse.X,this.playerPlane.position.y,pos_mouse.Z);
            //console.log(this.playerPlane.getPosition())

            //let pos_to_world = this.ceram.screenToWorld(pos_mouse);
            //let size = this.node.getComponent(UITransform).contentSize
            //let poss: Vec3 = new Vec3(pos_mouse.x, 0, pos_mouse.y);
            //this.ceram.screenToWorld(poss)
            //console.log(pos_mouse,this.ceram.screenToWorld(poss),'屏幕坐标转换',size.width);

            //let size = this.getComponent(UITransform).contentSize;

            //场景坐标和屏幕坐标之间的转换
            this.playerPlane.setPosition(this.playerPlane.position.x + 0.01 * this.planeSpeed * pos_mouse.x, this.playerPlane.position.y, this.playerPlane.position.z - 0.01 * this.planeSpeed * pos_mouse.y);
            let playerPos: Vec3 = this.playerPlane.getPosition();
            let screenPos: Vec3 = this.ceram.worldToScreen(playerPos);



            let rightPos: Vec3 = new Vec3(0.6, this.playerPlane.position.y, this.playerPlane.position.z);
            this._posRight = this.ceram.screenToWorld(rightPos)
            if (screenPos.x <= 0.5) {
                let posLeft: Vec3 = new Vec3(0.6, screenPos.y, screenPos.z);
                this.playerPlane.setPosition(this.ceram.screenToWorld(posLeft));

            }
            else if (playerPos.x >= -this._posRight.x) {
                //let posRight: Vec3 = new Vec3(size.width, screenPos.y, screenPos.z);
                //这里很重要，因为各个手机之间的分辨率不一样，如果按照上面对左边的处理方式一样的话，会有很多问题，虽然分辨率不一样，但是在对于左下角坐标点（0，0）却都是一样的，所以按照最左边0点的位置，推理出右边屏幕的点在世界坐标的点
                //从而在3d世界中限制飞机的位置，而不是从屏幕来限制飞机的位置。
                this.playerPlane.setPosition(-this._posRight.x, this.playerPlane.position.y, this.playerPlane.position.z);
            }
            //上下屏幕的限制,上下屏幕在空间中的限制为41
            if (playerPos.z >= this._screenY) {
                this.playerPlane.setPosition(this.playerPlane.position.x, this.playerPlane.position.y, this._screenY);

            }
            else if (playerPos.z <= -this._screenY) {
                this.playerPlane.setPosition(this.playerPlane.position.x, this.playerPlane.position.y, -this._screenY);
            }

        }, this);

        this.node.on(Node.EventType.TOUCH_END, (event) => {
            console.log('touch-end');

            this.gameManager.getComponent(GameManager).shooting = false;
            //console.log(this.playerPlane.getPosition())

        }, this);

    }

}





