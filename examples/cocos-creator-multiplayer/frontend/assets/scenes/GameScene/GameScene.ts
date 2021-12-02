
import { Component, instantiate, Node, Prefab, Vec2, _decorator } from 'cc';
import { WsClient } from 'tsrpc-browser';
import { Joystick } from '../../prefabs/Joystick/Joystick';
import { Player } from '../../prefabs/Player/Player';
import { FollowCamera } from '../../scripts/components/FollowCamera';
import { GameManager } from '../../scripts/models/GameManager';
import { gameConfig } from '../../scripts/shared/game/gameConfig';
import { serviceProto, ServiceType } from '../../scripts/shared/protocols/serviceProto';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameScene
 * DateTime = Thu Dec 02 2021 18:43:36 GMT+0800 (中国标准时间)
 * Author = k8w
 * FileBasename = GameScene.ts
 * FileBasenameNoExtension = GameScene
 * URL = db://assets/scenes/GameScene/GameScene.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('GameScene')
export class GameScene extends Component {

    @property(Joystick)
    joyStick!: Joystick;

    @property(Prefab)
    prefabPlayer!: Prefab;

    @property(Node)
    players!: Node;

    @property(FollowCamera)
    camera: FollowCamera = null as any;

    client!: WsClient<ServiceType>;
    gameManager!: GameManager;

    private _playerInstances: { [playerId: number]: Player } = {};
    private _selfSpeed?: Vec2 = new Vec2(0, 0);

    onLoad() {
        (window as any).game = this;

        this.joyStick.options = {
            onOperate: v => {
                if (!this._selfSpeed) {
                    this._selfSpeed = new Vec2;
                }
                this._selfSpeed.set(v.x, v.y);
            },
            onOperateEnd: () => {
                this._selfSpeed = undefined;
            }
        }

        this.client = new WsClient(serviceProto, {
            server: 'ws://127.0.0.1:3000',
            logger: console
        });
        this.client.flows.postDisconnectFlow.push(v => {
            location.reload()
            return v;
        })
        this.gameManager = new GameManager(this.client);

        this.gameManager.join();
    }

    update(dt: number) {
        // Send Inputs
        if (this._selfSpeed && this._selfSpeed.lengthSqr()) {
            this._selfSpeed.normalize().multiplyScalar(gameConfig.moveSpeed);
            this.gameManager.sendClientInput({
                type: 'PlayerMove',
                speed: {
                    x: this._selfSpeed.x,
                    y: this._selfSpeed.y
                },
                dt: dt
            })
        }

        let gameState = this.gameManager.state;

        // console.log('update', gameState.players.length)

        // Update pos
        for (let playerState of gameState.players) {
            let player: Player = this._playerInstances[playerState.id];
            if (!player) {
                let node = instantiate(this.prefabPlayer);
                this.players.addChild(node);
                player = node.getComponent(Player)!;
                player.init(playerState);

                if (playerState.id === this.gameManager.selfPlayerId) {
                    this.camera.focusTarget = node;
                }

                this._playerInstances[playerState.id] = player;
            }
            else {
                // console.log('setPos', playerState.id, playerState.pos.x, playerState.pos.y)
                player.setPos(playerState.pos);
            }
        }

        // Clear left players        
    }

}