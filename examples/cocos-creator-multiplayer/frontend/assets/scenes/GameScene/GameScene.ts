
import { Button, Color, Component, instantiate, MeshRenderer, Node, Prefab, UIOpacity, Vec2, _decorator } from 'cc';
import { Arrow } from '../../prefabs/Arrow/Arrow';
import { Joystick } from '../../prefabs/Joystick/Joystick';
import { Player } from '../../prefabs/Player/Player';
import { FollowCamera } from '../../scripts/components/FollowCamera';
import { GameManager } from '../../scripts/models/GameManager';
import { gameConfig } from '../../scripts/shared/game/gameConfig';
import { ArrowState } from '../../scripts/shared/game/state/ArrowState';
const { ccclass, property } = _decorator;

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

    @property(Node)
    btnAttack: Node = null as any;
    @property(Node)
    attackPosIndicator!: Node;

    gameManager!: GameManager;

    private _playerInstances: { [playerId: number]: Player | undefined } = {};
    private _arrowInstances: { [arrowId: number]: Arrow | undefined } = {};
    private _selfSpeed?: Vec2 = new Vec2(0, 0);

    onLoad() {
        (window as any).game = this;

        this.attackPosIndicator.getComponent(MeshRenderer)!.material!.setProperty('mainColor', Color.CYAN);

        // 初始化摇杆
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

        // 监听数据状态事件
        // 新箭矢发射（仅表现）
        this.gameManager.gameSystem.onNewArrow.push(v => { this._onNewArrow(v) });

        // 断线 2 秒后自动重连
        this.gameManager.client.flows.postDisconnectFlow.push(v => {
            setTimeout(() => {
                this.gameManager.join();
            }, 2000)
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

        this._updateAttackIndicator();
    }

    private _updatePlayers() {
        // Update pos
        let playerStates = this.gameManager.state.players;
        for (let playerState of playerStates) {
            let player = this._playerInstances[playerState.id];
            // 场景上还没有这个 Player，新建之
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

            // 根据最新状态，更新 Player 表现组件
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

    private _onNewArrow(arrowState: ArrowState) {
        let arrow = this._arrowInstances[arrowState.id];
        // 已经存在
        if (arrow) {
            return;
        }

        let playerState = this.gameManager.state.players.find(v => v.id === arrowState.fromPlayerId);
        if (!playerState) {
            return;
        }
        let playerNode = this._playerInstances[playerState.id]?.node;
        if (!playerNode) {
            return;
        }

        // 创建新的箭矢显示
        let node = instantiate(this.prefabArrow);
        this.arrows.addChild(node);
        arrow = this._arrowInstances[arrowState.id] = node.getComponent(Arrow)!;
        arrow.init(arrowState, playerNode.position, this.gameManager.state.now);
    }

    onBtnAttack() {
        let playerState = this.gameManager.state.players.find(v => v.id === this.gameManager.selfPlayerId);
        if (!playerState) {
            return;
        }

        let playerNode = this._playerInstances[this.gameManager.selfPlayerId]?.node;
        if (!playerNode) {
            return;
        }

        // 攻击落点偏移（表现层坐标）
        let sceneOffset = playerNode.forward.clone().normalize().multiplyScalar(gameConfig.arrowDistance);
        // 攻击落点（逻辑层坐标）
        let targetPos = new Vec2(playerState.pos.x, playerState.pos.y).add2f(sceneOffset.x, -sceneOffset.z);

        // 发送输入
        this.gameManager.sendClientInput({
            type: 'PlayerAttack',
            // 显示坐标 —> 逻辑坐标
            targetPos: { x: targetPos.x, y: targetPos.y },
            targetTime: this.gameManager.state.now + gameConfig.arrowFlyTime
        })

        // 冷却时间 1 秒
        this.btnAttack.getComponent(Button)!.interactable = false;
        this.btnAttack.getComponent(UIOpacity)!.opacity = 120;
        this.scheduleOnce(() => {
            this.btnAttack.getComponent(Button)!.interactable = true;
            this.btnAttack.getComponent(UIOpacity)!.opacity = 255;
        }, 1)
    }

    private _updateAttackIndicator() {
        let playerState = this.gameManager.state.players.find(v => v.id === this.gameManager.selfPlayerId);
        if (!playerState) {
            return;
        }

        let playerNode = this._playerInstances[this.gameManager.selfPlayerId]?.node;
        if (!playerNode) {
            return;
        }

        // 攻击落点位置（表现层坐标）
        let sceneTargetPos = playerNode.position.clone().add(playerNode.forward.clone().normalize().multiplyScalar(gameConfig.arrowDistance));
        this.attackPosIndicator.setPosition(sceneTargetPos.x, 0.1, sceneTargetPos.z);
    }
}