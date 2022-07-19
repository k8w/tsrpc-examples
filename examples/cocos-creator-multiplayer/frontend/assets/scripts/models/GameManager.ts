import { WsClient } from "tsrpc-browser";
import { GameSystem, GameSystemState } from "../shared/game/GameSystem";
import { ClientInput, MsgClientInput } from "../shared/protocols/client/MsgClientInput";
import { MsgFrame } from "../shared/protocols/server/MsgFrame";
import { serviceProto, ServiceType } from "../shared/protocols/serviceProto";

/**
 * 前端游戏状态管理
 * 主要用于实现前端的预测和和解
 */
export class GameManager {

    client: WsClient<ServiceType>;

    gameSystem = new GameSystem();

    lastServerState: GameSystemState = this.gameSystem.state;
    lastRecvSetverStateTime = 0;
    selfPlayerId: number = -1;
    lastSN = 0;

    get state() {
        return this.gameSystem.state;
    }

    constructor() {
        let client = this.client = new WsClient(serviceProto, {
            server: `ws://${location.hostname}:3000`,
            json: true,
            // logger: console,
            heartbeat: {
                interval: 1000,
                timeout: 5000
            }
        });;
        client.listenMsg('server/Frame', msg => { this._onServerSync(msg) });

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

    async join(): Promise<void> {
        if (!this.client.isConnected) {
            let resConnect = await this.client.connect();
            if (!resConnect.isSucc) {
                await new Promise(rs => { setTimeout(rs, 2000) })
                return this.join();
            }
        }

        let ret = await this.client.callApi('Join', {});

        if (!ret.isSucc) {
            if (confirm(`加入房间失败\n${ret.err.message}\n是否重试 ?`)) {
                return this.join();
            }
            else {
                return;
            }
        }

        this.gameSystem.reset(ret.res.gameState);
        this.lastServerState = Object.merge(ret.res.gameState);
        this.lastRecvSetverStateTime = Date.now();
        this.selfPlayerId = ret.res.playerId;
    }

    private _onServerSync(frame: MsgFrame) {
        // 回滚至上一次的权威状态
        this.gameSystem.reset(this.lastServerState);

        // 计算最新的权威状态
        for (let input of frame.inputs) {
            this.gameSystem.applyInput(input);
        }
        this.lastServerState = Object.merge({}, this.gameSystem.state);
        this.lastRecvSetverStateTime = Date.now();

        // 和解 = 权威状态 + 本地输入 （最新的本地预测状态）
        let lastSn = frame.lastSn ?? -1;
        this.pendingInputMsgs.remove(v => v.sn <= lastSn);
        this.pendingInputMsgs.forEach(m => {
            m.inputs.forEach(v => {
                this.gameSystem.applyInput({
                    ...v,
                    playerId: this.selfPlayerId
                });
            })
        })
    }

    pendingInputMsgs: MsgClientInput[] = [];
    sendClientInput(input: ClientInput) {
        // 已掉线或暂未加入，忽略本地输入
        if (!this.selfPlayerId || !this.client.isConnected) {
            return;
        }

        // 构造消息
        let msg: MsgClientInput = {
            sn: ++this.lastSN,
            inputs: [input]
        }

        // 向服务端发送输入
        this.pendingInputMsgs.push(msg);
        this.client.sendMsg('client/ClientInput', msg);

        // 预测状态：本地立即应用输入
        this.gameSystem.applyInput({
            ...input,
            playerId: this.selfPlayerId
        });
    }

    // 本地时间流逝（会被下一次服务器状态覆盖）
    localTimePast() {
        this.gameSystem.applyInput({
            type: 'TimePast',
            dt: Date.now() - this.lastRecvSetverStateTime
        });
        this.lastRecvSetverStateTime = Date.now();
    }

}