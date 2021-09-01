
import { Component, EditBox, instantiate, Label, Prefab, ScrollView, _decorator } from 'cc';
import { MINIGAME } from 'cc/env';
import { BaseWsClient } from 'tsrpc-base-client';
import { WsClient as WsClientBrowser } from 'tsrpc-browser';
import { WsClient as WsClientMiniapp } from 'tsrpc-miniapp';
import { MsgChat } from '../../scripts/shared/protocols/MsgChat';
import { serviceProto, ServiceType } from '../../scripts/shared/protocols/serviceProto';
import { ChatBoxMsgItem } from './prefabs/ChatBox_MsgItem/ChatBox_MsgItem';
const { ccclass, property } = _decorator;

@ccclass('ChatBox')
export class ChatBox extends Component {

    @property
    roomName = '';

    // Prefabs
    @property(Prefab)
    prefabMsgItem!: Prefab;

    // Nodes
    @property(Label)
    labelTitle!: Label;
    @property(ScrollView)
    msgScroll!: ScrollView;
    @property(EditBox)
    inputSend!: EditBox;

    client!: BaseWsClient<ServiceType>;

    onLoad() {
        // Create client by platform
        if (MINIGAME) {
            this.client = new WsClientMiniapp(serviceProto, {
                server: 'ws://127.0.0.1:3000',
                logger: console
            })
        }
        else {
            this.client = new WsClientBrowser(serviceProto, {
                server: 'ws://127.0.0.1:3000',
                logger: console
            })
        }

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
        let node = instantiate(this.prefabMsgItem);
        this.msgScroll.content!.addChild(node);
        node.getComponent(ChatBoxMsgItem)!.options = {
            msg: msg
        }
        this.msgScroll.scrollToBottom(0.2);
    }
}