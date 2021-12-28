import { WsClient } from "tsrpc-browser";
import { GameSystem } from "../scripts/shared/game/GameSystem";
import { GameSystemState } from "../scripts/shared/game/GameSystemState";
import { ClientInput, MsgGameInput } from "../scripts/shared/protocols/game/client/MsgGameInput";
import { MsgGameStart } from "../scripts/shared/protocols/game/server/MsgGameStart";
import { MsgServerFrame } from "../scripts/shared/protocols/game/server/MsgServerFrame";
import { serviceProto, ServiceType } from "../scripts/shared/protocols/serviceProto";
import { CurrentUser } from "../scripts/shared/types/CurrentUser";
import { RoomState } from "../scripts/shared/types/RoomState";

/**
 * 前端游戏状态管理
 * 主要用于实现前端的预测和和解
 */
export class GameStateManager {

    client: WsClient<ServiceType>;

    roomState: RoomState;
    gameSystem!: GameSystem;
    serverState!: GameSystemState;
    lastSN = 0;

    get state() {
        return this.gameSystem.state;
    }

    currentUser?: CurrentUser;
    constructor() {
        let client = this.client = new WsClient(serviceProto, {
            server: `ws://${location.hostname}:3000`,
            json: true,
            // logger: console
        });

        client.listenMsg('game/server/ServerFrame', msg => { this._onServerFrame(msg) });
        client.listenMsg('game/server/GameStart', msg => {
            this._startGame(msg);
        });
        client.listenMsg('room/server/UpdateRoomState', msg => {
            this.roomState = msg.state;
        })

        // 模拟网络延迟 可通过 URL 参数 ?lag=200 设置延迟
        let networkLag = parseInt(new URLSearchParams(location.search).get('lag') || '0') || 0;
        if (networkLag) {
            client.flows.preRecvDataFlow.push(async v => {
                await new Promise(rs => { setTimeout(rs, networkLag) })
                return v;
            });
            client.flows.preSendDataFlow.push(async v => {
                await new Promise(rs => { setTimeout(rs, networkLag) })
                return v;
            });
        }

        (window as any).gm = this;
    }

    private _promiseEnsureConnected?: Promise<void>;
    async ensureConnected() {
        if (!this._promiseEnsureConnected) {
            this._promiseEnsureConnected = this._doEnsureConnected().then(() => {
                this._promiseEnsureConnected = undefined;
            });
        }
        return this._promiseEnsureConnected;
    }
    private async _doEnsureConnected() {
        if (!this.client.isConnected) {
            let resConnect = await this.client.connect();
            if (!resConnect.isSucc) {
                await new Promise(rs => { setTimeout(rs, 2000) })
                return this._doEnsureConnected();
            }
        }
    }

    async login(): Promise<boolean> {
        if (this.currentUser) {
            return true;
        }

        let nickname: string;
        while (!nickname) {
            nickname = prompt('给自己取个名字：', '');
        }

        await this.ensureConnected();

        let ret = await this.client.callApi('Login', { nickname: nickname });
        if (!ret.isSucc) {
            alert(ret.err.message);
            return false;
        }

        this.currentUser = ret.res.currentUser;
        return true;
    }

    async join(): Promise<void> {
        await this.ensureConnected();
        let ret = await this.client.callApi('room/JoinRoom', { roomId: 123 });

        if (!ret.isSucc) {
            if (confirm(`加入房间失败\n${ret.err.message}\n是否重试 ?`)) {
                return this.join();
            }
            else {
                return;
            }
        }

        this.roomState = ret.res.roomState;
    }

    private _startGame(msg: MsgGameStart) {
        this.gameSystem = new GameSystem(msg.gameState);
        this.serverState = Object.merge({}, msg.gameState);
        this._lastLocalTime = Date.now();
    }

    private _onServerFrame(frame: MsgServerFrame) {
        if (!this.gameSystem) {
            return;
        }

        // 回滚至上一次的权威状态
        this.gameSystem.state = Object.merge({}, this.serverState);
        // 计算最新的权威状态
        for (let input of frame.inputs) {
            this.gameSystem.applyInput(input);
        }
        this.serverState = Object.merge({}, this.gameSystem.state);
        this._lastLocalTime = Date.now();

        // 和解 = 权威状态 + 本地输入 （最新的本地预测状态）
        let lastSn = frame.lastSn ?? -1;
        this.pendingInputMsgs.remove(v => v.sn <= lastSn);
        this.pendingInputMsgs.forEach(m => {
            m.inputs.forEach(v => {
                this.gameSystem.applyInput({
                    ...v,
                    playerId: this.currentUser.id
                });
            })
        })
    }

    pendingInputMsgs: MsgGameInput[] = [];
    sendClientInput(input: ClientInput) {
        // 已掉线或暂未加入，忽略本地输入
        if (!this.currentUser || !this.client.isConnected) {
            return;
        }

        // 构造消息
        let msg: MsgGameInput = {
            sn: ++this.lastSN,
            inputs: [input]
        }

        // 向服务端发送输入
        this.pendingInputMsgs.push(msg);
        this.client.sendMsg('game/client/GameInput', msg);

        // 预测状态：本地立即应用输入
        this.predictTimePast();
        this.gameSystem.applyInput({
            ...input,
            playerId: this.currentUser.id
        });
    }

    // 本地预测时间流逝（但不提交，会以下一次服务器同步为准）
    private _lastLocalTime!: number;
    predictTimePast() {
        const now = Date.now();
        let dt = now - this._lastLocalTime;
        this.gameSystem.applyInput({
            type: 'TimePast',
            dt: dt
        });
        this._lastLocalTime = now;
    }

}