(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class GameControl extends Laya.Script {
        constructor() {
            super();
            this.createBoxInterval = 1000;
            this._time = 0;
            this._started = false;
        }
        onEnable() {
            this._time = Date.now();
            this._gameBox = this.owner.getChildByName("gameBox");
        }
        onUpdate() {
            let now = Date.now();
            if (now - this._time > this.createBoxInterval && this._started) {
                this._time = now;
                this.createBox();
            }
        }
        createBox() {
            let box = Laya.Pool.getItemByCreateFun("dropBox", this.dropBox.create, this.dropBox);
            box.pos(Math.random() * (Laya.stage.width - 100), -100);
            this._gameBox.addChild(box);
        }
        onStageClick(e) {
            e.stopPropagation();
            let flyer = Laya.Pool.getItemByCreateFun("bullet", this.bullet.create, this.bullet);
            flyer.pos(Laya.stage.mouseX, Laya.stage.mouseY);
            this._gameBox.addChild(flyer);
        }
        startGame() {
            if (!this._started) {
                this._started = true;
                this.enabled = true;
            }
        }
        stopGame() {
            this._started = false;
            this.enabled = false;
            this.createBoxInterval = 1000;
            this._gameBox.removeChildren();
        }
    }

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            GameUI.instance = this;
            Laya.MouseManager.multiTouchEnabled = false;
        }
        onEnable() {
            this._control = this.getComponent(GameControl);
            this.tipLbll.on(Laya.Event.CLICK, this, this.onTipClick);
        }
        onTipClick(e) {
            this.tipLbll.visible = false;
            this._score = 0;
            this.scoreLbl.text = "";
            this._control.startGame();
        }
        addScore(value = 1) {
            this._score += value;
            this.scoreLbl.changeText("分数：" + this._score);
            if (this._control.createBoxInterval > 600 && this._score % 20 == 0)
                this._control.createBoxInterval -= 20;
        }
        stopGame() {
            this.tipLbll.visible = true;
            this.tipLbll.text = "游戏结束了，点击屏幕重新开始";
            this._control.stopGame();
        }
    }

    class Bullet extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            var rig = this.owner.getComponent(Laya.RigidBody);
            rig.setVelocity({ x: 0, y: -10 });
        }
        onTriggerEnter(other, self, contact) {
            this.owner.removeSelf();
        }
        onUpdate() {
            if (this.owner.y < -10) {
                this.owner.removeSelf();
            }
        }
        onDisable() {
            Laya.Pool.recover("bullet", this.owner);
        }
    }

    class DropBox extends Laya.Script {
        constructor() {
            super();
            this.level = 1;
        }
        onEnable() {
            this._rig = this.owner.getComponent(Laya.RigidBody);
            this.level = Math.round(Math.random() * 5) + 1;
            this._text = this.owner.getChildByName("levelTxt");
            this._text.text = this.level + "";
        }
        onUpdate() {
            this.owner.rotation++;
        }
        onTriggerEnter(other, self, contact) {
            var owner = this.owner;
            if (other.label === "buttle") {
                if (this.level > 1) {
                    this.level--;
                    this._text.changeText(this.level + "");
                    owner.getComponent(Laya.RigidBody).setVelocity({ x: 0, y: -10 });
                    Laya.SoundManager.playSound("sound/hit.wav");
                }
                else {
                    if (owner.parent) {
                        let effect = Laya.Pool.getItemByCreateFun("effect", this.createEffect, this);
                        effect.pos(owner.x, owner.y);
                        owner.parent.addChild(effect);
                        effect.play(0, true);
                        owner.removeSelf();
                        Laya.SoundManager.playSound("sound/destroy.wav");
                    }
                }
                GameUI.instance.addScore(1);
            }
            else if (other.label === "ground") {
                owner.removeSelf();
                GameUI.instance.stopGame();
            }
        }
        createEffect() {
            let ani = new Laya.Animation();
            ani.loadAnimation("test/TestAni.ani");
            ani.on(Laya.Event.COMPLETE, null, recover);
            function recover() {
                ani.removeSelf();
                Laya.Pool.recover("effect", ani);
            }
            return ani;
        }
        onDisable() {
            Laya.Pool.recover("dropBox", this.owner);
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/GameUI.ts", GameUI);
            reg("script/GameControl.ts", GameControl);
            reg("script/Bullet.ts", Bullet);
            reg("script/DropBox.ts", DropBox);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    const serviceProto = {
        "version": 1,
        "services": [
            {
                "id": 0,
                "name": "AddData",
                "type": "api"
            },
            {
                "id": 1,
                "name": "GetData",
                "type": "api"
            }
        ],
        "types": {
            "PtlAddData/ReqAddData": {
                "type": "Interface",
                "properties": [
                    {
                        "id": 0,
                        "name": "content",
                        "type": {
                            "type": "String"
                        }
                    }
                ]
            },
            "PtlAddData/ResAddData": {
                "type": "Interface",
                "properties": [
                    {
                        "id": 0,
                        "name": "time",
                        "type": {
                            "type": "Date"
                        }
                    }
                ]
            },
            "PtlGetData/ReqGetData": {
                "type": "Interface"
            },
            "PtlGetData/ResGetData": {
                "type": "Interface",
                "properties": [
                    {
                        "id": 0,
                        "name": "data",
                        "type": {
                            "type": "Array",
                            "elementType": {
                                "type": "Interface",
                                "properties": [
                                    {
                                        "id": 0,
                                        "name": "content",
                                        "type": {
                                            "type": "String"
                                        }
                                    },
                                    {
                                        "id": 1,
                                        "name": "time",
                                        "type": {
                                            "type": "Date"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    };

    !Array.prototype.__k8w_extended && Object.defineProperties(Array.prototype, {
        remove: {
            value: function value(filter) {
                if (typeof filter == 'function') {
                    for (var i = this.length - 1; i > -1; --i) {
                        filter(this[i], i, this) && this.splice(i, 1);
                    }
                }
                else {
                    for (var i = this.length - 1; i > -1; --i) {
                        this[i] === filter && this.splice(i, 1);
                    }
                }
                return this;
            }
        },
        removeOne: {
            value: function value(filter) {
                if (typeof filter == 'function') {
                    for (var i = 0; i < this.length; ++i) {
                        if (filter(this[i], i, this)) {
                            this.splice(i, 1);
                            return this;
                        }
                    }
                }
                else {
                    for (var i = 0; i < this.length; ++i) {
                        if (this[i] === filter) {
                            this.splice(i, 1);
                            return this;
                        }
                    }
                }
                return this;
            }
        },
        first: {
            value: function value() {
                return this.length ? this[0] : null;
            }
        },
        last: {
            value: function value() {
                return this.length ? this[this.length - 1] : null;
            }
        },
        max: {
            value: function value(mapper) {
                if (!this.length) {
                    return null;
                }
                function _max(a, b) {
                    return a > b ? a : b;
                }
                if (typeof mapper == 'function') {
                    var max = mapper(this[0], 0, this);
                    for (var i = 1; i < this.length; ++i) {
                        var temp = mapper(this[i], i, this);
                        max = temp > max ? temp : max;
                    }
                    return max;
                }
                else {
                    return this.reduce(function (prev, cur) {
                        return _max(prev, cur);
                    });
                }
            }
        },
        min: {
            value: function value(mapper) {
                if (!this.length) {
                    return null;
                }
                function _min(a, b) {
                    return a < b ? a : b;
                }
                if (typeof mapper == 'function') {
                    var min = mapper(this[0], 0, this);
                    for (var i = 1; i < this.length; ++i) {
                        var temp = mapper(this[i], i, this);
                        min = temp < min ? temp : min;
                    }
                    return min;
                }
                else {
                    return this.reduce(function (prev, cur) {
                        return _min(prev, cur);
                    });
                }
            }
        },
        distinct: {
            value: function value() {
                return this.filter(function (v, i, arr) {
                    return arr.indexOf(v) === i;
                });
            }
        },
        filterIndex: {
            value: function value(filter) {
                var output = [];
                for (var i = 0; i < this.length; ++i) {
                    if (filter(this[i], i, this)) {
                        output.push(i);
                    }
                }
                return output;
            }
        },
        count: {
            value: function value(filter) {
                var result = 0;
                for (var i = 0; i < this.length; ++i) {
                    if (filter(this[i], i, this)) {
                        ++result;
                    }
                }
                return result;
            }
        },
        sum: {
            value: function value(mapper) {
                var result = 0;
                for (var i = 0; i < this.length; ++i) {
                    result += mapper ? mapper(this[i], i, this) : this[i];
                }
                return result;
            }
        },
        average: {
            value: function value(mapper) {
                return this.sum(mapper) / this.length;
            }
        },
        orderBy: {
            value: function value() {
                var mappers = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    mappers[_i] = arguments[_i];
                }
                return this.slice().sort(function (a, b) {
                    for (var i = 0; i < mappers.length; ++i) {
                        var va = mappers[i](a);
                        var vb = mappers[i](b);
                        if (va > vb) {
                            return 1;
                        }
                        else if (va < vb) {
                            return -1;
                        }
                    }
                    return 0;
                });
            }
        },
        orderByDesc: {
            value: function value() {
                var mappers = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    mappers[_i] = arguments[_i];
                }
                return this.slice().sort(function (a, b) {
                    for (var i = 0; i < mappers.length; ++i) {
                        var va = mappers[i](a);
                        var vb = mappers[i](b);
                        if (va > vb) {
                            return -1;
                        }
                        else if (va < vb) {
                            return 1;
                        }
                    }
                    return 0;
                });
            }
        },
        binarySearch: {
            value: function value(_value, keyMapper) {
                var low = 0, high = this.length - 1;
                while (low <= high) {
                    var mid = (high + low) / 2 | 0;
                    var midValue = keyMapper ? keyMapper(this[mid]) : this[mid];
                    if (_value === midValue) {
                        return mid;
                    }
                    else if (_value > midValue) {
                        low = mid + 1;
                    }
                    else if (_value < midValue) {
                        high = mid - 1;
                    }
                }
                return -1;
            }
        },
        binaryInsert: {
            value: function value(item, keyMapper, unique) {
                if (typeof keyMapper == 'boolean') {
                    unique = keyMapper;
                    keyMapper = undefined;
                }
                var low = 0, high = this.length - 1;
                var mid = NaN;
                var itemValue = keyMapper ? keyMapper(item) : item;
                while (low <= high) {
                    mid = (high + low) / 2 | 0;
                    var midValue = keyMapper ? keyMapper(this[mid]) : this[mid];
                    if (itemValue === midValue) {
                        if (unique) {
                            return mid;
                        }
                        else {
                            break;
                        }
                    }
                    else if (itemValue > midValue) {
                        low = mid + 1;
                    }
                    else if (itemValue < midValue) {
                        high = mid - 1;
                    }
                }
                var index = low > mid ? mid + 1 : mid;
                this.splice(index, 0, item);
                return index;
            }
        },
        binaryDistinct: {
            value: function value(keyMapper) {
                return this.filter(function (v, i, arr) {
                    return arr.binarySearch(v, keyMapper) === i;
                });
            }
        },
        findLast: {
            value: function value(predicate) {
                for (var i = this.length - 1; i > -1; --i) {
                    if (predicate(this[i], i, this)) {
                        return this[i];
                    }
                }
                return undefined;
            }
        },
        findLastIndex: {
            value: function value(predicate) {
                for (var i = this.length - 1; i > -1; --i) {
                    if (predicate(this[i], i, this)) {
                        return i;
                    }
                }
                return -1;
            }
        },
        groupBy: {
            value: function value(grouper) {
                var group = this.reduce(function (prev, next) {
                    var groupKey = grouper(next);
                    if (!prev[groupKey]) {
                        prev[groupKey] = [];
                    }
                    prev[groupKey].push(next);
                    return prev;
                }, {});
                return Object.keys(group).map(function (key) {
                    var arr = group[key];
                    arr.key = key;
                    return arr;
                });
            }
        },
        __k8w_extended: {
            value: true
        }
    });
    function repeat(str, times) {
        var output = '';
        for (var i = 0; i < times; ++i) {
            output += str;
        }
        return output;
    }
    Date.prototype.format = function (formatString) {
        if (formatString === void 0) {
            formatString = 'yyyy-MM-dd hh:mm:ss';
        }
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/.test(formatString))
            formatString = formatString.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(formatString))
                formatString = formatString.replace(RegExp.$1, repeat('0', Math.max(RegExp.$1.length - ('' + o[k]).length, 0)) + o[k]);
        }
        return formatString;
    };
    Date.today = function () {
        var now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    };
    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function (obj) {
                return typeof obj;
            };
        }
        else {
            _typeof = function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }
    Object.merge = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < sources.length; ++i) {
            var source = sources[i];
            if (_typeof(source) != 'object' || source == null) {
                continue;
            }
            for (var skey in source) {
                if (!source.hasOwnProperty(skey)) {
                    continue;
                }
                if (source[skey] instanceof Date) {
                    target[skey] = new Date(source[skey]);
                    continue;
                }
                else if (_typeof(target[skey]) == 'object' && target[skey] != null && _typeof(source[skey]) == 'object' && source[skey] != null) {
                    Object.merge(target[skey], source[skey]);
                }
                else {
                    if (Array.isArray(source[skey])) {
                        target[skey] = Object.merge([], source[skey]);
                    }
                    else if (_typeof(source[skey]) == 'object' && source[skey] !== null) {
                        target[skey] = Object.merge({}, source[skey]);
                    }
                    else {
                        target[skey] = source[skey];
                    }
                }
            }
        }
        return target;
    };
    if (!Object.values) {
        Object.values = function (obj) {
            var output = [];
            for (var k in obj) {
                obj.hasOwnProperty(k) && output.push(obj[k]);
            }
            return output;
        };
    }
    if (!Object.entries) {
        Object.entries = function (obj) {
            var output = [];
            for (var key in obj) {
                if (!obj.hasOwnProperty(key)) {
                    continue;
                }
                output.push([key, obj[key]]);
            }
            return output;
        };
    }
    Object.forEach = function (obj, handler) {
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) {
                return;
            }
            handler(obj[key], key, obj);
        }
    };
    if (typeof window != 'undefined' && !window.console) {
        window.console = {};
        console.log = console.debug = console.info = console.warn = console.error = console.time = console.timeEnd = function () { };
    }
    if (!console.debug) {
        console.debug = console.log;
    }
    var extendStatics$1 = function (d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics$1(d, b);
    };
    function __extends$1(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$1 = function () {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    function __awaiter$1(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator$1(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var TsrpcErrorType;
    (function (TsrpcErrorType) {
        TsrpcErrorType["NetworkError"] = "NetworkError";
        TsrpcErrorType["ServerError"] = "ServerError";
        TsrpcErrorType["ClientError"] = "ClientError";
        TsrpcErrorType["ApiError"] = "ApiError";
    })(TsrpcErrorType || (TsrpcErrorType = {}));
    var TransportDataProto = {
        "ServerInputData": {
            "type": "Interface",
            "properties": [{
                    "id": 0,
                    "name": "serviceId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }, {
                    "id": 1,
                    "name": "buffer",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint8Array"
                    }
                }, {
                    "id": 2,
                    "name": "sn",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                }]
        },
        "ServerOutputData": {
            "type": "Interface",
            "properties": [{
                    "id": 0,
                    "name": "buffer",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint8Array"
                    },
                    "optional": true
                }, {
                    "id": 1,
                    "name": "error",
                    "type": {
                        "type": "Reference",
                        "target": "TsrpcErrorData"
                    },
                    "optional": true
                }, {
                    "id": 2,
                    "name": "serviceId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                }, {
                    "id": 3,
                    "name": "sn",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                }]
        },
        "TsrpcErrorData": {
            "type": "Interface",
            "properties": [{
                    "id": 0,
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                }, {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "TsrpcErrorType"
                    }
                }, {
                    "id": 2,
                    "name": "code",
                    "type": {
                        "type": "Union",
                        "members": [{
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            }, {
                                "id": 1,
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            }]
                    },
                    "optional": true
                }],
            "indexSignature": {
                "keyType": "String",
                "type": {
                    "type": "Any"
                }
            }
        },
        "TsrpcErrorType": {
            "type": "Enum",
            "members": [{
                    "id": 0,
                    "value": "NetworkError"
                }, {
                    "id": 1,
                    "value": "ServerError"
                }, {
                    "id": 2,
                    "value": "ClientError"
                }, {
                    "id": 3,
                    "value": "ApiError"
                }]
        }
    };
    var TsrpcError = function () {
        function TsrpcError(dataOrMessage, data) {
            var _a;
            if (typeof dataOrMessage === 'string') {
                this.message = dataOrMessage;
                this.type = (_a = data === null || data === void 0 ? void 0 : data.type) !== null && _a !== void 0 ? _a : TsrpcErrorType.ApiError;
                __assign$1(this, data);
            }
            else {
                __assign$1(this, dataOrMessage);
            }
        }
        TsrpcError.prototype.toString = function () {
            return "[TSRPC " + this.type + "]: " + this.message;
        };
        TsrpcError.Type = TsrpcErrorType;
        return TsrpcError;
    }();
    var SchemaType;
    (function (SchemaType) {
        SchemaType["Boolean"] = "Boolean";
        SchemaType["Number"] = "Number";
        SchemaType["String"] = "String";
        SchemaType["Array"] = "Array";
        SchemaType["Tuple"] = "Tuple";
        SchemaType["Enum"] = "Enum";
        SchemaType["Any"] = "Any";
        SchemaType["Literal"] = "Literal";
        SchemaType["Object"] = "Object";
        SchemaType["Interface"] = "Interface";
        SchemaType["Buffer"] = "Buffer";
        SchemaType["IndexedAccess"] = "IndexedAccess";
        SchemaType["Reference"] = "Reference";
        SchemaType["Union"] = "Union";
        SchemaType["Intersection"] = "Intersection";
        SchemaType["NonNullable"] = "NonNullable";
        SchemaType["Date"] = "Date";
        SchemaType["Pick"] = "Pick";
        SchemaType["Partial"] = "Partial";
        SchemaType["Omit"] = "Omit";
        SchemaType["Overwrite"] = "Overwrite";
    })(SchemaType || (SchemaType = {}));
    var ProtoHelper = function () {
        function ProtoHelper(proto) {
            this._schemaWithUuids = [];
            this._unionPropertiesCache = {};
            this._flatInterfaceSchemaCache = {};
            this.proto = proto;
        }
        ProtoHelper.prototype.parseReference = function (schema) {
            if (schema.type === SchemaType.Reference) {
                var parsedSchema = this.proto[schema.target];
                if (!parsedSchema) {
                    throw new Error("Cannot find reference target: " + schema.target);
                }
                if (this.isTypeReference(parsedSchema)) {
                    return this.parseReference(parsedSchema);
                }
                else {
                    return parsedSchema;
                }
            }
            else if (schema.type === SchemaType.IndexedAccess) {
                if (!this.isInterface(schema.objectType)) {
                    throw new Error("Error objectType: " + schema.objectType.type);
                }
                var flat = this.getFlatInterfaceSchema(schema.objectType);
                var propItem = flat.properties.find(function (v) {
                    return v.name === schema.index;
                });
                var propType = void 0;
                if (propItem) {
                    propType = propItem.type;
                }
                else {
                    if (flat.indexSignature) {
                        propType = flat.indexSignature.type;
                    }
                    else {
                        throw new Error("Error index: " + schema.index);
                    }
                }
                if (propItem && propItem.optional && (propItem.type.type !== SchemaType.Union
                    || propItem.type.members.findIndex(function (v) {
                        return v.type.type === SchemaType.Literal && v.type.literal === undefined;
                    }) === -1)) {
                    propType = {
                        type: SchemaType.Union,
                        members: [{
                                id: 0,
                                type: propType
                            }, {
                                id: 1,
                                type: {
                                    type: SchemaType.Literal,
                                    literal: undefined
                                }
                            }]
                    };
                }
                return this.isTypeReference(propType) ? this.parseReference(propType) : propType;
            }
            else {
                return schema;
            }
        };
        ProtoHelper.prototype.isInterface = function (schema, excludeReference) {
            if (excludeReference === void 0) {
                excludeReference = false;
            }
            if (!excludeReference && this.isTypeReference(schema)) {
                var parsed = this.parseReference(schema);
                return this.isInterface(parsed, excludeReference);
            }
            else {
                return schema.type === SchemaType.Interface || schema.type === SchemaType.Pick || schema.type === SchemaType.Partial || schema.type === SchemaType.Omit || schema.type === SchemaType.Overwrite;
            }
        };
        ProtoHelper.prototype.isTypeReference = function (schema) {
            return schema.type === SchemaType.Reference || schema.type === SchemaType.IndexedAccess;
        };
        ProtoHelper.prototype._getSchemaUuid = function (schema) {
            var schemaWithUuid = schema;
            if (!schemaWithUuid.uuid) {
                schemaWithUuid.uuid = this._schemaWithUuids.push(schemaWithUuid);
            }
            return schemaWithUuid.uuid;
        };
        ProtoHelper.prototype.getUnionProperties = function (schema) {
            var uuid = this._getSchemaUuid(schema);
            if (!this._unionPropertiesCache[uuid]) {
                this._unionPropertiesCache[uuid] = this._addUnionProperties([], schema.members.map(function (v) {
                    return v.type;
                }));
            }
            return this._unionPropertiesCache[uuid];
        };
        ProtoHelper.prototype._addUnionProperties = function (unionProperties, schemas) {
            for (var i = 0, len = schemas.length; i < len; ++i) {
                var schema = this.parseReference(schemas[i]);
                if (this.isInterface(schema)) {
                    var flat = this.getFlatInterfaceSchema(schema);
                    flat.properties.forEach(function (v) {
                        unionProperties.binaryInsert(v.name, true);
                    });
                    if (flat.indexSignature) {
                        var key = "[[" + flat.indexSignature.keyType + "]]";
                        unionProperties.binaryInsert(key, true);
                    }
                }
                else if (schema.type === SchemaType.Intersection || schema.type === SchemaType.Union) {
                    this._addUnionProperties(unionProperties, schema.members.map(function (v) {
                        return v.type;
                    }));
                }
            }
            return unionProperties;
        };
        ProtoHelper.prototype.applyUnionProperties = function (schema, unionProperties) {
            var newSchema = __assign$1(__assign$1({}, schema), {
                properties: schema.properties.slice()
            });
            var _loop_1 = function _loop_1(prop) {
                if (prop === '[[String]]') {
                    newSchema.indexSignature = newSchema.indexSignature || {
                        keyType: SchemaType.String,
                        type: {
                            type: SchemaType.Any
                        }
                    };
                }
                else if (prop === '[[Number]]') {
                    newSchema.indexSignature = newSchema.indexSignature || {
                        keyType: SchemaType.Number,
                        type: {
                            type: SchemaType.Any
                        }
                    };
                }
                else if (!schema.properties.find(function (v) {
                    return v.name === prop;
                })) {
                    newSchema.properties.push({
                        id: -1,
                        name: prop,
                        optional: true,
                        type: {
                            type: SchemaType.Any
                        }
                    });
                }
            };
            for (var _i = 0, unionProperties_1 = unionProperties; _i < unionProperties_1.length; _i++) {
                var prop = unionProperties_1[_i];
                _loop_1(prop);
            }
            return newSchema;
        };
        ProtoHelper.prototype.getFlatInterfaceSchema = function (schema) {
            var uuid = this._getSchemaUuid(schema);
            if (this._flatInterfaceSchemaCache[uuid]) {
                return this._flatInterfaceSchemaCache[uuid];
            }
            if (this.isTypeReference(schema)) {
                var parsed = this.parseReference(schema);
                if (parsed.type !== SchemaType.Interface) {
                    throw new Error("Cannot flatten non interface type: " + parsed.type);
                }
                this._flatInterfaceSchemaCache[uuid] = this.getFlatInterfaceSchema(parsed);
            }
            else if (schema.type === SchemaType.Interface) {
                this._flatInterfaceSchemaCache[uuid] = this._flattenInterface(schema);
            }
            else {
                this._flatInterfaceSchemaCache[uuid] = this._flattenMappedType(schema);
            }
            return this._flatInterfaceSchemaCache[uuid];
        };
        ProtoHelper.prototype._flattenInterface = function (schema) {
            var properties = {};
            var indexSignature;
            if (schema.properties) {
                for (var _i = 0, _a = schema.properties; _i < _a.length; _i++) {
                    var prop = _a[_i];
                    properties[prop.name] = {
                        optional: prop.optional,
                        type: prop.type
                    };
                }
            }
            if (schema.indexSignature) {
                indexSignature = schema.indexSignature;
            }
            if (schema.extends) {
                for (var _b = 0, _c = schema.extends; _b < _c.length; _b++) {
                    var extend = _c[_b];
                    var parsedExtRef = this.parseReference(extend.type);
                    if (parsedExtRef.type !== SchemaType.Interface) {
                        throw new Error('SchemaError: extends must from interface but from ' + parsedExtRef.type);
                    }
                    var flatenExtendsSchema = this.getFlatInterfaceSchema(parsedExtRef);
                    if (flatenExtendsSchema.properties) {
                        for (var _d = 0, _e = flatenExtendsSchema.properties; _d < _e.length; _d++) {
                            var prop = _e[_d];
                            if (!properties[prop.name]) {
                                properties[prop.name] = {
                                    optional: prop.optional,
                                    type: prop.type
                                };
                            }
                        }
                    }
                    if (flatenExtendsSchema.indexSignature && !indexSignature) {
                        indexSignature = flatenExtendsSchema.indexSignature;
                    }
                }
            }
            return {
                type: SchemaType.Interface,
                properties: Object.entries(properties).map(function (v, i) {
                    return {
                        id: i,
                        name: v[0],
                        optional: v[1].optional,
                        type: v[1].type
                    };
                }),
                indexSignature: indexSignature
            };
        };
        ProtoHelper.prototype._flattenMappedType = function (schema) {
            var target;
            if (this.isTypeReference(schema.target)) {
                var parsed = this.parseReference(schema.target);
                target = parsed;
            }
            else {
                target = schema.target;
            }
            var flatTarget;
            if (target.type === SchemaType.Pick || target.type === SchemaType.Partial || target.type === SchemaType.Omit || target.type === SchemaType.Overwrite) {
                flatTarget = this._flattenMappedType(target);
            }
            else if (target.type === SchemaType.Interface) {
                flatTarget = this._flattenInterface(target);
            }
            else {
                throw new Error("Invalid target.type: " + target.type);
            }
            if (schema.type === SchemaType.Pick) {
                var properties = [];
                var _loop_2 = function _loop_2(key) {
                    var propItem = flatTarget.properties.find(function (v) {
                        return v.name === key;
                    });
                    if (propItem) {
                        properties.push({
                            id: properties.length,
                            name: key,
                            optional: propItem.optional,
                            type: propItem.type
                        });
                    }
                    else if (flatTarget.indexSignature) {
                        properties.push({
                            id: properties.length,
                            name: key,
                            type: flatTarget.indexSignature.type
                        });
                    }
                    else {
                        throw new Error("Cannot find pick key [" + key + "]");
                    }
                };
                for (var _i = 0, _a = schema.keys; _i < _a.length; _i++) {
                    var key = _a[_i];
                    _loop_2(key);
                }
                return {
                    type: SchemaType.Interface,
                    properties: properties
                };
            }
            else if (schema.type === SchemaType.Partial) {
                for (var _b = 0, _c = flatTarget.properties; _b < _c.length; _b++) {
                    var v = _c[_b];
                    v.optional = true;
                }
                return flatTarget;
            }
            else if (schema.type === SchemaType.Omit) {
                var _loop_3 = function _loop_3(key) {
                    flatTarget.properties.removeOne(function (v) {
                        return v.name === key;
                    });
                };
                for (var _d = 0, _e = schema.keys; _d < _e.length; _d++) {
                    var key = _e[_d];
                    _loop_3(key);
                }
                return flatTarget;
            }
            else if (schema.type === SchemaType.Overwrite) {
                var overwrite = this.getFlatInterfaceSchema(schema.overwrite);
                if (overwrite.indexSignature) {
                    flatTarget.indexSignature = overwrite.indexSignature;
                }
                var _loop_4 = function _loop_4(prop) {
                    flatTarget.properties.removeOne(function (v) {
                        return v.name === prop.name;
                    });
                    flatTarget.properties.push(prop);
                };
                for (var _f = 0, _g = overwrite.properties; _f < _g.length; _f++) {
                    var prop = _g[_f];
                    _loop_4(prop);
                }
                return flatTarget;
            }
            else {
                throw new Error("Unknown type: " + schema.type);
            }
        };
        ProtoHelper.prototype.parseMappedType = function (schema) {
            var parents = [];
            var child = schema;
            do {
                parents.push(child);
                child = this.parseReference(child.target);
            } while (child.type === SchemaType.Pick || child.type === SchemaType.Omit || child.type === SchemaType.Partial || child.type === SchemaType.Overwrite);
            if (child.type === SchemaType.Interface) {
                return child;
            }
            else if (child.type === SchemaType.Union) {
                var newSchema = {
                    type: SchemaType.Union,
                    members: child.members.map(function (v) {
                        var type = v.type;
                        for (var i = parents.length - 1; i > -1; --i) {
                            var parent_1 = parents[i];
                            type = __assign$1(__assign$1({}, parent_1), {
                                target: type
                            });
                        }
                        return {
                            id: v.id,
                            type: type
                        };
                    })
                };
                return newSchema;
            }
            else {
                throw new Error("Unsupported pattern " + schema.type + "<" + child.type + ">");
            }
        };
        return ProtoHelper;
    }();
    var _a;
    var ErrorType;
    (function (ErrorType) {
        ErrorType["TypeError"] = "TypeError";
        ErrorType["InvalidScalarType"] = "InvalidScalarType";
        ErrorType["TupleOverLength"] = "TupleOverLength";
        ErrorType["InvalidEnumValue"] = "InvalidEnumValue";
        ErrorType["InvalidLiteralValue"] = "InvalidLiteralValue";
        ErrorType["MissingRequiredProperty"] = "MissingRequiredProperty";
        ErrorType["ExcessProperty"] = "ExcessProperty";
        ErrorType["InvalidNumberKey"] = "InvalidNumberKey";
        ErrorType["UnionTypesNotMatch"] = "UnionTypesNotMatch";
        ErrorType["UnionMembersNotMatch"] = "UnionMembersNotMatch";
    })(ErrorType || (ErrorType = {}));
    var ErrorMsg = (_a = {}, _a[ErrorType.TypeError] = function (expect, actual) {
        return "Expected type to be `" + expect + "`, actually `" + actual + "`.";
    }, _a[ErrorType.InvalidScalarType] = function (value, scalarType) {
        return "`" + value + "` is not a valid `" + scalarType + "`.";
    }, _a[ErrorType.TupleOverLength] = function (valueLength, schemaLength) {
        return "Value has " + valueLength + " elements but schema allows only " + schemaLength + ".";
    }, _a[ErrorType.InvalidEnumValue] = function (value) {
        return "`" + value + "` is not a valid enum member.";
    }, _a[ErrorType.InvalidLiteralValue] = function (expected, actual) {
        return "Expected to equals `" + stringify(expected) + "`, actually `" + stringify(actual) + "`";
    }, _a[ErrorType.MissingRequiredProperty] = function (propName) {
        return "Missing required property `" + propName + "`.";
    }, _a[ErrorType.ExcessProperty] = function (propName) {
        return "Excess property `" + propName + "` should not exists.";
    }, _a[ErrorType.InvalidNumberKey] = function (key) {
        return "`" + key + "` is not a valid key, the key here should be a `number`.";
    },
        _a[ErrorType.UnionTypesNotMatch] = function (value, types) {
            return "`" + stringify(value) + "` is not matched to `" + types.join(' | ') + "`";
        }, _a[ErrorType.UnionMembersNotMatch] = function (memberErrors) {
        return "No union member matched, detail:\n" + memberErrors.map(function (v, i) {
            return "  <" + i + "> " + v.errMsg;
        }).join('\n');
    }, _a);
    function stringify(value) {
        if (typeof value === 'string') {
            var output = JSON.stringify(value);
            return "'" + output.substr(1, output.length - 2) + "'";
        }
        return JSON.stringify(value);
    }
    var ValidateResultError = function () {
        function ValidateResultError(error) {
            this.isSucc = false;
            this.error = error;
        }
        Object.defineProperty(ValidateResultError.prototype, "errMsg", {
            get: function get() {
                return ValidateResultError.getErrMsg(this.error);
            },
            enumerable: false,
            configurable: true
        });
        ValidateResultError.getErrMsg = function (error) {
            var _a;
            var errMsg = ErrorMsg[error.type].apply(ErrorMsg, error.params);
            if ((_a = error.inner) === null || _a === void 0 ? void 0 : _a.property.length) {
                return "Property `" + error.inner.property.join('.') + "`: " + errMsg;
            }
            else {
                return errMsg;
            }
        };
        return ValidateResultError;
    }();
    var ValidateResultUtil = function () {
        function ValidateResultUtil() { }
        ValidateResultUtil.error = function (type) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return new ValidateResultError({
                type: type,
                params: params
            });
        };
        ValidateResultUtil.innerError = function (property, value, schema, error) {
            var _a;
            if (error.error.inner) {
                if (typeof property === 'string') {
                    error.error.inner.property.unshift(property);
                }
                else {
                    (_a = error.error.inner.property).unshift.apply(_a, property);
                }
            }
            else {
                error.error.inner = {
                    property: typeof property === 'string' ? [property] : property,
                    value: value,
                    schema: schema
                };
            }
            return error;
        };
        ValidateResultUtil.succ = {
            isSucc: true
        };
        return ValidateResultUtil;
    }();
    var typedArrays = {
        Int8Array: Int8Array,
        Int16Array: Int16Array,
        Int32Array: Int32Array,
        BigInt64Array: typeof BigInt64Array !== 'undefined' ? BigInt64Array : undefined,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array,
        Uint32Array: Uint32Array,
        BigUint64Array: typeof BigUint64Array !== 'undefined' ? BigUint64Array : undefined,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    var TSBufferValidator = function () {
        function TSBufferValidator(proto, options) {
            this.options = {
                excessPropertyChecks: true,
                strictNullChecks: true,
                cloneProto: true
            };
            if (options) {
                this.options = __assign$1(__assign$1({}, this.options), options);
            }
            this.proto = this.options.cloneProto ? Object.merge({}, proto) : proto;
            this.protoHelper = new ProtoHelper(this.proto);
        }
        TSBufferValidator.prototype.validate = function (value, schemaOrId, options) {
            var _a, _b;
            var schema;
            var schemaId;
            if (typeof schemaOrId === 'string') {
                schemaId = schemaOrId;
                schema = this.proto[schemaId];
                if (!schema) {
                    throw new Error("Cannot find schema: " + schemaId);
                }
            }
            else {
                schema = schemaOrId;
            }
            return this._validate(value, schema, __assign$1(__assign$1({}, options), {
                excessPropertyChecks: (_a = options === null || options === void 0 ? void 0 : options.excessPropertyChecks) !== null && _a !== void 0 ? _a : this.options.excessPropertyChecks,
                strictNullChecks: (_b = options === null || options === void 0 ? void 0 : options.strictNullChecks) !== null && _b !== void 0 ? _b : this.options.strictNullChecks
            }));
        };
        TSBufferValidator.prototype._validate = function (value, schema, options) {
            var _a;
            var vRes;
            switch (schema.type) {
                case SchemaType.Boolean:
                    vRes = this._validateBooleanType(value, schema);
                    break;
                case SchemaType.Number:
                    vRes = this._validateNumberType(value, schema);
                    break;
                case SchemaType.String:
                    vRes = this._validateStringType(value, schema);
                    break;
                case SchemaType.Array:
                    vRes = this._validateArrayType(value, schema, options);
                    break;
                case SchemaType.Tuple:
                    vRes = this._validateTupleType(value, schema, options);
                    break;
                case SchemaType.Enum:
                    vRes = this._validateEnumType(value, schema);
                    break;
                case SchemaType.Any:
                    vRes = this._validateAnyType(value);
                    break;
                case SchemaType.Literal:
                    vRes = this._validateLiteralType(value, schema, (_a = options === null || options === void 0 ? void 0 : options.strictNullChecks) !== null && _a !== void 0 ? _a : this.options.strictNullChecks);
                    break;
                case SchemaType.Object:
                    vRes = this._validateObjectType(value, schema);
                    break;
                case SchemaType.Interface:
                    vRes = this._validateInterfaceType(value, schema, options);
                    break;
                case SchemaType.Buffer:
                    vRes = this._validateBufferType(value, schema);
                    break;
                case SchemaType.IndexedAccess:
                case SchemaType.Reference:
                    vRes = this._validateReferenceType(value, schema, options);
                    break;
                case SchemaType.Union:
                    vRes = this._validateUnionType(value, schema, options);
                    break;
                case SchemaType.Intersection:
                    vRes = this._validateIntersectionType(value, schema, options);
                    break;
                case SchemaType.Pick:
                case SchemaType.Omit:
                case SchemaType.Partial:
                case SchemaType.Overwrite:
                    vRes = this._validateMappedType(value, schema, options);
                    break;
                case SchemaType.Date:
                    vRes = this._validateDateType(value);
                    break;
                case SchemaType.NonNullable:
                    vRes = this._validateNonNullableType(value, schema, options);
                    break;
                default:
                    throw new Error("Unsupported schema type: " + schema.type);
            }
            if (options === null || options === void 0 ? void 0 : options.prune) {
                if (options.prune.output === undefined) {
                    options.prune.output = value;
                }
                if (options.prune.parent) {
                    options.prune.parent.value[options.prune.parent.key] = options.prune.output;
                }
            }
            return vRes;
        };
        TSBufferValidator.prototype.prune = function (value, schemaOrId, options) {
            var _a;
            var schema = typeof schemaOrId === 'string' ? this.proto[schemaOrId] : schemaOrId;
            if (!schema) {
                throw new Error('Cannot find schema: ' + schemaOrId);
            }
            var prune = {};
            var vRes = this._validate(value, schema, __assign$1(__assign$1({}, options), {
                prune: prune,
                excessPropertyChecks: false,
                strictNullChecks: (_a = options === null || options === void 0 ? void 0 : options.strictNullChecks) !== null && _a !== void 0 ? _a : this.options.strictNullChecks
            }));
            if (vRes.isSucc) {
                vRes.pruneOutput = prune.output;
            }
            return vRes;
        };
        TSBufferValidator.prototype._validateBooleanType = function (value, schema) {
            var type = this._getTypeof(value);
            if (type === 'boolean') {
                return ValidateResultUtil.succ;
            }
            else {
                return ValidateResultUtil.error(ErrorType.TypeError, 'boolean', type);
            }
        };
        TSBufferValidator.prototype._validateNumberType = function (value, schema) {
            var scalarType = schema.scalarType || 'double';
            var type = this._getTypeof(value);
            var rightType = scalarType.indexOf('big') > -1 ? 'bigint' : 'number';
            if (type !== rightType) {
                return ValidateResultUtil.error(ErrorType.TypeError, rightType, type);
            }
            if (scalarType !== 'double' && type === 'number' && !Number.isInteger(value)) {
                return ValidateResultUtil.error(ErrorType.InvalidScalarType, value, scalarType);
            }
            if (scalarType.indexOf('uint') > -1 && value < 0) {
                return ValidateResultUtil.error(ErrorType.InvalidScalarType, value, scalarType);
            }
            return ValidateResultUtil.succ;
        };
        TSBufferValidator.prototype._validateStringType = function (value, schema) {
            var type = this._getTypeof(value);
            return type === 'string' ? ValidateResultUtil.succ : ValidateResultUtil.error(ErrorType.TypeError, 'string', type);
        };
        TSBufferValidator.prototype._validateArrayType = function (value, schema, options) {
            var type = this._getTypeof(value);
            if (type !== SchemaType.Array) {
                return ValidateResultUtil.error(ErrorType.TypeError, SchemaType.Array, type);
            }
            var prune = options.prune;
            if (prune) {
                prune.output = Array.from({
                    length: value.length
                });
            }
            for (var i = 0; i < value.length; ++i) {
                var elemValidateResult = this._validate(value[i], schema.elementType, __assign$1(__assign$1({}, options), {
                    prune: (prune === null || prune === void 0 ? void 0 : prune.output) ? {
                        parent: {
                            value: prune.output,
                            key: i
                        }
                    } : undefined
                }));
                if (!elemValidateResult.isSucc) {
                    return ValidateResultUtil.innerError('' + i, value[i], schema.elementType, elemValidateResult);
                }
            }
            return ValidateResultUtil.succ;
        };
        TSBufferValidator.prototype._validateTupleType = function (value, schema, options) {
            var type = this._getTypeof(value);
            if (type !== SchemaType.Array) {
                return ValidateResultUtil.error(ErrorType.TypeError, SchemaType.Array, type);
            }
            var prune = options.prune;
            if (!prune && options.excessPropertyChecks && value.length > schema.elementTypes.length) {
                return ValidateResultUtil.error(ErrorType.TupleOverLength, value.length, schema.elementTypes.length);
            }
            if (prune) {
                prune.output = Array.from({
                    length: Math.min(value.length, schema.elementTypes.length)
                });
            }
            for (var i = 0; i < schema.elementTypes.length; ++i) {
                if (value[i] === undefined || value[i] === null && !options.strictNullChecks) {
                    var isOptional = schema.optionalStartIndex !== undefined && i >= schema.optionalStartIndex || this._canBeUndefined(schema.elementTypes[i]);
                    if (isOptional) {
                        continue;
                    }
                    else {
                        return ValidateResultUtil.error(ErrorType.MissingRequiredProperty, i);
                    }
                }
                var elemValidateResult = this._validate(value[i], schema.elementTypes[i], {
                    prune: (prune === null || prune === void 0 ? void 0 : prune.output) ? {
                        parent: {
                            value: prune.output,
                            key: i
                        }
                    } : undefined,
                    strictNullChecks: options.strictNullChecks,
                    excessPropertyChecks: options.excessPropertyChecks
                });
                if (!elemValidateResult.isSucc) {
                    return ValidateResultUtil.innerError('' + i, value[i], schema.elementTypes[i], elemValidateResult);
                }
            }
            return ValidateResultUtil.succ;
        };
        TSBufferValidator.prototype._canBeUndefined = function (schema) {
            var _this = this;
            if (schema.type === SchemaType.Union) {
                return schema.members.some(function (v) {
                    return _this._canBeUndefined(v.type);
                });
            }
            if (schema.type === SchemaType.Literal && schema.literal === undefined) {
                return true;
            }
            return false;
        };
        TSBufferValidator.prototype._validateEnumType = function (value, schema) {
            var type = this._getTypeof(value);
            if (type !== 'string' && type !== 'number') {
                return ValidateResultUtil.error(ErrorType.TypeError, 'string | number', type);
            }
            if (schema.members.some(function (v) {
                return v.value === value;
            })) {
                return ValidateResultUtil.succ;
            }
            else {
                return ValidateResultUtil.error(ErrorType.InvalidEnumValue, value);
            }
        };
        TSBufferValidator.prototype._validateAnyType = function (value) {
            return ValidateResultUtil.succ;
        };
        TSBufferValidator.prototype._validateLiteralType = function (value, schema, strictNullChecks) {
            if (!strictNullChecks && (schema.literal === null || schema.literal === undefined)) {
                return value === null || value === undefined ? ValidateResultUtil.succ : ValidateResultUtil.error(ErrorType.InvalidLiteralValue, schema.literal, value);
            }
            return value === schema.literal ? ValidateResultUtil.succ : ValidateResultUtil.error(ErrorType.InvalidLiteralValue, schema.literal, value);
        };
        TSBufferValidator.prototype._validateObjectType = function (value, schema) {
            var type = this._getTypeof(value);
            return type === 'Object' || type === 'Array' ? ValidateResultUtil.succ : ValidateResultUtil.error(ErrorType.TypeError, 'Object', type);
        };
        TSBufferValidator.prototype._validateInterfaceType = function (value, schema, options) {
            var type = this._getTypeof(value);
            if (type !== 'Object') {
                return ValidateResultUtil.error(ErrorType.TypeError, 'Object', type);
            }
            var flatSchema = this.protoHelper.getFlatInterfaceSchema(schema);
            if (options.unionProperties) {
                flatSchema = this.protoHelper.applyUnionProperties(flatSchema, options.unionProperties);
            }
            return this._validateFlatInterface(value, flatSchema, options);
        };
        TSBufferValidator.prototype._validateMappedType = function (value, schema, options) {
            var parsed = this.protoHelper.parseMappedType(schema);
            if (parsed.type === SchemaType.Interface) {
                return this._validateInterfaceType(value, schema, options);
            }
            else if (parsed.type === SchemaType.Union) {
                return this._validateUnionType(value, parsed, options);
            }
            throw new Error();
        };
        TSBufferValidator.prototype._validateFlatInterface = function (value, schema, options) {
            if (schema.indexSignature && schema.indexSignature.keyType === SchemaType.Number) {
                for (var key in value) {
                    if (!this._isNumberKey(key)) {
                        return ValidateResultUtil.error(ErrorType.InvalidNumberKey, key);
                    }
                }
            }
            var prune = options.prune;
            if (prune) {
                prune.output = {};
            }
            if (!prune && options.excessPropertyChecks && !schema.indexSignature) {
                var validProperties_1 = schema.properties.map(function (v) {
                    return v.name;
                });
                var firstExcessProperty = Object.keys(value).find(function (v) {
                    return validProperties_1.indexOf(v) === -1;
                });
                if (firstExcessProperty) {
                    return ValidateResultUtil.error(ErrorType.ExcessProperty, firstExcessProperty);
                }
            }
            if (schema.properties) {
                for (var _i = 0, _a = schema.properties; _i < _a.length; _i++) {
                    var property = _a[_i];
                    if (value[property.name] === undefined || value[property.name] === null && !options.strictNullChecks) {
                        var isOptional = property.optional || this._canBeUndefined(property.type);
                        if (isOptional) {
                            continue;
                        }
                        else {
                            return ValidateResultUtil.error(ErrorType.MissingRequiredProperty, property.name);
                        }
                    }
                    var vRes = this._validate(value[property.name], property.type, {
                        prune: (prune === null || prune === void 0 ? void 0 : prune.output) && property.id > -1 ? {
                            parent: {
                                value: prune.output,
                                key: property.name
                            }
                        } : undefined,
                        strictNullChecks: options.strictNullChecks,
                        excessPropertyChecks: options.excessPropertyChecks
                    });
                    if (!vRes.isSucc) {
                        return ValidateResultUtil.innerError(property.name, value[property.name], property.type, vRes);
                    }
                }
            }
            if (schema.indexSignature) {
                for (var key in value) {
                    var vRes = this._validate(value[key], schema.indexSignature.type, {
                        prune: (prune === null || prune === void 0 ? void 0 : prune.output) ? {
                            parent: {
                                value: prune.output,
                                key: key
                            }
                        } : undefined,
                        strictNullChecks: options.strictNullChecks,
                        excessPropertyChecks: options.excessPropertyChecks
                    });
                    if (!vRes.isSucc) {
                        return ValidateResultUtil.innerError(key, value[key], schema.indexSignature.type, vRes);
                    }
                }
            }
            return ValidateResultUtil.succ;
        };
        TSBufferValidator.prototype._validateBufferType = function (value, schema) {
            var _a, _b;
            var type = this._getTypeof(value);
            if (type !== 'Object') {
                return ValidateResultUtil.error(ErrorType.TypeError, schema.arrayType || 'ArrayBuffer', type);
            }
            else if (schema.arrayType) {
                var typeArrayClass = typedArrays[schema.arrayType];
                if (!typeArrayClass) {
                    throw new Error("Error TypedArray type: " + schema.arrayType);
                }
                return value instanceof typeArrayClass ? ValidateResultUtil.succ : ValidateResultUtil.error(ErrorType.TypeError, schema.arrayType, (_a = value === null || value === void 0 ? void 0 : value.constructor) === null || _a === void 0 ? void 0 : _a.name);
            }
            else {
                return value instanceof ArrayBuffer ? ValidateResultUtil.succ : ValidateResultUtil.error(ErrorType.TypeError, 'ArrayBuffer', (_b = value === null || value === void 0 ? void 0 : value.constructor) === null || _b === void 0 ? void 0 : _b.name);
            }
        };
        TSBufferValidator.prototype._validateReferenceType = function (value, schema, options) {
            return this._validate(value, this.protoHelper.parseReference(schema), options);
        };
        TSBufferValidator.prototype._validateUnionType = function (value, schema, options) {
            var _this = this;
            options.unionProperties = options.unionProperties || this.protoHelper.getUnionProperties(schema);
            var isObjectPrune = false;
            var prune = options.prune;
            if (prune && value && Object.getPrototypeOf(value) === Object.prototype) {
                isObjectPrune = true;
                prune.output = {};
            }
            var isSomeSucc = false;
            var memberErrors = [];
            for (var i = 0; i < schema.members.length; ++i) {
                var member = schema.members[i];
                var memberType = this.protoHelper.isTypeReference(member.type) ? this.protoHelper.parseReference(member.type) : member.type;
                var memberPrune = prune ? {} : undefined;
                var vRes = this._validate(value, memberType, __assign$1(__assign$1({}, options), {
                    prune: memberPrune
                }));
                if (vRes.isSucc) {
                    isSomeSucc = true;
                    if (isObjectPrune) {
                        prune.output = __assign$1(__assign$1({}, prune.output), memberPrune.output);
                    }
                    else {
                        break;
                    }
                }
                else {
                    memberErrors.push(vRes);
                }
            }
            if (isSomeSucc) {
                return ValidateResultUtil.succ;
            }
            else {
                var msg0_1 = memberErrors[0].errMsg;
                if (memberErrors.every(function (v) {
                    return v.errMsg === msg0_1;
                })) {
                    return memberErrors[0];
                }
                var nonLiteralErrors = memberErrors.filter(function (v) {
                    return v.error.type !== ErrorType.InvalidLiteralValue;
                });
                if (nonLiteralErrors.length === 1) {
                    return nonLiteralErrors[0];
                }
                if (memberErrors.every(function (v) {
                    return !v.error.inner && (v.error.type === ErrorType.TypeError || v.error.type === ErrorType.InvalidLiteralValue);
                })) {
                    var valueType = this._getTypeof(value);
                    var expectedTypes = memberErrors.map(function (v) {
                        return v.error.type === ErrorType.TypeError ? v.error.params[0] : _this._getTypeof(v.error.params[0]);
                    }).distinct();
                    if (expectedTypes.indexOf(valueType) === -1) {
                        return ValidateResultUtil.error(ErrorType.TypeError, expectedTypes.join(' | '), this._getTypeof(value));
                    }
                    if (valueType !== 'Object' && valueType !== SchemaType.Array) {
                        var types = memberErrors.map(function (v) {
                            return v.error.type === ErrorType.TypeError ? v.error.params[0] : stringify(v.error.params[0]);
                        }).distinct();
                        return ValidateResultUtil.error(ErrorType.UnionTypesNotMatch, value, types);
                    }
                }
                return ValidateResultUtil.error(ErrorType.UnionMembersNotMatch, memberErrors);
            }
        };
        TSBufferValidator.prototype._validateIntersectionType = function (value, schema, options) {
            options.unionProperties = options.unionProperties || this.protoHelper.getUnionProperties(schema);
            var isObjectPrune = false;
            var prune = options.prune;
            if (prune && value && Object.getPrototypeOf(value) === Object.prototype) {
                prune.output = {};
                isObjectPrune = true;
            }
            for (var i = 0, len = schema.members.length; i < len; ++i) {
                var memberType = schema.members[i].type;
                memberType = this.protoHelper.isTypeReference(memberType) ? this.protoHelper.parseReference(memberType) : memberType;
                var memberPrune = prune ? {} : undefined;
                var vRes = this._validate(value, memberType, __assign$1(__assign$1({}, options), {
                    prune: memberPrune
                }));
                if (!vRes.isSucc) {
                    return vRes;
                }
                if (isObjectPrune) {
                    prune.output = __assign$1(__assign$1({}, prune.output), memberPrune.output);
                }
            }
            return ValidateResultUtil.succ;
        };
        TSBufferValidator.prototype._validateDateType = function (value) {
            if (value instanceof Date) {
                return ValidateResultUtil.succ;
            }
            else {
                return ValidateResultUtil.error(ErrorType.TypeError, 'Date', this._getTypeof(value));
            }
        };
        TSBufferValidator.prototype._validateNonNullableType = function (value, schema, options) {
            var type = this._getTypeof(value);
            if ((type === 'null' || type === 'undefined') && schema.target.type !== 'Any') {
                return ValidateResultUtil.error(ErrorType.TypeError, 'NonNullable', type);
            }
            return this._validate(value, schema.target, options);
        };
        TSBufferValidator.prototype._isNumberKey = function (key) {
            var int = parseInt(key);
            return !(isNaN(int) || '' + int !== key);
        };
        TSBufferValidator.prototype._getTypeof = function (value) {
            var type = _typeof(value);
            if (type === 'object') {
                if (value === null) {
                    return 'null';
                }
                else if (Array.isArray(value)) {
                    return SchemaType.Array;
                }
                else {
                    return 'Object';
                }
            }
            return type;
        };
        return TSBufferValidator;
    }();
    var IdBlockUtil = function () {
        function IdBlockUtil() { }
        IdBlockUtil.getPayloadLengthInfo = function (parsedSchema) {
            switch (parsedSchema.type) {
                case SchemaType.Boolean:
                case SchemaType.Enum:
                    return {
                        lengthType: LengthType.Varint
                    };
                case SchemaType.Number:
                    if (!parsedSchema.scalarType || parsedSchema.scalarType.includes('64') || parsedSchema.scalarType === 'double') {
                        return {
                            lengthType: LengthType.Bit64
                        };
                    }
                    else if (parsedSchema.scalarType && parsedSchema.scalarType.startsWith('big')) {
                        return {
                            lengthType: LengthType.LengthDelimited
                        };
                    }
                    else {
                        return {
                            lengthType: LengthType.Varint
                        };
                    }
                case SchemaType.Buffer:
                case SchemaType.String:
                case SchemaType.Any:
                case SchemaType.Object:
                    return {
                        lengthType: LengthType.LengthDelimited
                    };
                case SchemaType.Interface:
                case SchemaType.Pick:
                case SchemaType.Partial:
                case SchemaType.Omit:
                case SchemaType.Union:
                case SchemaType.Intersection:
                    return {
                        lengthType: LengthType.IdBlock
                    };
                case SchemaType.Array:
                case SchemaType.Overwrite:
                case SchemaType.Tuple:
                    return {
                        lengthType: LengthType.LengthDelimited,
                        needLengthPrefix: true
                    };
                case SchemaType.Literal:
                    return {
                        lengthType: LengthType.LengthDelimited,
                        needLengthPrefix: false
                    };
                case SchemaType.Date:
                    return {
                        lengthType: LengthType.Varint
                    };
                default:
                    throw new Error("Unrecognized schema type: " + parsedSchema.type);
            }
        };
        return IdBlockUtil;
    }();
    var LengthType;
    (function (LengthType) {
        LengthType[LengthType["LengthDelimited"] = 0] = "LengthDelimited";
        LengthType[LengthType["Varint"] = 1] = "Varint";
        LengthType[LengthType["Bit64"] = 2] = "Bit64";
        LengthType[LengthType["IdBlock"] = 3] = "IdBlock";
    })(LengthType || (LengthType = {}));
    var SchemaUtil = function () {
        function SchemaUtil() { }
        SchemaUtil.canBeLiteral = function (schema, literal) {
            var _this = this;
            if (schema.type === SchemaType.Union) {
                return schema.members.some(function (v) {
                    return _this.canBeLiteral(v.type, literal);
                });
            }
            if (schema.type === SchemaType.Any) {
                return true;
            }
            if (schema.type === SchemaType.Literal && schema.literal === literal) {
                return true;
            }
            return false;
        };
        return SchemaUtil;
    }();
    var TypedArrays = {
        Int8Array: Int8Array,
        Int16Array: Int16Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    var Utf8CoderJS = {
        measureLength: function measureLength(str) {
            var len = 0, c = 0;
            for (var i = 0; i < str.length; ++i) {
                c = str.charCodeAt(i);
                if (c < 128)
                    len += 1;
                else if (c < 2048)
                    len += 2;
                else if ((c & 0xFC00) === 0xD800 && (str.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
                    ++i;
                    len += 4;
                }
                else
                    len += 3;
            }
            return len;
        },
        write: function write(str, buf, pos) {
            var start = pos, c1, c2;
            for (var i = 0; i < str.length; ++i) {
                c1 = str.charCodeAt(i);
                if (c1 < 128) {
                    buf[pos++] = c1;
                }
                else if (c1 < 2048) {
                    buf[pos++] = c1 >> 6 | 192;
                    buf[pos++] = c1 & 63 | 128;
                }
                else if ((c1 & 0xFC00) === 0xD800 && ((c2 = str.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
                    c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
                    ++i;
                    buf[pos++] = c1 >> 18 | 240;
                    buf[pos++] = c1 >> 12 & 63 | 128;
                    buf[pos++] = c1 >> 6 & 63 | 128;
                    buf[pos++] = c1 & 63 | 128;
                }
                else {
                    buf[pos++] = c1 >> 12 | 224;
                    buf[pos++] = c1 >> 6 & 63 | 128;
                    buf[pos++] = c1 & 63 | 128;
                }
            }
            return pos - start;
        },
        read: function read(buf, pos, length) {
            if (length < 1)
                return "";
            var parts = undefined, chunk = [], i = 0, t;
            var end = pos + length;
            while (pos < end) {
                t = buf[pos++];
                if (t < 128)
                    chunk[i++] = t;
                else if (t > 191 && t < 224)
                    chunk[i++] = (t & 31) << 6 | buf[pos++] & 63;
                else if (t > 239 && t < 365) {
                    t = ((t & 7) << 18 | (buf[pos++] & 63) << 12 | (buf[pos++] & 63) << 6 | buf[pos++] & 63) - 0x10000;
                    chunk[i++] = 0xD800 + (t >> 10);
                    chunk[i++] = 0xDC00 + (t & 1023);
                }
                else
                    chunk[i++] = (t & 15) << 12 | (buf[pos++] & 63) << 6 | buf[pos++] & 63;
                if (i > 8191) {
                    (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
                    i = 0;
                }
            }
            if (parts) {
                if (i)
                    parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
                return parts.join("");
            }
            return String.fromCharCode.apply(String, chunk.slice(0, i));
        }
    };
    var Utf8CoderNode = {
        measureLength: function measureLength(str) {
            return Buffer.byteLength(str, 'utf-8');
        },
        write: function write(str, buf, pos) {
            return Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength).write(str, pos, 'utf-8');
        },
        read: function read(buf, pos, length) {
            return Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength).toString('utf-8', pos, pos + length);
        }
    };
    var Utf8Coder = typeof Buffer !== 'undefined' && Buffer.from && Buffer.prototype.write ? Utf8CoderNode : Utf8CoderJS;
    var Varint64 = function () {
        function Varint64(high, low, byteLength) {
            this.uint32s = new Uint32Array([high, low]);
            if (byteLength !== undefined) {
                this._byteLength = byteLength;
            }
        }
        Varint64.from = function (value) {
            if (value === 0) {
                return this.Zero;
            }
            var sign = value < 0;
            if (sign) {
                value = -value;
            }
            var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
            if (sign) {
                hi = ~hi >>> 0;
                lo = ~lo >>> 0;
                if (++lo > 4294967295) {
                    lo = 0;
                    if (++hi > 4294967295)
                        hi = 0;
                }
            }
            return new Varint64(hi, lo);
        };
        Varint64.prototype.toNumber = function (unsigned) {
            if (!unsigned && this.uint32s[0] >>> 31) {
                var low = ~this.uint32s[1] + 1 >>> 0, high = ~this.uint32s[0] >>> 0;
                if (!low)
                    high = high + 1 >>> 0;
                return -(low + high * 4294967296);
            }
            return this.uint32s[1] + this.uint32s[0] * 4294967296;
        };
        Varint64.prototype.zzEncode = function () {
            var mask = this.uint32s[0] >> 31;
            this.uint32s[0] = ((this.uint32s[0] << 1 | this.uint32s[1] >>> 31) ^ mask) >>> 0;
            this.uint32s[1] = (this.uint32s[1] << 1 ^ mask) >>> 0;
            return this;
        };
        Varint64.prototype.zzDecode = function () {
            var mask = -(this.uint32s[1] & 1);
            this.uint32s[1] = ((this.uint32s[1] >>> 1 | this.uint32s[0] << 31) ^ mask) >>> 0;
            this.uint32s[0] = (this.uint32s[0] >>> 1 ^ mask) >>> 0;
            return this;
        };
        Object.defineProperty(Varint64.prototype, "byteLength", {
            get: function get() {
                if (this._byteLength === undefined) {
                    var part0 = this.uint32s[1], part1 = (this.uint32s[1] >>> 28 | this.uint32s[0] << 4) >>> 0, part2 = this.uint32s[0] >>> 24;
                    this._byteLength = part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
                }
                return this._byteLength;
            },
            enumerable: false,
            configurable: true
        });
        Varint64.prototype.writeToBuffer = function (buf, pos) {
            while (this.uint32s[0]) {
                buf[pos++] = this.uint32s[1] & 127 | 128;
                this.uint32s[1] = (this.uint32s[1] >>> 7 | this.uint32s[0] << 25) >>> 0;
                this.uint32s[0] >>>= 7;
            }
            while (this.uint32s[1] > 127) {
                buf[pos++] = this.uint32s[1] & 127 | 128;
                this.uint32s[1] = this.uint32s[1] >>> 7;
            }
            buf[pos++] = this.uint32s[1];
            return pos;
        };
        Varint64.readFromBuffer = function (buf, pos) {
            var startPos = pos;
            var hi = 0, lo = 0;
            var i = 0;
            if (buf.byteLength - pos > 4) {
                for (; i < 4; ++i) {
                    lo = (lo | (buf[pos] & 127) << i * 7) >>> 0;
                    if (buf[pos++] < 128)
                        return new Varint64(hi, lo, pos - startPos);
                }
                lo = (lo | (buf[pos] & 127) << 28) >>> 0;
                hi = (hi | (buf[pos] & 127) >> 4) >>> 0;
                if (buf[pos++] < 128)
                    return new Varint64(hi, lo, pos - startPos);
                i = 0;
            }
            else {
                for (; i < 3; ++i) {
                    if (pos >= buf.byteLength)
                        throw new Error('Read varint error: index out of range');
                    lo = (lo | (buf[pos] & 127) << i * 7) >>> 0;
                    if (buf[pos++] < 128)
                        return new Varint64(hi, lo, pos - startPos);
                }
                lo = (lo | (buf[pos++] & 127) << i * 7) >>> 0;
                return new Varint64(hi, lo, pos - startPos);
            }
            if (buf.byteLength - pos > 4) {
                for (; i < 5; ++i) {
                    hi = (hi | (buf[pos] & 127) << i * 7 + 3) >>> 0;
                    if (buf[pos++] < 128)
                        return new Varint64(hi, lo, pos - startPos);
                }
            }
            else {
                for (; i < 5; ++i) {
                    if (pos >= buf.byteLength)
                        throw new Error('Read varint error: index out of range');
                    hi = (hi | (buf[pos] & 127) << i * 7 + 3) >>> 0;
                    if (buf[pos++] < 128)
                        return new Varint64(hi, lo, pos - startPos);
                }
            }
            throw Error("invalid varint encoding");
        };
        Varint64.Zero = new Varint64(0, 0);
        return Varint64;
    }();
    var BufferReader = function () {
        function BufferReader() {
            this._pos = 0;
        }
        BufferReader.prototype.load = function (buf, pos) {
            if (pos === void 0) {
                pos = 0;
            }
            this._buf = buf;
            this._pos = pos;
            this._view = new DataView(buf.buffer);
        };
        BufferReader.prototype.readVarint = function () {
            var varint = Varint64.readFromBuffer(this._buf, this._pos);
            this._pos += varint.byteLength;
            return varint;
        };
        BufferReader.prototype.readUint = function () {
            return this.readVarint().toNumber(true);
        };
        BufferReader.prototype.readInt = function () {
            return this.readVarint().zzDecode().toNumber();
        };
        BufferReader.prototype.readDouble = function () {
            var pos = this._pos;
            this._pos += 8;
            return this._view.getFloat64(this._buf.byteOffset + pos);
        };
        BufferReader.prototype.readString = function () {
            var strByteLength = this.readUint();
            var str = Utf8Coder.read(this._buf, this._pos, strByteLength);
            this._pos += strByteLength;
            return str;
        };
        BufferReader.prototype.readBuffer = function () {
            var bufByteLength = this.readUint();
            var buf = this._buf.subarray(this._pos, this._pos + bufByteLength);
            this._pos += bufByteLength;
            return buf;
        };
        BufferReader.prototype.skip = function (byteLength) {
            this._pos += byteLength;
        };
        BufferReader.prototype.skipByLengthType = function (lengthType) {
            if (lengthType === LengthType.Bit64) {
                this._pos += 8;
            }
            else if (lengthType === LengthType.Varint) {
                this.readVarint();
            }
            else if (lengthType === LengthType.LengthDelimited) {
                var bufByteLength = this.readUint();
                this._pos += bufByteLength;
            }
            else if (lengthType === LengthType.IdBlock) {
                this.skipIdBlock();
            }
            else {
                throw new Error('Unknown lengthType: ' + lengthType);
            }
        };
        BufferReader.prototype.skipIdBlock = function () {
            var idNum = this.readUint();
            for (var i = 0; i < idNum; ++i) {
                var id = this.readUint();
                var lengthType = id & 3;
                this.skipByLengthType(lengthType);
            }
        };
        BufferReader.prototype.readBoolean = function () {
            var value = this._view.getUint8(this._buf.byteOffset + this._pos++);
            if (value === 255) {
                return true;
            }
            else if (value === 0) {
                return false;
            }
            else {
                throw new Error("Invalid boolean encoding [" + value + "] at pos " + (this._pos - 1));
            }
        };
        Object.defineProperty(BufferReader.prototype, "unreadByteLength", {
            get: function get() {
                return this._buf.byteLength - this._pos;
            },
            enumerable: false,
            configurable: true
        });
        BufferReader.prototype.dispose = function () {
            this._buf = this._view = undefined;
        };
        return BufferReader;
    }();
    var Decoder = function () {
        function Decoder(options) {
            this._options = options;
            this._reader = new BufferReader();
            this._validator = options.validator;
        }
        Decoder.prototype.decode = function (buffer, schema) {
            this._reader.load(buffer);
            return this._read(schema);
        };
        Decoder.prototype._read = function (schema) {
            switch (schema.type) {
                case SchemaType.Boolean:
                    return this._reader.readBoolean();
                case SchemaType.Number:
                    return this._readNumber(schema);
                case SchemaType.String:
                    return this._reader.readString();
                case SchemaType.Array:
                    {
                        var output = [];
                        var length_1 = this._reader.readUint();
                        for (var i = 0; i < length_1; ++i) {
                            var item = this._read(schema.elementType);
                            output.push(item);
                        }
                        return output;
                    }
                case SchemaType.Tuple:
                    {
                        if (schema.elementTypes.length > 64) {
                            throw new Error('Elements oversized, maximum supported tuple elements is 64, now get ' + schema.elementTypes.length);
                        }
                        var output = [];
                        var payloadMask = this._reader.readVarint();
                        var maskIndices = [];
                        for (var i = 0; i < 32; ++i) {
                            if (payloadMask.uint32s[1] & 1 << i) {
                                maskIndices.push(i);
                            }
                        }
                        for (var i = 0; i < 32; ++i) {
                            if (payloadMask.uint32s[0] & 1 << i) {
                                maskIndices.push(i + 32);
                            }
                        }
                        if (!maskIndices.length) {
                            return [];
                        }
                        var maxIndex = maskIndices.last();
                        for (var i = 0, nextMaskIndex = 0, next = maskIndices[0]; i <= maxIndex; ++i) {
                            if (i === next) {
                                output[i] = this._read(schema.elementTypes[i]);
                                ++nextMaskIndex;
                                next = maskIndices[nextMaskIndex];
                            }
                            else {
                                output[i] = undefined;
                            }
                        }
                        for (var i = 0; i < schema.elementTypes.length; ++i) {
                            if (this._undefinedAsNull(output[i], schema.elementTypes[i], schema.optionalStartIndex !== undefined && i >= schema.optionalStartIndex)) {
                                output[i] = null;
                            }
                        }
                        return output;
                    }
                case SchemaType.Enum:
                    var enumId_1 = this._reader.readVarint().toNumber();
                    var enumItem = schema.members.find(function (v) {
                        return v.id === enumId_1;
                    });
                    if (!enumItem) {
                        throw new Error("Invalid enum encoding: unexpected id " + enumId_1);
                    }
                    return enumItem.value;
                case SchemaType.Any:
                case SchemaType.Object:
                    var jsonStr = this._reader.readString();
                    if (jsonStr === 'undefined') {
                        return undefined;
                    }
                    return JSON.parse(jsonStr);
                case SchemaType.Literal:
                    return schema.literal;
                case SchemaType.Interface:
                    return this._readInterface(schema);
                case SchemaType.Buffer:
                    var uint8Arr = this._reader.readBuffer();
                    if (schema.arrayType) {
                        if (schema.arrayType === 'BigInt64Array' || schema.arrayType === 'BigUint64Array') {
                            throw new Error('Unsupported arrayType: ' + schema.arrayType);
                        }
                        else if (schema.arrayType === 'Uint8Array') {
                            return uint8Arr;
                        }
                        else {
                            var typedArr = TypedArrays[schema.arrayType];
                            if (uint8Arr.byteOffset % typedArr.BYTES_PER_ELEMENT === 0) {
                                return new typedArr(uint8Arr.buffer, uint8Arr.byteOffset, uint8Arr.byteLength / typedArr.BYTES_PER_ELEMENT);
                            }
                            else {
                                var arrBuf = uint8Arr.buffer.slice(uint8Arr.byteOffset, uint8Arr.byteOffset + uint8Arr.byteLength);
                                return new typedArr(arrBuf);
                            }
                        }
                    }
                    else {
                        return uint8Arr.buffer.slice(uint8Arr.byteOffset, uint8Arr.byteOffset + uint8Arr.byteLength);
                    }
                case SchemaType.IndexedAccess:
                case SchemaType.Reference:
                    return this._read(this._validator.protoHelper.parseReference(schema));
                case SchemaType.Partial:
                case SchemaType.Pick:
                case SchemaType.Omit:
                case SchemaType.Overwrite:
                    var parsed = this._validator.protoHelper.parseMappedType(schema);
                    if (parsed.type === 'Interface') {
                        return this._readPureMappedType(schema);
                    }
                    else if (parsed.type === 'Union') {
                        return this._readUnionOrIntersection(parsed);
                    }
                    break;
                case SchemaType.Union:
                case SchemaType.Intersection:
                    return this._readUnionOrIntersection(schema);
                case SchemaType.Date:
                    return new Date(this._reader.readUint());
                case SchemaType.NonNullable:
                    return this._read(schema.target);
                default:
                    throw new Error("Unrecognized schema type: " + schema.type);
            }
        };
        Decoder.prototype._readPureMappedType = function (schema) {
            var output;
            var overwrite;
            if (schema.type === 'Overwrite') {
                overwrite = this._read(schema.overwrite);
            }
            var parsedTarget = this._validator.protoHelper.parseReference(schema.target);
            if (parsedTarget.type === 'Interface') {
                output = this._readInterface(parsedTarget);
            }
            else if (parsedTarget.type === 'Pick' || parsedTarget.type === 'Omit' || parsedTarget.type === 'Partial' || parsedTarget.type === 'Overwrite') {
                output = this._readPureMappedType(parsedTarget);
            }
            else {
                throw new Error('Invalid PureMappedType child: ' + schema.type);
            }
            if (schema.type === 'Pick') {
                for (var key in output) {
                    if (schema.keys.indexOf(key) === -1) {
                        delete output[key];
                    }
                }
            }
            else if (schema.type === 'Omit') {
                for (var key in output) {
                    if (schema.keys.indexOf(key) > -1) {
                        delete output[key];
                    }
                }
            }
            else if (schema.type === 'Overwrite') {
                Object.assign(output, overwrite);
            }
            return output;
        };
        Decoder.prototype._readNumber = function (schema) {
            var scalarType = schema.scalarType || 'double';
            switch (scalarType) {
                case 'double':
                    return this._reader.readDouble();
                case 'int':
                    return this._reader.readInt();
                case 'uint':
                    return this._reader.readUint();
                default:
                    throw new Error('Scalar type not support : ' + scalarType);
            }
        };
        Decoder.prototype._readInterface = function (schema) {
            var output = {};
            var flatSchema = this._validator.protoHelper.getFlatInterfaceSchema(schema);
            var blockIdNum = this._reader.readUint();
            var _loop_1 = function _loop_1(i) {
                var readBlockId = this_1._reader.readUint();
                var lengthType = readBlockId & 3;
                var blockId = readBlockId >> 2;
                if (blockId === 0) {
                    if (flatSchema.indexSignature) {
                        var type = flatSchema.indexSignature.type;
                        var fieldName = this_1._reader.readString();
                        this_1._skipIdLengthPrefix(this_1._validator.protoHelper.parseReference(type));
                        output[fieldName] = this_1._read(type);
                    }
                    else {
                        this_1._reader.skipByLengthType(LengthType.LengthDelimited);
                        this_1._reader.skipByLengthType(lengthType);
                    }
                }
                else if (blockId <= 9) {
                    var extendId_1 = blockId - 1;
                    var extend = schema.extends && schema.extends.find(function (v) {
                        return v.id === extendId_1;
                    });
                    if (extend) {
                        this_1._skipIdLengthPrefix(this_1._validator.protoHelper.parseReference(extend.type));
                        var extendValue = this_1._read(extend.type);
                        Object.assign(output, extendValue);
                    }
                    else {
                        this_1._reader.skipByLengthType(lengthType);
                    }
                }
                else {
                    var propertyId_1 = blockId - 10;
                    var property = schema.properties && schema.properties.find(function (v) {
                        return v.id === propertyId_1;
                    });
                    if (property) {
                        this_1._skipIdLengthPrefix(this_1._validator.protoHelper.parseReference(property.type));
                        output[property.name] = this_1._read(property.type);
                    }
                    else {
                        this_1._reader.skipByLengthType(lengthType);
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < blockIdNum; ++i) {
                _loop_1();
            }
            for (var _i = 0, _a = flatSchema.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (output.hasOwnProperty(property.name)) {
                    continue;
                }
                var parsedType = this._validator.protoHelper.parseReference(property.type);
                if (parsedType.type === 'Literal') {
                    output[property.name] = parsedType.literal;
                    continue;
                }
                if (this._undefinedAsNull(output[property.name], parsedType, property.optional)) {
                    output[property.name] = null;
                    continue;
                }
            }
            return output;
        };
        Decoder.prototype._undefinedAsNull = function (value, type, isOptional) {
            return value === undefined && this._options.undefinedAsNull && !SchemaUtil.canBeLiteral(type, undefined) && !isOptional && SchemaUtil.canBeLiteral(type, null);
        };
        Decoder.prototype._skipIdLengthPrefix = function (parsedSchema) {
            var lengthInfo = IdBlockUtil.getPayloadLengthInfo(parsedSchema);
            if (lengthInfo.needLengthPrefix) {
                this._reader.skipByLengthType(LengthType.Varint);
            }
        };
        Decoder.prototype._readUnionOrIntersection = function (schema) {
            var output;
            var idNum = this._reader.readUint();
            var _loop_2 = function _loop_2(i) {
                var readId = this_2._reader.readUint();
                var lengthType = readId & 3;
                var id = readId >> 2;
                var member = schema.members.find(function (v) {
                    return v.id === id;
                });
                if (!member) {
                    this_2._reader.skipByLengthType(lengthType);
                    return "continue";
                }
                this_2._skipIdLengthPrefix(this_2._validator.protoHelper.parseReference(member.type));
                var value = this_2._read(member.type);
                if (this_2._isObject(output) && this_2._isObject(value)) {
                    Object.assign(output, value);
                }
                else {
                    output = value;
                }
            };
            var this_2 = this;
            for (var i = 0; i < idNum; ++i) {
                _loop_2();
            }
            if (this._undefinedAsNull(output, schema)) {
                output = null;
            }
            return output;
        };
        Decoder.prototype._isObject = function (value) {
            return _typeof(value) === 'object' && value !== null;
        };
        return Decoder;
    }();
    var Config = {
        interface: {
            maxExtendsNum: 9
        }
    };
    var BufferWriter = function () {
        function BufferWriter() {
            this._ops = [];
        }
        Object.defineProperty(BufferWriter.prototype, "ops", {
            get: function get() {
                return this._ops;
            },
            enumerable: false,
            configurable: true
        });
        BufferWriter.prototype.clear = function () {
            this._ops = [];
        };
        BufferWriter.prototype.push = function (req) {
            this._ops.push(this.req2op(req));
            return this;
        };
        BufferWriter.prototype.req2op = function (req) {
            if (req.type === 'string' || req.type === 'buffer') {
                var valueLength = this.measureLength(req);
                this.push({
                    type: 'varint',
                    value: Varint64.from(valueLength)
                });
                return __assign$1(__assign$1({}, req), {
                    length: valueLength
                });
            }
            else {
                var length_1 = this.measureLength(req);
                return __assign$1(__assign$1({}, req), {
                    length: length_1
                });
            }
        };
        BufferWriter.prototype.measureLength = function (req) {
            switch (req.type) {
                case 'varint':
                    return req.value.byteLength;
                case 'string':
                    return Utf8Coder.measureLength(req.value);
                case 'buffer':
                    return req.value.byteLength;
                case 'double':
                    return 8;
                case 'boolean':
                    return 1;
                default:
                    return NaN;
            }
        };
        BufferWriter.prototype.finish = function () {
            var byteLength = this._ops.sum(function (v) {
                return v.length;
            });
            var pos = 0;
            var buf = new Uint8Array(byteLength);
            var view = new DataView(buf.buffer);
            for (var _i = 0, _a = this._ops; _i < _a.length; _i++) {
                var op = _a[_i];
                switch (op.type) {
                    case 'varint':
                        var newPos = op.value.writeToBuffer(buf, pos);
                        if (newPos !== pos + op.length) {
                            throw new Error("Error varint measuredLength " + op.length + ", actual is " + (newPos - pos) + ", value is " + op.value.toNumber());
                        }
                        break;
                    case 'double':
                        view.setFloat64(buf.byteOffset + pos, op.value);
                        break;
                    case 'string':
                        var encLen = Utf8Coder.write(op.value, buf, pos);
                        if (encLen !== op.length) {
                            throw new Error("Expect " + op.length + " bytes but encoded " + encLen + " bytes");
                        }
                        break;
                    case 'buffer':
                        buf.subarray(pos, pos + op.length).set(op.value);
                        break;
                    case 'boolean':
                        view.setUint8(buf.byteOffset + pos, op.value ? 255 : 0);
                        break;
                }
                pos += op.length;
            }
            return buf;
        };
        return BufferWriter;
    }();
    var Encoder = function () {
        function Encoder(options) {
            this._options = options;
            this._writer = new BufferWriter();
            this._validator = options.validator;
        }
        Encoder.prototype.encode = function (value, schema) {
            this._writer.clear();
            this._write(value, schema);
            return this._writer.finish();
        };
        Encoder.prototype._write = function (value, schema, options) {
            switch (schema.type) {
                case SchemaType.Boolean:
                    this._writer.push({
                        type: 'boolean',
                        value: value
                    });
                    break;
                case SchemaType.Number:
                    this._writeNumber(value, schema);
                    break;
                case SchemaType.String:
                    this._writer.push({
                        type: 'string',
                        value: value
                    });
                    break;
                case SchemaType.Array:
                    {
                        var _v = value;
                        this._writer.push({
                            type: 'varint',
                            value: Varint64.from(_v.length)
                        });
                        for (var i = 0; i < _v.length; ++i) {
                            this._write(_v[i], schema.elementType);
                        }
                        break;
                    }
                case SchemaType.Tuple:
                    {
                        if (schema.elementTypes.length > 64) {
                            throw new Error('Elements oversized, maximum supported tuple elements is 64, now get ' + schema.elementTypes.length);
                        }
                        var _v = value;
                        var maskIndices = [];
                        for (var i = 0; i < _v.length; ++i) {
                            if (_v[i] === undefined || this._nullAsUndefined(_v[i], schema.elementTypes[i])) {
                                continue;
                            }
                            maskIndices.push(i);
                        }
                        var lo = 0;
                        var hi = 0;
                        for (var _i = 0, maskIndices_1 = maskIndices; _i < maskIndices_1.length; _i++) {
                            var v = maskIndices_1[_i];
                            if (v < 32) {
                                lo |= 1 << v;
                            }
                            else {
                                hi |= 1 << v - 32;
                            }
                        }
                        this._writer.push({
                            type: 'varint',
                            value: new Varint64(hi, lo)
                        });
                        for (var _a = 0, maskIndices_2 = maskIndices; _a < maskIndices_2.length; _a++) {
                            var i = maskIndices_2[_a];
                            this._write(_v[i], schema.elementTypes[i]);
                        }
                        break;
                    }
                case SchemaType.Enum:
                    var enumItem = schema.members.find(function (v) {
                        return v.value === value;
                    });
                    if (!enumItem) {
                        throw new Error("Unexpect enum value: " + value);
                    }
                    this._writer.push({
                        type: 'varint',
                        value: Varint64.from(enumItem.id)
                    });
                    break;
                case SchemaType.Any:
                    if (value === undefined) {
                        this._writer.push({
                            type: 'string',
                            value: 'undefined'
                        });
                    }
                    else {
                        this._writer.push({
                            type: 'string',
                            value: JSON.stringify(value)
                        });
                    }
                    break;
                case SchemaType.Object:
                    this._writer.push({
                        type: 'string',
                        value: JSON.stringify(value)
                    });
                    break;
                case SchemaType.Literal:
                    break;
                case SchemaType.Interface:
                    this._writeInterface(value, schema, options);
                    break;
                case SchemaType.Buffer:
                    this._writeBuffer(value, schema);
                    break;
                case SchemaType.IndexedAccess:
                case SchemaType.Reference:
                    this._write(value, this._validator.protoHelper.parseReference(schema), options);
                    break;
                case SchemaType.Partial:
                case SchemaType.Pick:
                case SchemaType.Omit:
                case SchemaType.Overwrite:
                    var parsed = this._validator.protoHelper.parseMappedType(schema);
                    if (parsed.type === 'Interface') {
                        this._writePureMappedType(value, schema, options);
                    }
                    else {
                        this._writeUnion(value, parsed, options === null || options === void 0 ? void 0 : options.skipFields);
                    }
                    break;
                case SchemaType.Union:
                    this._writeUnion(value, schema, options === null || options === void 0 ? void 0 : options.skipFields);
                    break;
                case SchemaType.Intersection:
                    this._writeIntersection(value, schema, options === null || options === void 0 ? void 0 : options.skipFields);
                    break;
                case SchemaType.Date:
                    this._writer.push({
                        type: 'varint',
                        value: Varint64.from(value.getTime())
                    });
                    break;
                case SchemaType.NonNullable:
                    this._write(value, schema.target, options);
                    break;
                default:
                    throw new Error("Unrecognized schema type: " + schema.type);
            }
        };
        Encoder.prototype._writePureMappedType = function (value, schema, options) {
            if (!options) {
                options = {};
            }
            if (schema.type === 'Pick') {
                if (options.pickFields) {
                    var newPickFields = {};
                    for (var _i = 0, _a = schema.keys; _i < _a.length; _i++) {
                        var v = _a[_i];
                        if (options.pickFields[v]) {
                            newPickFields[v] = 1;
                        }
                    }
                    options.pickFields = newPickFields;
                }
                else {
                    options.pickFields = {};
                    for (var _b = 0, _c = schema.keys; _b < _c.length; _b++) {
                        var v = _c[_b];
                        options.pickFields[v] = 1;
                    }
                }
            }
            else if (schema.type === 'Omit') {
                if (!(options === null || options === void 0 ? void 0 : options.skipFields)) {
                    if (!options) {
                        options = {};
                    }
                    options.skipFields = {};
                }
                for (var _d = 0, _e = schema.keys; _d < _e.length; _d++) {
                    var v = _e[_d];
                    options.skipFields[v] = 1;
                }
            }
            else if (schema.type === 'Overwrite') {
                var parsed = this._parseOverwrite(value, schema);
                this._write(parsed.overwriteValue, parsed.overwrite, options);
            }
            else if (schema.type === 'Partial')
                ;
            else {
                throw new Error('Invalid PureMappedType child: ' + schema.type);
            }
            var parsedTarget = this._validator.protoHelper.parseReference(schema.target);
            if (parsedTarget.type === 'Interface') {
                this._writeInterface(value, parsedTarget, options);
            }
            else {
                this._writePureMappedType(value, parsedTarget, options);
            }
        };
        Encoder.prototype._writeNumber = function (value, schema) {
            var scalarType = schema.scalarType || 'double';
            switch (scalarType) {
                case 'double':
                    this._writer.push({
                        type: scalarType,
                        value: value
                    });
                    break;
                case 'int':
                    this._writer.push({
                        type: 'varint',
                        value: Varint64.from(value).zzEncode()
                    });
                    break;
                case 'uint':
                    this._writer.push({
                        type: 'varint',
                        value: Varint64.from(value)
                    });
                    break;
                default:
                    throw new Error('Scalar type not support : ' + scalarType);
            }
        };
        Encoder.prototype._writeInterface = function (value, schema, options) {
            if (!options) {
                options = {};
            }
            if (!options.skipFields) {
                options.skipFields = {};
            }
            var opStartOps = this._writer.ops.length;
            var blockIdCount = 0;
            if (schema.extends) {
                if (schema.extends.length > Config.interface.maxExtendsNum) {
                    throw new Error("Max support " + Config.interface.maxExtendsNum + " extends, actual: " + schema.extends.length);
                }
                for (var _i = 0, _a = schema.extends; _i < _a.length; _i++) {
                    var extend = _a[_i];
                    var blockId = extend.id + 1;
                    this._writer.push({
                        type: 'varint',
                        value: Varint64.from(blockId)
                    });
                    var blockIdPos = this._writer.ops.length - 1;
                    var opsLengthBeforeWrite = this._writer.ops.length;
                    var parsedExtend = this._validator.protoHelper.parseReference(extend.type);
                    this._writeInterface(value, parsedExtend, __assign$1(__assign$1({}, options), {
                        skipIndexSignature: !!schema.indexSignature || options.skipIndexSignature
                    }));
                    if (this._writer.ops.length === opsLengthBeforeWrite + 1) {
                        this._writer.ops.splice(this._writer.ops.length - 2, 2);
                    }
                    else {
                        ++blockIdCount;
                        this._processIdWithLengthType(blockIdPos, extend.type);
                    }
                }
            }
            if (schema.properties) {
                for (var _b = 0, _c = schema.properties; _b < _c.length; _b++) {
                    var property = _c[_b];
                    var parsedType = this._validator.protoHelper.parseReference(property.type);
                    var propValue = value[property.name];
                    if (options.pickFields && !options.pickFields[property.name]) {
                        continue;
                    }
                    if (parsedType.type === 'Literal') {
                        options.skipFields[property.name] = 1;
                        continue;
                    }
                    if (this._nullAsUndefined(propValue, property.type)) {
                        propValue = undefined;
                    }
                    if (propValue === undefined) {
                        continue;
                    }
                    if (options.skipFields[property.name]) {
                        continue;
                    }
                    options.skipFields[property.name] = 1;
                    var blockId = property.id + Config.interface.maxExtendsNum + 1;
                    this._writer.push({
                        type: 'varint',
                        value: Varint64.from(blockId)
                    });
                    var blockIdPos = this._writer.ops.length - 1;
                    this._write(propValue, parsedType);
                    ++blockIdCount;
                    this._processIdWithLengthType(blockIdPos, parsedType);
                }
            }
            if (!options.skipIndexSignature) {
                var flat = this._validator.protoHelper.getFlatInterfaceSchema(schema);
                if (flat.indexSignature) {
                    for (var key in value) {
                        if (value[key] === undefined || this._nullAsUndefined(value[key], flat.indexSignature.type)) {
                            continue;
                        }
                        if (options.pickFields && !options.pickFields[key]) {
                            continue;
                        }
                        if (options.skipFields[key]) {
                            continue;
                        }
                        options.skipFields[key] = 1;
                        this._writer.push({
                            type: 'varint',
                            value: Varint64.from(0)
                        });
                        var blockIdPos = this._writer.ops.length - 1;
                        this._writer.push({
                            type: 'string',
                            value: key
                        });
                        var lengthPrefixPos = this._writer.ops.length;
                        this._write(value[key], flat.indexSignature.type);
                        ++blockIdCount;
                        this._processIdWithLengthType(blockIdPos, flat.indexSignature.type, lengthPrefixPos);
                    }
                }
            }
            this._writer.ops.splice(opStartOps, 0, this._writer.req2op({
                type: 'varint',
                value: Varint64.from(blockIdCount)
            }));
        };
        Encoder.prototype._nullAsUndefined = function (value, type) {
            return value === null && this._options.nullAsUndefined && !SchemaUtil.canBeLiteral(type, null);
        };
        Encoder.prototype._parseOverwrite = function (value, schema) {
            var skipFields = {};
            var target = this._validator.protoHelper.parseReference(schema.target);
            var overwrite = this._validator.protoHelper.parseReference(schema.overwrite);
            var flatTarget = this._validator.protoHelper.getFlatInterfaceSchema(target);
            var flatOverwrite = this._validator.protoHelper.getFlatInterfaceSchema(overwrite);
            var overwriteValue = {};
            var targetValue = {};
            if (flatOverwrite.properties) {
                for (var _i = 0, _a = flatOverwrite.properties; _i < _a.length; _i++) {
                    var property = _a[_i];
                    if (value[property.name] !== undefined && !skipFields[property.name]) {
                        overwriteValue[property.name] = value[property.name];
                        skipFields[property.name] = 1;
                    }
                }
            }
            if (flatTarget.properties) {
                for (var _b = 0, _c = flatTarget.properties; _b < _c.length; _b++) {
                    var property = _c[_b];
                    if (value[property.name] !== undefined && !skipFields[property.name]) {
                        targetValue[property.name] = value[property.name];
                        skipFields[property.name] = 1;
                    }
                }
            }
            var indexSignatureWriteValue;
            var indexSignature;
            if (flatOverwrite.indexSignature) {
                indexSignature = flatOverwrite.indexSignature;
                indexSignatureWriteValue = overwriteValue;
            }
            else if (flatTarget.indexSignature) {
                indexSignature = flatTarget.indexSignature;
                indexSignatureWriteValue = targetValue;
            }
            if (indexSignature) {
                for (var key in value) {
                    if (skipFields[key]) {
                        continue;
                    }
                    indexSignatureWriteValue[key] = value[key];
                    skipFields[key] = 1;
                }
            }
            return {
                target: target,
                targetValue: targetValue,
                overwrite: overwrite,
                overwriteValue: overwriteValue
            };
        };
        Encoder.prototype._writeUnion = function (value, schema, skipFields, unionProperties) {
            if (skipFields === void 0) {
                skipFields = {};
            }
            var encodeStartPos = this._writer.ops.length;
            var idNum = 0;
            if (this._nullAsUndefined(value, schema)) {
                value = undefined;
            }
            for (var _i = 0, _a = schema.members; _i < _a.length; _i++) {
                var member = _a[_i];
                var vRes = this._validator.validate(value, member.type, {
                    excessPropertyChecks: false,
                    strictNullChecks: true
                });
                if (vRes.isSucc) {
                    this._writer.push({
                        type: 'varint',
                        value: Varint64.from(member.id)
                    });
                    var idPos = this._writer.ops.length - 1;
                    if (member.type.type === 'Union') {
                        this._writeUnion(value, member.type, skipFields);
                    }
                    else {
                        this._write(value, member.type, {
                            skipFields: skipFields
                        });
                    }
                    idNum++;
                    this._processIdWithLengthType(idPos, member.type);
                    if (_typeof(value) !== 'object') {
                        break;
                    }
                }
            }
            if (idNum > 0) {
                this._writer.ops.splice(encodeStartPos, 0, this._writer.req2op({
                    type: 'varint',
                    value: Varint64.from(idNum)
                }));
                return;
            }
            else {
                throw new Error('Non member is satisfied for union type');
            }
        };
        Encoder.prototype._writeIntersection = function (value, schema, skipFields) {
            if (skipFields === void 0) {
                skipFields = {};
            }
            this._writer.push({
                type: 'varint',
                value: Varint64.from(schema.members.length)
            });
            for (var _i = 0, _a = schema.members; _i < _a.length; _i++) {
                var member = _a[_i];
                this._writer.push({
                    type: 'varint',
                    value: Varint64.from(member.id)
                });
                var idPos = this._writer.ops.length - 1;
                this._write(value, member.type, {
                    skipFields: skipFields
                });
                this._processIdWithLengthType(idPos, member.type);
            }
        };
        Encoder.prototype._writeBuffer = function (value, schema) {
            if (value instanceof ArrayBuffer) {
                this._writer.push({
                    type: 'buffer',
                    value: new Uint8Array(value)
                });
            }
            else if (value instanceof Uint8Array) {
                this._writer.push({
                    type: 'buffer',
                    value: value
                });
            }
            else {
                var key = value.constructor.name;
                var arrType = TypedArrays[key];
                var uint8Arr = new Uint8Array(value.buffer, value.byteOffset, value.length * arrType.BYTES_PER_ELEMENT);
                this._writer.push({
                    type: 'buffer',
                    value: uint8Arr
                });
            }
        };
        Encoder.prototype._processIdWithLengthType = function (idPos, payloadType, lengthPrefixPos) {
            var idOp = this._writer.ops[idPos];
            if (idOp.type !== 'varint') {
                throw new Error('Error idPos: ' + idPos);
            }
            var parsedSchema = this._validator.protoHelper.parseReference(payloadType);
            var lengthInfo = IdBlockUtil.getPayloadLengthInfo(parsedSchema);
            var newId = (idOp.value.toNumber() << 2) + lengthInfo.lengthType;
            this._writer.ops[idPos] = this._writer.req2op({
                type: 'varint',
                value: Varint64.from(newId)
            });
            if (lengthInfo.needLengthPrefix) {
                var payloadByteLength = this._writer.ops.filter(function (v, i) {
                    return i > idPos;
                }).sum(function (v) {
                    return v.length;
                });
                this._writer.ops.splice(lengthPrefixPos == undefined ? idPos + 1 : lengthPrefixPos, 0, this._writer.req2op({
                    type: 'varint',
                    value: Varint64.from(payloadByteLength)
                }));
            }
        };
        return Encoder;
    }();
    var TSBuffer = function () {
        function TSBuffer(proto, options) {
            this._options = {
                excessPropertyChecks: true,
                strictNullChecks: true,
                skipEncodeValidate: false,
                skipDecodeValidate: false,
                cloneProto: true
            };
            this._options = __assign$1(__assign$1({}, this._options), options);
            this._proto = this._options.cloneProto ? Object.merge({}, proto) : proto;
            this._validator = new TSBufferValidator(this._proto, {
                excessPropertyChecks: this._options.excessPropertyChecks,
                strictNullChecks: this._options.strictNullChecks
            });
            this.validate = this._validator.validate.bind(this._validator);
            this.prune = this._validator.prune.bind(this._validator);
            this._encoder = new Encoder({
                validator: this._validator,
                nullAsUndefined: !this._options.strictNullChecks
            });
            this._decoder = new Decoder({
                validator: this._validator,
                undefinedAsNull: !this._options.strictNullChecks
            });
        }
        TSBuffer.prototype.encode = function (value, schemaOrId, options) {
            var _a;
            var schema;
            if (typeof schemaOrId === 'string') {
                schema = this._proto[schemaOrId];
                if (!schema) {
                    return {
                        isSucc: false,
                        errMsg: "Cannot find schema\uFF1A " + schemaOrId
                    };
                }
            }
            else {
                schema = schemaOrId;
            }
            if (!((_a = options === null || options === void 0 ? void 0 : options.skipValidate) !== null && _a !== void 0 ? _a : this._options.skipEncodeValidate)) {
                var vRes = this._validator.validate(value, schema, {
                    excessPropertyChecks: false
                });
                if (!vRes.isSucc) {
                    return vRes;
                }
            }
            var buf;
            try {
                buf = this._encoder.encode(value, schema);
            }
            catch (e) {
                return {
                    isSucc: false,
                    errMsg: e.message
                };
            }
            return {
                isSucc: true,
                buf: buf
            };
        };
        TSBuffer.prototype.decode = function (buf, schemaOrId, options) {
            var _a;
            var schema;
            if (typeof schemaOrId === 'string') {
                schema = this._proto[schemaOrId];
                if (!schema) {
                    return {
                        isSucc: false,
                        errMsg: "Cannot find schema\uFF1A " + schemaOrId
                    };
                }
            }
            else {
                schema = schemaOrId;
            }
            var value;
            try {
                value = this._decoder.decode(buf, schema);
            }
            catch (e) {
                return {
                    isSucc: false,
                    errMsg: e.message
                };
            }
            if (!((_a = options === null || options === void 0 ? void 0 : options.skipValidate) !== null && _a !== void 0 ? _a : this._options.skipDecodeValidate)) {
                var vRes = this._validator.validate(value, schema);
                if (!vRes.isSucc) {
                    return vRes;
                }
            }
            return {
                isSucc: true,
                value: value
            };
        };
        return TSBuffer;
    }();
    var Counter = function () {
        function Counter(min, max) {
            if (min === void 0) {
                min = 1;
            }
            if (max === void 0) {
                max = Number.MAX_SAFE_INTEGER;
            }
            this._min = min;
            this._max = max;
            this._last = max;
        }
        Counter.prototype.reset = function () {
            this._last = this._max;
        };
        Counter.prototype.getNext = function (notInc) {
            return this._last >= this._max ? this._last = this._min : notInc ? this._last : ++this._last;
        };
        Object.defineProperty(Counter.prototype, "last", {
            get: function get() {
                return this._last;
            },
            enumerable: false,
            configurable: true
        });
        return Counter;
    }();
    var Flow = function () {
        function Flow() {
            this.nodes = [];
            this.onError = function (e, last, input, logger) {
                logger === null || logger === void 0 ? void 0 : logger.error('Uncaught FlowError:', e);
            };
        }
        Flow.prototype.exec = function (input, logger) {
            return __awaiter$1(this, void 0, void 0, function () {
                var res, i, e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            res = input;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < this.nodes.length))
                                return [3,
                                    7];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4,
                                this.nodes[i](res)];
                        case 3:
                            res = _a.sent();
                            return [3,
                                5];
                        case 4:
                            e_1 = _a.sent();
                            this.onError(e_1, res, input, logger);
                            return [2,
                                undefined];
                        case 5:
                            if (res === null || res === undefined) {
                                return [2,
                                    res];
                            }
                            _a.label = 6;
                        case 6:
                            ++i;
                            return [3,
                                1];
                        case 7:
                            return [2,
                                res];
                    }
                });
            });
        };
        Flow.prototype.push = function (node) {
            this.nodes.push(node);
            return node;
        };
        Flow.prototype.remove = function (node) {
            return this.nodes.remove(function (v) {
                return v === node;
            });
        };
        return Flow;
    }();
    var MsgHandlerManager = function () {
        function MsgHandlerManager() {
            this._handlers = {};
        }
        MsgHandlerManager.prototype.forEachHandler = function (msgName, logger) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var handlers = this._handlers[msgName];
            if (!handlers) {
                return [];
            }
            var output = [];
            for (var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
                var handler = handlers_1[_a];
                try {
                    output.push(handler.apply(void 0, args));
                }
                catch (e) {
                    logger === null || logger === void 0 ? void 0 : logger.error('[MsgHandlerError]', e);
                }
            }
            return output;
        };
        MsgHandlerManager.prototype.addHandler = function (msgName, handler) {
            var handlers = this._handlers[msgName];
            if (!handlers) {
                handlers = this._handlers[msgName] = [];
            }
            else if (handlers.some(function (v) {
                return v === handler;
            })) {
                return;
            }
            handlers.push(handler);
        };
        MsgHandlerManager.prototype.removeHandler = function (msgName, handler) {
            var handlers = this._handlers[msgName];
            if (!handlers) {
                return;
            }
            handlers.removeOne(function (v) {
                return v === handler;
            });
        };
        MsgHandlerManager.prototype.removeAllHandlers = function (msgName) {
            this._handlers[msgName] = undefined;
        };
        return MsgHandlerManager;
    }();
    var ServiceMapUtil = function () {
        function ServiceMapUtil() { }
        ServiceMapUtil.getServiceMap = function (proto) {
            var map = {
                id2Service: {},
                apiName2Service: {},
                msgName2Service: {}
            };
            for (var _i = 0, _a = proto.services; _i < _a.length; _i++) {
                var v = _a[_i];
                var match = v.name.match(/(.+\/)?([^\/]+)$/);
                var path = match[1] || '';
                var name_1 = match[2];
                if (v.type === 'api') {
                    var svc = __assign$1(__assign$1({}, v), {
                        reqSchemaId: path + "Ptl" + name_1 + "/Req" + name_1,
                        resSchemaId: path + "Ptl" + name_1 + "/Res" + name_1
                    });
                    map.apiName2Service[v.name] = svc;
                    map.id2Service[v.id] = svc;
                }
                else {
                    var svc = __assign$1(__assign$1({}, v), {
                        msgSchemaId: path + "Msg" + name_1 + "/Msg" + name_1
                    });
                    map.msgName2Service[v.name] = svc;
                    map.id2Service[v.id] = svc;
                }
            }
            return map;
        };
        return ServiceMapUtil;
    }();
    var TransportDataUtil = function () {
        function TransportDataUtil() { }
        Object.defineProperty(TransportDataUtil, "tsbuffer", {
            get: function get() {
                if (!this._tsbuffer) {
                    this._tsbuffer = new TSBuffer(TransportDataProto);
                }
                return this._tsbuffer;
            },
            enumerable: false,
            configurable: true
        });
        TransportDataUtil.encodeApiReturn = function (tsbuffer, service, apiReturn, sn) {
            var serverOutputData = {
                sn: sn,
                serviceId: sn !== undefined ? service.id : undefined
            };
            if (apiReturn.isSucc) {
                var op = tsbuffer.encode(apiReturn.res, service.resSchemaId);
                if (!op.isSucc) {
                    return op;
                }
                serverOutputData.buffer = op.buf;
            }
            else {
                serverOutputData.error = apiReturn.err;
            }
            return this.tsbuffer.encode(serverOutputData, 'ServerOutputData');
        };
        TransportDataUtil.encodeClientMsg = function (tsbuffer, service, msg) {
            var op = tsbuffer.encode(msg, service.msgSchemaId);
            if (!op.isSucc) {
                return op;
            }
            var serverInputData = {
                serviceId: service.id,
                buffer: op.buf
            };
            return this.tsbuffer.encode(serverInputData, 'ServerInputData');
        };
        TransportDataUtil.encodeApiReq = function (tsbuffer, service, req, sn) {
            var op = tsbuffer.encode(req, service.reqSchemaId);
            if (!op.isSucc) {
                return op;
            }
            var serverInputData = {
                serviceId: service.id,
                buffer: op.buf,
                sn: sn
            };
            return this.tsbuffer.encode(serverInputData, 'ServerInputData');
        };
        TransportDataUtil.encodeServerMsg = function (tsbuffer, service, msg) {
            var op = tsbuffer.encode(msg, service.msgSchemaId);
            if (!op.isSucc) {
                return op;
            }
            var serverOutputData = {
                serviceId: service.id,
                buffer: op.buf
            };
            return this.tsbuffer.encode(serverOutputData, 'ServerOutputData');
        };
        TransportDataUtil.parseServerInput = function (tsbuffer, serviceMap, buf) {
            var opServerInputData = this.tsbuffer.decode(buf, 'ServerInputData');
            if (!opServerInputData.isSucc) {
                return opServerInputData;
            }
            var serverInput = opServerInputData.value;
            var service = serviceMap.id2Service[serverInput.serviceId];
            if (!service) {
                return {
                    isSucc: false,
                    errMsg: "Cannot find service ID: " + serverInput.serviceId
                };
            }
            if (service.type === 'api') {
                var opReq = tsbuffer.decode(serverInput.buffer, service.reqSchemaId);
                return opReq.isSucc ? {
                    isSucc: true,
                    result: {
                        type: 'api',
                        service: service,
                        req: opReq.value,
                        sn: serverInput.sn
                    }
                } : opReq;
            }
            else {
                var opMsg = tsbuffer.decode(serverInput.buffer, service.msgSchemaId);
                return opMsg.isSucc ? {
                    isSucc: true,
                    result: {
                        type: 'msg',
                        service: service,
                        msg: opMsg.value
                    }
                } : opMsg;
            }
        };
        TransportDataUtil.parseServerOutout = function (tsbuffer, serviceMap, buf, serviceId) {
            var opServerOutputData = this.tsbuffer.decode(buf, 'ServerOutputData');
            if (!opServerOutputData.isSucc) {
                return opServerOutputData;
            }
            var serverOutputData = opServerOutputData.value;
            serviceId = serviceId !== null && serviceId !== void 0 ? serviceId : serverOutputData.serviceId;
            if (serviceId === undefined) {
                return {
                    isSucc: false,
                    errMsg: "Missing 'serviceId' in ServerOutput"
                };
            }
            var service = serviceMap.id2Service[serviceId];
            if (!service) {
                return {
                    isSucc: false,
                    errMsg: "Invalid service ID: " + serviceId + " (from ServerOutput)"
                };
            }
            if (service.type === 'msg') {
                if (!serverOutputData.buffer) {
                    return {
                        isSucc: false,
                        errMsg: 'Empty msg buffer (from ServerOutput)'
                    };
                }
                var opMsg = tsbuffer.decode(serverOutputData.buffer, service.msgSchemaId);
                if (!opMsg.isSucc) {
                    return opMsg;
                }
                return {
                    isSucc: true,
                    result: {
                        type: 'msg',
                        service: service,
                        msg: opMsg.value
                    }
                };
            }
            else {
                if (serverOutputData.error) {
                    return {
                        isSucc: true,
                        result: {
                            type: 'api',
                            service: service,
                            sn: serverOutputData.sn,
                            ret: {
                                isSucc: false,
                                err: new TsrpcError(serverOutputData.error)
                            }
                        }
                    };
                }
                else {
                    if (!serverOutputData.buffer) {
                        return {
                            isSucc: false,
                            errMsg: 'Empty API res buffer (from ServerOutput)'
                        };
                    }
                    var opRes = tsbuffer.decode(serverOutputData.buffer, service.resSchemaId);
                    if (!opRes.isSucc) {
                        return opRes;
                    }
                    return {
                        isSucc: true,
                        result: {
                            type: 'api',
                            service: service,
                            sn: serverOutputData.sn,
                            ret: {
                                isSucc: true,
                                res: opRes.value
                            }
                        }
                    };
                }
            }
        };
        return TransportDataUtil;
    }();
    var BaseClient = function () {
        function BaseClient(proto, options) {
            this._msgHandlers = new MsgHandlerManager();
            this.flows = {
                preCallApiFlow: new Flow(),
                preApiReturnFlow: new Flow(),
                postApiReturnFlow: new Flow(),
                preSendMsgFlow: new Flow(),
                postSendMsgFlow: new Flow(),
                preSendBufferFlow: new Flow(),
                preRecvBufferFlow: new Flow(),
                preConnectFlow: new Flow(),
                postConnectFlow: new Flow(),
                postDisconnectFlow: new Flow()
            };
            this._apiSnCounter = new Counter(1);
            this._pendingApis = [];
            this.options = options;
            this.serviceMap = ServiceMapUtil.getServiceMap(proto);
            this.tsbuffer = new TSBuffer(proto.types);
            this.logger = this.options.logger;
        }
        Object.defineProperty(BaseClient.prototype, "lastSN", {
            get: function get() {
                return this._apiSnCounter.last;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseClient.prototype, "nextSN", {
            get: function get() {
                return this._apiSnCounter.getNext(true);
            },
            enumerable: false,
            configurable: true
        });
        BaseClient.prototype.callApi = function (apiName, req, options) {
            if (options === void 0) {
                options = {};
            }
            return __awaiter$1(this, void 0, void 0, function () {
                var sn, pendingItem, promise;
                var _this = this;
                return __generator$1(this, function (_a) {
                    sn = this._apiSnCounter.getNext();
                    pendingItem = {
                        sn: sn,
                        abortKey: options.abortKey,
                        service: this.serviceMap.apiName2Service[apiName]
                    };
                    this._pendingApis.push(pendingItem);
                    promise = new Promise(function (rs) {
                        return __awaiter$1(_this, void 0, void 0, function () {
                            var pre, ret, preReturn;
                            return __generator$1(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        return [4,
                                            this.flows.preCallApiFlow.exec({
                                                apiName: apiName,
                                                req: req,
                                                options: options
                                            }, this.logger)];
                                    case 1:
                                        pre = _a.sent();
                                        if (!pre || pendingItem.isAborted) {
                                            this.abort(pendingItem.sn);
                                            return [2
                                            ];
                                        }
                                        if (!pre.return)
                                            return [3,
                                                2];
                                        ret = pre.return;
                                        return [3,
                                            4];
                                    case 2:
                                        return [4,
                                            this._doCallApi(pre.apiName, pre.req, pre.options, pendingItem)];
                                    case 3:
                                        ret = _a.sent();
                                        _a.label = 4;
                                    case 4:
                                        if (pendingItem.isAborted) {
                                            return [2
                                            ];
                                        }
                                        return [4,
                                            this.flows.preApiReturnFlow.exec(__assign$1(__assign$1({}, pre), {
                                                return: ret
                                            }), this.logger)];
                                    case 5:
                                        preReturn = _a.sent();
                                        if (!preReturn) {
                                            this.abort(pendingItem.sn);
                                            return [2
                                            ];
                                        }
                                        rs(preReturn.return);
                                        this.flows.postApiReturnFlow.exec(preReturn, this.logger);
                                        return [2
                                        ];
                                }
                            });
                        });
                    });
                    promise.catch().then(function () {
                        _this._pendingApis.removeOne(function (v) {
                            return v.sn === pendingItem.sn;
                        });
                    });
                    return [2,
                        promise];
                });
            });
        };
        BaseClient.prototype._doCallApi = function (apiName, req, options, pendingItem) {
            var _a;
            if (options === void 0) {
                options = {};
            }
            return __awaiter$1(this, void 0, void 0, function () {
                var promise;
                var _this = this;
                return __generator$1(this, function (_b) {
                    (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[ApiReq] #" + pendingItem.sn, apiName, req);
                    promise = new Promise(function (rs) {
                        return __awaiter$1(_this, void 0, void 0, function () {
                            var service, opEncode, promiseReturn, promiseSend, opSend, ret;
                            var _a, _b, _c;
                            return __generator$1(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        service = this.serviceMap.apiName2Service[apiName];
                                        if (!service) {
                                            rs({
                                                isSucc: false,
                                                err: new TsrpcError('Invalid api name: ' + apiName, {
                                                    code: 'INVALID_API_NAME',
                                                    type: TsrpcErrorType.ClientError
                                                })
                                            });
                                            return [2
                                            ];
                                        }
                                        pendingItem.service = service;
                                        opEncode = this._encodeApiReq(service, req, pendingItem);
                                        if (!opEncode.isSucc) {
                                            rs({
                                                isSucc: false,
                                                err: new TsrpcError(opEncode.errMsg, {
                                                    type: TsrpcErrorType.ClientError,
                                                    code: 'ENCODE_REQ_ERR'
                                                })
                                            });
                                            return [2
                                            ];
                                        }
                                        promiseReturn = this._waitApiReturn(pendingItem, (_a = options.timeout) !== null && _a !== void 0 ? _a : this.options.timeout);
                                        promiseSend = this._sendBuf(opEncode.buf, options, service.id, pendingItem);
                                        return [4,
                                            promiseSend];
                                    case 1:
                                        opSend = _d.sent();
                                        if (opSend.err) {
                                            rs({
                                                isSucc: false,
                                                err: opSend.err
                                            });
                                            return [2
                                            ];
                                        }
                                        return [4,
                                            promiseReturn];
                                    case 2:
                                        ret = _d.sent();
                                        if (pendingItem.isAborted) {
                                            return [2
                                            ];
                                        }
                                        if (ret.isSucc) {
                                            (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("[ApiRes] #" + pendingItem.sn + " " + apiName, ret.res);
                                        }
                                        else {
                                            (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("[ApiErr] #" + pendingItem.sn + " " + apiName, ret.err);
                                        }
                                        rs(ret);
                                        return [2
                                        ];
                                }
                            });
                        });
                    });
                    return [2,
                        promise];
                });
            });
        };
        BaseClient.prototype._encodeApiReq = function (service, req, pendingItem) {
            return TransportDataUtil.encodeApiReq(this.tsbuffer, service, req, this.type === 'LONG' ? pendingItem.sn : undefined);
        };
        BaseClient.prototype.sendMsg = function (msgName, msg, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            var promise = new Promise(function (rs) {
                return __awaiter$1(_this, void 0, void 0, function () {
                    var pre, service, opEncode, promiseSend, opSend;
                    var _a, _b;
                    return __generator$1(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                return [4,
                                    this.flows.preSendMsgFlow.exec({
                                        msgName: msgName,
                                        msg: msg,
                                        options: options
                                    }, this.logger)];
                            case 1:
                                pre = _c.sent();
                                if (!pre) {
                                    return [2
                                    ];
                                }
                                (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[SendMsg]", msgName, msg);
                                service = this.serviceMap.msgName2Service[msgName];
                                if (!service) {
                                    (_b = this.logger) === null || _b === void 0 ? void 0 : _b.error('Invalid msg name: ' + msgName);
                                    rs({
                                        isSucc: false,
                                        err: new TsrpcError('Invalid msg name: ' + msgName, {
                                            code: 'INVALID_MSG_NAME',
                                            type: TsrpcErrorType.ClientError
                                        })
                                    });
                                    return [2
                                    ];
                                }
                                opEncode = this._encodeClientMsg(service, msg);
                                if (!opEncode.isSucc) {
                                    rs({
                                        isSucc: false,
                                        err: new TsrpcError(opEncode.errMsg, {
                                            type: TsrpcErrorType.ClientError,
                                            code: 'ENCODE_MSG_ERR'
                                        })
                                    });
                                    return [2
                                    ];
                                }
                                promiseSend = this._sendBuf(opEncode.buf, options, service.id);
                                return [4,
                                    promiseSend];
                            case 2:
                                opSend = _c.sent();
                                if (opSend.err) {
                                    rs({
                                        isSucc: false,
                                        err: opSend.err
                                    });
                                    return [2
                                    ];
                                }
                                rs({
                                    isSucc: true
                                });
                                this.flows.postSendMsgFlow.exec(pre, this.logger);
                                return [2
                                ];
                        }
                    });
                });
            });
            return promise;
        };
        BaseClient.prototype._encodeClientMsg = function (service, msg) {
            return TransportDataUtil.encodeClientMsg(this.tsbuffer, service, msg);
        };
        BaseClient.prototype.listenMsg = function (msgName, handler) {
            this._msgHandlers.addHandler(msgName, handler);
            return handler;
        };
        BaseClient.prototype.unlistenMsg = function (msgName, handler) {
            this._msgHandlers.removeHandler(msgName, handler);
        };
        BaseClient.prototype.unlistenMsgAll = function (msgName) {
            this._msgHandlers.removeAllHandlers(msgName);
        };
        BaseClient.prototype.abort = function (sn) {
            var _a, _b;
            var index = this._pendingApis.findIndex(function (v) {
                return v.sn === sn;
            });
            if (index === -1) {
                return;
            }
            var pendingItem = this._pendingApis[index];
            this._pendingApis.splice(index, 1);
            pendingItem.onReturn = undefined;
            pendingItem.isAborted = true;
            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[ApiAbort] #" + pendingItem.sn + " " + pendingItem.service.name);
            (_b = pendingItem.onAbort) === null || _b === void 0 ? void 0 : _b.call(pendingItem);
        };
        BaseClient.prototype.abortByKey = function (abortKey) {
            var _this = this;
            this._pendingApis.filter(function (v) {
                return v.abortKey === abortKey;
            }).forEach(function (v) {
                _this.abort(v.sn);
            });
        };
        BaseClient.prototype.abortAll = function () {
            var _this = this;
            this._pendingApis.slice().forEach(function (v) {
                return _this.abort(v.sn);
            });
        };
        BaseClient.prototype._onRecvBuf = function (buf, pendingApiItem) {
            var _a, _b, _c, _d, _e, _f, _g;
            return __awaiter$1(this, void 0, void 0, function () {
                var sn, pre, opParsed, parsed;
                return __generator$1(this, function (_h) {
                    switch (_h.label) {
                        case 0:
                            sn = pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn;
                            this.options.debugBuf && ((_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug('[RecvBuf]' + (sn ? ' #' + sn : ''), 'length=' + buf.length, buf));
                            return [4,
                                this.flows.preRecvBufferFlow.exec({
                                    buf: buf,
                                    sn: sn
                                }, this.logger)];
                        case 1:
                            pre = _h.sent();
                            if (!pre) {
                                return [2
                                ];
                            }
                            buf = pre.buf;
                            opParsed = TransportDataUtil.parseServerOutout(this.tsbuffer, this.serviceMap, buf, pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.service.id);
                            if (opParsed.isSucc) {
                                parsed = opParsed.result;
                                if (parsed.type === 'api') {
                                    sn = sn !== null && sn !== void 0 ? sn : parsed.sn;
                                    (_c = (_b = this._pendingApis.find(function (v) {
                                        return v.sn === sn;
                                    })) === null || _b === void 0 ? void 0 : _b.onReturn) === null || _c === void 0 ? void 0 : _c.call(_b, parsed.ret);
                                }
                                else if (parsed.type === 'msg') {
                                    (_d = this.logger) === null || _d === void 0 ? void 0 : _d.log("[RecvMsg] " + parsed.service.name, parsed.msg);
                                    this._msgHandlers.forEachHandler(parsed.service.name, this.logger, parsed.msg, this);
                                }
                            }
                            else {
                                (_e = this.logger) === null || _e === void 0 ? void 0 : _e.error('ParseServerOutputError: ' + opParsed.errMsg);
                                (_f = this.logger) === null || _f === void 0 ? void 0 : _f.error('Please check whether the proto on the server is the same as that on the client');
                                if (pendingApiItem) {
                                    (_g = pendingApiItem.onReturn) === null || _g === void 0 ? void 0 : _g.call(pendingApiItem, {
                                        isSucc: false,
                                        err: new TsrpcError('Parse server output error', {
                                            type: TsrpcErrorType.ServerError
                                        })
                                    });
                                }
                            }
                            return [2
                            ];
                    }
                });
            });
        };
        BaseClient.prototype._waitApiReturn = function (pendingItem, timeout) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    return [2,
                        new Promise(function (rs) {
                            var timer;
                            if (timeout) {
                                timer = setTimeout(function () {
                                    timer = undefined;
                                    _this._pendingApis.removeOne(function (v) {
                                        return v.sn === pendingItem.sn;
                                    });
                                    rs({
                                        isSucc: false,
                                        err: new TsrpcError('Request Timeout', {
                                            type: TsrpcErrorType.NetworkError,
                                            code: 'TIMEOUT'
                                        })
                                    });
                                }, timeout);
                            }
                            pendingItem.onReturn = function (ret) {
                                if (timer) {
                                    clearTimeout(timer);
                                    timer = undefined;
                                }
                                _this._pendingApis.removeOne(function (v) {
                                    return v.sn === pendingItem.sn;
                                });
                                rs(ret);
                            };
                        })];
                });
            });
        };
        return BaseClient;
    }();
    var defaultBaseClientOptions = {};
    var BaseHttpClient = function (_super) {
        __extends$1(BaseHttpClient, _super);
        function BaseHttpClient(proto, http, options) {
            var _a;
            var _this = _super.call(this, proto, __assign$1(__assign$1({}, defaultBaseHttpClientOptions), options)) || this;
            _this.type = 'SHORT';
            _this._http = http;
            _this._jsonServer = _this.options.server + (_this.options.server.endsWith('/') ? '' : '/');
            (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.log('TSRPC HTTP Client :', _this.options.server);
            return _this;
        }
        BaseHttpClient.prototype._encodeApiReq = function (service, req, pendingItem) {
            if (this.options.json) {
                if (this.options.jsonPrune) {
                    var opPrune = this.tsbuffer.prune(req, pendingItem.service.reqSchemaId);
                    if (!opPrune.isSucc) {
                        return opPrune;
                    }
                    req = opPrune.pruneOutput;
                }
                return {
                    isSucc: true,
                    buf: JSON.stringify(req)
                };
            }
            else {
                return TransportDataUtil.encodeApiReq(this.tsbuffer, service, req, undefined);
            }
        };
        BaseHttpClient.prototype._encodeClientMsg = function (service, msg) {
            if (this.options.json) {
                if (this.options.jsonPrune) {
                    var opPrune = this.tsbuffer.prune(msg, service.msgSchemaId);
                    if (!opPrune.isSucc) {
                        return opPrune;
                    }
                    msg = opPrune.pruneOutput;
                }
                return {
                    isSucc: true,
                    buf: JSON.stringify(msg)
                };
            }
            else {
                return TransportDataUtil.encodeClientMsg(this.tsbuffer, service, msg);
            }
        };
        BaseHttpClient.prototype._sendBuf = function (buf, options, serviceId, pendingApiItem) {
            return __awaiter$1(this, void 0, void 0, function () {
                var sn, promise;
                var _this = this;
                return __generator$1(this, function (_a) {
                    if (this.options.json) {
                        return [2,
                            this._sendJSON(buf, options, serviceId, pendingApiItem)];
                    }
                    sn = pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn;
                    promise = new Promise(function (rs) {
                        return __awaiter$1(_this, void 0, void 0, function () {
                            var pre, _a, fetchPromise, abort, fetchRes;
                            var _b;
                            return __generator$1(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        return [4,
                                            this.flows.preSendBufferFlow.exec({
                                                buf: buf,
                                                sn: pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn
                                            }, this.logger)];
                                    case 1:
                                        pre = _c.sent();
                                        if (!pre) {
                                            return [2
                                            ];
                                        }
                                        buf = pre.buf;
                                        this.options.debugBuf && ((_b = this.logger) === null || _b === void 0 ? void 0 : _b.debug('[SendBuf]' + (sn ? ' #' + sn : ''), "length=" + buf.length, buf));
                                        _a = this._http.fetch({
                                            url: this.options.server,
                                            data: buf,
                                            method: 'POST',
                                            timeout: options.timeout || this.options.timeout,
                                            transportOptions: options,
                                            responseType: 'arraybuffer'
                                        }), fetchPromise = _a.promise, abort = _a.abort;
                                        if (pendingApiItem) {
                                            pendingApiItem.onAbort = function () {
                                                abort();
                                            };
                                        }
                                        if (pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.isAborted) {
                                            return [2
                                            ];
                                        }
                                        return [4,
                                            fetchPromise];
                                    case 2:
                                        fetchRes = _c.sent();
                                        if (!fetchRes.isSucc) {
                                            rs({
                                                err: fetchRes.err
                                            });
                                            return [2
                                            ];
                                        }
                                        rs({});
                                        this._onRecvBuf(fetchRes.res, pendingApiItem);
                                        return [2
                                        ];
                                }
                            });
                        });
                    });
                    promise.catch(function (e) { }).then(function () {
                        if (pendingApiItem) {
                            pendingApiItem.onAbort = undefined;
                        }
                    });
                    return [2,
                        promise];
                });
            });
        };
        BaseHttpClient.prototype._sendJSON = function (jsonStr, options, serviceId, pendingApiItem) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    return [2,
                        new Promise(function (rs) {
                            return __awaiter$1(_this, void 0, void 0, function () {
                                var _a, fetchPromise, abort, fetchRes, ret, opPrune;
                                var _b;
                                return __generator$1(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _a = this._http.fetch({
                                                url: this._jsonServer + this.serviceMap.id2Service[serviceId].name,
                                                data: jsonStr,
                                                method: 'POST',
                                                timeout: options.timeout || this.options.timeout,
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                transportOptions: options,
                                                responseType: 'text'
                                            }), fetchPromise = _a.promise, abort = _a.abort;
                                            if (pendingApiItem) {
                                                pendingApiItem.onAbort = function () {
                                                    abort();
                                                };
                                            }
                                            if (pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.isAborted) {
                                                return [2
                                                ];
                                            }
                                            return [4,
                                                fetchPromise];
                                        case 1:
                                            fetchRes = _c.sent();
                                            if (!fetchRes.isSucc) {
                                                rs({
                                                    err: fetchRes.err
                                                });
                                                return [2
                                                ];
                                            }
                                            rs({});
                                            try {
                                                ret = JSON.parse(fetchRes.res);
                                            }
                                            catch (e) {
                                                ret = {
                                                    isSucc: false,
                                                    err: new TsrpcError({
                                                        message: e.message,
                                                        type: TsrpcError.Type.ServerError,
                                                        res: fetchRes.res
                                                    })
                                                };
                                            }
                                            if (pendingApiItem) {
                                                if (ret.isSucc) {
                                                    if (this.options.jsonPrune) {
                                                        opPrune = this.tsbuffer.prune(ret.res, pendingApiItem.service.resSchemaId);
                                                        if (opPrune.isSucc) {
                                                            ret.res = opPrune.pruneOutput;
                                                        }
                                                        else {
                                                            ret = {
                                                                isSucc: false,
                                                                err: new TsrpcError('Invalid Server Output', {
                                                                    type: TsrpcError.Type.ClientError,
                                                                    innerErr: opPrune.errMsg
                                                                })
                                                            };
                                                        }
                                                    }
                                                }
                                                else {
                                                    ret.err = new TsrpcError(ret.err);
                                                }
                                                (_b = pendingApiItem.onReturn) === null || _b === void 0 ? void 0 : _b.call(pendingApiItem, ret);
                                            }
                                            return [2
                                            ];
                                    }
                                });
                            });
                        })];
                });
            });
        };
        return BaseHttpClient;
    }(BaseClient);
    var defaultBaseHttpClientOptions = __assign$1(__assign$1({}, defaultBaseClientOptions), {
        server: 'http://localhost:3000',
        json: false,
        jsonPrune: true
    });
    var BaseWsClient = function (_super) {
        __extends$1(BaseWsClient, _super);
        function BaseWsClient(proto, wsp, options) {
            var _a;
            var _this = _super.call(this, proto, __assign$1(__assign$1({}, defaultBaseWsClientOptions), options)) || this;
            _this.type = 'LONG';
            _this._onWsOpen = function () {
                var _a;
                if (!_this._connecting) {
                    return;
                }
                _this._status = WsClientStatus.Opened;
                _this._connecting.rs({
                    isSucc: true
                });
                _this._connecting = undefined;
                (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.log('WebSocket connection to server successful');
                _this.flows.postConnectFlow.exec({}, _this.logger);
            };
            _this._onWsClose = function (code, reason) {
                var _a, _b;
                var isConnectedBefore = _this.isConnected;
                _this._status = WsClientStatus.Closed;
                if (_this._connecting) {
                    _this._connecting.rs({
                        isSucc: false,
                        errMsg: 'WebSocket connection to server failed'
                    });
                    _this._connecting = undefined;
                }
                var isManual = !!_this._rsDisconnecting;
                if (_this._rsDisconnecting) {
                    _this._rsDisconnecting();
                    _this._rsDisconnecting = undefined;
                    (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.log('Disconnected succ', "code=" + code + " reason=" + reason);
                }
                else if (isConnectedBefore) {
                    (_b = _this.logger) === null || _b === void 0 ? void 0 : _b.log("Lost connection to " + _this.options.server, "code=" + code + " reason=" + reason);
                }
                if (isConnectedBefore) {
                    _this.flows.postDisconnectFlow.exec({
                        reason: reason,
                        isManual: isManual
                    }, _this.logger);
                }
            };
            _this._onWsError = function (e) {
                var _a;
                (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.error('[WebSocket Error]', e);
            };
            _this._onWsMessage = function (data) {
                var _a;
                if (typeof data === 'string') {
                    (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.warn('[RecvText]', data);
                }
                else {
                    _this._onRecvBuf(data);
                }
            };
            _this._status = WsClientStatus.Closed;
            _this._wsp = wsp;
            wsp.options = {
                onOpen: _this._onWsOpen,
                onClose: _this._onWsClose,
                onError: _this._onWsError,
                onMessage: _this._onWsMessage,
                logger: _this.logger
            };
            (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.log('TSRPC WebSocket Client :', _this.options.server);
            return _this;
        }
        BaseWsClient.prototype._sendBuf = function (buf, options, serviceId, pendingApiItem) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    return [2,
                        new Promise(function (rs) {
                            return __awaiter$1(_this, void 0, void 0, function () {
                                var pre;
                                var _a;
                                return __generator$1(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            return [4,
                                                this.flows.preSendBufferFlow.exec({
                                                    buf: buf,
                                                    sn: pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn
                                                }, this.logger)];
                                        case 1:
                                            pre = _b.sent();
                                            if (!pre) {
                                                return [2
                                                ];
                                            }
                                            buf = pre.buf;
                                            if (!this.isConnected) {
                                                rs({
                                                    err: new TsrpcError('WebSocket is not connected', {
                                                        code: 'WS_NOT_OPEN',
                                                        type: TsrpcError.Type.ClientError
                                                    })
                                                });
                                                return [2
                                                ];
                                            }
                                            if (this.options.debugBuf && buf instanceof Uint8Array) {
                                                (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug('[SendBuf]' + (pendingApiItem ? ' #' + pendingApiItem.sn : ''), "length=" + buf.byteLength, buf);
                                            }
                                            rs(this._wsp.send(buf));
                                            return [2
                                            ];
                                    }
                                });
                            });
                        })];
                });
            });
        };
        Object.defineProperty(BaseWsClient.prototype, "status", {
            get: function get() {
                return this._status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseWsClient.prototype, "isConnected", {
            get: function get() {
                return this._status === WsClientStatus.Opened;
            },
            enumerable: false,
            configurable: true
        });
        BaseWsClient.prototype.connect = function () {
            var _a;
            return __awaiter$1(this, void 0, void 0, function () {
                var pre, promiseConnect;
                var _this = this;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (this.isConnected) {
                                return [2,
                                    {
                                        isSucc: true
                                    }];
                            }
                            if (this._connecting) {
                                return [2,
                                    this._connecting.promise];
                            }
                            return [4,
                                this.flows.preConnectFlow.exec({}, this.logger)];
                        case 1:
                            pre = _b.sent();
                            if (pre === null || pre === void 0 ? void 0 : pre.return) {
                                return [2,
                                    pre.return];
                            }
                            if (!pre) {
                                return [2,
                                    new Promise(function (rs) { })];
                            }
                            try {
                                this._wsp.connect(this.options.server);
                            }
                            catch (e) {
                                return [2,
                                    {
                                        isSucc: false,
                                        errMsg: e.message
                                    }];
                            }
                            this._status = WsClientStatus.Opening;
                            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("Start connecting " + this.options.server + "...");
                            this._connecting = {};
                            promiseConnect = new Promise(function (rs) {
                                _this._connecting.rs = rs;
                            });
                            this._connecting.promise = promiseConnect;
                            return [2,
                                promiseConnect];
                    }
                });
            });
        };
        BaseWsClient.prototype.disconnect = function (code, reason) {
            var _a;
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_b) {
                    if (this._status === WsClientStatus.Closed) {
                        return [2
                        ];
                    }
                    this._status = WsClientStatus.Closing;
                    (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log('Start disconnecting...');
                    return [2,
                        new Promise(function (rs) {
                            _this._rsDisconnecting = rs;
                            _this._wsp.close(code, reason);
                        })];
                });
            });
        };
        return BaseWsClient;
    }(BaseClient);
    var defaultBaseWsClientOptions = __assign$1(__assign$1({}, defaultBaseClientOptions), {
        server: 'ws://localhost:3000'
    });
    var WsClientStatus;
    (function (WsClientStatus) {
        WsClientStatus["Opening"] = "OPENING";
        WsClientStatus["Opened"] = "OPENED";
        WsClientStatus["Closing"] = "CLOSING";
        WsClientStatus["Closed"] = "CLOSED";
    })(WsClientStatus || (WsClientStatus = {}));
    var HttpProxy = (function () {
        function HttpProxy() {
        }
        HttpProxy.prototype.fetch = function (options) {
            var _this = this;
            var rs;
            var promise = new Promise(function (_rs) {
                rs = _rs;
            });
            var xhr = new XMLHttpRequest();
            if (navigator.userAgent.indexOf('MSIE 8.0;') > -1) {
                xhr.onreadystatechange = function () {
                    return __awaiter$1(_this, void 0, void 0, function () {
                        return __generator$1(this, function (_a) {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 0 || (xhr.response == null && xhr.responseText == null)) {
                                    rs({
                                        isSucc: false,
                                        err: new TsrpcError('Network Error', {
                                            type: TsrpcError.Type.NetworkError,
                                            httpCode: xhr.status
                                        })
                                    });
                                    return [2];
                                }
                                if (xhr.status == 12029) {
                                    rs({
                                        isSucc: false,
                                        err: new TsrpcError({
                                            message: 'Network Error',
                                            type: TsrpcError.Type.NetworkError,
                                            httpCode: xhr.status
                                        })
                                    });
                                    return [2];
                                }
                                rs({
                                    isSucc: true,
                                    res: options.responseType === 'text' ? xhr.responseText : new Uint8Array(xhr.response)
                                });
                            }
                            return [2];
                        });
                    });
                };
            }
            else {
                xhr.onerror = function () {
                    rs({
                        isSucc: false,
                        err: new TsrpcError({
                            message: 'Network Error',
                            type: TsrpcError.Type.NetworkError,
                            httpCode: xhr.status
                        })
                    });
                };
                xhr.ontimeout = function () {
                    rs({
                        isSucc: false,
                        err: new TsrpcError({
                            message: 'Request Timeout',
                            type: TsrpcError.Type.NetworkError,
                            code: 'TIMEOUT'
                        })
                    });
                };
                xhr.onload = function () {
                    return __awaiter$1(_this, void 0, void 0, function () {
                        return __generator$1(this, function (_a) {
                            rs({
                                isSucc: true,
                                res: xhr.response && (options.responseType === 'text' ? xhr.responseText : new Uint8Array(xhr.response))
                            });
                            return [2];
                        });
                    });
                };
                var transportOptions_1 = options.transportOptions;
                if (!!transportOptions_1.onProgress) {
                    xhr.upload.onprogress = function (e) {
                        var _a;
                        (_a = transportOptions_1.onProgress) === null || _a === void 0 ? void 0 : _a.call(transportOptions_1, e.loaded / e.total);
                    };
                }
            }
            xhr.open(options.method, options.url, true);
            if (options.headers) {
                for (var key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            xhr.responseType = options.responseType;
            var timeout = options.timeout;
            if (timeout) {
                xhr.timeout = timeout;
            }
            xhr.send(options.data);
            var abort = xhr.abort.bind(xhr);
            return {
                promise: promise,
                abort: abort
            };
        };
        return HttpProxy;
    }());
    var HttpClient = (function (_super) {
        __extends$1(HttpClient, _super);
        function HttpClient(proto, options) {
            var _this = this;
            var httpProxy = new HttpProxy;
            _this = _super.call(this, proto, httpProxy, __assign$1(__assign$1({}, defaultHttpClientOptions), options)) || this;
            return _this;
        }
        HttpClient.prototype.callApi = function (apiName, req, options) {
            if (options === void 0) {
                options = {};
            }
            return _super.prototype.callApi.call(this, apiName, req, options);
        };
        HttpClient.prototype.sendMsg = function (msgName, msg, options) {
            if (options === void 0) {
                options = {};
            }
            return _super.prototype.sendMsg.call(this, msgName, msg, options);
        };
        return HttpClient;
    }(BaseHttpClient));
    var defaultHttpClientOptions = __assign$1({}, defaultBaseHttpClientOptions);
    var WebSocketProxy = (function () {
        function WebSocketProxy() {
        }
        WebSocketProxy.prototype.connect = function (server) {
            var _this = this;
            this._ws = new WebSocket(server);
            this._ws.binaryType = 'arraybuffer';
            this._ws.onopen = this.options.onOpen;
            this._ws.onclose = function (e) {
                _this.options.onClose(e.code, e.reason);
                _this._ws = undefined;
            };
            this._ws.onmessage = function (e) {
                var _a;
                if (e.data instanceof ArrayBuffer) {
                    _this.options.onMessage(new Uint8Array(e.data));
                }
                else if (typeof e.data === 'string') {
                    _this.options.onMessage(e.data);
                }
                else {
                    (_a = _this.options.logger) === null || _a === void 0 ? void 0 : _a.warn('[Unresolved Recv]', e.data);
                }
            };
        };
        WebSocketProxy.prototype.close = function (code, reason) {
            var _a;
            (_a = this._ws) === null || _a === void 0 ? void 0 : _a.close(code, reason);
            this._ws = undefined;
        };
        WebSocketProxy.prototype.send = function (data) {
            return __awaiter$1(this, void 0, void 0, function () {
                var sendData, buf;
                return __generator$1(this, function (_a) {
                    try {
                        sendData = void 0;
                        if (typeof data === 'string') {
                            sendData = data;
                        }
                        else {
                            buf = data;
                            if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
                                sendData = buf.buffer;
                            }
                            else {
                                sendData = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
                            }
                        }
                        this._ws.send(sendData);
                        return [2, {}];
                    }
                    catch (err) {
                        return [2, {
                                err: new TsrpcError('Network Error', {
                                    code: 'SEND_BUF_ERR',
                                    type: TsrpcError.Type.NetworkError,
                                    innerErr: err
                                })
                            }];
                    }
                    return [2];
                });
            });
        };
        return WebSocketProxy;
    }());
    var WsClient = (function (_super) {
        __extends$1(WsClient, _super);
        function WsClient(proto, options) {
            var _this = this;
            var wsp = new WebSocketProxy();
            _this = _super.call(this, proto, wsp, __assign$1(__assign$1({}, defaultWsClientOptions), options)) || this;
            return _this;
        }
        return WsClient;
    }(BaseWsClient));
    var defaultWsClientOptions = __assign$1({}, defaultBaseWsClientOptions);

    let client = new HttpClient(serviceProto, {
        server: 'http://localhost:3000',
        logger: console
    });
    function test() {
        return __awaiter(this, void 0, void 0, function* () {
            yield client.callApi('AddData', {
                content: 'AAAAA'
            });
            let ret = yield client.callApi('GetData', {});
            console.log('ret', ret);
        });
    }
    test();
    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
