import { _decorator, Component, Node, LabelComponent, Vec3, tween, UITransform, Size, CCObject, isValid } from 'cc';
import {PoolManager} from '../../framework/poolManager';
const { ccclass, property } = _decorator;

@ccclass('Tips')
export class Tips extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property(LabelComponent)
    lbTips: LabelComponent = null!;
    targetPos: any;

    start () {
        // Your initialization goes here.
    }

    show (content: string, callback?: Function) {
        this.targetPos = new Vec3(0, 0, 0);
        this.node.setPosition(this.targetPos);
        // this.node.getComponent(SpriteComponent).color = new Color(255, 255, 255, 255);
            
        // this.lbTips.maxWidth = 0;
        // this.lbTips.string = '<color=#001D34>'+ content +'</color>';

        // //修改底图大小
        // let width = this.lbTips._linesWidth;
        // if (width.length && width[0] < 500) {
        //     this.lbTips.maxWidth = width[0];
        // } else {
        //     this.lbTips.maxWidth = 500;
        //     this.lbTips.node.setContentSize(500, this.lbTips.node.getContentSize().height);
        // }
        this.lbTips.string = content;
        let size: Size = this.lbTips.node.getComponent(UITransform)?.contentSize as Size;
        if (!isValid(size)) {//size不存在，自我销毁 
            // tipsNode.destroy();
            PoolManager.instance.putNode(this.node);
            return;
        }
        this.node.getComponent(UITransform)?.setContentSize(size.width + 100 < 240 ? 240 : size.width + 100, size.height + 30);

        this.scheduleOnce(()=>{
            tween(this.targetPos)
                .by(0.8, new Vec3(0, 150, 0))
                .call(()=>{
                    callback && callback();
                    PoolManager.instance.putNode(this.node);
                })
                .start();
        }, 0.8);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
