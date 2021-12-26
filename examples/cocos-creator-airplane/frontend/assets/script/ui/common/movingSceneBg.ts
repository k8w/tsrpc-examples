
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MovingSceneBg')
export class MovingSceneBg extends Component {

    @property(Node)
    public bg1: Node = null;
    @property(Node)
    public bg2: Node = null;

    public bgSpeed: number = 10;    //背景移动的速度
    private _bgLength: number = 0;  //背景的长度
    private _bgWidth: number = 0;   //背景的宽
    private _bgHight: number = 0;   //背景的高
    private _isMoving: boolean = false; //是否移动
    private _triggerX: number = 0;  
    private _triggerZ: number = 0;  //衔接的z轴值

    onLoad(){
        this._init();
        this.isMove(true);
    }

    start () {
        
    }
    private _init(){
        
        this._setBgNode();
        this._setTrigger();
    }
    
    public isMove(mt: boolean){
        this._isMoving = mt;
    }

    
    private _setBgNode() {
        this._bgLength = this.bg1.getScale().x;
        this._bgWidth = this.bg1.getScale().z;

        this.bg1.setPosition(0, -100, 0);

        //将第二个地图背景放在第一个的上放
        
        this.bg2.setPosition(this.bg1.position.x, this.bg1.position.y, -(this.bg1.position.z + this._bgWidth * 10));
        
    }

    private _setTrigger(){
        //第一张图从正中心移动到屏幕末端的时候，此时z轴的位置为86，而后要衔接第二张图
        this._triggerZ = 86;
    }

    private _moveBackground(dt: number) {
        // 背景移动部分
        this.bg1.setPosition(this.bg1.position.x, -100, this.bg1.position.z + dt * this.bgSpeed);
        this.bg2.setPosition(this.bg2.position.x, -100, this.bg2.position.z + dt * this.bgSpeed);
        
        

        //背景衔接部分
        if(this.bg1.position.z >= this._triggerZ)
        {
            this.bg1.setPosition(this.bg1.position.x, -100, this.bg2.position.z - this._bgWidth * 10);
        }
        else if(this.bg2.position.z >= this._triggerZ)
        {
            this.bg2.setPosition(this.bg2.position.x, -100, this.bg1.position.z - this._bgWidth * 10);
        }
        
    }



    update(deltaTime: number) {
        if (this._isMoving) {
            this._moveBackground(deltaTime);
        }
    }

}


