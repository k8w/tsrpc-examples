import { WsClient } from "tsrpc-browser";
import { GameSystem, GameSystemState } from "../shared/game/GameSystem";
import { ClientInput, MsgClientInput } from "../shared/protocols/client/MsgClientInput";
import { MsgFrame } from "../shared/protocols/server/MsgFrame";
import { ServiceType } from "../shared/protocols/serviceProto";

export class GameManager {

    client: WsClient<ServiceType>;

    gameSystem = new GameSystem();
    lastServerState: GameSystemState = this.gameSystem.state;
    selfPlayerId: number = -1;
    lastSN = 0;

    get state() {
        return this.gameSystem.state;
    }

    constructor(client: WsClient<ServiceType>) {
        this.client = client;
        client.listenMsg('server/Frame', msg => { this._onServerSync(msg) });

        (window as any).gm = this;
    }

    async join(): Promise<void> {
        if (!this.client.isConnected) {
            let resConnect = await this.client.connect();
            if (!resConnect.isSucc) {
                if (confirm('连接到服务器失败，是否重试')) {
                    return this.join();
                }
                else {
                    return;
                }
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
        this.selfPlayerId = ret.res.playerId;
    }

    private _onServerSync(frame: MsgFrame) {
        // 同步权威状态
        this.gameSystem.reset(this.lastServerState);
        for (let input of frame.inputs) {
            this.gameSystem.applyInput(input);
        }
        this.lastServerState = Object.merge({}, this.gameSystem.state);

        // 和解
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
        if (!this.selfPlayerId) {
            return;
        }

        let msg: MsgClientInput = {
            sn: ++this.lastSN,
            inputs: [input]
        }
        this.pendingInputMsgs.push(msg);
        this.client.sendMsg('client/ClientInput', msg);

        // 预测
        this.gameSystem.applyInput({
            ...input,
            playerId: this.selfPlayerId
        });
    }

}