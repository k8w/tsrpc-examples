import { WsConnection, WsServer } from "tsrpc";
import { ReqJoinRoom } from "../shared/protocols/PtlJoinRoom";
import { MsgFrame } from "../shared/protocols/serverMsgs/MsgFrame";
import { ServiceType } from "../shared/protocols/serviceProto";
import { applyPlayerInput, PlayerInput, PlayerState } from "../shared/states/Player";
import { RoomState } from "../shared/states/RoomState";

/**
 * 服务端 - 房间 - 逻辑系统
 */
export class Room {

    state: RoomState = {
        players: []
    }

    // 次数/秒
    syncRate = 10;
    lastUid = 0;

    server: WsServer<ServiceType>;
    conns: WsConnection[] = [];

    pendingInputs: MsgFrame['inputs'] = [];

    constructor(server: WsServer<ServiceType>) {
        this.server = server;
        setInterval(() => { this.sendSyncFrame() }, 1000 / this.syncRate);
    }

    sendSyncFrame() {
        // 发送同步帧
        this.server.broadcastMsg('serverMsgs/Frame', {
            inputs: this.pendingInputs
        }, this.conns);
        this.pendingInputs = [];
    }

    /** 加入房间 */
    join(req: ReqJoinRoom, conn: WsConnection<ServiceType>) {
        let player: PlayerState = {
            ...req,
            uid: ++this.lastUid,
            // 初始位置随机
            pos: {
                x: Math.random() * 10,
                y: Math.random() * 10
            }
        }
        this.conns.push(conn);
        this.state.players.push(player);

        conn.uid = player.uid;
        conn.listenMsg('clientMsgs/Input', call => {
            this.pendingInputs.push({
                uid: player.uid,
                msgInput: call.msg
            });
            this.applyInput({
                uid: player.uid,
                input: call.msg
            });
        });

        this.server.broadcastMsg('serverMsgs/Join', {
            player: player
        }, this.conns);

        return player.uid;
    }

    /** 离开房间 */
    leave(uid: number, conn: WsConnection<ServiceType>) {
        this.conns.removeOne(v => v.uid === uid);
        this.state.players.removeOne(v => v.uid === uid);

        conn.unlistenMsgAll('clientMsgs/Input');

        this.server.broadcastMsg('serverMsgs/Leave', {
            uid: uid
        }, this.conns);
    }

    applyInput(input: RoomInput) {
        let playerIndex = this.state.players.findIndex(v => v.uid === input.uid);
        if (playerIndex > -1) {
            this.state.players[playerIndex] = applyPlayerInput(this.state.players[playerIndex], input.input);
        }
    }

}

export interface RoomInput {
    uid: number,
    input: PlayerInput
}

declare module 'tsrpc' {
    export interface WsConnection {
        uid?: number;
    }
}