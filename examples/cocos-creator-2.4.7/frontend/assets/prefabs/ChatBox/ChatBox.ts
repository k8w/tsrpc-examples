
import { BaseWsClient } from 'tsrpc-base-client';
import { WsClient as WsClientBrowser } from 'tsrpc-browser';
import { MsgChat } from '../../scripts/shared/protocols/MsgChat';
import { serviceProto, ServiceType } from '../../scripts/shared/protocols/serviceProto';
import { ChatBoxMsgItem } from './ChatBox_MsgItem/ChatBoxMsgItem';
const {ccclass, property} = cc._decorator;


@ccclass('ChatBox')
export class ChatBox extends cc.Component {

    @property
    roomName = '';

    // Prefabs
    @property(cc.Prefab)
    prefabMsgItem!: cc.Prefab;

    // Nodes
    @property(cc.Label)
    labelTitle!: cc.Label;
    @property(cc.ScrollView)
    msgScroll!: cc.ScrollView;
    @property(cc.EditBox)
    inputSend!: cc.EditBox;

    client!: BaseWsClient<ServiceType>;

    onLoad() {
        // Create client by platform

        this.client = new WsClientBrowser(serviceProto, {
            server: 'ws://127.0.0.1:3000',
            logger: console
        })
        

        // Connect at startup
        this.connect();

        // Listen Msg
        this.client.listenMsg('Chat', v => { this.onChatMsg(v) })

        // When disconnected
        this.client.flows.postDisconnectFlow.push(v => {
            // Retry after 2 seconds
            this.labelTitle.string = `🔴  Disconnected`;
            setTimeout(() => {
                this.connect();
            }, 2000)
            return v;
        })
    }

    async connect(): Promise<void> {
        this.labelTitle.string = `🟡 Connecting...`;
        let res = await this.client.connect();
        if (!res.isSucc) {
            this.labelTitle.string = `🔴 Disconnected`;

            // Retry after 2 seconds
            await new Promise(rs => { setTimeout(rs, 2000) });
            await this.connect();
        }

        this.labelTitle.string = '🟢 ' + this.roomName;
    }

    async send() {
        if (!this.inputSend.string) {
            return;
        }

        let ret = await this.client.callApi('Send', {
            content: this.inputSend.string
        });

        // Error
        if (!ret.isSucc) {
            alert(ret.err.message);
            return;
        }

        // Success
        this.inputSend.string = '';
    }

    onChatMsg(msg: MsgChat) {
        let node = cc.instantiate(this.prefabMsgItem);
        this.msgScroll.content!.addChild(node);
        node.getComponent(ChatBoxMsgItem)!.options = {
            msg: msg
        }
        this.msgScroll.scrollToBottom(0.2);
    }
}