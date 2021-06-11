import { WsClient } from "tsrpc-browser";
import { MsgChat } from "./shared/protocols/MsgChat";
import { serviceProto } from './shared/protocols/serviceProto';

export interface ChatroomProps {
    title: string;
}

export class Chatroom {

    elem: HTMLDivElement;
    props: ChatroomProps;

    input: HTMLInputElement;
    list: HTMLUListElement;
    header: HTMLElement;

    client = new WsClient(serviceProto, {
        server: 'ws://127.0.0.1:3000',
        logger: console
    })

    constructor(elem: HTMLDivElement, props: ChatroomProps) {
        this.elem = elem;
        this.props = props;

        this.elem.innerHTML = `
<header></header>
<ul class="list"></ul>
<div class="send">
    <input placeholder="Say something..." />
    <button>Send</button>
</div>`;
        this.input = this.elem.querySelector('.send>input')!;
        this.list = this.elem.querySelector('ul.list')!;
        this.header = this.elem.querySelector('header')!;

        // Connect at startup
        this.connect();

        // Listen Msg
        this.client.listenMsg('Chat', v => { this.onChatMsg(v) })

        // Bind Event
        this.elem.querySelector('button')!.onclick = () => { this.send() };
        this.input.onkeypress = e => {
            if (e.key === 'Enter') {
                this.send();
            }
        }

        // When disconnected
        this.client.flows.postDisconnectFlow.push(v => {
            // Retry after 2 seconds
            this.header.innerText = `🔴  Disconnected`;
            setTimeout(() => {
                this.connect();
            }, 2000)
            return v;
        })
    }

    async connect(): Promise<void> {
        this.header.innerText = `🟡 Connecting...`;
        let res = await this.client.connect();
        if (!res.isSucc) {
            this.header.innerText = `🔴 Disconnected`;

            // Retry after 2 seconds
            await new Promise(rs => { setTimeout(rs, 2000) });
            await this.connect();
        }

        this.header.innerText = '🟢 ' + this.props.title;
    }

    async send() {
        let ret = await this.client.callApi('Send', {
            content: this.input.value
        });

        // Error
        if (!ret.isSucc) {
            alert(ret.err.message);
            return;
        }

        // Success
        this.input.value = '';
    }

    onChatMsg(msg: MsgChat) {
        let li = document.createElement('li');
        li.innerHTML = `<div class="content"></div><div class="time"></div>`;
        (li.querySelector('.content') as HTMLDivElement).innerText = msg.content;
        (li.querySelector('.time') as HTMLDivElement).innerText = msg.time.toLocaleTimeString();

        this.list.appendChild(li);
        this.list.scrollTo(0, this.list.scrollHeight);
    }
}