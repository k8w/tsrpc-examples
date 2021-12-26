export class Constant {

    public static GAME_NAME = 'template';

    public static GAME_VERSION = '1.0.1';

    public static GAME_FRAME = 60;      //游戏当前帧率
    public static GAME_INIT_FRAME = 60; //游戏开发基础帧率

    //本地缓存key值
    public static LOCAL_CACHE = {
        PLAYER: 'player',               //玩家基础数据缓存，如金币砖石等信息，暂时由客户端存储，后续改由服务端管理
        SETTINGS: 'settings',           //设置相关，所有杂项都丢里面进去
        DATA_VERSION: 'dataVersion',    //数据版本
        ACCOUNT: 'account',                 //玩家账号
        // TMP_DATA: 'tmpData',             //临时数据，不会存储到云盘
        HISTORY: "history",                   //关卡通关数据
        BAG: "bag",                         //玩家背包，即道具列表，字典类型
        
    }

    //组别枚举
    public static ITEM_GROUP = {
        ENEMY_BULLET: 2,    //地方子弹组为2
        SELF_BULLET: 3,     //我放子弹组为3
        ENEMY_PLANE: 4,     //敌机组为4
        SELF_PLANE: 8,      //我放机组为8
        FIGHT_BULLET: 16    //子弹类型道具组为16

    }
    
    //子弹枚举 
    public static FIGHT_BULLET_GROUP = {
        BULLET_M: 1,        //子弹类型M
        BULLET_S: 2,        //子弹类型S
        BULLET_H: 3,        //子弹类型H
    }

    //子弹方位枚举
    public static BULLET_DIRECTION = {
        CENTRAL: 1,         //方向中央
        LEFT: 2,            //方向左边
        RIGHT: 3,           //方向右边
    }

    //组合类型
    public static COMBINATION = {
        COMBINATE1: 1,      //组合1
        COMBINATE2: 2,      //组合2
        COMBINATE3: 3,      //组合3
        
    }

    //子弹名称
    public static FIGHT_BULLET_NAME = {
        BULLET_M: "bulletM",
        BULLET_S: "bulletS",
        BULLET_H: "bulletH",
    }


}
