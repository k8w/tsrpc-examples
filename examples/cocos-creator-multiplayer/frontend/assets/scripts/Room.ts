import { WsClient } from 'tsrpc-browser';
import { MsgInput } from './shared/protocols/clientMsgs/MsgInput';
import { MsgFrame } from './shared/protocols/serverMsgs/MsgFrame';
import { ServiceType } from "./shared/protocols/serviceProto";
import { applyPlayerInput, PlayerInput, PlayerState } from "./shared/states/Player";
import { RoomState } from './shared/states/RoomState';

/**
 * 客户端 - 房间 - 逻辑系统
 */
export class Room {

    state: RoomState = {
        players: []
    }

    client: WsClient<ServiceType>;

    self?: {
        uid: number,
        // 最后一次权威状态
        lastServerState: PlayerState
    }
    private _lastSendInputSN = 0;
    private _sendingMsgs: MsgInput[] = [];

    constructor(client: WsClient<ServiceType>) {
        this.client = client;
        this.client.listenMsg('serverMsgs/Frame', msg => {
            this.applyServerFrame(msg);
        });
        this.client.listenMsg('serverMsgs/Join', msg => {
            this.state.players.push(msg.player);
        });
        this.client.listenMsg('serverMsgs/Leave', msg => {
            this.state.players.removeOne(v => v.uid === msg.uid);
        });
    }

    init(roomState: RoomState) {

    }

    /** 同步服务端的权威消息 */
    applyServerFrame(msg: MsgFrame) {
        msg.inputs.forEach(({ uid, msgInput }) => {
            let playerIndex = this.state.players.findIndex(v => v.uid === uid);
            if (playerIndex === -1) {
                return;
            }
            let newPlayer: PlayerState = this.state.players[playerIndex];

            // 自己：和解
            if (uid === this.self?.uid) {
                this._sendingMsgs.remove(v => v.sn <= msgInput.sn);
                this.state.players[playerIndex] = this.self.lastServerState;
                // 预测
                this._sendingMsgs.forEach(v => {
                    this.state.players[playerIndex] = applyPlayerInput(this.state.players[playerIndex], v);
                })
            }
            // 其它人：直接同步
            else {
                this.state.players[playerIndex] = applyPlayerInput(this.state.players[playerIndex], msgInput);
            }
        });
    }

    /** 发送客户端输入，并执行本地预测 */
    sendInput(input: PlayerInput) {
        if (!this.self) {
            return;
        }

        let msg: MsgInput = {
            ...input,
            sn: ++this._lastSendInputSN
        }
        this._sendingMsgs.push(msg);
        this.client.sendMsg('clientMsgs/Input', msg);
    }

    async joinRoom() {
        let ret = await this.client.callApi('JoinRoom', {
            nickname: 'xxx',
            skinId: 1
        });

        if (!ret.isSucc) {
            alert(ret.err.message);
            return;
        }

        this.self = {
            uid: ret.res.uid,
            lastServerState: ret.res.roomState.players.find(v => v.uid === ret.res!.uid)!
        }
        this.state = ret.res.roomState;
    }

}