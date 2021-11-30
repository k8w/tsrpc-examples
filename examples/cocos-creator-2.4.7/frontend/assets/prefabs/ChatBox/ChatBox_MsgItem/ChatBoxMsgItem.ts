import { MsgChat } from "../../../scripts/shared/protocols/MsgChat";



const { ccclass, property } = cc._decorator;

export interface ChatBoxMsgItemOptions {
    msg: MsgChat
}

@ccclass('ChatBoxMsgItem')
export class ChatBoxMsgItem extends cc.Component {

    @property(cc.Label)
    labelMessage!: cc.Label;
    @property(cc.Label)
    labelTime!: cc.Label;


    private _options!: ChatBoxMsgItemOptions;
    public get options(): ChatBoxMsgItemOptions {
        return this._options;
    }
    public set options(v: ChatBoxMsgItemOptions) {
        this._options = v;

        this.labelMessage.string = v.msg.content;
        this.labelTime.string = v.msg.time.toLocaleTimeString();
    }

}