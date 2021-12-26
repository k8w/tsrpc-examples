import { AudioManager } from './framework/audioManager';

import { _decorator, Component, Node, setDisplayStats, Prefab, instantiate, find, NodePool, Vec3, director, PhysicsSystem, game, Pool, Label, Socket, Quat, AudioSource, AudioClip } from 'cc';
import { bulletManager } from './bullet/bulletManager';
import { FightIconBullet } from './bullet/fightIconBullet';
import { Constant } from './framework/constant';
import { PoolManager } from './framework/poolManager';
import { enemyPlane } from './plane/enemyPlane';
import { selfPlane } from './plane/selfPlane';
import { MovingSceneBg } from './ui/common/movingSceneBg';

const { ccclass, property } = _decorator;


let _temp_quat = new Quat;



@ccclass('GameManager')
export class GameManager extends Component {

    @property(Node)
    public playerPlane: Node = null;    //玩家飞机节点
    @property(Prefab)
    public bullet1: Prefab = null;      //子弹类型1
    @property(Prefab)
    public bullet2: Prefab = null;      //子弹类型2
    @property(Prefab)
    public bullet3: Prefab = null;      //子弹类型3
    @property(Prefab)
    public bullet4: Prefab = null;      //子弹类型4
    @property(Prefab)
    public bullet5: Prefab = null;      //子弹类型5
    //道具图标预制物
    @property(Prefab)
    public bulletIcon1: Prefab = null;  //道具1
    @property(Prefab)
    public bulletIcon2: Prefab = null;  //道具2
    @property(Prefab)
    public bulletIcon3: Prefab = null;  //道具3
    //积分面板
    @property(Node)
    public scorePanel: Node = null;
    @property(Label)
    public jifen: Label = null;     //分数
    @property(Label)
    public gameOverScore = null;    //结束的分数界面
    //背景地图
    @property(Node)
    public bgMap: Node = null;
    //敌机的声明
    @property(Prefab)
    public enemy1: Prefab = null;
    @property(Prefab)
    public enemy2: Prefab = null;
    @property(Node)
    public gameOverUi: Node = null;     //结束界面ui
    @property(Node)
    public gameStartUi: Node = null;    //开始界面ui
    @property(Node)
    public cocosUi: Node = null;        //cocos图标
    @property(Node)
    public ball: Node = null;           //背景星球
    @property
    public bulletSpeedTime: number = 12; //子弹射击间隔时间
    @property
    public enemyTime: number = 60; //敌机生成时间

    //bgm
    @property(AudioSource)
    public audio: AudioSource = null!;
    //按钮点击音效
    @property(AudioSource)
    public buttonAudio: AudioSource = null!;
    
    //道具掉落时间
    @property
    public dropTime: number = 600;    //现在是10s

    //敌机速度，在此处更改
    @property
    public enemy1Speed: number = 0.5;   //敌机1的速度
    @property
    public enemy2Speed: number = 0.7;   //敌机2的速度

    //星球和标志移动速度
    @property
    public cocosSpeed: number = 0.1;
    //子弹速度
    @property
    public bulletSpeed: number = 1;
    //分数
    public score: number = 0;
    //玩家飞机是否可以射击，操作开关在uiManin.ts中，
    public shooting: boolean = false;
    //游戏是否开始，操作开关在uiManin.ts中，
    public starting: boolean = false;

    public selfPlaneIsDie: boolean = false; //判断玩家飞机是否死亡

    public isWhichBullet: number;    //判断是哪种子弹
    public conbinationInterval: number    //组合间隔
    public timing: boolean = true;
    private shootTime: number = 0;
    private _enemyTime: number;     //创建敌机的间隔时间
    private _combinationTime: number;    //组合出现间隔时间

    private _iconTime: number = 0;
    private _cocosSpeed: number = this.cocosSpeed;  //标志移动
    private _ballSpeed: number = this.cocosSpeed;   //星球移动


    onLoad() {
        //开启碰撞检测
        PhysicsSystem.instance.enable = true;
        setDisplayStats(false);     //关闭左下角的调试信息      
        this.isWhichBullet = Constant.FIGHT_BULLET_GROUP.BULLET_M   //一开始默认用m号子弹
        this.shootTime = 0;
        this._enemyTime = 0;
        this._combinationTime = 0;
        this.conbinationInterval = 1
        this._iconTime = 0;
        this.playerPlane.getComponent(selfPlane).show(this);
        //开始时候分数置0
        this.score = 0;
        this.timing = true;



    }

    update(deltaTime: number) {

        if(!this.audio.getComponent(AudioSource).playing) {
            this.audio.getComponent(AudioSource).play();
        }

        //实时显示分数
        this.jifen.string = this.score.toString();
        this.gameOverScore.string = this.score.toString();
        if (!this.selfPlaneIsDie) {
            //当玩家没有死亡的时候执行的代码
            //背景星球和标志移动
            if (this.cocosUi.position.x >= 18) { this._cocosSpeed = -this.cocosSpeed }
            else if (this.cocosUi.position.x <= -18) { this._cocosSpeed = this.cocosSpeed }
            this.cocosUi.setPosition(this.cocosUi.position.x + this._cocosSpeed, this.cocosUi.position.y, this.cocosUi.position.z);

            if (this.ball.position.x >= 18) { this._ballSpeed = -this.cocosSpeed }
            else if (this.ball.position.x <= -18) { this._ballSpeed = this.cocosSpeed }
            this.ball.setPosition(this.ball.position.x + this._ballSpeed, this.ball.position.y, this.ball.position.z);

            let rad = 1 * Math.PI / 180;
            this.ball.getRotation(_temp_quat);
            Quat.rotateZ(_temp_quat, _temp_quat, rad);
            this.ball.setRotation(_temp_quat);

            //子弹射击,一开始子弹的类型为m,黄色单列
            this.shootTime++;
            if (this.shooting && this.shootTime >= this.bulletSpeedTime) {
                console.log(this.isWhichBullet, '子弹类型')
                if (this.isWhichBullet == Constant.FIGHT_BULLET_GROUP.BULLET_M) {
                    //发射m型号的子弹
                    this.creatorBullet1(this.bullet1);
                }
                else if (this.isWhichBullet == Constant.FIGHT_BULLET_GROUP.BULLET_S) {
                    //发射S型号的子弹
                    this.creatorBullet2(this.bullet2);
                }
                else if (this.isWhichBullet == Constant.FIGHT_BULLET_GROUP.BULLET_H) {
                    //发射H型号的子弹
                    this.creatorBullet3(this.bullet3);
                }
                this.shootTime = 0;
            }

            //游戏每隔10随机出现一个道具
            if (this.starting) {
                this._iconTime++;
                if (this._iconTime >= this.dropTime) {
                    this._iconTime = 0;
                    let iconValue = this.getRandomNum(1, 3);
                    if (iconValue == 1) { this.creatorFightIcon(this.bulletIcon1); }
                    else if (iconValue == 2) { this.creatorFightIcon(this.bulletIcon2); }
                    else if (iconValue == 3) { this.creatorFightIcon(this.bulletIcon3); }
                }
            }
            this._combinationTime++;
            if (this.conbinationInterval == Constant.COMBINATION.COMBINATE1) {
                //敌机 这里的生成时间设置成60
                this._enemyTime++;
                if (this.starting && this._enemyTime >= this.enemyTime) {
                    let whichEnemy: number = this.getRandomNum(1, 2);    //随机取两个值，代表不同的两个敌机
                    if (whichEnemy == Constant.COMBINATION.COMBINATE1) {
                        this.creatorEnemy1();
                        this._enemyTime = 0;
                    }
                    else if (whichEnemy == Constant.COMBINATION.COMBINATE2) {
                        this.creatorEnemy2();
                        this._enemyTime = 0;
                    }

                }

            }

            else if (this.conbinationInterval == Constant.COMBINATION.COMBINATE2) {

                //来到时间段2，敌机出现时间间隔为原来的0.8倍
                if (this.starting && this._combinationTime >= this.enemyTime * 3) {
                    let combinate: number = this.getRandomNum(1, 2);
                    if (combinate == Constant.COMBINATION.COMBINATE1) {
                        this.creatorCombination1(this.enemy1);
                        this._combinationTime = 0;
                    }
                    else if (combinate == Constant.COMBINATION.COMBINATE2) {
                        this.creatorEnemy2();
                        this._combinationTime = 0;
                    }
                }
            }
            else {

                //来到时间段2，敌机出现时间间隔为原来的3倍
                if (this.starting && this._combinationTime >= this.enemyTime * 2) {
                    let combinate: number = this.getRandomNum(1, 3);
                    if (combinate == Constant.COMBINATION.COMBINATE1) {
                        this.creatorCombination1(this.enemy1);
                        this._combinationTime = 0;
                    }
                    else if (combinate == Constant.COMBINATION.COMBINATE2) {
                        this.creatorCombination2(this.enemy2);
                        this._combinationTime = 0;
                    }
                    else if (combinate == Constant.COMBINATION.COMBINATE3) {
                        this.creatorEnemy1();
                        this.creatorEnemy2();
                        this._combinationTime = 0;
                    }
                }
            }



        }
        if (this.selfPlaneIsDie) {
            this.gameOver();    //玩家死亡后执行游戏结束函数
        }
    }

    //开启一个计时器,随时间改变游戏难度
    public glodeDifficulty() {
        let callback = () => {
            if (this.selfPlaneIsDie) {
                this.unschedule(callback);
            }
            this.conbinationInterval++;
        }

        this.schedule(callback, 10);

    }

    //游戏结束
    public gameOver() {
        this.bgMap.getComponent(MovingSceneBg).bgSpeed = 0;     //背景停止移动
        this.removeAllBullet(); //移除所有子弹
        this.conbinationInterval = 1;//组合变回1
        this.scorePanel.active = false;
    }

    //游戏重新开始
    public gameRestart() {
        this.buttonAudio.getComponent(AudioSource).play();
        this.bgMap.getComponent(MovingSceneBg).bgSpeed = 10;
        this.dataReSet();
        

    }

    //游戏返回到主界面
    public gameMain() {
        this.buttonAudio.getComponent(AudioSource).play();
        this.bgMap.getComponent(MovingSceneBg).bgSpeed = 0;
        this.dataReSet();
        
        this.starting = false;
        this.gameStartUi.active = true;

        this.scorePanel.active = false;


    }

    public dataReSet() {
        this.removeAllEnemy();
        this.removeAllItem();
        this.selfPlaneIsDie = false;
        this.playerPlane.getComponent(selfPlane).dieEffect.active = false;
        this.playerPlane.getComponent(selfPlane).init();
        this.playerPlane.getComponent(selfPlane).lifeBloodBg.active = false;
        this.playerPlane.getComponent(selfPlane).lifeBlood.active = false;
        this.gameOverUi.active = false;
        this.isWhichBullet = Constant.FIGHT_BULLET_GROUP.BULLET_M;
        this.score = 0;
        this.timing = true;
        this.shooting = false;
        this.playerPlane.setPosition(0, 0, 15);
    }

    //创建道具
    public creatorFightIcon(prefebIcon: Prefab) {
        let bulletIcon = null;
        bulletIcon = PoolManager.instance.getNode(prefebIcon, this.node);
        bulletIcon.parent = this.node;
        bulletIcon.setScale(1.5, 1, 0.8);
        bulletIcon.setPosition(0, 0, -50);
        bulletIcon.getComponent(FightIconBullet).show(this);

    }
    //移除道具
    public fightIconKill(prefebIcon) {
        PoolManager.instance.putNode(prefebIcon);
        //console.log('道具被销毁');
    }

    //创建我方飞机子弹对象1
    public creatorBullet1(prefebBullet: Prefab) {
        let bullet = null;

        bullet = PoolManager.instance.getNode(prefebBullet, this.node);
        //bullet.parent = this.node;
        let pos: Vec3 = this.playerPlane.getPosition();
        //将子弹大小设置为于飞机同样大小
        bullet.setScale(8, 8, 8);
        //将子弹位置设置在飞机前方
        bullet.setPosition(pos.x, pos.y, pos.z - this.playerPlane.getScale().z);
        //console.log(bullet.getPosition())
        //将gameManger传入脚本bulletManager中
        bullet.getComponent(bulletManager).show(this, this.bulletSpeed);
        bullet.getComponent(bulletManager).setBulletGroup(true);
        bullet.getComponent(bulletManager).playerBullet = true;
        bullet.getComponent(bulletManager).enemyBullet = false;
        bullet.getComponent(bulletManager).bulletType = Constant.BULLET_DIRECTION.CENTRAL;

    }
    //创建我放飞机子弹对象2
    public creatorBullet2(prefebBullet: Prefab) {
        let bullet1 = null;
        let bullet2 = null;
        bullet1 = PoolManager.instance.getNode(prefebBullet, this.node);
        bullet2 = PoolManager.instance.getNode(prefebBullet, this.node);

        let pos: Vec3 = this.playerPlane.getPosition();
        //将子弹大小设置为于飞机同样大小
        bullet1.setScale(8, 8, 8);
        bullet2.setScale(8, 8, 8);

        //将子弹位置设置在飞机前方,该子弹位置应该放在飞机前方5，两边相差5
        bullet1.setPosition(pos.x + 2.5, pos.y, pos.z - 5);
        bullet2.setPosition(pos.x - 2.5, pos.y, pos.z - 5);

        //console.log(bullet.getPosition())
        //将gameManger传入脚本bulletManager中
        bullet1.getComponent(bulletManager).show(this, this.bulletSpeed);
        bullet2.getComponent(bulletManager).show(this, this.bulletSpeed);
        bullet1.getComponent(bulletManager).setBulletGroup(true);
        bullet2.getComponent(bulletManager).setBulletGroup(true);
        bullet1.getComponent(bulletManager).playerBullet = true;
        bullet2.getComponent(bulletManager).playerBullet = true;
        bullet1.getComponent(bulletManager).enemyBullet = false;
        bullet2.getComponent(bulletManager).enemyBullet = false;
        bullet1.getComponent(bulletManager).bulletType = Constant.BULLET_DIRECTION.CENTRAL;
        bullet2.getComponent(bulletManager).bulletType = Constant.BULLET_DIRECTION.CENTRAL;
    }

    //创建我放飞机子弹对象3
    public creatorBullet3(prefebBullet: Prefab) {
        let bullet1 = null;
        let bullet2 = null;
        let bullet3 = null;
        bullet1 = PoolManager.instance.getNode(prefebBullet, this.node);
        bullet2 = PoolManager.instance.getNode(prefebBullet, this.node);
        bullet3 = PoolManager.instance.getNode(prefebBullet, this.node);

        let pos: Vec3 = this.playerPlane.getPosition();
        //将子弹大小设置为于飞机同样大小
        bullet1.setScale(8, 8, 8);
        bullet2.setScale(8, 8, 8);
        bullet3.setScale(8, 8, 8);

        //将子弹位置设置在飞机前方,该子弹位置应该放在飞机前方5，两边相差5
        bullet1.setPosition(pos.x + 2.5, pos.y, pos.z - 4);
        bullet2.setPosition(pos.x - 2.5, pos.y, pos.z - 4);
        bullet3.setPosition(pos.x, pos.y, pos.z - 8);

        //console.log(bullet.getPosition())
        //将gameManger传入脚本bulletManager中
        bullet1.getComponent(bulletManager).show(this, this.bulletSpeed);
        bullet2.getComponent(bulletManager).show(this, this.bulletSpeed);
        bullet3.getComponent(bulletManager).show(this, this.bulletSpeed);
        bullet1.getComponent(bulletManager).setBulletGroup(true);
        bullet2.getComponent(bulletManager).setBulletGroup(true);
        bullet3.getComponent(bulletManager).setBulletGroup(true);

        bullet1.getComponent(bulletManager).playerBullet = true;
        bullet2.getComponent(bulletManager).playerBullet = true;
        bullet3.getComponent(bulletManager).playerBullet = true;

        bullet1.getComponent(bulletManager).enemyBullet = false;
        bullet2.getComponent(bulletManager).enemyBullet = false;
        bullet3.getComponent(bulletManager).enemyBullet = false;

        bullet1.getComponent(bulletManager).bulletType = Constant.BULLET_DIRECTION.RIGHT;
        bullet2.getComponent(bulletManager).bulletType = Constant.BULLET_DIRECTION.LEFT;
        bullet3.getComponent(bulletManager).bulletType = Constant.BULLET_DIRECTION.CENTRAL;
    }
    //创建敌机1对象
    public creatorEnemy1() {
        let enemy = null;
        enemy = PoolManager.instance.getNode(this.enemy1, this.node);
        //将敌机1大小设置为5
        enemy.setScale(5, 5, 5);
        //将敌机位置设置在屏幕最上方,位置为-60的位置
        enemy.getComponent(enemyPlane).show(this, this.enemy1Speed, true);

        //随机敌机在屏幕的x轴位置
        let enemyPos_x = this.getRandomNum(-20, 20);
        enemy.setPosition(enemyPos_x, 0, -50);

    }

    //创建敌机2对象
    public creatorEnemy2() {
        let enemy = null;
        enemy = PoolManager.instance.getNode(this.enemy2, this.node);
        //将敌机1大小设置为5
        enemy.setScale(5, 5, 5);
        //将敌机位置设置在屏幕最上方,位置为-50的位置
        enemy.getComponent(enemyPlane).show(this, this.enemy2Speed, true);

        //随机敌机在屏幕的x轴位置
        let enemyPos_x = this.getRandomNum(-20, 20);
        enemy.setPosition(enemyPos_x, 0, -50);
    }

    //创建组合1，该组合为一字型
    public creatorCombination1(enemy: Prefab) {
        let enemyArray = new Array<any>(5);

        for (let index = 0; index < enemyArray.length; index++) {
            enemyArray[index] = PoolManager.instance.getNode(enemy, this.node);
            enemyArray[index].setScale(5, 5, 5);
            enemyArray[index].getComponent(enemyPlane).show(this, this.enemy2Speed, false);
            enemyArray[index].setPosition(-20 + index * 10, 0, -50)   //位置放在-50处，在屏幕的上方出现
        }



    }

    //创建组合2，该组合为人字型
    public creatorCombination2(enemy: Prefab) {
        let enemyArray = new Array<any>(7);
        for (let index = 0; index < enemyArray.length; index++) {
            enemyArray[index] = PoolManager.instance.getNode(enemy, this.node);
            enemyArray[index].setScale(5, 5, 5);
            enemyArray[index].getComponent(enemyPlane).show(this, this.enemy2Speed, false);
            //if(index)
        }
        enemyArray[0].setPosition(-21, 0, -60);
        enemyArray[1].setPosition(-14, 0, -55);
        enemyArray[2].setPosition(-7, 0, -50);
        enemyArray[3].setPosition(0, 0, -45);
        enemyArray[4].setPosition(7, 0, -50);
        enemyArray[5].setPosition(14, 0, -55);
        enemyArray[6].setPosition(21, 0, -60);





    }


    //敌机子弹，localPos为要生成的位置，localNode为敌机节点
    public enemy1Bullet(localPos: Vec3, localNode: Node) {
        let enemyBullet = null;
        enemyBullet = PoolManager.instance.getNode(this.bullet1, this.node);

        //console.log('localPso',localPos.z,localPos.x)
        enemyBullet.parent = this.node;
        if (localNode.name == "plane02") { enemyBullet.getComponent(bulletManager).show(this, this.enemy1Speed * 2); }  //将gameManager传入的同时传入敌机的速度--为设置敌机子弹速度
        if (localNode.name == "plane03") { enemyBullet.getComponent(bulletManager).show(this, this.enemy2Speed * 2); }
        enemyBullet.getComponent(bulletManager).setBulletGroup(false);
        enemyBullet.getComponent(bulletManager).playerBullet = false;
        enemyBullet.getComponent(bulletManager).enemyBullet = true;
        enemyBullet.setPosition(localPos.x, localPos.y, localPos.z + 6.5);
        enemyBullet.setScale(5, 5, 5);

    }

    //获得随机数
    public getRandomNum(min: number, max: number): number {
        let range = max - min;
        let rand = Math.random();
        return (min + Math.round(rand * range));
    }

    //移除子弹
    public onBulletKilled(bullet) {
        //此处的bullet应该是一个node
        PoolManager.instance.putNode(bullet);
    }

    

    //移除敌机
    public onEnemyKilled(enemy) {
        //敌机死亡后将敌机回收到池子中
        PoolManager.instance.putNode(enemy);
    }

    //移除所有子弹
    public removeAllBullet() {
        let children: Node[] = this.node.children;
        for (let i: number = children.length - 1; i >= 0; i--) {
            let scriptBullet: Component = children[i].getComponent(bulletManager);
            if (scriptBullet) {
                this.onBulletKilled(children[i]);
            }
        }

    }

    //移除所有敌机
    public removeAllEnemy() {
        let children: Node[] = this.node.children;
        for (let i: number = children.length - 1; i >= 0; i--) {
            let scriptEnemy: Component = children[i].getComponent(enemyPlane);
            if (scriptEnemy) {
                PoolManager.instance.putNode(children[i]);
            }
        }
    }

    //移除所有道具
    public removeAllItem() {
        let children: Node[] = this.node.children;
        for (let i: number = children.length - 1; i >= 0; i--) {
            let scriptEnemy: Component = children[i].getComponent(FightIconBullet);
            if (scriptEnemy) {
                PoolManager.instance.putNode(children[i]);
            }
        }
    }


}



