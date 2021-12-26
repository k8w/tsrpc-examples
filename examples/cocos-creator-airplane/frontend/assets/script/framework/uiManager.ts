import { _decorator, Component, Node, SpriteComponent, Color, RichTextComponent, find, isValid, Vec3, UITransformComponent } from "cc";
import { ResourceUtil } from "./resourceUtil";
import { PoolManager } from "./poolManager";
import { Tips } from "../ui/common/tips";
const { ccclass, property } = _decorator;

const SHOW_STR_INTERVAL_TIME = 800;

@ccclass("UIManager")
export class UIManager {
    private _dictSharedPanel: any = {}
    private _dictLoading: any = {}
    private _arrPopupDialog: any = []
    private _showTipsTime: number = 0


    private static _instance: UIManager;

    public static get instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new UIManager();
        return this._instance;
    }

    /**
     * 检查当前界面是否正在展示
     * @param panelPath 
     */
    public isDialogVisible(panelPath: string) {
        if (!this._dictSharedPanel.hasOwnProperty(panelPath)) {
            return false;
        }

        let panel = this._dictSharedPanel[panelPath];

        return isValid(panel) && panel.active && panel.parent;
    }


    /**
     * 显示单例界面
     * @param {String} panelPath 
     * @param {Array} args 
     * @param {Function} cb 回调函数，创建完毕后回调
     */
    public showDialog(panelPath: string, args?: any, cb?: Function) {
        if (this._dictLoading[panelPath]) {
            return;
        }

        let idxSplit = panelPath.lastIndexOf('/');
        let scriptName = panelPath.slice(idxSplit + 1);


        if (!args) {
            args = [];
        }

        if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            let panel = this._dictSharedPanel[panelPath];
            if (isValid(panel)) {
                panel.parent = find("Canvas");
                panel.active = true;
                let script = panel.getComponent(scriptName);
                let script2 = panel.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

                if (script && script.show) {
                    script.show.apply(script, args);
                    cb && cb(script);
                } else if (script2 && script2.show) {
                    script2.show.apply(script2, args);
                    cb && cb(script2);
                } else {
                    throw `查找不到脚本文件${scriptName}`;
                }

                return;
            }
        }

        this._dictLoading[panelPath] = true;
        ResourceUtil.createUI(panelPath, (err: any, node: any) => {
            //判断是否有可能在显示前已经被关掉了？
            let isCloseBeforeShow = false;
            if (!this._dictLoading[panelPath]) {
                //已经被关掉
                isCloseBeforeShow = true;
            }

            this._dictLoading[panelPath] = false;
            if (err) {
                console.error(err);
                return;
            }

            // node.getComponent(UITransformComponent).priority = Constant.ZORDER.DIALOG;

            this._dictSharedPanel[panelPath] = node;

            let script: any = node.getComponent(scriptName);
            let script2: any = node.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));
            if (script && script.show) {
                script.show.apply(script, args);
                cb && cb(script);
            } else if (script2 && script2.show) {
                script2.show.apply(script2, args);
                cb && cb(script2);
            } else {
                throw `查找不到脚本文件${scriptName}`;
            }

            if (isCloseBeforeShow) {
                //如果在显示前又被关闭，则直接触发关闭掉
                this.hideDialog(panelPath);
            }
        });
    }

    /**
     * 隐藏单例界面
     * @param {String} panelPath 
     * @param {fn} callback
     */
    public hideDialog(panelPath: string, callback?: Function) {
        if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            let panel = this._dictSharedPanel[panelPath];
            if (panel && isValid(panel)) {
                let ani = panel.getComponent('animationUI');
                if (ani) {
                    ani.close(() => {
                        panel.parent = null;
                        if (callback && typeof callback === 'function') {
                            callback();
                        }
                    });
                } else {
                    panel.parent = null;
                    if (callback && typeof callback === 'function') {
                        callback();
                    }
                }
            } else if (callback && typeof callback === 'function') {
                callback();
            }
        }

        this._dictLoading[panelPath] = false;
    }

    /**
     * 将弹窗加入弹出窗队列
     * @param {string} panelPath 
     * @param {string} scriptName 
     * @param {*} param 
     */
    public pushToPopupSeq(panelPath: string, scriptName: string, param: any) {
        let popupDialog = {
            panelPath: panelPath,
            scriptName: scriptName,
            param: param,
            isShow: false
        };

        this._arrPopupDialog.push(popupDialog);

        this._checkPopupSeq();
    }

    /**
     * 将弹窗加入弹出窗队列
     * @param {number} index 
     * @param {string} panelPath 
     * @param {string} scriptName 
     * @param {*} param 
     */
    public insertToPopupSeq(index: number, panelPath: string, param: any) {
        let popupDialog = {
            panelPath: panelPath,
            param: param,
            isShow: false
        };

        this._arrPopupDialog.splice(index, 0, popupDialog);
        //this._checkPopupSeq();
    }

    /**
     * 将弹窗从弹出窗队列中移除
     * @param {string} panelPath 
     */
    public shiftFromPopupSeq(panelPath: string) {
        this.hideDialog(panelPath, () => {
            if (this._arrPopupDialog[0] && this._arrPopupDialog[0].panelPath === panelPath) {
                this._arrPopupDialog.shift();
                this._checkPopupSeq();
            }
        })
    }

    /**
     * 检查当前是否需要弹窗
     */
    private _checkPopupSeq() {
        if (this._arrPopupDialog.length > 0) {
            let first = this._arrPopupDialog[0];

            if (!first.isShow) {
                this.showDialog(first.panelPath, first.param);
                this._arrPopupDialog[0].isShow = true;
            }
        }
    }

    /**
     * 显示提示
     * @param {String} content 
     * @param {Function} cb 
     */
    public showTips(content: string | number, callback?: Function) {
        let str = String(content);
        let next = () => {
            this._showTipsAni(str, callback);
        }

        var now = Date.now();
        if (now - this._showTipsTime < SHOW_STR_INTERVAL_TIME) {
            var spareTime = SHOW_STR_INTERVAL_TIME - (now - this._showTipsTime);
            setTimeout(() => {
                next();
            }, spareTime);

            this._showTipsTime = now + spareTime;
        } else {
            next();
            this._showTipsTime = now;
        }
    }

    /**
     * 内部函数
     * @param {String} content 
     * @param {Function} cb 
     */
    private _showTipsAni(content: string, callback?: Function) {
        ResourceUtil.getUIPrefabRes('common/tips', function (err: any, prefab: any) {
            if (err) {
                return;
            }

            let tipsNode = PoolManager.instance.getNode(prefab, find("Canvas") as Node);

            let tipScript = tipsNode.getComponent(Tips) as Tips;
            tipScript.show(content, callback);
        });
    }

}
