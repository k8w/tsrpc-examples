import seedrandom from "seedrandom";
import { MsgCallWs, uint, WsConnection } from "tsrpc";
import { server } from "..";
import { gameConfig } from "../shared/game/gameConfig";
import { GameSystemInput } from "../shared/game/GameSystemInput";
import { GameSystemState } from "../shared/game/GameSystemState";
import { MsgGameInput } from "../shared/protocols/game/client/MsgGameInput";
import { ServiceType } from "../shared/protocols/serviceProto";
import { CurrentUser } from "../shared/types/CurrentUser";
import { RoomState } from "../shared/types/RoomState";

const MAX_ROOM_USER = 2;

/**
 * 服务端 - 房间 - 逻辑系统
 */
export class Room {

    // 房间信息
    state: RoomState;
    conns: WsConnection<ServiceType>[] = [];

    constructor(roomId: uint) {
        this.state = {
            id: roomId,
            players: [],
            status: 'wait'
        }
    }

    // #region Room Control
    // 加入房间
    join(conn: WsConnection<ServiceType>): { isSucc: true } | { isSucc: false, errMsg: string } {
        if (this.state.status !== 'wait') {
            return { isSucc: false, errMsg: '该房间游戏已开始' }
        }
        if (this.conns.length >= MAX_ROOM_USER) {
            return { isSucc: false, errMsg: '房间已满员' }
        }

        this.conns.push(conn);
        this.state.players.push({ ...conn.currentUser, isReady: false });
        conn.room = this;
        this._syncRoomState();

        return { isSucc: true };
    }
    private _timerStartGame?: ReturnType<typeof setTimeout>;

    setReady(playerId: number, isReady: boolean) {
        if (this.state.status !== 'wait') {
            return;
        }

        let player = this.state.players.find(v => v.id === playerId);
        if (player) {
            player.isReady = isReady;
        }

        // 如果人满了且所有人都准备了，5 秒后开始游戏
        if (this.state.players.length >= MAX_ROOM_USER && this.state.players.every(v => v.isReady)) {
            this.state.status = 'ready';
            this._syncRoomState();

            this._timerStartGame = setTimeout(() => {
                this._timerStartGame = undefined;
                this.startGame();
            }, 5000);
        }
    }

    // 离开房间
    leave(conn: WsConnection<ServiceType>) {
        conn.room = undefined;
        this.conns.removeOne(v => v === conn);
        this.state.players.removeOne(v => v.id === conn.currentUser.id);

        // 由于有人秒退，游戏无法正常开始
        if (this._timerStartGame && this.conns.length < MAX_ROOM_USER) {
            this.state.status = 'wait';
            clearTimeout(this._timerStartGame);
            this._timerStartGame = undefined;
        }

        this._syncRoomState();
    }

    private _syncRoomState() {
        server.broadcastMsg('room/server/UpdateRoomState', {
            state: this.state
        }, this.conns)
    }
    // #endregion

    // #region Game
    private _lastSn: { [playerId: number]: number | undefined } = {};
    private _lastFrameIndex: number = 0;
    private _lastSyncTime!: number;
    private _gameOveredUids: number[] = [];

    async startGame() {
        this.conns.forEach(v => {
            v.listenMsg('game/client/GameInput', (call: MsgCallWs<MsgGameInput, ServiceType>) => {
                this._lastSn[call.conn.currentUser.id] = call.msg.sn;
                this._syncInputs(call.msg.inputs.map(v => ({ ...v, playerId: call.conn.currentUser.id })))
            })
        });

        // 更新房间状态
        this.state.status = 'start';
        this._syncRoomState();

        // 生成游戏初始状态
        let seed = '' + Math.random();
        let prng = seedrandom(seed, { state: true });
        let initGameState: GameSystemState = {
            now: 0,
            players: this.conns.map(v => ({
                id: v.currentUser.id,
                nickname: v.currentUser.nickname,
                score: 0,
                life: gameConfig.player.totalLife,
                currentBulletType: 'M',
                pos: { x: 0, y: 100 },
                bullets: [],
                nextId: {
                    bullet: 0
                }
            })),
            enemies: [],
            fightIcons: [],

            // ID 生成器
            nextId: {
                enemy: 0,
                fightIcon: 0
            },

            // 上次创建敌机的时间
            lastCreateEnemyTime: 3000,

            // 伪随机数发生器状态
            random: {
                seed: '' + Math.random(),
                state: prng.state()
            }
        };
        this._lastSn = {};
        this._lastSyncTime = Date.now();
        this._lastFrameIndex = 0;

        // 广播游戏初始状态
        server.broadcastMsg('game/server/GameStart', {
            frameIndex: this._lastFrameIndex,
            gameState: initGameState
        }, this.conns);
    }

    // 收到输入，立即同步给所有人
    private _syncInputs(inputs: GameSystemInput[]) {
        // 增加时间流逝
        let now = process.uptime() * 1000;
        inputs.unshift({
            type: 'TimePast',
            dt: now - this._lastSyncTime
        });
        this._lastSyncTime = now;

        // 把输入广播给所有用户
        this.conns.forEach(v => {
            v.sendMsg('game/server/ServerFrame', {
                frameIndex: this._lastFrameIndex,
                inputs: inputs,
                lastSn: this._lastSn[v.currentUser.id!]
            })
        });
    }

    async gameOver(uid: number) {
        if (this.state.status !== 'start' || this._gameOveredUids.includes(uid)) {
            return;
        }

        this._gameOveredUids.push(uid);

        // 所有人都 GameOver，Game 真的 Over
        if (this.conns.every(v => this._gameOveredUids.includes(v.currentUser.id))) {
            this.conns.forEach(v => {
                v.unlistenMsgAll('game/client/GameInput');
            });

            this.state.status = 'wait';
            this._syncRoomState();
        }
    }
    // #endregion

}

declare module 'tsrpc' {
    export interface BaseConnection {
        currentUser: CurrentUser,
        room?: Room,
    }
}