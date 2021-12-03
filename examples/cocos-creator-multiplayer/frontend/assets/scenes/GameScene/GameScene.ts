
import { Component, instantiate, Node, Prefab, Vec2, _decorator } from 'cc';
import { Arrow } from '../../prefabs/Arrow/Arrow';
import { Joystick } from '../../prefabs/Joystick/Joystick';
import { Player } from '../../prefabs/Player/Player';
import { FollowCamera } from '../../scripts/components/FollowCamera';
import { GameManager } from '../../scripts/models/GameManager';
import { gameConfig } from '../../scripts/shared/game/gameConfig';
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
    @property(Prefab)
    prefabArrow!: Prefab;

    @property(Node)
    players!: Node;
    @property(Node)
    arrows!: Node;

    @property(FollowCamera)
    camera: FollowCamera = null as any;

    gameManager!: GameManager;

    private _playerInstances: { [playerId: number]: Player } = {};
    private _arrowInstances: { [arrowId: number]: Arrow } = {};
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

        this.gameManager = new GameManager();
        this.gameManager.client.flows.postDisconnectFlow.push(v => {
            location.reload()
            return v;
        });
        this.gameManager.join();
    }

    update(dt: number) {
        this.gameManager.localTimePast();

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

        this._updatePlayers();
        this._updateArrows();
    }

    private _updatePlayers() {
        // Update pos
        let playerStates = this.gameManager.state.players;
        for (let playerState of playerStates) {
            let player: Player = this._playerInstances[playerState.id];
            if (!player) {
                let node = instantiate(this.prefabPlayer);
                this.players.addChild(node);
                player = this._playerInstances[playerState.id] = node.getComponent(Player)!;
                player.init(playerState, playerState.id === this.gameManager.selfPlayerId)

                // 摄像机拍摄自己
                if (playerState.id === this.gameManager.selfPlayerId) {
                    this.camera.focusTarget = node;
                }
            }

            // 自己不插值（本地预测），插值其它人
            player.updateState(playerState, this.gameManager.state.now);
        }

        // Clear left players
        for (let i = this.players.children.length - 1; i > -1; --i) {
            let player = this.players.children[i].getComponent(Player)!;
            if (!this.gameManager.state.players.find(v => v.id === player.playerId)) {
                player.node.removeFromParent();
                delete this._playerInstances[player.playerId];
            }
        }
    }

    private _updateArrows() {
        // Update pos
        let arrowStates = this.gameManager.state.arrows;
        for (let arrowState of arrowStates) {
            let arrow: Arrow = this._arrowInstances[arrowState.id];
            if (!arrow) {
                let playerState = this.gameManager.state.players.find(v => v.id === arrowState.fromPlayerId);
                if (!playerState) {
                    continue;
                }
                let playerNode = this._playerInstances[playerState.id].node;

                let node = instantiate(this.prefabArrow);
                this.arrows.addChild(node);
                arrow = this._arrowInstances[arrowState.id] = node.getComponent(Arrow)!;
                arrow.init(arrowState, playerNode.position, this.gameManager.state.now);
            }
        }

        // Clear left players
        for (let i = this.arrows.children.length - 1; i > -1; --i) {
            let arrow = this.arrows.children[i].getComponent(Arrow)!;
            if (!this.gameManager.state.arrows.find(v => v.id === arrow.id)) {
                arrow.node.removeFromParent();
                delete this._arrowInstances[arrow.id];
            }
        }
    }

    onBtnAttack() {
        let playerState = this.gameManager.state.players.find(v => v.id === this.gameManager.selfPlayerId);
        if (!playerState) {
            return;
        }

        let playerNode = this._playerInstances[this.gameManager.selfPlayerId].node;
        // 攻击落点偏移（表现层坐标）
        let sceneOffset = playerNode.forward.clone().normalize().multiplyScalar(gameConfig.arrowDistance);
        // 攻击落点（逻辑层坐标）
        let targetPos = new Vec2(playerState.pos.x, playerState.pos.y).add2f(sceneOffset.x, -sceneOffset.z);
        this.gameManager.sendClientInput({
            type: 'PlayerAttack',
            // 显示坐标 —> 逻辑坐标
            targetPos: { x: targetPos.x, y: targetPos.y },
            targetTime: this.gameManager.state.now + gameConfig.arrowFlyTime
        })
    }
}