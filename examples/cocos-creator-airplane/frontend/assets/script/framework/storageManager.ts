import { _decorator, sys, log } from "cc";
import { Util } from './util';

const { ccclass, property } = _decorator;

@ccclass("StorageManager")
export class StorageManager {
    private static _instance: StorageManager;

    public static get instance () {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new StorageManager();
        this._instance.start();
        return this._instance;
    }

    private _jsonData: {[key: string]: any} = {};
    private _path: any = null;
    private KEY_CONFIG: string = 'template';
    private _markSave: boolean = false;
    private _saveTimer: number = -1;

    start () {
        this._jsonData = {
            "userId": "",
        };

        this._path = this._getConfigPath();

        var content;
        if (sys.isNative) {
            var valueObject = jsb.fileUtils.getValueMapFromFile(this._path);
            content = valueObject[this.KEY_CONFIG];
        } else {
            content = sys.localStorage.getItem(this.KEY_CONFIG);
        }

        // // 解密代码
        // if (cc.game.config["encript"]) {
        //     var newContent = new Xxtea("upgradeHeroAbility").xxteaDecrypt(content);
        //     if (newContent && newContent.length > 0) {
        //         content = newContent;
        //     }
        // }

        if (content && content.length) {
            if (content.startsWith('@')) {
                content = content.substring(1);
                content = util.decrypt(content);
            }

            try {
                //初始化操作
                var jsonData = JSON.parse(content);
                this._jsonData = jsonData;
            }catch (excepaiton) {

            }

        }

        //启动无限定时器，每1秒保存一次数据，而不是无限保存数据
        // this._saveTimer = setInterval(() =>{
        //     this.scheduleSave();
        // }, 500);

        //每隔5秒保存一次数据，主要是为了保存最新在线时间，方便离线奖励时间判定
        this._saveTimer = setInterval(() =>{
            this.scheduleSave();
        }, 5000);
    }

    /**
     * 存储配置文件，不保存到本地
     * @param {string}key  关键字
     * @param {any}value  存储值
     */
    setConfigDataWithoutSave (key: string, value: any) {
        let account: string= this._jsonData.userId;
        if (this._jsonData[account]) {
            this._jsonData[account][key] = value;
        } else {
            console.error("no account can not save");
        }
    }

  /**
     * 存储配置文件，保存到本地
     * @param {string}key  关键字
     * @param {any}value  存储值
     */
    setConfigData (key: string, value: any) {
        this.setConfigDataWithoutSave(key, value);
        this._markSave = true; //标记为需要存储，避免一直在写入，而是每隔一段时间进行写入
    }

    /**
     * 根据关键字获取数值
     * @param {string} key 关键字
     * @returns 
     */
    getConfigData (key: string) {
        let account: string = this._jsonData.userId;
        if (this._jsonData[account]) {
            var value = this._jsonData[account][key];
            return value ? value : "";
        } else {
            log("no account can not load");
            return "";
        }
    }

    /**
     * 设置全局数据
     * @param {string} key 关键字
     * @param {any}value  存储值
     * @returns 
     */
    public setGlobalData (key:string, value: any) {
        this._jsonData[key] = value;
        this.save();
    }

    /**
     * 获取全局数据
     * @param {string} key 关键字
     * @returns 
     */
    public getGlobalData (key:string) {
        return this._jsonData[key];
    }

    /**
     * 设置用户唯一标示符
     * @param {string} userId 用户唯一标示符
     * @param {any}value  存储值
     * @returns 
     */
    public setUserId (userId:string) {
        this._jsonData.userId = userId;
        if (!this._jsonData[userId]) {
            this._jsonData[userId] = {};
        }

        this.save();
    }

    /**
     * 获取用户唯一标示符
     * @returns {string}
     */
    public getUserId () {
        return this._jsonData.userId;
    }

    /**
     * 定时存储
     * @returns 
     */
    public scheduleSave () {
        if (!this._markSave) {
            return;
        }

        this.save();
    }

    /**
     * 标记为已修改
     */
     public markModified () {
        this._markSave = true;
    }

    /**
     * 保存配置文件
     * @returns 
     */
    public save () {
        // 写入文件
        var str = JSON.stringify(this._jsonData);

        // // 加密代码
        // if (cc.game.config["encript"]) {
        //     str = new Xxtea("upgradeHeroAbility").xxteaEncrypt(str);
        // }

        let zipStr = '@' + Util.encrypt(str);
        // let zipStr = str;

        this._markSave = false;
        
        if (!sys.isNative) {
            var ls = sys.localStorage;
            ls.setItem(this.KEY_CONFIG, zipStr);
            return;
        }

        var valueObj: any = {};
        valueObj[this.KEY_CONFIG] = zipStr;
        jsb.fileUtils.writeToFile(valueObj, this._path);
        // jsb.fileUtils.writeToFile(valueObj);
    }

    /**
     * 获取配置文件路径
     * @returns 获取配置文件路径
     */
    private _getConfigPath () {

        let platform: any= sys.platform;

        let path: string = "";

        if (platform === sys.OS.WINDOWS) {
            path = "src/conf";
        } else if (platform === sys.OS.LINUX) {
            path = "./conf";
        } else {
            if (sys.isNative) {
                path = jsb.fileUtils.getWritablePath();
                path = path + "conf";
            } else {
                path = "src/conf";
            }
        }

        return path;
    }
}
