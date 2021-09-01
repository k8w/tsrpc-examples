
import { Component, Label, _decorator } from 'cc';
import { MsgChat } from '../../../../scripts/shared/protocols/MsgChat';
const { ccclass, property } = _decorator;

export interface ChatBoxMsgItemOptions {
    msg: MsgChat
}

@ccclass('ChatBoxMsgItem')
export class ChatBoxMsgItem extends Component {

    @property(Label)
    labelMessage!: Label;
    @property(Label)
    labelTime!: Label;


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