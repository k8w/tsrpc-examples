(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
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

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }

    var tslib_es6 = /*#__PURE__*/Object.freeze({
        __extends: __extends,
        get __assign () { return __assign; },
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn
    });

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
        constructor() { }
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

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    "use strict";
    ///<reference path="index.d.ts"/>
    var _a;
    var extendFuncs = {
        remove: function (filter) {
            if (typeof (filter) == 'function') {
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
        },
        removeOne: function (filter) {
            if (typeof (filter) == 'function') {
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
        },
        first: function () {
            return this.length ? this[0] : null;
        },
        last: function () {
            return this.length ? this[this.length - 1] : null;
        },
        max: function (mapper) {
            if (!this.length) {
                return null;
            }
            if (typeof (mapper) == 'function') {
                var max = mapper(this[0], 0, this);
                for (var i = 1; i < this.length; ++i) {
                    var temp = mapper(this[i], i, this);
                    max = temp > max ? temp : max;
                }
                return max;
            }
            else {
                return this.reduce(function (prev, cur) { return prev > cur ? prev : cur; });
            }
        },
        min: function (mapper) {
            if (!this.length) {
                return null;
            }
            function _min(a, b) {
                return a < b ? a : b;
            }
            if (typeof (mapper) == 'function') {
                var min = mapper(this[0], 0, this);
                for (var i = 1; i < this.length; ++i) {
                    var temp = mapper(this[i], i, this);
                    min = temp < min ? temp : min;
                }
                return min;
            }
            else {
                return this.reduce(function (prev, cur) { return _min(prev, cur); });
            }
        },
        distinct: function () {
            return this.filter(function (v, i, arr) { return arr.indexOf(v) === i; });
        },
        filterIndex: function (filter) {
            var output = [];
            for (var i = 0; i < this.length; ++i) {
                if (filter(this[i], i, this)) {
                    output.push(i);
                }
            }
            return output;
        },
        count: function (filter) {
            var result = 0;
            for (var i = 0; i < this.length; ++i) {
                if (filter(this[i], i, this)) {
                    ++result;
                }
            }
            return result;
        },
        sum: function (mapper) {
            var result = 0;
            for (var i = 0; i < this.length; ++i) {
                result += mapper ? mapper(this[i], i, this) : this[i];
            }
            return result;
        },
        average: function (mapper) {
            return this.sum(mapper) / this.length;
        },
        orderBy: function () {
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
        },
        orderByDesc: function () {
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
        },
        binarySearch: function (value, keyMapper) {
            var low = 0, high = this.length - 1;
            while (low <= high) {
                var mid = ((high + low) / 2) | 0;
                var midValue = keyMapper ? keyMapper(this[mid]) : this[mid];
                if (value === midValue) {
                    return mid;
                }
                else if (value > midValue) {
                    low = mid + 1;
                }
                else if (value < midValue) {
                    high = mid - 1;
                }
            }
            return -1;
        },
        binaryInsert: function (item, keyMapper, unique) {
            if (typeof (keyMapper) == 'boolean') {
                unique = keyMapper;
                keyMapper = undefined;
            }
            var low = 0, high = this.length - 1;
            var mid = NaN;
            var itemValue = keyMapper ? keyMapper(item) : item;
            while (low <= high) {
                mid = ((high + low) / 2) | 0;
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
        },
        binaryDistinct: function (keyMapper) {
            return this.filter(function (v, i, arr) { return arr.binarySearch(v, keyMapper) === i; });
        },
        findLast: function (predicate) {
            for (var i = this.length - 1; i > -1; --i) {
                if (predicate(this[i], i, this)) {
                    return this[i];
                }
            }
            return undefined;
        },
        findLastIndex: function (predicate) {
            for (var i = this.length - 1; i > -1; --i) {
                if (predicate(this[i], i, this)) {
                    return i;
                }
            }
            return -1;
        },
        groupBy: function (grouper) {
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
        },
        __k8w_extended: {
            value: true
        }
    };
    if (!Array.prototype.__k8w_extended) {
        for (var key in extendFuncs) {
            Object.defineProperties(Array.prototype, (_a = {},
                _a[key] = {
                    value: extendFuncs[key],
                    writable: true
                },
                _a));
        }
    }

    var k8wLinqArray = /*#__PURE__*/Object.freeze({

    });

    "use strict";
    ///<reference path="index.d.ts"/>
    function prependZero(matched, num) {
        return matched.length > 1 && num < 10 ? "0" + num : "" + num;
    }
    Date.prototype.format = function (pattern) {
        var _this = this;
        if (pattern === void 0) { pattern = 'YYYY-MM-DD hh:mm:ss'; }
        return pattern.replace(/y{2,}|Y{2,}/, function (v) { return (_this.getFullYear() + "").substr(4 - v.length); })
            .replace(/M{1,2}/, function (v) { return prependZero(v, _this.getMonth() + 1); })
            .replace(/D{1,2}|d{1,2}/, function (v) { return prependZero(v, _this.getDate()); })
            .replace(/Q|q/, function (v) { return prependZero(v, Math.ceil((_this.getMonth() + 1) / 3)); })
            .replace(/h{1,2}|H{1,2}/, function (v) { return prependZero(v, _this.getHours()); })
            .replace(/m{1,2}/, function (v) { return prependZero(v, _this.getMinutes()); })
            .replace(/s{1,2}/, function (v) { return prependZero(v, _this.getSeconds()); })
            .replace(/SSS|S/, function (v) {
            var ms = '' + _this.getMilliseconds();
            return v.length === 1 ? ms : "" + (ms.length === 1 ? '00' : ms.length === 2 ? '0' : '') + ms;
        });
    };
    Date.today = function () {
        var now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    };

    var k8wSuperDate = /*#__PURE__*/Object.freeze({

    });

    "use strict";
    ///<reference path="index.d.ts"/>
    /**
     * 将sources合并到target，该合并全部是深拷贝
     * @param target
     * @param sources
     * @returns {Object}
     */
    Object.merge = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < sources.length; ++i) {
            var source = sources[i];
            if (typeof source != 'object' || source == null) {
                continue;
            }
            for (var skey in source) {
                //只处理自身的key 这里可能来自于外部prototype的扩展
                if (!source.hasOwnProperty(skey)) {
                    continue;
                }
                if (source[skey] instanceof Date) {
                    //Date类型 要克隆一份 保证深拷贝
                    target[skey] = new Date(source[skey]);
                    continue;
                }
                else if (typeof (target[skey]) == 'object' && target[skey] != null && typeof (source[skey]) == 'object' && source[skey] != null) {
                    // 两个都是Object 递归merge之
                    Object.merge(target[skey], source[skey]);
                }
                else {
                    if (Array.isArray(source[skey])) {
                        // 数组merge后还是数组
                        target[skey] = Object.merge([], source[skey]);
                    }
                    else if (typeof (source[skey]) == 'object' && source[skey] !== null) {
                        // Object要克隆一份以确保深拷贝
                        target[skey] = Object.merge({}, source[skey]);
                    }
                    else {
                        // 基本类型 直接赋值即可
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

    var k8wSuperObject = /*#__PURE__*/Object.freeze({

    });

    'use strict';





    //应对IE9以下没有console
    if (typeof window != 'undefined' && !window.console) {
        window.console = {};
        console.log = console.debug = console.info = console.warn = console.error = console.time = console.timeEnd = function () { };
    }
    //应对某些浏览器没有console.debug的情况
    if (!console.debug) {
        console.debug = console.log;
    }

    var k8wExtendNative = {

    };

    var check = function (it) {
      return it && it.Math == Math && it;
    };

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global_1 =
      // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == 'object' && globalThis) ||
      check(typeof window == 'object' && window) ||
      // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == 'object' && self) ||
      check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
      // eslint-disable-next-line no-new-func -- fallback
      (function () { return this; })() || Function('return this')();

    var isPure = false;

    var setGlobal = function (key, value) {
      try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(global_1, key, { value: value, configurable: true, writable: true });
      } catch (error) {
        global_1[key] = value;
      } return value;
    };

    var SHARED = '__core-js_shared__';
    var store = global_1[SHARED] || setGlobal(SHARED, {});

    var sharedStore = store;

    var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.18.2',
      mode: isPure ? 'pure' : 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    });
    });

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    var requireObjectCoercible = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it);
      return it;
    };

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    var toObject = function (argument) {
      return Object(requireObjectCoercible(argument));
    };

    var hasOwnProperty = {}.hasOwnProperty;

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty.call(toObject(it), key);
    };

    var id = 0;
    var postfix = Math.random();

    var uid = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
    };

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    var isCallable = function (argument) {
      return typeof argument === 'function';
    };

    var aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined;
    };

    var getBuiltIn = function (namespace, method) {
      return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
    };

    var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

    var process = global_1.process;
    var Deno = global_1.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match, version;

    if (v8) {
      match = v8.split('.');
      version = match[0] < 4 ? 1 : match[0] + match[1];
    } else if (engineUserAgent) {
      match = engineUserAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = engineUserAgent.match(/Chrome\/(\d+)/);
        if (match) version = match[1];
      }
    }

    var engineV8Version = version && +version;

    var fails = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };

    /* eslint-disable es/no-symbol -- required for testing */



    // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
      var symbol = Symbol();
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
        // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && engineV8Version && engineV8Version < 41;
    });

    /* eslint-disable es/no-symbol -- required for testing */


    var useSymbolAsUid = nativeSymbol
      && !Symbol.sham
      && typeof Symbol.iterator == 'symbol';

    var WellKnownSymbolsStore = shared('wks');
    var Symbol$1 = global_1.Symbol;
    var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

    var wellKnownSymbol = function (name) {
      if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
        if (nativeSymbol && hasOwnProperty_1(Symbol$1, name)) {
          WellKnownSymbolsStore[name] = Symbol$1[name];
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
        }
      } return WellKnownSymbolsStore[name];
    };

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var test = {};

    test[TO_STRING_TAG] = 'z';

    var toStringTagSupport = String(test) === '[object z]';

    // Detect IE8's incomplete defineProperty implementation
    var descriptors = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
    });

    var isObject = function (it) {
      return typeof it === 'object' ? it !== null : isCallable(it);
    };

    var document$1 = global_1.document;
    // typeof document.createElement is 'object' in old IE
    var EXISTS = isObject(document$1) && isObject(document$1.createElement);

    var documentCreateElement = function (it) {
      return EXISTS ? document$1.createElement(it) : {};
    };

    // Thank's IE8 for his funny defineProperty
    var ie8DomDefine = !descriptors && !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
      return Object.defineProperty(documentCreateElement('div'), 'a', {
        get: function () { return 7; }
      }).a != 7;
    });

    // `Assert: Type(argument) is Object`
    var anObject = function (argument) {
      if (isObject(argument)) return argument;
      throw TypeError(String(argument) + ' is not an object');
    };

    var isSymbol = useSymbolAsUid ? function (it) {
      return typeof it == 'symbol';
    } : function (it) {
      var $Symbol = getBuiltIn('Symbol');
      return isCallable($Symbol) && Object(it) instanceof $Symbol;
    };

    var tryToString = function (argument) {
      try {
        return String(argument);
      } catch (error) {
        return 'Object';
      }
    };

    // `Assert: IsCallable(argument) is true`
    var aCallable = function (argument) {
      if (isCallable(argument)) return argument;
      throw TypeError(tryToString(argument) + ' is not a function');
    };

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    var getMethod = function (V, P) {
      var func = V[P];
      return func == null ? undefined : aCallable(func);
    };

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    var ordinaryToPrimitive = function (input, pref) {
      var fn, val;
      if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
      if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    var toPrimitive = function (input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = exoticToPrim.call(input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw TypeError("Can't convert object to primitive value");
      }
      if (pref === undefined) pref = 'number';
      return ordinaryToPrimitive(input, pref);
    };

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    var toPropertyKey = function (argument) {
      var key = toPrimitive(argument, 'string');
      return isSymbol(key) ? key : String(key);
    };

    // eslint-disable-next-line es/no-object-defineproperty -- safe
    var $defineProperty = Object.defineProperty;

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    var f = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (ie8DomDefine) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var objectDefineProperty = {
    	f: f
    };

    var createPropertyDescriptor = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    var createNonEnumerableProperty = descriptors ? function (object, key, value) {
      return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    var functionToString = Function.toString;

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable(sharedStore.inspectSource)) {
      sharedStore.inspectSource = function (it) {
        return functionToString.call(it);
      };
    }

    var inspectSource = sharedStore.inspectSource;

    var WeakMap = global_1.WeakMap;

    var nativeWeakMap = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

    var keys = shared('keys');

    var sharedKey = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };

    var hiddenKeys = {};

    var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
    var WeakMap$1 = global_1.WeakMap;
    var set, get, has;

    var enforce = function (it) {
      return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function (TYPE) {
      return function (it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        } return state;
      };
    };

    if (nativeWeakMap || sharedStore.state) {
      var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
      var wmget = store$1.get;
      var wmhas = store$1.has;
      var wmset = store$1.set;
      set = function (it, metadata) {
        if (wmhas.call(store$1, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset.call(store$1, it, metadata);
        return metadata;
      };
      get = function (it) {
        return wmget.call(store$1, it) || {};
      };
      has = function (it) {
        return wmhas.call(store$1, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys[STATE] = true;
      set = function (it, metadata) {
        if (hasOwnProperty_1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function (it) {
        return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
      };
      has = function (it) {
        return hasOwnProperty_1(it, STATE);
      };
    }

    var internalState = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
    var internalState_1 = internalState.set;
    var internalState_2 = internalState.get;
    var internalState_3 = internalState.has;
    var internalState_4 = internalState.enforce;
    var internalState_5 = internalState.getterFor;

    var FunctionPrototype = Function.prototype;
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

    var EXISTS$1 = hasOwnProperty_1(FunctionPrototype, 'name');
    // additional protection from minified / mangled / dropped function names
    var PROPER = EXISTS$1 && (function something() { /* empty */ }).name === 'something';
    var CONFIGURABLE = EXISTS$1 && (!descriptors || (descriptors && getDescriptor(FunctionPrototype, 'name').configurable));

    var functionName = {
      EXISTS: EXISTS$1,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    };
    var functionName_1 = functionName.EXISTS;
    var functionName_2 = functionName.PROPER;
    var functionName_3 = functionName.CONFIGURABLE;

    var redefine = createCommonjsModule(function (module) {
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;

    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');

    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var name = options && options.name !== undefined ? options.name : key;
      var state;
      if (isCallable(value)) {
        if (String(name).slice(0, 7) === 'Symbol(') {
          name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
        }
        if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
          createNonEnumerableProperty(value, 'name', name);
        }
        state = enforceInternalState(value);
        if (!state.source) {
          state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
        }
      }
      if (O === global_1) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }
      if (simple) O[key] = value;
      else createNonEnumerableProperty(O, key, value);
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    });
    });

    var toString = {}.toString;

    var classofRaw = function (it) {
      return toString.call(it).slice(8, -1);
    };

    var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
    // ES3 wrong here
    var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (error) { /* empty */ }
    };

    // getting tag from ES6+ `Object.prototype.toString`
    var classof = toStringTagSupport ? classofRaw : function (it) {
      var O, tag, result;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
        // builtinTag case
        : CORRECT_ARGUMENTS ? classofRaw(O)
        // ES3 arguments fallback
        : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
    };

    'use strict';



    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    var objectToString = toStringTagSupport ? {}.toString : function toString() {
      return '[object ' + classof(this) + ']';
    };

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!toStringTagSupport) {
      redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
    }

    var es_object_toString = {

    };

    var toString_1 = function (argument) {
      if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
      return String(argument);
    };

    'use strict';


    // `RegExp.prototype.flags` getter implementation
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
    var regexpFlags = function () {
      var that = anObject(this);
      var result = '';
      if (that.global) result += 'g';
      if (that.ignoreCase) result += 'i';
      if (that.multiline) result += 'm';
      if (that.dotAll) result += 's';
      if (that.unicode) result += 'u';
      if (that.sticky) result += 'y';
      return result;
    };

    'use strict';
    var PROPER_FUNCTION_NAME = functionName.PROPER;






    var TO_STRING = 'toString';
    var RegExpPrototype = RegExp.prototype;
    var nativeToString = RegExpPrototype[TO_STRING];

    var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
    // FF44- RegExp#toString has a wrong name
    var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

    // `RegExp.prototype.toString` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
    if (NOT_GENERIC || INCORRECT_NAME) {
      redefine(RegExp.prototype, TO_STRING, function toString() {
        var R = anObject(this);
        var p = toString_1(R.source);
        var rf = R.flags;
        var f = toString_1(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
        return '/' + p + '/' + f;
      }, { unsafe: true });
    }

    var es_regexp_toString = {

    };

    'use strict';
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;

    var objectPropertyIsEnumerable = {
    	f: f$1
    };

    var split = ''.split;

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var indexedObject = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;

    // toObject with fallback for non-array-like ES3 strings



    var toIndexedObject = function (it) {
      return indexedObject(requireObjectCoercible(it));
    };

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    var f$2 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (ie8DomDefine) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) { /* empty */ }
      if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
    };

    var objectGetOwnPropertyDescriptor = {
    	f: f$2
    };

    var ceil = Math.ceil;
    var floor = Math.floor;

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    var toIntegerOrInfinity = function (argument) {
      var number = +argument;
      // eslint-disable-next-line no-self-compare -- safe
      return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
    };

    var max = Math.max;
    var min = Math.min;

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    var toAbsoluteIndex = function (index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };

    var min$1 = Math.min;

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    var toLength = function (argument) {
      return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    var lengthOfArrayLike = function (obj) {
      return toLength(obj.length);
    };

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare -- NaN check
          if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        } else for (;length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };

    var arrayIncludes = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
    var arrayIncludes_1 = arrayIncludes.includes;
    var arrayIncludes_2 = arrayIncludes.indexOf;

    var indexOf = arrayIncludes.indexOf;


    var objectKeysInternal = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwnProperty_1(hiddenKeys, key) && hasOwnProperty_1(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
      return result;
    };

    // IE8- don't enum bug keys
    var enumBugKeys = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ];

    var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe
    var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return objectKeysInternal(O, hiddenKeys$1);
    };

    var objectGetOwnPropertyNames = {
    	f: f$3
    };

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    var f$4 = Object.getOwnPropertySymbols;

    var objectGetOwnPropertySymbols = {
    	f: f$4
    };

    // all object keys, includes non-enumerable and symbols
    var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = objectGetOwnPropertyNames.f(anObject(it));
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };

    var copyConstructorProperties = function (target, source) {
      var keys = ownKeys(source);
      var defineProperty = objectDefineProperty.f;
      var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwnProperty_1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };

    var replacement = /#|\.prototype\./;

    var isForced = function (feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true
        : value == NATIVE ? false
        : isCallable(detection) ? fails(detection)
        : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';

    var isForced_1 = isForced;

    var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
      options.name        - the .name of the function if it does not match the key
    */
    var _export = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global_1;
      } else if (STATIC) {
        target = global_1[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global_1[TARGET] || {}).prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor$1(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || (targetProperty && targetProperty.sham)) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        }
        // extend global
        redefine(target, key, sourceProperty, options);
      }
    };

    // `Number.MAX_SAFE_INTEGER` constant
    // https://tc39.es/ecma262/#sec-number.max_safe_integer
    _export({ target: 'Number', stat: true }, {
      MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
    });

    var es_number_maxSafeInteger = {

    };

    var aPossiblePrototype = function (argument) {
      if (typeof argument === 'object' || isCallable(argument)) return argument;
      throw TypeError("Can't set " + String(argument) + ' as a prototype');
    };

    /* eslint-disable no-proto -- safe */



    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    // eslint-disable-next-line es/no-object-setprototypeof -- safe
    var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) { /* empty */ }
      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);
        else O.__proto__ = proto;
        return O;
      };
    }() : undefined);

    // makes subclassing work correct for wrapped built-ins
    var inheritIfRequired = function ($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        objectSetPrototypeOf &&
        // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        isCallable(NewTarget = dummy.constructor) &&
        NewTarget !== Wrapper &&
        isObject(NewTargetPrototype = NewTarget.prototype) &&
        NewTargetPrototype !== Wrapper.prototype
      ) objectSetPrototypeOf($this, NewTargetPrototype);
      return $this;
    };

    var valueOf = 1.0.valueOf;

    // `thisNumberValue` abstract operation
    // https://tc39.es/ecma262/#sec-thisnumbervalue
    var thisNumberValue = function (value) {
      return valueOf.call(value);
    };

    // a string of all valid unicode whitespaces
    var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
      '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

    var whitespace = '[' + whitespaces + ']';
    var ltrim = RegExp('^' + whitespace + whitespace + '*');
    var rtrim = RegExp(whitespace + whitespace + '*$');

    // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
    var createMethod$1 = function (TYPE) {
      return function ($this) {
        var string = toString_1(requireObjectCoercible($this));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
      };
    };

    var stringTrim = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimstart
      start: createMethod$1(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimend
      end: createMethod$1(2),
      // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim
      trim: createMethod$1(3)
    };
    var stringTrim_1 = stringTrim.start;
    var stringTrim_2 = stringTrim.end;
    var stringTrim_3 = stringTrim.trim;

    'use strict';









    var getOwnPropertyNames = objectGetOwnPropertyNames.f;
    var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
    var defineProperty = objectDefineProperty.f;

    var trim = stringTrim.trim;

    var NUMBER = 'Number';
    var NativeNumber = global_1[NUMBER];
    var NumberPrototype = NativeNumber.prototype;

    // `ToNumeric` abstract operation
    // https://tc39.es/ecma262/#sec-tonumeric
    var toNumeric = function (value) {
      var primValue = toPrimitive(value, 'number');
      return typeof primValue === 'bigint' ? primValue : toNumber(primValue);
    };

    // `ToNumber` abstract operation
    // https://tc39.es/ecma262/#sec-tonumber
    var toNumber = function (argument) {
      var it = toPrimitive(argument, 'number');
      var first, third, radix, maxCode, digits, length, index, code;
      if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
      if (typeof it == 'string' && it.length > 2) {
        it = trim(it);
        first = it.charCodeAt(0);
        if (first === 43 || first === 45) {
          third = it.charCodeAt(2);
          if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (it.charCodeAt(1)) {
            case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
            case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
            default: return +it;
          }
          digits = it.slice(2);
          length = digits.length;
          for (index = 0; index < length; index++) {
            code = digits.charCodeAt(index);
            // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols
            if (code < 48 || code > maxCode) return NaN;
          } return parseInt(digits, radix);
        }
      } return +it;
    };

    // `Number` constructor
    // https://tc39.es/ecma262/#sec-number-constructor
    if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
      var NumberWrapper = function Number(value) {
        var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
        var dummy = this;
        // check on 1..constructor(foo) case
        return dummy instanceof NumberWrapper && fails(function () { thisNumberValue(dummy); })
          ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
      };
      for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : (
        // ES3:
        'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
        // ES2015 (in case, if modules with ES2015 Number statics required before):
        'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
        // ESNext
        'fromString,range'
      ).split(','), j = 0, key$1; keys$1.length > j; j++) {
        if (hasOwnProperty_1(NativeNumber, key$1 = keys$1[j]) && !hasOwnProperty_1(NumberWrapper, key$1)) {
          defineProperty(NumberWrapper, key$1, getOwnPropertyDescriptor$2(NativeNumber, key$1));
        }
      }
      NumberWrapper.prototype = NumberPrototype;
      NumberPrototype.constructor = NumberWrapper;
      redefine(global_1, NUMBER, NumberWrapper);
    }

    var es_number_constructor = {

    };

    // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var $RegExp = global_1.RegExp;

    var UNSUPPORTED_Y = fails(function () {
      var re = $RegExp('a', 'y');
      re.lastIndex = 2;
      return re.exec('abcd') != null;
    });

    var BROKEN_CARET = fails(function () {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
      var re = $RegExp('^r', 'gy');
      re.lastIndex = 2;
      return re.exec('str') != null;
    });

    var regexpStickyHelpers = {
    	UNSUPPORTED_Y: UNSUPPORTED_Y,
    	BROKEN_CARET: BROKEN_CARET
    };

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    var objectKeys = Object.keys || function keys(O) {
      return objectKeysInternal(O, enumBugKeys);
    };

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es/no-object-defineproperties -- safe
    var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
      return O;
    };

    var html = getBuiltIn('document', 'documentElement');

    /* global ActiveXObject -- old IE, WSH */








    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey('IE_PROTO');

    var EmptyConstructor = function () { /* empty */ };

    var scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    };

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    var NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''));
      activeXDocument.close();
      var temp = activeXDocument.parentWindow.Object;
      activeXDocument = null; // avoid memory leak
      return temp;
    };

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe');
      var JS = 'java' + SCRIPT + ':';
      var iframeDocument;
      iframe.style.display = 'none';
      html.appendChild(iframe);
      // https://github.com/zloirock/core-js/issues/475
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    };

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    var activeXDocument;
    var NullProtoObject = function () {
      try {
        activeXDocument = new ActiveXObject('htmlfile');
      } catch (error) { /* ignore */ }
      NullProtoObject = typeof document != 'undefined'
        ? document.domain && activeXDocument
          ? NullProtoObjectViaActiveX(activeXDocument) // old IE
          : NullProtoObjectViaIFrame()
        : NullProtoObjectViaActiveX(activeXDocument); // WSH
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };

    hiddenKeys[IE_PROTO] = true;

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    var objectCreate = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === undefined ? result : objectDefineProperties(result, Properties);
    };

    // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    var $RegExp$1 = global_1.RegExp;

    var regexpUnsupportedDotAll = fails(function () {
      var re = $RegExp$1('.', 's');
      return !(re.dotAll && re.exec('\n') && re.flags === 's');
    });

    // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
    var $RegExp$2 = global_1.RegExp;

    var regexpUnsupportedNcg = fails(function () {
      var re = $RegExp$2('(?<a>b)', 'g');
      return re.exec('b').groups.a !== 'b' ||
        'b'.replace(re, '$<a>c') !== 'bc';
    });

    'use strict';
    /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
    /* eslint-disable regexp/no-useless-quantifier -- testing */





    var getInternalState = internalState.get;



    var nativeExec = RegExp.prototype.exec;
    var nativeReplace = shared('native-string-replace', String.prototype.replace);

    var patchedExec = nativeExec;

    var UPDATES_LAST_INDEX_WRONG = (function () {
      var re1 = /a/;
      var re2 = /b*/g;
      nativeExec.call(re1, 'a');
      nativeExec.call(re2, 'a');
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    })();

    var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

    // nonparticipating capturing group, copied from es5-shim's String#split patch.
    var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg;

    if (PATCH) {
      // eslint-disable-next-line max-statements -- TODO
      patchedExec = function exec(string) {
        var re = this;
        var state = getInternalState(re);
        var str = toString_1(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match, i, object, group;

        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = patchedExec.call(raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }

        var groups = state.groups;
        var sticky = UNSUPPORTED_Y$1 && re.sticky;
        var flags = regexpFlags.call(re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;

        if (sticky) {
          flags = flags.replace('y', '');
          if (flags.indexOf('g') === -1) {
            flags += 'g';
          }

          strCopy = str.slice(re.lastIndex);
          // Support anchored sticky behavior.
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
            source = '(?: ' + source + ')';
            strCopy = ' ' + strCopy;
            charsAdded++;
          }
          // ^(? + rx + ) is needed, in combination with some str slicing, to
          // simulate the 'y' flag.
          reCopy = new RegExp('^(?:' + source + ')', flags);
        }

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
        }
        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

        match = nativeExec.call(sticky ? reCopy : re, strCopy);

        if (sticky) {
          if (match) {
            match.input = match.input.slice(charsAdded);
            match[0] = match[0].slice(charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
          nativeReplace.call(match[0], reCopy, function () {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
        }

        if (match && groups) {
          match.groups = object = objectCreate(null);
          for (i = 0; i < groups.length; i++) {
            group = groups[i];
            object[group[0]] = match[group[1]];
          }
        }

        return match;
      };
    }

    var regexpExec = patchedExec;

    'use strict';



    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec
    _export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
      exec: regexpExec
    });

    var es_regexp_exec = {

    };

    'use strict';
    // TODO: Remove from `core-js@4` since it's moved to entry points





    var DELEGATES_TO_EXEC = function () {
      var execCalled = false;
      var re = /[ac]/;
      re.exec = function () {
        execCalled = true;
        return /./.exec.apply(this, arguments);
      };
      return re.test('abc') === true && execCalled;
    }();

    var nativeTest = /./.test;

    // `RegExp.prototype.test` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.test
    _export({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
      test: function (str) {
        var exec = this.exec;
        if (!isCallable(exec)) return nativeTest.call(this, str);
        var result = exec.call(this, str);
        if (result !== null && !isObject(result)) {
          throw new Error('RegExp exec method returned something other than an Object or null');
        }
        return !!result;
      }
    });

    var es_regexp_test = {

    };

    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype = Array.prototype;

    // Array.prototype[@@unscopables]
    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    if (ArrayPrototype[UNSCOPABLES] == undefined) {
      objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: objectCreate(null)
      });
    }

    // add a key to Array.prototype[@@unscopables]
    var addToUnscopables = function (key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };

    var iterators = {};

    var correctPrototypeGetter = !fails(function () {
      function F() { /* empty */ }
      F.prototype.constructor = null;
      // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });

    var IE_PROTO$1 = sharedKey('IE_PROTO');
    var ObjectPrototype = Object.prototype;

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    // eslint-disable-next-line es/no-object-getprototypeof -- safe
    var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
      var object = toObject(O);
      if (hasOwnProperty_1(object, IE_PROTO$1)) return object[IE_PROTO$1];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      } return object instanceof Object ? ObjectPrototype : null;
    };

    'use strict';








    var ITERATOR = wellKnownSymbol('iterator');
    var BUGGY_SAFARI_ITERATORS = false;

    // `%IteratorPrototype%` object
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

    /* eslint-disable es/no-array-prototype-keys -- safe */
    if ([].keys) {
      arrayIterator = [].keys();
      // Safari 8 has buggy iterators w/o `next`
      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }

    var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
      var test = {};
      // FF44- legacy iterators case
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });

    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
    else if (isPure) IteratorPrototype = objectCreate(IteratorPrototype);

    // `%IteratorPrototype%[@@iterator]()` method
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      redefine(IteratorPrototype, ITERATOR, function () {
        return this;
      });
    }

    var iteratorsCore = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    };
    var iteratorsCore_1 = iteratorsCore.IteratorPrototype;
    var iteratorsCore_2 = iteratorsCore.BUGGY_SAFARI_ITERATORS;

    var defineProperty$1 = objectDefineProperty.f;



    var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

    var setToStringTag = function (it, TAG, STATIC) {
      if (it && !hasOwnProperty_1(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
        defineProperty$1(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
      }
    };

    'use strict';
    var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





    var returnThis = function () { return this; };

    var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
      var TO_STRING_TAG = NAME + ' Iterator';
      IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };

    'use strict';














    var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
    var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR$1 = wellKnownSymbol('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';

    var returnThis$1 = function () { return this; };

    var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);

      var getIterationMethod = function (KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
          case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
          case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
        } return function () { return new IteratorConstructor(this); };
      };

      var TO_STRING_TAG = NAME + ' Iterator';
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR$1]
        || IterablePrototype['@@iterator']
        || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;

      // fix native
      if (anyNativeIterator) {
        CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!isPure && objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
            if (objectSetPrototypeOf) {
              objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$1])) {
              redefine(CurrentIteratorPrototype, ITERATOR$1, returnThis$1);
            }
          }
          // Set @@toStringTag to native iterators
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (isPure) iterators[TO_STRING_TAG] = returnThis$1;
        }
      }

      // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
      if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!isPure && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() { return nativeIterator.call(this); };
        }
      }

      // export additional methods
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY]);
          }
        } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
      }

      // define iterator
      if ((!isPure || FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
        redefine(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
      }
      iterators[NAME] = defaultIterator;

      return methods;
    };

    'use strict';






    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState = internalState.set;
    var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

    // `Array.prototype.entries` method
    // https://tc39.es/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.es/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.es/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.es/ecma262/#sec-createarrayiterator
    var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated), // target
        index: 0,                          // next index
        kind: kind                         // kind
      });
    // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState$1(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = undefined;
        return { value: undefined, done: true };
      }
      if (kind == 'keys') return { value: index, done: false };
      if (kind == 'values') return { value: target[index], done: false };
      return { value: [index, target[index]], done: false };
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.es/ecma262/#sec-createmappedargumentsobject
    iterators.Arguments = iterators.Array;

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');

    // eslint-disable-next-line es/no-typed-arrays -- safe
    var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

    var redefineAll = function (target, src, options) {
      for (var key in src) redefine(target, key, src[key], options);
      return target;
    };

    var anInstance = function (it, Constructor, name) {
      if (it instanceof Constructor) return it;
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    };

    // `ToIndex` abstract operation
    // https://tc39.es/ecma262/#sec-toindex
    var toIndex = function (it) {
      if (it === undefined) return 0;
      var number = toIntegerOrInfinity(it);
      var length = toLength(number);
      if (number !== length) throw RangeError('Wrong length or index');
      return length;
    };

    // IEEE754 conversions based on https://github.com/feross/ieee754
    var abs = Math.abs;
    var pow = Math.pow;
    var floor$1 = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;

    var pack = function (number, mantissaLength, bytes) {
      var buffer = new Array(bytes);
      var exponentLength = bytes * 8 - mantissaLength - 1;
      var eMax = (1 << exponentLength) - 1;
      var eBias = eMax >> 1;
      var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
      var index = 0;
      var exponent, mantissa, c;
      number = abs(number);
      // eslint-disable-next-line no-self-compare -- NaN check
      if (number != number || number === Infinity) {
        // eslint-disable-next-line no-self-compare -- NaN check
        mantissa = number != number ? 1 : 0;
        exponent = eMax;
      } else {
        exponent = floor$1(log(number) / LN2);
        if (number * (c = pow(2, -exponent)) < 1) {
          exponent--;
          c *= 2;
        }
        if (exponent + eBias >= 1) {
          number += rt / c;
        } else {
          number += rt * pow(2, 1 - eBias);
        }
        if (number * c >= 2) {
          exponent++;
          c /= 2;
        }
        if (exponent + eBias >= eMax) {
          mantissa = 0;
          exponent = eMax;
        } else if (exponent + eBias >= 1) {
          mantissa = (number * c - 1) * pow(2, mantissaLength);
          exponent = exponent + eBias;
        } else {
          mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
          exponent = 0;
        }
      }
      for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
      exponent = exponent << mantissaLength | mantissa;
      exponentLength += mantissaLength;
      for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
      buffer[--index] |= sign * 128;
      return buffer;
    };

    var unpack = function (buffer, mantissaLength) {
      var bytes = buffer.length;
      var exponentLength = bytes * 8 - mantissaLength - 1;
      var eMax = (1 << exponentLength) - 1;
      var eBias = eMax >> 1;
      var nBits = exponentLength - 7;
      var index = bytes - 1;
      var sign = buffer[index--];
      var exponent = sign & 127;
      var mantissa;
      sign >>= 7;
      for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
      mantissa = exponent & (1 << -nBits) - 1;
      exponent >>= -nBits;
      nBits += mantissaLength;
      for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
      if (exponent === 0) {
        exponent = 1 - eBias;
      } else if (exponent === eMax) {
        return mantissa ? NaN : sign ? -Infinity : Infinity;
      } else {
        mantissa = mantissa + pow(2, mantissaLength);
        exponent = exponent - eBias;
      } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
    };

    var ieee754 = {
      pack: pack,
      unpack: unpack
    };
    var ieee754_1 = ieee754.pack;
    var ieee754_2 = ieee754.unpack;

    'use strict';




    // `Array.prototype.fill` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.fill
    var arrayFill = function fill(value /* , start = 0, end = @length */) {
      var O = toObject(this);
      var length = lengthOfArrayLike(O);
      var argumentsLength = arguments.length;
      var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
      var end = argumentsLength > 2 ? arguments[2] : undefined;
      var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
      while (endPos > index) O[index++] = value;
      return O;
    };

    'use strict';














    var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
    var defineProperty$2 = objectDefineProperty.f;




    var PROPER_FUNCTION_NAME$2 = functionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
    var getInternalState$2 = internalState.get;
    var setInternalState$1 = internalState.set;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE$1 = 'prototype';
    var WRONG_LENGTH = 'Wrong length';
    var WRONG_INDEX = 'Wrong index';
    var NativeArrayBuffer = global_1[ARRAY_BUFFER];
    var $ArrayBuffer = NativeArrayBuffer;
    var $DataView = global_1[DATA_VIEW];
    var $DataViewPrototype = $DataView && $DataView[PROTOTYPE$1];
    var ObjectPrototype$1 = Object.prototype;
    var RangeError$1 = global_1.RangeError;

    var packIEEE754 = ieee754.pack;
    var unpackIEEE754 = ieee754.unpack;

    var packInt8 = function (number) {
      return [number & 0xFF];
    };

    var packInt16 = function (number) {
      return [number & 0xFF, number >> 8 & 0xFF];
    };

    var packInt32 = function (number) {
      return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
    };

    var unpackInt32 = function (buffer) {
      return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
    };

    var packFloat32 = function (number) {
      return packIEEE754(number, 23, 4);
    };

    var packFloat64 = function (number) {
      return packIEEE754(number, 52, 8);
    };

    var addGetter = function (Constructor, key) {
      defineProperty$2(Constructor[PROTOTYPE$1], key, { get: function () { return getInternalState$2(this)[key]; } });
    };

    var get$1 = function (view, count, index, isLittleEndian) {
      var intIndex = toIndex(index);
      var store = getInternalState$2(view);
      if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
      var bytes = getInternalState$2(store.buffer).bytes;
      var start = intIndex + store.byteOffset;
      var pack = bytes.slice(start, start + count);
      return isLittleEndian ? pack : pack.reverse();
    };

    var set$1 = function (view, count, index, conversion, value, isLittleEndian) {
      var intIndex = toIndex(index);
      var store = getInternalState$2(view);
      if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
      var bytes = getInternalState$2(store.buffer).bytes;
      var start = intIndex + store.byteOffset;
      var pack = conversion(+value);
      for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
    };

    if (!arrayBufferNative) {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = toIndex(length);
        setInternalState$1(this, {
          bytes: arrayFill.call(new Array(byteLength), 0),
          byteLength: byteLength
        });
        if (!descriptors) this.byteLength = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = getInternalState$2(buffer).byteLength;
        var offset = toIntegerOrInfinity(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError$1('Wrong offset');
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError$1(WRONG_LENGTH);
        setInternalState$1(this, {
          buffer: buffer,
          byteLength: byteLength,
          byteOffset: offset
        });
        if (!descriptors) {
          this.buffer = buffer;
          this.byteLength = byteLength;
          this.byteOffset = offset;
        }
      };

      if (descriptors) {
        addGetter($ArrayBuffer, 'byteLength');
        addGetter($DataView, 'buffer');
        addGetter($DataView, 'byteLength');
        addGetter($DataView, 'byteOffset');
      }

      redefineAll($DataView[PROTOTYPE$1], {
        getInt8: function getInt8(byteOffset) {
          return get$1(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get$1(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset /* , littleEndian */) {
          var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset /* , littleEndian */) {
          var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset /* , littleEndian */) {
          return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
        },
        getUint32: function getUint32(byteOffset /* , littleEndian */) {
          return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
          return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
        },
        getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
          return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
        },
        setInt8: function setInt8(byteOffset, value) {
          set$1(this, 1, byteOffset, packInt8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set$1(this, 1, byteOffset, packInt8, value);
        },
        setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
          set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
          set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
          set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
          set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
          set$1(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
          set$1(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
        }
      });
    } else {
      var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$2 && NativeArrayBuffer.name !== ARRAY_BUFFER;
      /* eslint-disable no-new -- required for testing */
      if (!fails(function () {
        NativeArrayBuffer(1);
      }) || !fails(function () {
        new NativeArrayBuffer(-1);
      }) || fails(function () {
        new NativeArrayBuffer();
        new NativeArrayBuffer(1.5);
        new NativeArrayBuffer(NaN);
        return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME$1;
      })) {
      /* eslint-enable no-new -- required for testing */
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer);
          return new NativeArrayBuffer(toIndex(length));
        };
        var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE$1] = NativeArrayBuffer[PROTOTYPE$1];
        for (var keys$2 = getOwnPropertyNames$1(NativeArrayBuffer), j$1 = 0, key$2; keys$2.length > j$1;) {
          if (!((key$2 = keys$2[j$1++]) in $ArrayBuffer)) {
            createNonEnumerableProperty($ArrayBuffer, key$2, NativeArrayBuffer[key$2]);
          }
        }
        ArrayBufferPrototype.constructor = $ArrayBuffer;
      } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME$1) {
        createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
      }

      // WebKit bug - the same parent prototype for typed arrays and data view
      if (objectSetPrototypeOf && objectGetPrototypeOf($DataViewPrototype) !== ObjectPrototype$1) {
        objectSetPrototypeOf($DataViewPrototype, ObjectPrototype$1);
      }

      // iOS Safari 7.x bug
      var testView = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataViewPrototype.setInt8;
      testView.setInt8(0, 2147483648);
      testView.setInt8(1, 2147483649);
      if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, { unsafe: true });
    }

    setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    setToStringTag($DataView, DATA_VIEW);

    var arrayBuffer = {
      ArrayBuffer: $ArrayBuffer,
      DataView: $DataView
    };

    var empty = [];
    var construct = getBuiltIn('Reflect', 'construct');
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = constructorRegExp.exec;
    var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

    var isConstructorModern = function (argument) {
      if (!isCallable(argument)) return false;
      try {
        construct(Object, empty, argument);
        return true;
      } catch (error) {
        return false;
      }
    };

    var isConstructorLegacy = function (argument) {
      if (!isCallable(argument)) return false;
      switch (classof(argument)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction': return false;
        // we can't check .prototype since constructors produced by .bind haven't it
      } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
    };

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    var isConstructor = !construct || fails(function () {
      var called;
      return isConstructorModern(isConstructorModern.call)
        || !isConstructorModern(Object)
        || !isConstructorModern(function () { called = true; })
        || called;
    }) ? isConstructorLegacy : isConstructorModern;

    // `Assert: IsConstructor(argument) is true`
    var aConstructor = function (argument) {
      if (isConstructor(argument)) return argument;
      throw TypeError(tryToString(argument) + ' is not a constructor');
    };

    var SPECIES = wellKnownSymbol('species');

    // `SpeciesConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-speciesconstructor
    var speciesConstructor = function (O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
    };

    'use strict';








    var ArrayBuffer$1 = arrayBuffer.ArrayBuffer;
    var DataView$1 = arrayBuffer.DataView;
    var nativeArrayBufferSlice = ArrayBuffer$1.prototype.slice;

    var INCORRECT_SLICE = fails(function () {
      return !new ArrayBuffer$1(2).slice(1, undefined).byteLength;
    });

    // `ArrayBuffer.prototype.slice` method
    // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
    _export({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
      slice: function slice(start, end) {
        if (nativeArrayBufferSlice !== undefined && end === undefined) {
          return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
        }
        var length = anObject(this).byteLength;
        var first = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        var result = new (speciesConstructor(this, ArrayBuffer$1))(toLength(fin - first));
        var viewSource = new DataView$1(this);
        var viewTarget = new DataView$1(result);
        var index = 0;
        while (first < fin) {
          viewTarget.setUint8(index++, viewSource.getUint8(first++));
        } return result;
      }
    });

    var es_arrayBuffer_slice = {

    };

    var ITERATOR$2 = wellKnownSymbol('iterator');
    var SAFE_CLOSING = false;

    try {
      var called = 0;
      var iteratorWithReturn = {
        next: function () {
          return { done: !!called++ };
        },
        'return': function () {
          SAFE_CLOSING = true;
        }
      };
      iteratorWithReturn[ITERATOR$2] = function () {
        return this;
      };
      // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
      Array.from(iteratorWithReturn, function () { throw 2; });
    } catch (error) { /* empty */ }

    var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        object[ITERATOR$2] = function () {
          return {
            next: function () {
              return { done: ITERATION_SUPPORT = true };
            }
          };
        };
        exec(object);
      } catch (error) { /* empty */ }
      return ITERATION_SUPPORT;
    };

    'use strict';










    var defineProperty$3 = objectDefineProperty.f;





    var Int8Array$1 = global_1.Int8Array;
    var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
    var Uint8ClampedArray = global_1.Uint8ClampedArray;
    var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
    var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
    var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
    var ObjectPrototype$2 = Object.prototype;
    var isPrototypeOf = ObjectPrototype$2.isPrototypeOf;

    var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
    var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
    var TYPED_ARRAY_CONSTRUCTOR = uid('TYPED_ARRAY_CONSTRUCTOR');
    // Fixing native typed arrays in Opera Presto crashes the browser, see #595
    var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferNative && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
    var TYPED_ARRAY_TAG_REQIRED = false;
    var NAME, Constructor, Prototype;

    var TypedArrayConstructorsList = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    };

    var BigIntArrayConstructorsList = {
      BigInt64Array: 8,
      BigUint64Array: 8
    };

    var isView = function isView(it) {
      if (!isObject(it)) return false;
      var klass = classof(it);
      return klass === 'DataView'
        || hasOwnProperty_1(TypedArrayConstructorsList, klass)
        || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
    };

    var isTypedArray = function (it) {
      if (!isObject(it)) return false;
      var klass = classof(it);
      return hasOwnProperty_1(TypedArrayConstructorsList, klass)
        || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
    };

    var aTypedArray = function (it) {
      if (isTypedArray(it)) return it;
      throw TypeError('Target is not a typed array');
    };

    var aTypedArrayConstructor = function (C) {
      if (isCallable(C) && (!objectSetPrototypeOf || isPrototypeOf.call(TypedArray, C))) return C;
      throw TypeError(tryToString(C) + ' is not a typed array constructor');
    };

    var exportTypedArrayMethod = function (KEY, property, forced) {
      if (!descriptors) return;
      if (forced) for (var ARRAY in TypedArrayConstructorsList) {
        var TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor.prototype, KEY)) try {
          delete TypedArrayConstructor.prototype[KEY];
        } catch (error) { /* empty */ }
      }
      if (!TypedArrayPrototype[KEY] || forced) {
        redefine(TypedArrayPrototype, KEY, forced ? property
          : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
      }
    };

    var exportTypedArrayStaticMethod = function (KEY, property, forced) {
      var ARRAY, TypedArrayConstructor;
      if (!descriptors) return;
      if (objectSetPrototypeOf) {
        if (forced) for (ARRAY in TypedArrayConstructorsList) {
          TypedArrayConstructor = global_1[ARRAY];
          if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor, KEY)) try {
            delete TypedArrayConstructor[KEY];
          } catch (error) { /* empty */ }
        }
        if (!TypedArray[KEY] || forced) {
          // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
          try {
            return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
          } catch (error) { /* empty */ }
        } else return;
      }
      for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
          redefine(TypedArrayConstructor, KEY, property);
        }
      }
    };

    for (NAME in TypedArrayConstructorsList) {
      Constructor = global_1[NAME];
      Prototype = Constructor && Constructor.prototype;
      if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
      else NATIVE_ARRAY_BUFFER_VIEWS = false;
    }

    for (NAME in BigIntArrayConstructorsList) {
      Constructor = global_1[NAME];
      Prototype = Constructor && Constructor.prototype;
      if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
    }

    // WebKit bug - typed arrays constructors prototype is Object.prototype
    if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
      // eslint-disable-next-line no-shadow -- safe
      TypedArray = function TypedArray() {
        throw TypeError('Incorrect invocation');
      };
      if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
        if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME], TypedArray);
      }
    }

    if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$2) {
      TypedArrayPrototype = TypedArray.prototype;
      if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
        if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME].prototype, TypedArrayPrototype);
      }
    }

    // WebKit bug - one more object in Uint8ClampedArray prototype chain
    if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
      objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
    }

    if (descriptors && !hasOwnProperty_1(TypedArrayPrototype, TO_STRING_TAG$3)) {
      TYPED_ARRAY_TAG_REQIRED = true;
      defineProperty$3(TypedArrayPrototype, TO_STRING_TAG$3, { get: function () {
        return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
      } });
      for (NAME in TypedArrayConstructorsList) if (global_1[NAME]) {
        createNonEnumerableProperty(global_1[NAME], TYPED_ARRAY_TAG, NAME);
      }
    }

    var arrayBufferViewCore = {
      NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
      TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR,
      TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
      aTypedArray: aTypedArray,
      aTypedArrayConstructor: aTypedArrayConstructor,
      exportTypedArrayMethod: exportTypedArrayMethod,
      exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
      isView: isView,
      isTypedArray: isTypedArray,
      TypedArray: TypedArray,
      TypedArrayPrototype: TypedArrayPrototype
    };
    var arrayBufferViewCore_1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
    var arrayBufferViewCore_2 = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
    var arrayBufferViewCore_3 = arrayBufferViewCore.TYPED_ARRAY_TAG;
    var arrayBufferViewCore_4 = arrayBufferViewCore.aTypedArray;
    var arrayBufferViewCore_5 = arrayBufferViewCore.aTypedArrayConstructor;
    var arrayBufferViewCore_6 = arrayBufferViewCore.exportTypedArrayMethod;
    var arrayBufferViewCore_7 = arrayBufferViewCore.exportTypedArrayStaticMethod;
    var arrayBufferViewCore_8 = arrayBufferViewCore.isView;
    var arrayBufferViewCore_9 = arrayBufferViewCore.isTypedArray;
    var arrayBufferViewCore_10 = arrayBufferViewCore.TypedArray;
    var arrayBufferViewCore_11 = arrayBufferViewCore.TypedArrayPrototype;

    /* eslint-disable no-new -- required for testing */



    var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

    var ArrayBuffer$2 = global_1.ArrayBuffer;
    var Int8Array$2 = global_1.Int8Array;

    var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails(function () {
      Int8Array$2(1);
    }) || !fails(function () {
      new Int8Array$2(-1);
    }) || !checkCorrectnessOfIteration(function (iterable) {
      new Int8Array$2();
      new Int8Array$2(null);
      new Int8Array$2(1.5);
      new Int8Array$2(iterable);
    }, true) || fails(function () {
      // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
      return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
    });

    var floor$2 = Math.floor;

    // `IsIntegralNumber` abstract operation
    // https://tc39.es/ecma262/#sec-isintegralnumber
    // eslint-disable-next-line es/no-number-isinteger -- safe
    var isIntegralNumber = Number.isInteger || function isInteger(it) {
      return !isObject(it) && isFinite(it) && floor$2(it) === it;
    };

    var toPositiveInteger = function (it) {
      var result = toIntegerOrInfinity(it);
      if (result < 0) throw RangeError("The argument can't be less than 0");
      return result;
    };

    var toOffset = function (it, BYTES) {
      var offset = toPositiveInteger(it);
      if (offset % BYTES) throw RangeError('Wrong offset');
      return offset;
    };

    var ITERATOR$3 = wellKnownSymbol('iterator');

    var getIteratorMethod = function (it) {
      if (it != undefined) return getMethod(it, ITERATOR$3)
        || getMethod(it, '@@iterator')
        || iterators[classof(it)];
    };

    var getIterator = function (argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod)) return anObject(iteratorMethod.call(argument));
      throw TypeError(String(argument) + ' is not iterable');
    };

    var ITERATOR$4 = wellKnownSymbol('iterator');
    var ArrayPrototype$1 = Array.prototype;

    // check on default Array iterator
    var isArrayIteratorMethod = function (it) {
      return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$4] === it);
    };

    // optional / simple context binding
    var functionBindContext = function (fn, that, length) {
      aCallable(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 0: return function () {
          return fn.call(that);
        };
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

    var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;

    var typedArrayFrom = function from(source /* , mapfn, thisArg */) {
      var C = aConstructor(this);
      var O = toObject(source);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var iteratorMethod = getIteratorMethod(O);
      var i, length, result, step, iterator, next;
      if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        O = [];
        while (!(step = next.call(iterator)).done) {
          O.push(step.value);
        }
      }
      if (mapping && argumentsLength > 2) {
        mapfn = functionBindContext(mapfn, arguments[2], 2);
      }
      length = lengthOfArrayLike(O);
      result = new (aTypedArrayConstructor$1(C))(length);
      for (i = 0; length > i; i++) {
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }
      return result;
    };

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es/no-array-isarray -- safe
    var isArray = Array.isArray || function isArray(argument) {
      return classofRaw(argument) == 'Array';
    };

    var SPECIES$1 = wellKnownSymbol('species');

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesConstructor = function (originalArray) {
      var C;
      if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
          C = C[SPECIES$1];
          if (C === null) C = undefined;
        }
      } return C === undefined ? Array : C;
    };

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesCreate = function (originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };

    var push = [].push;

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
    var createMethod$2 = function (TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var IS_FILTER_REJECT = TYPE == 7;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = indexedObject(O);
        var boundFunction = functionBindContext(callbackfn, that, 3);
        var length = lengthOfArrayLike(self);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
        var value, result;
        for (;length > index; index++) if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);
          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
              case 3: return true;              // some
              case 5: return value;             // find
              case 6: return index;             // findIndex
              case 2: push.call(target, value); // filter
            } else switch (TYPE) {
              case 4: return false;             // every
              case 7: push.call(target, value); // filterReject
            }
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };

    var arrayIteration = {
      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      forEach: createMethod$2(0),
      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      map: createMethod$2(1),
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      filter: createMethod$2(2),
      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      some: createMethod$2(3),
      // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every
      every: createMethod$2(4),
      // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find
      find: createMethod$2(5),
      // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod$2(6),
      // `Array.prototype.filterReject` method
      // https://github.com/tc39/proposal-array-filtering
      filterReject: createMethod$2(7)
    };
    var arrayIteration_1 = arrayIteration.forEach;
    var arrayIteration_2 = arrayIteration.map;
    var arrayIteration_3 = arrayIteration.filter;
    var arrayIteration_4 = arrayIteration.some;
    var arrayIteration_5 = arrayIteration.every;
    var arrayIteration_6 = arrayIteration.find;
    var arrayIteration_7 = arrayIteration.findIndex;
    var arrayIteration_8 = arrayIteration.filterReject;

    'use strict';





    var SPECIES$2 = wellKnownSymbol('species');

    var setSpecies = function (CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty = objectDefineProperty.f;

      if (descriptors && Constructor && !Constructor[SPECIES$2]) {
        defineProperty(Constructor, SPECIES$2, {
          configurable: true,
          get: function () { return this; }
        });
      }
    };

    var typedArrayConstructor = createCommonjsModule(function (module) {
    'use strict';




















    var getOwnPropertyNames = objectGetOwnPropertyNames.f;

    var forEach = arrayIteration.forEach;






    var getInternalState = internalState.get;
    var setInternalState = internalState.set;
    var nativeDefineProperty = objectDefineProperty.f;
    var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var round = Math.round;
    var RangeError = global_1.RangeError;
    var ArrayBuffer = arrayBuffer.ArrayBuffer;
    var DataView = arrayBuffer.DataView;
    var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
    var TYPED_ARRAY_CONSTRUCTOR = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
    var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
    var TypedArray = arrayBufferViewCore.TypedArray;
    var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
    var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
    var isTypedArray = arrayBufferViewCore.isTypedArray;
    var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
    var WRONG_LENGTH = 'Wrong length';

    var fromList = function (C, list) {
      var index = 0;
      var length = list.length;
      var result = new (aTypedArrayConstructor(C))(length);
      while (length > index) result[index] = list[index++];
      return result;
    };

    var addGetter = function (it, key) {
      nativeDefineProperty(it, key, { get: function () {
        return getInternalState(this)[key];
      } });
    };

    var isArrayBuffer = function (it) {
      var klass;
      return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
    };

    var isTypedArrayIndex = function (target, key) {
      return isTypedArray(target)
        && !isSymbol(key)
        && key in target
        && isIntegralNumber(+key)
        && key >= 0;
    };

    var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
      key = toPropertyKey(key);
      return isTypedArrayIndex(target, key)
        ? createPropertyDescriptor(2, target[key])
        : nativeGetOwnPropertyDescriptor(target, key);
    };

    var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
      key = toPropertyKey(key);
      if (isTypedArrayIndex(target, key)
        && isObject(descriptor)
        && hasOwnProperty_1(descriptor, 'value')
        && !hasOwnProperty_1(descriptor, 'get')
        && !hasOwnProperty_1(descriptor, 'set')
        // TODO: add validation descriptor w/o calling accessors
        && !descriptor.configurable
        && (!hasOwnProperty_1(descriptor, 'writable') || descriptor.writable)
        && (!hasOwnProperty_1(descriptor, 'enumerable') || descriptor.enumerable)
      ) {
        target[key] = descriptor.value;
        return target;
      } return nativeDefineProperty(target, key, descriptor);
    };

    if (descriptors) {
      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
        objectDefineProperty.f = wrappedDefineProperty;
        addGetter(TypedArrayPrototype, 'buffer');
        addGetter(TypedArrayPrototype, 'byteOffset');
        addGetter(TypedArrayPrototype, 'byteLength');
        addGetter(TypedArrayPrototype, 'length');
      }

      _export({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
        getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
        defineProperty: wrappedDefineProperty
      });

      module.exports = function (TYPE, wrapper, CLAMPED) {
        var BYTES = TYPE.match(/\d+$/)[0] / 8;
        var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + TYPE;
        var SETTER = 'set' + TYPE;
        var NativeTypedArrayConstructor = global_1[CONSTRUCTOR_NAME];
        var TypedArrayConstructor = NativeTypedArrayConstructor;
        var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
        var exported = {};

        var getter = function (that, index) {
          var data = getInternalState(that);
          return data.view[GETTER](index * BYTES + data.byteOffset, true);
        };

        var setter = function (that, index, value) {
          var data = getInternalState(that);
          if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
          data.view[SETTER](index * BYTES + data.byteOffset, value, true);
        };

        var addElement = function (that, index) {
          nativeDefineProperty(that, index, {
            get: function () {
              return getter(this, index);
            },
            set: function (value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };

        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
          TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
            anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
            var index = 0;
            var byteOffset = 0;
            var buffer, byteLength, length;
            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new ArrayBuffer(byteLength);
            } else if (isArrayBuffer(data)) {
              buffer = data;
              byteOffset = toOffset(offset, BYTES);
              var $len = data.byteLength;
              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - byteOffset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
              }
              length = byteLength / BYTES;
            } else if (isTypedArray(data)) {
              return fromList(TypedArrayConstructor, data);
            } else {
              return typedArrayFrom.call(TypedArrayConstructor, data);
            }
            setInternalState(that, {
              buffer: buffer,
              byteOffset: byteOffset,
              byteLength: byteLength,
              length: length,
              view: new DataView(buffer)
            });
            while (index < length) addElement(that, index++);
          });

          if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
          TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
        } else if (typedArrayConstructorsRequireWrappers) {
          TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
            anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
            return inheritIfRequired(function () {
              if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
              if (isArrayBuffer(data)) return $length !== undefined
                ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
                : typedArrayOffset !== undefined
                  ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
                  : new NativeTypedArrayConstructor(data);
              if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
              return typedArrayFrom.call(TypedArrayConstructor, data);
            }(), dummy, TypedArrayConstructor);
          });

          if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
          forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
            if (!(key in TypedArrayConstructor)) {
              createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
            }
          });
          TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
        }

        if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
        }

        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);

        if (TYPED_ARRAY_TAG) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
        }

        exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

        _export({
          global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
        }, exported);

        if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
        }

        if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
        }

        setSpecies(CONSTRUCTOR_NAME);
      };
    } else module.exports = function () { /* empty */ };
    });

    // `Uint8Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    typedArrayConstructor('Uint8', function (init) {
      return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    var es_typedArray_uint8Array = {

    };

    'use strict';




    var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.at` method
    // https://github.com/tc39/proposal-relative-indexing-method
    exportTypedArrayMethod$1('at', function at(index) {
      var O = aTypedArray$1(this);
      var len = lengthOfArrayLike(O);
      var relativeIndex = toIntegerOrInfinity(index);
      var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
      return (k < 0 || k >= len) ? undefined : O[k];
    });

    var es_typedArray_at = {

    };

    // TODO: Remove from `core-js@4`

    var esnext_typedArray_at = {

    };

    'use strict';




    var min$2 = Math.min;

    // `Array.prototype.copyWithin` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.copywithin
    // eslint-disable-next-line es/no-array-prototype-copywithin -- safe
    var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      var to = toAbsoluteIndex(target, len);
      var from = toAbsoluteIndex(start, len);
      var end = arguments.length > 2 ? arguments[2] : undefined;
      var count = min$2((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
      var inc = 1;
      if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count-- > 0) {
        if (from in O) O[to] = O[from];
        else delete O[to];
        to += inc;
        from += inc;
      } return O;
    };

    'use strict';



    var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.copyWithin` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
    exportTypedArrayMethod$2('copyWithin', function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(aTypedArray$2(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    });

    var es_typedArray_copyWithin = {

    };

    'use strict';

    var $every = arrayIteration.every;

    var aTypedArray$3 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$3 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.every` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
    exportTypedArrayMethod$3('every', function every(callbackfn /* , thisArg */) {
      return $every(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_every = {

    };

    'use strict';



    var aTypedArray$4 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$4 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.fill` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    exportTypedArrayMethod$4('fill', function fill(value /* , start, end */) {
      return arrayFill.apply(aTypedArray$4(this), arguments);
    });

    var es_typedArray_fill = {

    };

    var arrayFromConstructorAndList = function (Constructor, list) {
      var index = 0;
      var length = list.length;
      var result = new Constructor(length);
      while (length > index) result[index] = list[index++];
      return result;
    };

    var TYPED_ARRAY_CONSTRUCTOR$1 = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
    var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;

    // a part of `TypedArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#typedarray-species-create
    var typedArraySpeciesConstructor = function (originalArray) {
      return aTypedArrayConstructor$2(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR$1]));
    };

    var typedArrayFromSpeciesAndList = function (instance, list) {
      return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
    };

    'use strict';

    var $filter = arrayIteration.filter;


    var aTypedArray$5 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$5 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.filter` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
    exportTypedArrayMethod$5('filter', function filter(callbackfn /* , thisArg */) {
      var list = $filter(aTypedArray$5(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return typedArrayFromSpeciesAndList(this, list);
    });

    var es_typedArray_filter = {

    };

    'use strict';

    var $find = arrayIteration.find;

    var aTypedArray$6 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$6 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.find` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
    exportTypedArrayMethod$6('find', function find(predicate /* , thisArg */) {
      return $find(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_find = {

    };

    'use strict';

    var $findIndex = arrayIteration.findIndex;

    var aTypedArray$7 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$7 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
    exportTypedArrayMethod$7('findIndex', function findIndex(predicate /* , thisArg */) {
      return $findIndex(aTypedArray$7(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_findIndex = {

    };

    'use strict';

    var $forEach = arrayIteration.forEach;

    var aTypedArray$8 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$8 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
    exportTypedArrayMethod$8('forEach', function forEach(callbackfn /* , thisArg */) {
      $forEach(aTypedArray$8(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_forEach = {

    };

    'use strict';

    var $includes = arrayIncludes.includes;

    var aTypedArray$9 = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$9 = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.includes` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
    exportTypedArrayMethod$9('includes', function includes(searchElement /* , fromIndex */) {
      return $includes(aTypedArray$9(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_includes = {

    };

    'use strict';

    var $indexOf = arrayIncludes.indexOf;

    var aTypedArray$a = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$a = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
    exportTypedArrayMethod$a('indexOf', function indexOf(searchElement /* , fromIndex */) {
      return $indexOf(aTypedArray$a(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_indexOf = {

    };

    'use strict';

    var PROPER_FUNCTION_NAME$3 = functionName.PROPER;




    var ITERATOR$5 = wellKnownSymbol('iterator');
    var Uint8Array$1 = global_1.Uint8Array;
    var arrayValues = es_array_iterator.values;
    var arrayKeys = es_array_iterator.keys;
    var arrayEntries = es_array_iterator.entries;
    var aTypedArray$b = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$b = arrayBufferViewCore.exportTypedArrayMethod;
    var nativeTypedArrayIterator = Uint8Array$1 && Uint8Array$1.prototype[ITERATOR$5];

    var PROPER_ARRAY_VALUES_NAME = !!nativeTypedArrayIterator && nativeTypedArrayIterator.name === 'values';

    var typedArrayValues = function values() {
      return arrayValues.call(aTypedArray$b(this));
    };

    // `%TypedArray%.prototype.entries` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
    exportTypedArrayMethod$b('entries', function entries() {
      return arrayEntries.call(aTypedArray$b(this));
    });
    // `%TypedArray%.prototype.keys` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
    exportTypedArrayMethod$b('keys', function keys() {
      return arrayKeys.call(aTypedArray$b(this));
    });
    // `%TypedArray%.prototype.values` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
    exportTypedArrayMethod$b('values', typedArrayValues, PROPER_FUNCTION_NAME$3 && !PROPER_ARRAY_VALUES_NAME);
    // `%TypedArray%.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
    exportTypedArrayMethod$b(ITERATOR$5, typedArrayValues, PROPER_FUNCTION_NAME$3 && !PROPER_ARRAY_VALUES_NAME);

    var es_typedArray_iterator = {

    };

    'use strict';


    var aTypedArray$c = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$c = arrayBufferViewCore.exportTypedArrayMethod;
    var $join = [].join;

    // `%TypedArray%.prototype.join` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    exportTypedArrayMethod$c('join', function join(separator) {
      return $join.apply(aTypedArray$c(this), arguments);
    });

    var es_typedArray_join = {

    };

    'use strict';


    var arrayMethodIsStrict = function (METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
        method.call(null, argument || function () { throw 1; }, 1);
      });
    };

    'use strict';
    /* eslint-disable es/no-array-prototype-lastindexof -- safe */





    var min$3 = Math.min;
    var $lastIndexOf = [].lastIndexOf;
    var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
    var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
    var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

    // `Array.prototype.lastIndexOf` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
    var arrayLastIndexOf = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
      // convert -0 to +0
      if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0;
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike(O);
      var index = length - 1;
      if (arguments.length > 1) index = min$3(index, toIntegerOrInfinity(arguments[1]));
      if (index < 0) index = length + index;
      for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
      return -1;
    } : $lastIndexOf;

    'use strict';



    var aTypedArray$d = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$d = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.lastIndexOf` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    exportTypedArrayMethod$d('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
      return arrayLastIndexOf.apply(aTypedArray$d(this), arguments);
    });

    var es_typedArray_lastIndexOf = {

    };

    'use strict';

    var $map = arrayIteration.map;


    var aTypedArray$e = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$e = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.map` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
    exportTypedArrayMethod$e('map', function map(mapfn /* , thisArg */) {
      return $map(aTypedArray$e(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
        return new (typedArraySpeciesConstructor(O))(length);
      });
    });

    var es_typedArray_map = {

    };

    // `Array.prototype.{ reduce, reduceRight }` methods implementation
    var createMethod$3 = function (IS_RIGHT) {
      return function (that, callbackfn, argumentsLength, memo) {
        aCallable(callbackfn);
        var O = toObject(that);
        var self = indexedObject(O);
        var length = lengthOfArrayLike(O);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while (true) {
          if (index in self) {
            memo = self[index];
            index += i;
            break;
          }
          index += i;
          if (IS_RIGHT ? index < 0 : length <= index) {
            throw TypeError('Reduce of empty array with no initial value');
          }
        }
        for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
          memo = callbackfn(memo, self[index], index, O);
        }
        return memo;
      };
    };

    var arrayReduce = {
      // `Array.prototype.reduce` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduce
      left: createMethod$3(false),
      // `Array.prototype.reduceRight` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduceright
      right: createMethod$3(true)
    };
    var arrayReduce_1 = arrayReduce.left;
    var arrayReduce_2 = arrayReduce.right;

    'use strict';

    var $reduce = arrayReduce.left;

    var aTypedArray$f = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$f = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
    exportTypedArrayMethod$f('reduce', function reduce(callbackfn /* , initialValue */) {
      return $reduce(aTypedArray$f(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_reduce = {

    };

    'use strict';

    var $reduceRight = arrayReduce.right;

    var aTypedArray$g = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$g = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.reduceRicht` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
    exportTypedArrayMethod$g('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
      return $reduceRight(aTypedArray$g(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_reduceRight = {

    };

    'use strict';


    var aTypedArray$h = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$h = arrayBufferViewCore.exportTypedArrayMethod;
    var floor$3 = Math.floor;

    // `%TypedArray%.prototype.reverse` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
    exportTypedArrayMethod$h('reverse', function reverse() {
      var that = this;
      var length = aTypedArray$h(that).length;
      var middle = floor$3(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    });

    var es_typedArray_reverse = {

    };

    'use strict';






    var aTypedArray$i = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$i = arrayBufferViewCore.exportTypedArrayMethod;

    var FORCED$1 = fails(function () {
      // eslint-disable-next-line es/no-typed-arrays -- required for testing
      new Int8Array(1).set({});
    });

    // `%TypedArray%.prototype.set` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
    exportTypedArrayMethod$i('set', function set(arrayLike /* , offset */) {
      aTypedArray$i(this);
      var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
      var length = this.length;
      var src = toObject(arrayLike);
      var len = lengthOfArrayLike(src);
      var index = 0;
      if (len + offset > length) throw RangeError('Wrong length');
      while (index < len) this[offset + index] = src[index++];
    }, FORCED$1);

    var es_typedArray_set = {

    };

    'use strict';




    var aTypedArray$j = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$j = arrayBufferViewCore.exportTypedArrayMethod;
    var $slice = [].slice;

    var FORCED$2 = fails(function () {
      // eslint-disable-next-line es/no-typed-arrays -- required for testing
      new Int8Array(1).slice();
    });

    // `%TypedArray%.prototype.slice` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
    exportTypedArrayMethod$j('slice', function slice(start, end) {
      var list = $slice.call(aTypedArray$j(this), start, end);
      var C = typedArraySpeciesConstructor(this);
      var index = 0;
      var length = list.length;
      var result = new C(length);
      while (length > index) result[index] = list[index++];
      return result;
    }, FORCED$2);

    var es_typedArray_slice = {

    };

    'use strict';

    var $some = arrayIteration.some;

    var aTypedArray$k = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$k = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.some` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
    exportTypedArrayMethod$k('some', function some(callbackfn /* , thisArg */) {
      return $some(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    });

    var es_typedArray_some = {

    };

    // TODO: use something more complex like timsort?
    var floor$4 = Math.floor;

    var mergeSort = function (array, comparefn) {
      var length = array.length;
      var middle = floor$4(length / 2);
      return length < 8 ? insertionSort(array, comparefn) : merge(
        mergeSort(array.slice(0, middle), comparefn),
        mergeSort(array.slice(middle), comparefn),
        comparefn
      );
    };

    var insertionSort = function (array, comparefn) {
      var length = array.length;
      var i = 1;
      var element, j;

      while (i < length) {
        j = i;
        element = array[i];
        while (j && comparefn(array[j - 1], element) > 0) {
          array[j] = array[--j];
        }
        if (j !== i++) array[j] = element;
      } return array;
    };

    var merge = function (left, right, comparefn) {
      var llength = left.length;
      var rlength = right.length;
      var lindex = 0;
      var rindex = 0;
      var result = [];

      while (lindex < llength || rindex < rlength) {
        if (lindex < llength && rindex < rlength) {
          result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
        } else {
          result.push(lindex < llength ? left[lindex++] : right[rindex++]);
        }
      } return result;
    };

    var arraySort = mergeSort;

    var firefox = engineUserAgent.match(/firefox\/(\d+)/i);

    var engineFfVersion = !!firefox && +firefox[1];

    var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);

    var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);

    var engineWebkitVersion = !!webkit && +webkit[1];

    'use strict';











    var aTypedArray$l = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$l = arrayBufferViewCore.exportTypedArrayMethod;
    var Uint16Array$1 = global_1.Uint16Array;
    var nativeSort = Uint16Array$1 && Uint16Array$1.prototype.sort;

    // WebKit
    var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !fails(function () {
      var array = new Uint16Array$1(2);
      array.sort(null);
      array.sort({});
    });

    var STABLE_SORT = !!nativeSort && !fails(function () {
      // feature detection can be too slow, so check engines versions
      if (engineV8Version) return engineV8Version < 74;
      if (engineFfVersion) return engineFfVersion < 67;
      if (engineIsIeOrEdge) return true;
      if (engineWebkitVersion) return engineWebkitVersion < 602;

      var array = new Uint16Array$1(516);
      var expected = Array(516);
      var index, mod;

      for (index = 0; index < 516; index++) {
        mod = index % 4;
        array[index] = 515 - index;
        expected[index] = index - 2 * mod + 3;
      }

      array.sort(function (a, b) {
        return (a / 4 | 0) - (b / 4 | 0);
      });

      for (index = 0; index < 516; index++) {
        if (array[index] !== expected[index]) return true;
      }
    });

    var getSortCompare = function (comparefn) {
      return function (x, y) {
        if (comparefn !== undefined) return +comparefn(x, y) || 0;
        // eslint-disable-next-line no-self-compare -- NaN check
        if (y !== y) return -1;
        // eslint-disable-next-line no-self-compare -- NaN check
        if (x !== x) return 1;
        if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
        return x > y;
      };
    };

    // `%TypedArray%.prototype.sort` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
    exportTypedArrayMethod$l('sort', function sort(comparefn) {
      var array = this;
      if (comparefn !== undefined) aCallable(comparefn);
      if (STABLE_SORT) return nativeSort.call(array, comparefn);

      aTypedArray$l(array);
      var arrayLength = lengthOfArrayLike(array);
      var items = Array(arrayLength);
      var index;

      for (index = 0; index < arrayLength; index++) {
        items[index] = array[index];
      }

      items = arraySort(array, getSortCompare(comparefn));

      for (index = 0; index < arrayLength; index++) {
        array[index] = items[index];
      }

      return array;
    }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

    var es_typedArray_sort = {

    };

    'use strict';





    var aTypedArray$m = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$m = arrayBufferViewCore.exportTypedArrayMethod;

    // `%TypedArray%.prototype.subarray` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
    exportTypedArrayMethod$m('subarray', function subarray(begin, end) {
      var O = aTypedArray$m(this);
      var length = O.length;
      var beginIndex = toAbsoluteIndex(begin, length);
      var C = typedArraySpeciesConstructor(O);
      return new C(
        O.buffer,
        O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
      );
    });

    var es_typedArray_subarray = {

    };

    'use strict';




    var Int8Array$3 = global_1.Int8Array;
    var aTypedArray$n = arrayBufferViewCore.aTypedArray;
    var exportTypedArrayMethod$n = arrayBufferViewCore.exportTypedArrayMethod;
    var $toLocaleString = [].toLocaleString;
    var $slice$1 = [].slice;

    // iOS Safari 6.x fails here
    var TO_LOCALE_STRING_BUG = !!Int8Array$3 && fails(function () {
      $toLocaleString.call(new Int8Array$3(1));
    });

    var FORCED$3 = fails(function () {
      return [1, 2].toLocaleString() != new Int8Array$3([1, 2]).toLocaleString();
    }) || !fails(function () {
      Int8Array$3.prototype.toLocaleString.call([1, 2]);
    });

    // `%TypedArray%.prototype.toLocaleString` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
    exportTypedArrayMethod$n('toLocaleString', function toLocaleString() {
      return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice$1.call(aTypedArray$n(this)) : aTypedArray$n(this), arguments);
    }, FORCED$3);

    var es_typedArray_toLocaleString = {

    };

    'use strict';
    var exportTypedArrayMethod$o = arrayBufferViewCore.exportTypedArrayMethod;



    var Uint8Array$2 = global_1.Uint8Array;
    var Uint8ArrayPrototype = Uint8Array$2 && Uint8Array$2.prototype || {};
    var arrayToString = [].toString;
    var arrayJoin = [].join;

    if (fails(function () { arrayToString.call({}); })) {
      arrayToString = function toString() {
        return arrayJoin.call(this);
      };
    }

    var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

    // `%TypedArray%.prototype.toString` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
    exportTypedArrayMethod$o('toString', arrayToString, IS_NOT_ARRAY_METHOD);

    var es_typedArray_toString = {

    };

    var iteratorClose = function (iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, 'return');
        if (!innerResult) {
          if (kind === 'throw') throw value;
          return value;
        }
        innerResult = innerResult.call(iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === 'throw') throw value;
      if (innerError) throw innerResult;
      anObject(innerResult);
      return value;
    };

    // call something on iterator step with safe closing on error
    var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
    };

    'use strict';




    var createProperty = function (object, key, value) {
      var propertyKey = toPropertyKey(key);
      if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
      else object[propertyKey] = value;
    };

    'use strict';










    // `Array.from` method implementation
    // https://tc39.es/ecma262/#sec-array.from
    var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = toObject(arrayLike);
      var IS_CONSTRUCTOR = isConstructor(this);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      // if the target is not iterable or it's an array with the default iterator - use a simple case
      if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        result = IS_CONSTRUCTOR ? new this() : [];
        for (;!(step = next.call(iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty(result, index, value);
        }
      } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : Array(length);
        for (;length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }
      result.length = index;
      return result;
    };

    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
      // eslint-disable-next-line es/no-array-from -- required for testing
      Array.from(iterable);
    });

    // `Array.from` method
    // https://tc39.es/ecma262/#sec-array.from
    _export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
      from: arrayFrom
    });

    var es_array_from = {

    };

    var createMethod$4 = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        var S = toString_1(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size
          || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
            ? CONVERT_TO_STRING ? S.charAt(position) : first
            : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
      };
    };

    var stringMultibyte = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod$4(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod$4(true)
    };
    var stringMultibyte_1 = stringMultibyte.codeAt;
    var stringMultibyte_2 = stringMultibyte.charAt;

    'use strict';
    var charAt = stringMultibyte.charAt;




    var STRING_ITERATOR = 'String Iterator';
    var setInternalState$2 = internalState.set;
    var getInternalState$3 = internalState.getterFor(STRING_ITERATOR);

    // `String.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
    defineIterator(String, 'String', function (iterated) {
      setInternalState$2(this, {
        type: STRING_ITERATOR,
        string: toString_1(iterated),
        index: 0
      });
    // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    }, function next() {
      var state = getInternalState$3(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length) return { value: undefined, done: true };
      point = charAt(string, index);
      state.index += point.length;
      return { value: point, done: false };
    });

    var es_string_iterator = {

    };

    var trim$1 = stringTrim.trim;


    var $parseInt = global_1.parseInt;
    var Symbol$2 = global_1.Symbol;
    var ITERATOR$6 = Symbol$2 && Symbol$2.iterator;
    var hex = /^[+-]?0[Xx]/;
    var FORCED$4 = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
      // MS Edge 18- broken with boxed symbols
      || (ITERATOR$6 && !fails(function () { $parseInt(Object(ITERATOR$6)); }));

    // `parseInt` method
    // https://tc39.es/ecma262/#sec-parseint-string-radix
    var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
      var S = trim$1(toString_1(string));
      return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
    } : $parseInt;

    // `Number.parseInt` method
    // https://tc39.es/ecma262/#sec-number.parseint
    // eslint-disable-next-line es/no-number-parseint -- required for testing
    _export({ target: 'Number', stat: true, forced: Number.parseInt != numberParseInt }, {
      parseInt: numberParseInt
    });

    var es_number_parseInt = {

    };

    'use strict';





    var nativeJoin = [].join;

    var ES3_STRINGS = indexedObject != Object;
    var STRICT_METHOD$1 = arrayMethodIsStrict('join', ',');

    // `Array.prototype.join` method
    // https://tc39.es/ecma262/#sec-array.prototype.join
    _export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
      join: function join(separator) {
        return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
      }
    });

    var es_array_join = {

    };

    'use strict';
    // TODO: Remove from `core-js@4` since it's moved to entry points







    var SPECIES$3 = wellKnownSymbol('species');
    var RegExpPrototype$1 = RegExp.prototype;

    var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
      var SYMBOL = wellKnownSymbol(KEY);

      var DELEGATES_TO_SYMBOL = !fails(function () {
        // String methods call symbol-named RegEp methods
        var O = {};
        O[SYMBOL] = function () { return 7; };
        return ''[KEY](O) != 7;
      });

      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;

        if (KEY === 'split') {
          // We can't use real regex here since it causes deoptimization
          // and serious performance degradation in V8
          // https://github.com/zloirock/core-js/issues/306
          re = {};
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          re.constructor = {};
          re.constructor[SPECIES$3] = function () { return re; };
          re.flags = '';
          re[SYMBOL] = /./[SYMBOL];
        }

        re.exec = function () { execCalled = true; return null; };

        re[SYMBOL]('');
        return !execCalled;
      });

      if (
        !DELEGATES_TO_SYMBOL ||
        !DELEGATES_TO_EXEC ||
        FORCED
      ) {
        var nativeRegExpMethod = /./[SYMBOL];
        var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
          var $exec = regexp.exec;
          if ($exec === regexpExec || $exec === RegExpPrototype$1.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
            }
            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
          }
          return { done: false };
        });

        redefine(String.prototype, KEY, methods[0]);
        redefine(RegExpPrototype$1, SYMBOL, methods[1]);
      }

      if (SHAM) createNonEnumerableProperty(RegExpPrototype$1[SYMBOL], 'sham', true);
    };

    'use strict';
    var charAt$1 = stringMultibyte.charAt;

    // `AdvanceStringIndex` abstract operation
    // https://tc39.es/ecma262/#sec-advancestringindex
    var advanceStringIndex = function (S, index, unicode) {
      return index + (unicode ? charAt$1(S, index).length : 1);
    };

    // `RegExpExec` abstract operation
    // https://tc39.es/ecma262/#sec-regexpexec
    var regexpExecAbstract = function (R, S) {
      var exec = R.exec;
      if (isCallable(exec)) {
        var result = exec.call(R, S);
        if (result !== null) anObject(result);
        return result;
      }
      if (classofRaw(R) === 'RegExp') return regexpExec.call(R, S);
      throw TypeError('RegExp#exec called on incompatible receiver');
    };

    'use strict';









    // @@match logic
    fixRegexpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
      return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
          var O = requireObjectCoercible(this);
          var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
          return matcher ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString_1(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function (string) {
          var rx = anObject(this);
          var S = toString_1(string);
          var res = maybeCallNative(nativeMatch, rx, S);

          if (res.done) return res.value;

          if (!rx.global) return regexpExecAbstract(rx, S);

          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
          var A = [];
          var n = 0;
          var result;
          while ((result = regexpExecAbstract(rx, S)) !== null) {
            var matchStr = toString_1(result[0]);
            A[n] = matchStr;
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            n++;
          }
          return n === 0 ? null : A;
        }
      ];
    });

    var es_string_match = {

    };

    var FUNCTION_NAME_EXISTS = functionName.EXISTS;
    var defineProperty$4 = objectDefineProperty.f;

    var FunctionPrototype$1 = Function.prototype;
    var FunctionPrototypeToString = FunctionPrototype$1.toString;
    var nameRE = /^\s*function ([^ (]*)/;
    var NAME$1 = 'name';

    // Function instances `.name` property
    // https://tc39.es/ecma262/#sec-function-instances-name
    if (descriptors && !FUNCTION_NAME_EXISTS) {
      defineProperty$4(FunctionPrototype$1, NAME$1, {
        configurable: true,
        get: function () {
          try {
            return FunctionPrototypeToString.call(this).match(nameRE)[1];
          } catch (error) {
            return '';
          }
        }
      });
    }

    var es_function_name = {

    };

    var $stringify = getBuiltIn('JSON', 'stringify');
    var re = /[\uD800-\uDFFF]/g;
    var low = /^[\uD800-\uDBFF]$/;
    var hi = /^[\uDC00-\uDFFF]$/;

    var fix = function (match, offset, string) {
      var prev = string.charAt(offset - 1);
      var next = string.charAt(offset + 1);
      if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
        return '\\u' + match.charCodeAt(0).toString(16);
      } return match;
    };

    var FORCED$5 = fails(function () {
      return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
        || $stringify('\uDEAD') !== '"\\udead"';
    });

    if ($stringify) {
      // `JSON.stringify` method
      // https://tc39.es/ecma262/#sec-json.stringify
      // https://github.com/tc39/proposal-well-formed-stringify
      _export({ target: 'JSON', stat: true, forced: FORCED$5 }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify(it, replacer, space) {
          var result = $stringify.apply(null, arguments);
          return typeof result == 'string' ? result.replace(re, fix) : result;
        }
      });
    }

    var es_json_stringify = {

    };

    var nativePromiseConstructor = global_1.Promise;

    var Result = function (stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };

    var iterate = function (iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
      var iterator, iterFn, index, length, result, next, step;

      var stop = function (condition) {
        if (iterator) iteratorClose(iterator, 'normal', condition);
        return new Result(true, condition);
      };

      var callFn = function (value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        } return INTERRUPTED ? fn(value, stop) : fn(value);
      };

      if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw TypeError(String(iterable) + ' is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && result instanceof Result) return result;
          } return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }

      next = iterator.next;
      while (!(step = next.call(iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, 'throw', error);
        }
        if (typeof result == 'object' && result && result instanceof Result) return result;
      } return new Result(false);
    };

    var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent);

    var engineIsNode = classofRaw(global_1.process) == 'process';

    var set$2 = global_1.setImmediate;
    var clear = global_1.clearImmediate;
    var process$1 = global_1.process;
    var MessageChannel = global_1.MessageChannel;
    var Dispatch = global_1.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var location, defer, channel, port;

    try {
      // Deno throws a ReferenceError on `location` access without `--location` flag
      location = global_1.location;
    } catch (error) { /* empty */ }

    var run = function (id) {
      // eslint-disable-next-line no-prototype-builtins -- safe
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };

    var runner = function (id) {
      return function () {
        run(id);
      };
    };

    var listener = function (event) {
      run(event.data);
    };

    var post = function (id) {
      // old engines have not location.origin
      global_1.postMessage(String(id), location.protocol + '//' + location.host);
    };

    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!set$2 || !clear) {
      set$2 = function setImmediate(fn) {
        var args = [];
        var argumentsLength = arguments.length;
        var i = 1;
        while (argumentsLength > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func -- spec requirement
          (isCallable(fn) ? fn : Function(fn)).apply(undefined, args);
        };
        defer(counter);
        return counter;
      };
      clear = function clearImmediate(id) {
        delete queue[id];
      };
      // Node.js 0.8-
      if (engineIsNode) {
        defer = function (id) {
          process$1.nextTick(runner(id));
        };
      // Sphere (JS game engine) Dispatch API
      } else if (Dispatch && Dispatch.now) {
        defer = function (id) {
          Dispatch.now(runner(id));
        };
      // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624
      } else if (MessageChannel && !engineIsIos) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = functionBindContext(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (
        global_1.addEventListener &&
        isCallable(global_1.postMessage) &&
        !global_1.importScripts &&
        location && location.protocol !== 'file:' &&
        !fails(post)
      ) {
        defer = post;
        global_1.addEventListener('message', listener, false);
      // IE8-
      } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
        defer = function (id) {
          html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run(id);
          };
        };
      // Rest old browsers
      } else {
        defer = function (id) {
          setTimeout(runner(id), 0);
        };
      }
    }

    var task = {
      set: set$2,
      clear: clear
    };
    var task_1 = task.set;
    var task_2 = task.clear;

    var engineIsIosPebble = /ipad|iphone|ipod/i.test(engineUserAgent) && global_1.Pebble !== undefined;

    var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

    var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
    var macrotask = task.set;





    var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
    var document$2 = global_1.document;
    var process$2 = global_1.process;
    var Promise$1 = global_1.Promise;
    // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
    var queueMicrotaskDescriptor = getOwnPropertyDescriptor$3(global_1, 'queueMicrotask');
    var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

    var flush, head, last, notify, toggle, node, promise, then;

    // modern engines have queueMicrotask method
    if (!queueMicrotask) {
      flush = function () {
        var parent, fn;
        if (engineIsNode && (parent = process$2.domain)) parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (error) {
            if (head) notify();
            else last = undefined;
            throw error;
          }
        } last = undefined;
        if (parent) parent.enter();
      };

      // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
      // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
      if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
        toggle = true;
        node = document$2.createTextNode('');
        new MutationObserver(flush).observe(node, { characterData: true });
        notify = function () {
          node.data = toggle = !toggle;
        };
      // environments with maybe non-completely correct, but existent Promise
      } else if (!engineIsIosPebble && Promise$1 && Promise$1.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise$1.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        promise.constructor = Promise$1;
        then = promise.then;
        notify = function () {
          then.call(promise, flush);
        };
      // Node.js without promises
      } else if (engineIsNode) {
        notify = function () {
          process$2.nextTick(flush);
        };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
      } else {
        notify = function () {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global_1, flush);
        };
      }
    }

    var microtask = queueMicrotask || function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      } last = task;
    };

    'use strict';


    var PromiseCapability = function (C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aCallable(resolve);
      this.reject = aCallable(reject);
    };

    // `NewPromiseCapability` abstract operation
    // https://tc39.es/ecma262/#sec-newpromisecapability
    var f$5 = function (C) {
      return new PromiseCapability(C);
    };

    var newPromiseCapability = {
    	f: f$5
    };

    var promiseResolve = function (C, x) {
      anObject(C);
      if (isObject(x) && x.constructor === C) return x;
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };

    var hostReportErrors = function (a, b) {
      var console = global_1.console;
      if (console && console.error) {
        arguments.length === 1 ? console.error(a) : console.error(a, b);
      }
    };

    var perform = function (exec) {
      try {
        return { error: false, value: exec() };
      } catch (error) {
        return { error: true, value: error };
      }
    };

    var engineIsBrowser = typeof window == 'object';

    'use strict';


















    var task$1 = task.set;












    var SPECIES$4 = wellKnownSymbol('species');
    var PROMISE = 'Promise';
    var getInternalState$4 = internalState.get;
    var setInternalState$3 = internalState.set;
    var getInternalPromiseState = internalState.getterFor(PROMISE);
    var NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype;
    var PromiseConstructor = nativePromiseConstructor;
    var PromiseConstructorPrototype = NativePromisePrototype;
    var TypeError$1 = global_1.TypeError;
    var document$3 = global_1.document;
    var process$3 = global_1.process;
    var newPromiseCapability$1 = newPromiseCapability.f;
    var newGenericPromiseCapability = newPromiseCapability$1;
    var DISPATCH_EVENT = !!(document$3 && document$3.createEvent && global_1.dispatchEvent);
    var NATIVE_REJECTION_EVENT = isCallable(global_1.PromiseRejectionEvent);
    var UNHANDLED_REJECTION = 'unhandledrejection';
    var REJECTION_HANDLED = 'rejectionhandled';
    var PENDING = 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    var HANDLED = 1;
    var UNHANDLED = 2;
    var SUBCLASSING = false;
    var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

    var FORCED$6 = isForced_1(PROMISE, function () {
      var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
      var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
      // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // We can't detect it synchronously, so just check versions
      if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true;
      // We need Promise#finally in the pure version for preventing prototype pollution
      if (isPure && !PromiseConstructorPrototype['finally']) return true;
      // We can't use @@species feature detection in V8 since it causes
      // deoptimization and performance degradation
      // https://github.com/zloirock/core-js/issues/679
      if (engineV8Version >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
      // Detect correctness of subclassing with @@species support
      var promise = new PromiseConstructor(function (resolve) { resolve(1); });
      var FakePromise = function (exec) {
        exec(function () { /* empty */ }, function () { /* empty */ });
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES$4] = FakePromise;
      SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
      if (!SUBCLASSING) return true;
      // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
    });

    var INCORRECT_ITERATION$1 = FORCED$6 || !checkCorrectnessOfIteration(function (iterable) {
      PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
    });

    // helpers
    var isThenable = function (it) {
      var then;
      return isObject(it) && isCallable(then = it.then) ? then : false;
    };

    var notify$1 = function (state, isReject) {
      if (state.notified) return;
      state.notified = true;
      var chain = state.reactions;
      microtask(function () {
        var value = state.value;
        var ok = state.state == FULFILLED;
        var index = 0;
        // variable length - can't use forEach
        while (chain.length > index) {
          var reaction = chain[index++];
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then, exited;
          try {
            if (handler) {
              if (!ok) {
                if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                state.rejection = HANDLED;
              }
              if (handler === true) result = value;
              else {
                if (domain) domain.enter();
                result = handler(value); // can throw
                if (domain) {
                  domain.exit();
                  exited = true;
                }
              }
              if (result === reaction.promise) {
                reject(TypeError$1('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (error) {
            if (domain && !exited) domain.exit();
            reject(error);
          }
        }
        state.reactions = [];
        state.notified = false;
        if (isReject && !state.rejection) onUnhandled(state);
      });
    };

    var dispatchEvent = function (name, promise, reason) {
      var event, handler;
      if (DISPATCH_EVENT) {
        event = document$3.createEvent('Event');
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global_1.dispatchEvent(event);
      } else event = { promise: promise, reason: reason };
      if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
      else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
    };

    var onUnhandled = function (state) {
      task$1.call(global_1, function () {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
          result = perform(function () {
            if (engineIsNode) {
              process$3.emit('unhandledRejection', value, promise);
            } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
          });
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
          if (result.error) throw result.value;
        }
      });
    };

    var isUnhandled = function (state) {
      return state.rejection !== HANDLED && !state.parent;
    };

    var onHandleUnhandled = function (state) {
      task$1.call(global_1, function () {
        var promise = state.facade;
        if (engineIsNode) {
          process$3.emit('rejectionHandled', promise);
        } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
      });
    };

    var bind = function (fn, state, unwrap) {
      return function (value) {
        fn(state, value, unwrap);
      };
    };

    var internalReject = function (state, value, unwrap) {
      if (state.done) return;
      state.done = true;
      if (unwrap) state = unwrap;
      state.value = value;
      state.state = REJECTED;
      notify$1(state, true);
    };

    var internalResolve = function (state, value, unwrap) {
      if (state.done) return;
      state.done = true;
      if (unwrap) state = unwrap;
      try {
        if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) {
          microtask(function () {
            var wrapper = { done: false };
            try {
              then.call(value,
                bind(internalResolve, wrapper, state),
                bind(internalReject, wrapper, state)
              );
            } catch (error) {
              internalReject(wrapper, error, state);
            }
          });
        } else {
          state.value = value;
          state.state = FULFILLED;
          notify$1(state, false);
        }
      } catch (error) {
        internalReject({ done: false }, error, state);
      }
    };

    // constructor polyfill
    if (FORCED$6) {
      // 25.4.3.1 Promise(executor)
      PromiseConstructor = function Promise(executor) {
        anInstance(this, PromiseConstructor, PROMISE);
        aCallable(executor);
        Internal.call(this);
        var state = getInternalState$4(this);
        try {
          executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
          internalReject(state, error);
        }
      };
      PromiseConstructorPrototype = PromiseConstructor.prototype;
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      Internal = function Promise(executor) {
        setInternalState$3(this, {
          type: PROMISE,
          done: false,
          notified: false,
          parent: false,
          reactions: [],
          rejection: false,
          state: PENDING,
          value: undefined
        });
      };
      Internal.prototype = redefineAll(PromiseConstructorPrototype, {
        // `Promise.prototype.then` method
        // https://tc39.es/ecma262/#sec-promise.prototype.then
        then: function then(onFulfilled, onRejected) {
          var state = getInternalPromiseState(this);
          var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
          reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
          reaction.fail = isCallable(onRejected) && onRejected;
          reaction.domain = engineIsNode ? process$3.domain : undefined;
          state.parent = true;
          state.reactions.push(reaction);
          if (state.state != PENDING) notify$1(state, false);
          return reaction.promise;
        },
        // `Promise.prototype.catch` method
        // https://tc39.es/ecma262/#sec-promise.prototype.catch
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
      OwnPromiseCapability = function () {
        var promise = new Internal();
        var state = getInternalState$4(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
      };
      newPromiseCapability.f = newPromiseCapability$1 = function (C) {
        return C === PromiseConstructor || C === PromiseWrapper
          ? new OwnPromiseCapability(C)
          : newGenericPromiseCapability(C);
      };

      if (!isPure && isCallable(nativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;

        if (!SUBCLASSING) {
          // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
          redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function (resolve, reject) {
              nativeThen.call(that, resolve, reject);
            }).then(onFulfilled, onRejected);
          // https://github.com/zloirock/core-js/issues/640
          }, { unsafe: true });

          // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
          redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
        }

        // make `.constructor === Promise` work for native promise-based APIs
        try {
          delete NativePromisePrototype.constructor;
        } catch (error) { /* empty */ }

        // make `instanceof Promise` work for native promise-based APIs
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
        }
      }
    }

    _export({ global: true, wrap: true, forced: FORCED$6 }, {
      Promise: PromiseConstructor
    });

    setToStringTag(PromiseConstructor, PROMISE, false, true);
    setSpecies(PROMISE);

    PromiseWrapper = getBuiltIn(PROMISE);

    // statics
    _export({ target: PROMISE, stat: true, forced: FORCED$6 }, {
      // `Promise.reject` method
      // https://tc39.es/ecma262/#sec-promise.reject
      reject: function reject(r) {
        var capability = newPromiseCapability$1(this);
        capability.reject.call(undefined, r);
        return capability.promise;
      }
    });

    _export({ target: PROMISE, stat: true, forced: isPure || FORCED$6 }, {
      // `Promise.resolve` method
      // https://tc39.es/ecma262/#sec-promise.resolve
      resolve: function resolve(x) {
        return promiseResolve(isPure && this === PromiseWrapper ? PromiseConstructor : this, x);
      }
    });

    _export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION$1 }, {
      // `Promise.all` method
      // https://tc39.es/ecma262/#sec-promise.all
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability$1(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function () {
          var $promiseResolve = aCallable(C.resolve);
          var values = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function (promise) {
            var index = counter++;
            var alreadyCalled = false;
            values.push(undefined);
            remaining++;
            $promiseResolve.call(C, promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
      },
      // `Promise.race` method
      // https://tc39.es/ecma262/#sec-promise.race
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability$1(C);
        var reject = capability.reject;
        var result = perform(function () {
          var $promiseResolve = aCallable(C.resolve);
          iterate(iterable, function (promise) {
            $promiseResolve.call(C, promise).then(capability.resolve, reject);
          });
        });
        if (result.error) reject(result.value);
        return capability.promise;
      }
    });

    var es_promise = {

    };

    var MATCH = wellKnownSymbol('match');

    // `IsRegExp` abstract operation
    // https://tc39.es/ecma262/#sec-isregexp
    var isRegexp = function (it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
    };

    var defineProperty$5 = objectDefineProperty.f;
    var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;







    var enforceInternalState = internalState.enforce;





    var MATCH$1 = wellKnownSymbol('match');
    var NativeRegExp = global_1.RegExp;
    var RegExpPrototype$2 = NativeRegExp.prototype;
    // TODO: Use only propper RegExpIdentifierName
    var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
    var re1 = /a/g;
    var re2 = /a/g;

    // "new" should create a new object, old webkit bug
    var CORRECT_NEW = new NativeRegExp(re1) !== re1;

    var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y;

    var BASE_FORCED = descriptors &&
      (!CORRECT_NEW || UNSUPPORTED_Y$2 || regexpUnsupportedDotAll || regexpUnsupportedNcg || fails(function () {
        re2[MATCH$1] = false;
        // RegExp constructor can alter flags and IsRegExp works correct with @@match
        return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
      }));

    var handleDotAll = function (string) {
      var length = string.length;
      var index = 0;
      var result = '';
      var brackets = false;
      var chr;
      for (; index <= length; index++) {
        chr = string.charAt(index);
        if (chr === '\\') {
          result += chr + string.charAt(++index);
          continue;
        }
        if (!brackets && chr === '.') {
          result += '[\\s\\S]';
        } else {
          if (chr === '[') {
            brackets = true;
          } else if (chr === ']') {
            brackets = false;
          } result += chr;
        }
      } return result;
    };

    var handleNCG = function (string) {
      var length = string.length;
      var index = 0;
      var result = '';
      var named = [];
      var names = {};
      var brackets = false;
      var ncg = false;
      var groupid = 0;
      var groupname = '';
      var chr;
      for (; index <= length; index++) {
        chr = string.charAt(index);
        if (chr === '\\') {
          chr = chr + string.charAt(++index);
        } else if (chr === ']') {
          brackets = false;
        } else if (!brackets) switch (true) {
          case chr === '[':
            brackets = true;
            break;
          case chr === '(':
            if (IS_NCG.test(string.slice(index + 1))) {
              index += 2;
              ncg = true;
            }
            result += chr;
            groupid++;
            continue;
          case chr === '>' && ncg:
            if (groupname === '' || hasOwnProperty_1(names, groupname)) {
              throw new SyntaxError('Invalid capture group name');
            }
            names[groupname] = true;
            named.push([groupname, groupid]);
            ncg = false;
            groupname = '';
            continue;
        }
        if (ncg) groupname += chr;
        else result += chr;
      } return [result, named];
    };

    // `RegExp` constructor
    // https://tc39.es/ecma262/#sec-regexp-constructor
    if (isForced_1('RegExp', BASE_FORCED)) {
      var RegExpWrapper = function RegExp(pattern, flags) {
        var thisIsRegExp = this instanceof RegExpWrapper;
        var patternIsRegExp = isRegexp(pattern);
        var flagsAreUndefined = flags === undefined;
        var groups = [];
        var rawPattern = pattern;
        var rawFlags, dotAll, sticky, handled, result, state;

        if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
          return pattern;
        }

        if (patternIsRegExp || pattern instanceof RegExpWrapper) {
          pattern = pattern.source;
          if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : regexpFlags.call(rawPattern);
        }

        pattern = pattern === undefined ? '' : toString_1(pattern);
        flags = flags === undefined ? '' : toString_1(flags);
        rawPattern = pattern;

        if (regexpUnsupportedDotAll && 'dotAll' in re1) {
          dotAll = !!flags && flags.indexOf('s') > -1;
          if (dotAll) flags = flags.replace(/s/g, '');
        }

        rawFlags = flags;

        if (UNSUPPORTED_Y$2 && 'sticky' in re1) {
          sticky = !!flags && flags.indexOf('y') > -1;
          if (sticky) flags = flags.replace(/y/g, '');
        }

        if (regexpUnsupportedNcg) {
          handled = handleNCG(pattern);
          pattern = handled[0];
          groups = handled[1];
        }

        result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);

        if (dotAll || sticky || groups.length) {
          state = enforceInternalState(result);
          if (dotAll) {
            state.dotAll = true;
            state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
          }
          if (sticky) state.sticky = true;
          if (groups.length) state.groups = groups;
        }

        if (pattern !== rawPattern) try {
          // fails in old engines, but we have no alternatives for unsupported regex syntax
          createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
        } catch (error) { /* empty */ }

        return result;
      };

      var proxy = function (key) {
        key in RegExpWrapper || defineProperty$5(RegExpWrapper, key, {
          configurable: true,
          get: function () { return NativeRegExp[key]; },
          set: function (it) { NativeRegExp[key] = it; }
        });
      };

      for (var keys$3 = getOwnPropertyNames$2(NativeRegExp), index = 0; keys$3.length > index;) {
        proxy(keys$3[index++]);
      }

      RegExpPrototype$2.constructor = RegExpWrapper;
      RegExpWrapper.prototype = RegExpPrototype$2;
      redefine(global_1, 'RegExp', RegExpWrapper);
    }

    // https://tc39.es/ecma262/#sec-get-regexp-@@species
    setSpecies('RegExp');

    var es_regexp_constructor = {

    };

    var UNSUPPORTED_Y$3 = regexpStickyHelpers.UNSUPPORTED_Y;
    var defineProperty$6 = objectDefineProperty.f;
    var getInternalState$5 = internalState.get;
    var RegExpPrototype$3 = RegExp.prototype;

    // `RegExp.prototype.sticky` getter
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
    if (descriptors && UNSUPPORTED_Y$3) {
      defineProperty$6(RegExpPrototype$3, 'sticky', {
        configurable: true,
        get: function () {
          if (this === RegExpPrototype$3) return undefined;
          // We can't use InternalStateModule.getterFor because
          // we don't add metadata for regexps created by a literal.
          if (this instanceof RegExp) {
            return !!getInternalState$5(this).sticky;
          }
          throw TypeError('Incompatible receiver, RegExp required');
        }
      });
    }

    var es_regexp_sticky = {

    };

    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    var domIterables = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
    var domIterables_1 = domIterables.CSSRuleList;
    var domIterables_2 = domIterables.CSSStyleDeclaration;
    var domIterables_3 = domIterables.CSSValueList;
    var domIterables_4 = domIterables.ClientRectList;
    var domIterables_5 = domIterables.DOMRectList;
    var domIterables_6 = domIterables.DOMStringList;
    var domIterables_7 = domIterables.DOMTokenList;
    var domIterables_8 = domIterables.DataTransferItemList;
    var domIterables_9 = domIterables.FileList;
    var domIterables_10 = domIterables.HTMLAllCollection;
    var domIterables_11 = domIterables.HTMLCollection;
    var domIterables_12 = domIterables.HTMLFormElement;
    var domIterables_13 = domIterables.HTMLSelectElement;
    var domIterables_14 = domIterables.MediaList;
    var domIterables_15 = domIterables.MimeTypeArray;
    var domIterables_16 = domIterables.NamedNodeMap;
    var domIterables_17 = domIterables.NodeList;
    var domIterables_18 = domIterables.PaintRequestList;
    var domIterables_19 = domIterables.Plugin;
    var domIterables_20 = domIterables.PluginArray;
    var domIterables_21 = domIterables.SVGLengthList;
    var domIterables_22 = domIterables.SVGNumberList;
    var domIterables_23 = domIterables.SVGPathSegList;
    var domIterables_24 = domIterables.SVGPointList;
    var domIterables_25 = domIterables.SVGStringList;
    var domIterables_26 = domIterables.SVGTransformList;
    var domIterables_27 = domIterables.SourceBufferList;
    var domIterables_28 = domIterables.StyleSheetList;
    var domIterables_29 = domIterables.TextTrackCueList;
    var domIterables_30 = domIterables.TextTrackList;
    var domIterables_31 = domIterables.TouchList;

    // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`


    var classList = documentCreateElement('span').classList;
    var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

    var domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

    'use strict';
    var $forEach$1 = arrayIteration.forEach;


    var STRICT_METHOD$2 = arrayMethodIsStrict('forEach');

    // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn /* , thisArg */) {
      return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    } : [].forEach;

    var handlePrototype = function (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
        createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
      } catch (error) {
        CollectionPrototype.forEach = arrayForEach;
      }
    };

    for (var COLLECTION_NAME in domIterables) {
      if (domIterables[COLLECTION_NAME]) {
        handlePrototype(global_1[COLLECTION_NAME] && global_1[COLLECTION_NAME].prototype);
      }
    }

    handlePrototype(domTokenListPrototype);

    var web_domCollections_forEach = {

    };

    var SPECIES$5 = wellKnownSymbol('species');

    var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return engineV8Version >= 51 || !fails(function () {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES$5] = function () {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };

    'use strict';

    var $filter$1 = arrayIteration.filter;


    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    // with adding support of @@species
    _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      filter: function filter(callbackfn /* , thisArg */) {
        return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    var es_array_filter = {

    };

    var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
      keys: function keys(it) {
        return objectKeys(toObject(it));
      }
    });

    var es_object_keys = {

    };

    'use strict';

    var $findIndex$1 = arrayIteration.findIndex;


    var FIND_INDEX = 'findIndex';
    var SKIPS_HOLES = true;

    // Shouldn't skip holes
    if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findindex
    _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
      findIndex: function findIndex(callbackfn /* , that = undefined */) {
        return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables(FIND_INDEX);

    var es_array_findIndex = {

    };

    'use strict';









    var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('splice');

    var max$1 = Math.max;
    var min$4 = Math.min;
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

    // `Array.prototype.splice` method
    // https://tc39.es/ecma262/#sec-array.prototype.splice
    // with adding support of @@species
    _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
      splice: function splice(start, deleteCount /* , ...items */) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var actualStart = toAbsoluteIndex(start, len);
        var argumentsLength = arguments.length;
        var insertCount, actualDeleteCount, A, k, from, to;
        if (argumentsLength === 0) {
          insertCount = actualDeleteCount = 0;
        } else if (argumentsLength === 1) {
          insertCount = 0;
          actualDeleteCount = len - actualStart;
        } else {
          insertCount = argumentsLength - 2;
          actualDeleteCount = min$4(max$1(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
        }
        if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
          throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
        }
        A = arraySpeciesCreate(O, actualDeleteCount);
        for (k = 0; k < actualDeleteCount; k++) {
          from = actualStart + k;
          if (from in O) createProperty(A, k, O[from]);
        }
        A.length = actualDeleteCount;
        if (insertCount < actualDeleteCount) {
          for (k = actualStart; k < len - actualDeleteCount; k++) {
            from = k + actualDeleteCount;
            to = k + insertCount;
            if (from in O) O[to] = O[from];
            else delete O[to];
          }
          for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
        } else if (insertCount > actualDeleteCount) {
          for (k = len - actualDeleteCount; k > actualStart; k--) {
            from = k + actualDeleteCount - 1;
            to = k + insertCount - 1;
            if (from in O) O[to] = O[from];
            else delete O[to];
          }
        }
        for (k = 0; k < insertCount; k++) {
          O[k + actualStart] = arguments[k + 2];
        }
        O.length = len - actualDeleteCount + insertCount;
        return A;
      }
    });

    var es_array_splice = {

    };

    'use strict';











    var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');

    var SPECIES$6 = wellKnownSymbol('species');
    var nativeSlice = [].slice;
    var max$2 = Math.max;

    // `Array.prototype.slice` method
    // https://tc39.es/ecma262/#sec-array.prototype.slice
    // fallback for not array-like ES3 strings and DOM objects
    _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
      slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = lengthOfArrayLike(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n;
        if (isArray(O)) {
          Constructor = O.constructor;
          // cross-realm fallback
          if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
            Constructor = undefined;
          } else if (isObject(Constructor)) {
            Constructor = Constructor[SPECIES$6];
            if (Constructor === null) Constructor = undefined;
          }
          if (Constructor === Array || Constructor === undefined) {
            return nativeSlice.call(O, k, fin);
          }
        }
        result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));
        for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
        result.length = n;
        return result;
      }
    });

    var es_array_slice = {

    };

    'use strict';

    var $find$1 = arrayIteration.find;


    var FIND = 'find';
    var SKIPS_HOLES$1 = true;

    // Shouldn't skip holes
    if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES$1 = false; });

    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    _export({ target: 'Array', proto: true, forced: SKIPS_HOLES$1 }, {
      find: function find(callbackfn /* , that = undefined */) {
        return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables(FIND);

    var es_array_find = {

    };

    var notARegexp = function (it) {
      if (isRegexp(it)) {
        throw TypeError("The method doesn't accept regular expressions");
      } return it;
    };

    var MATCH$2 = wellKnownSymbol('match');

    var correctIsRegexpLogic = function (METHOD_NAME) {
      var regexp = /./;
      try {
        '/./'[METHOD_NAME](regexp);
      } catch (error1) {
        try {
          regexp[MATCH$2] = false;
          return '/./'[METHOD_NAME](regexp);
        } catch (error2) { /* empty */ }
      } return false;
    };

    'use strict';

    var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;







    // eslint-disable-next-line es/no-string-prototype-endswith -- safe
    var $endsWith = ''.endsWith;
    var min$5 = Math.min;

    var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('endsWith');
    // https://github.com/zloirock/core-js/pull/702
    var MDN_POLYFILL_BUG = !isPure && !CORRECT_IS_REGEXP_LOGIC && !!function () {
      var descriptor = getOwnPropertyDescriptor$4(String.prototype, 'endsWith');
      return descriptor && !descriptor.writable;
    }();

    // `String.prototype.endsWith` method
    // https://tc39.es/ecma262/#sec-string.prototype.endswith
    _export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
      endsWith: function endsWith(searchString /* , endPosition = @length */) {
        var that = toString_1(requireObjectCoercible(this));
        notARegexp(searchString);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = that.length;
        var end = endPosition === undefined ? len : min$5(toLength(endPosition), len);
        var search = toString_1(searchString);
        return $endsWith
          ? $endsWith.call(that, search, end)
          : that.slice(end - search.length, end) === search;
      }
    });

    var es_string_endsWith = {

    };

    'use strict';

    var $includes$1 = arrayIncludes.includes;


    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    _export({ target: 'Array', proto: true }, {
      includes: function includes(el /* , fromIndex = 0 */) {
        return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('includes');

    var es_array_includes = {

    };

    'use strict';






    // `String.prototype.includes` method
    // https://tc39.es/ecma262/#sec-string.prototype.includes
    _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
      includes: function includes(searchString /* , position = 0 */) {
        return !!~toString_1(requireObjectCoercible(this))
          .indexOf(toString_1(notARegexp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    var es_string_includes = {

    };

    'use strict';

    var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;







    // eslint-disable-next-line es/no-string-prototype-startswith -- safe
    var $startsWith = ''.startsWith;
    var min$6 = Math.min;

    var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegexpLogic('startsWith');
    // https://github.com/zloirock/core-js/pull/702
    var MDN_POLYFILL_BUG$1 = !isPure && !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
      var descriptor = getOwnPropertyDescriptor$5(String.prototype, 'startsWith');
      return descriptor && !descriptor.writable;
    }();

    // `String.prototype.startsWith` method
    // https://tc39.es/ecma262/#sec-string.prototype.startswith
    _export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
      startsWith: function startsWith(searchString /* , position = 0 */) {
        var that = toString_1(requireObjectCoercible(this));
        notARegexp(searchString);
        var index = toLength(min$6(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = toString_1(searchString);
        return $startsWith
          ? $startsWith.call(that, search, index)
          : that.slice(index, index + search.length) === search;
      }
    });

    var es_string_startsWith = {

    };

    // `Int8Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    typedArrayConstructor('Int8', function (init) {
      return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    var es_typedArray_int8Array = {

    };

    // `Int16Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    typedArrayConstructor('Int16', function (init) {
      return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    var es_typedArray_int16Array = {

    };

    // `Int32Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    typedArrayConstructor('Int32', function (init) {
      return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    var es_typedArray_int32Array = {

    };

    // `Uint16Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    typedArrayConstructor('Uint16', function (init) {
      return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    var es_typedArray_uint16Array = {

    };

    // `Uint32Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    typedArrayConstructor('Uint32', function (init) {
      return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    var es_typedArray_uint32Array = {

    };

    // `Float32Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    typedArrayConstructor('Float32', function (init) {
      return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    var es_typedArray_float32Array = {

    };

    // `Float64Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    typedArrayConstructor('Float64', function (init) {
      return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    var es_typedArray_float64Array = {

    };

    'use strict';

    var $map$1 = arrayIteration.map;


    var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('map');

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
      map: function map(callbackfn /* , thisArg */) {
        return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    var es_array_map = {

    };

    'use strict';








    // eslint-disable-next-line es/no-object-assign -- safe
    var $assign = Object.assign;
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    var defineProperty$7 = Object.defineProperty;

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    var objectAssign = !$assign || fails(function () {
      // should have correct order of operations (Edge bug)
      if (descriptors && $assign({ b: 1 }, $assign(defineProperty$7({}, 'a', {
        enumerable: true,
        get: function () {
          defineProperty$7(this, 'b', {
            value: 3,
            enumerable: false
          });
        }
      }), { b: 2 })).b !== 1) return true;
      // should work with symbols and should have deterministic property order (V8 bug)
      var A = {};
      var B = {};
      // eslint-disable-next-line es/no-symbol -- safe
      var symbol = Symbol();
      var alphabet = 'abcdefghijklmnopqrst';
      A[symbol] = 7;
      alphabet.split('').forEach(function (chr) { B[chr] = chr; });
      return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
      var T = toObject(target);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      var propertyIsEnumerable = objectPropertyIsEnumerable.f;
      while (argumentsLength > index) {
        var S = indexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
        }
      } return T;
    } : $assign;

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    // eslint-disable-next-line es/no-object-assign -- required for testing
    _export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
      assign: objectAssign
    });

    var es_object_assign = {

    };

    'use strict';
    /* eslint-disable es/no-array-prototype-indexof -- required for testing */

    var $indexOf$1 = arrayIncludes.indexOf;


    var nativeIndexOf = [].indexOf;

    var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
    var STRICT_METHOD$3 = arrayMethodIsStrict('indexOf');

    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    _export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$3 }, {
      indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
        return NEGATIVE_ZERO$1
          // convert -0 to +0
          ? nativeIndexOf.apply(this, arguments) || 0
          : $indexOf$1(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    var es_array_indexOf = {

    };

    var ITERATOR$7 = wellKnownSymbol('iterator');
    var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
    var ArrayValues = es_array_iterator.values;

    var handlePrototype$1 = function (CollectionPrototype, COLLECTION_NAME) {
      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR$7] !== ArrayValues) try {
          createNonEnumerableProperty(CollectionPrototype, ITERATOR$7, ArrayValues);
        } catch (error) {
          CollectionPrototype[ITERATOR$7] = ArrayValues;
        }
        if (!CollectionPrototype[TO_STRING_TAG$4]) {
          createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$4, COLLECTION_NAME);
        }
        if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
          } catch (error) {
            CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
          }
        }
      }
    };

    for (var COLLECTION_NAME$1 in domIterables) {
      handlePrototype$1(global_1[COLLECTION_NAME$1] && global_1[COLLECTION_NAME$1].prototype, COLLECTION_NAME$1);
    }

    handlePrototype$1(domTokenListPrototype, 'DOMTokenList');

    var web_domCollections_iterator = {

    };

    'use strict';





    var ARRAY_BUFFER$1 = 'ArrayBuffer';
    var ArrayBuffer$3 = arrayBuffer[ARRAY_BUFFER$1];
    var NativeArrayBuffer$1 = global_1[ARRAY_BUFFER$1];

    // `ArrayBuffer` constructor
    // https://tc39.es/ecma262/#sec-arraybuffer-constructor
    _export({ global: true, forced: NativeArrayBuffer$1 !== ArrayBuffer$3 }, {
      ArrayBuffer: ArrayBuffer$3
    });

    setSpecies(ARRAY_BUFFER$1);

    var es_arrayBuffer_constructor = {

    };

    var NATIVE_ARRAY_BUFFER_VIEWS$2 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

    // `ArrayBuffer.isView` method
    // https://tc39.es/ecma262/#sec-arraybuffer.isview
    _export({ target: 'ArrayBuffer', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS$2 }, {
      isView: arrayBufferViewCore.isView
    });

    var es_arrayBuffer_isView = {

    };

    'use strict';


    // `URL.prototype.toJSON` method
    // https://url.spec.whatwg.org/#dom-url-tojson
    _export({ target: 'URL', proto: true, enumerable: true }, {
      toJSON: function toJSON() {
        return URL.prototype.toString.call(this);
      }
    });

    var web_url_toJson = {

    };

    var propertyIsEnumerable = objectPropertyIsEnumerable.f;

    // `Object.{ entries, values }` methods implementation
    var createMethod$5 = function (TO_ENTRIES) {
      return function (it) {
        var O = toIndexedObject(it);
        var keys = objectKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) {
          key = keys[i++];
          if (!descriptors || propertyIsEnumerable.call(O, key)) {
            result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
          }
        }
        return result;
      };
    };

    var objectToArray = {
      // `Object.entries` method
      // https://tc39.es/ecma262/#sec-object.entries
      entries: createMethod$5(true),
      // `Object.values` method
      // https://tc39.es/ecma262/#sec-object.values
      values: createMethod$5(false)
    };
    var objectToArray_1 = objectToArray.entries;
    var objectToArray_2 = objectToArray.values;

    var $entries = objectToArray.entries;

    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    _export({ target: 'Object', stat: true }, {
      entries: function entries(O) {
        return $entries(O);
      }
    });

    var es_object_entries = {

    };

    // `Number.isInteger` method
    // https://tc39.es/ecma262/#sec-number.isinteger
    _export({ target: 'Number', stat: true }, {
      isInteger: isIntegralNumber
    });

    var es_number_isInteger = {

    };

    var FAILS_ON_PRIMITIVES$1 = fails(function () { objectGetPrototypeOf(1); });

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !correctPrototypeGetter }, {
      getPrototypeOf: function getPrototypeOf(it) {
        return objectGetPrototypeOf(toObject(it));
      }
    });

    var es_object_getPrototypeOf = {

    };

    // `parseInt` method
    // https://tc39.es/ecma262/#sec-parseint-string-radix
    _export({ global: true, forced: parseInt != numberParseInt }, {
      parseInt: numberParseInt
    });

    var es_parseInt = {

    };

    var tsbufferSchema = createCommonjsModule(function (module, exports) {
    /*!
     * TSBuffer Schema v2.2.0
     * -----------------------------------------
     * MIT LICENSE
     * KingWorks (C) Copyright 2022
     * https://github.com/k8w/tsbuffer-schema
     */
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    /**
     * Enum for every possible `TSBufferSchema['type']`
     */
    var SchemaType = /** @class */ (function () {
        function SchemaType() {
        }
        // #region 确定的TypeScript的类型
        SchemaType.Boolean = 'Boolean';
        SchemaType.Number = 'Number';
        SchemaType.String = 'String';
        SchemaType.Array = 'Array';
        SchemaType.Tuple = 'Tuple';
        SchemaType.Enum = 'Enum';
        SchemaType.Any = 'Any';
        SchemaType.Literal = 'Literal';
        SchemaType.Object = 'Object';
        SchemaType.Interface = 'Interface';
        SchemaType.Buffer = 'Buffer';
        SchemaType.IndexedAccess = 'IndexedAccess';
        SchemaType.Reference = 'Reference';
        SchemaType.Keyof = 'Keyof';
        SchemaType.Union = 'Union';
        SchemaType.Intersection = 'Intersection';
        SchemaType.NonNullable = 'NonNullable';
        SchemaType.Date = 'Date';
        // #endregion
        // #region 非TypeScript基本类型，临时过渡用
        SchemaType.Pick = 'Pick';
        SchemaType.Partial = 'Partial';
        SchemaType.Omit = 'Omit';
        SchemaType.Overwrite = 'Overwrite';
        // #endregion
        SchemaType.Custom = 'Custom';
        return SchemaType;
    }());

    exports.SchemaType = SchemaType;
    });

    var index$1 = unwrapExports(tsbufferSchema);
    var tsbufferSchema_1 = tsbufferSchema.SchemaType;

    var tsrpcProto = createCommonjsModule(function (module, exports) {
    /*!
     * TSRPC Proto v1.4.3
     * -----------------------------------------
     * Copyright (c) Kingworks Corporation.
     * MIT License
     * https://github.com/k8w/tsrpc-proto
     */
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });




    var empty = function () { };
    function setLogLevel(logger, logLevel) {
        switch (logLevel) {
            case 'none':
                return { debug: empty, log: empty, warn: empty, error: empty };
            case 'error':
                return { debug: empty, log: empty, warn: empty, error: logger.error.bind(logger) };
            case 'warn':
                return { debug: empty, log: empty, warn: logger.warn.bind(logger), error: logger.error.bind(logger) };
            case 'info':
                return { debug: empty, log: logger.log.bind(logger), warn: logger.warn.bind(logger), error: logger.error.bind(logger) };
            case 'debug':
                return logger;
            default:
                throw new Error("Invalid logLevel: '".concat(logLevel, "'"));
        }
    }

    exports.TsrpcErrorType = void 0;
    (function (TsrpcErrorType) {
        /** Network error, like connection broken, network timeout, etc. */
        TsrpcErrorType["NetworkError"] = "NetworkError";
        /**
         * Server exception, for example "request format error", "database exception", etc.
         *
         * @remarks
         * This error message may be not suitable to show to user,
         * but the error info is useful for engineer to find some bug.
         * So you can show a user-friendly message to user (like "System error, please contact XXX"),
         * and report some debug info at the same time.
         */
        TsrpcErrorType["ServerError"] = "ServerError";
        /** Client exception, for example parse server output error.
         * (May because of the proto file is not the same between server and client)
         */
        TsrpcErrorType["ClientError"] = "ClientError";
        /**
         * The business error returned by `call.error`.
         * It is always business-relatived, for example `call.error('Password is incorrect')`, `call.error('Not enough credit')`, etc.
         */
        TsrpcErrorType["ApiError"] = "ApiError";
    })(exports.TsrpcErrorType || (exports.TsrpcErrorType = {}));

    var TransportDataProto = {
        "ServerInputData": {
            "type": tsbufferSchema.SchemaType.Interface,
            "properties": [
                {
                    "id": 0,
                    "name": "serviceId",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Number,
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "buffer",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Buffer,
                        "arrayType": "Uint8Array"
                    }
                },
                {
                    "id": 2,
                    "name": "sn",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Number,
                        "scalarType": "uint"
                    },
                    "optional": true
                }
            ]
        },
        "ServerOutputData": {
            "type": tsbufferSchema.SchemaType.Interface,
            "properties": [
                {
                    "id": 0,
                    "name": "buffer",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Buffer,
                        "arrayType": "Uint8Array"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "error",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Reference,
                        "target": "TsrpcErrorData"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "serviceId",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Number,
                        "scalarType": "uint"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "sn",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Number,
                        "scalarType": "uint"
                    },
                    "optional": true
                }
            ]
        },
        "TsrpcErrorData": {
            "type": tsbufferSchema.SchemaType.Interface,
            "properties": [
                {
                    "id": 0,
                    "name": "message",
                    "type": {
                        "type": tsbufferSchema.SchemaType.String
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Reference,
                        "target": "TsrpcErrorType"
                    }
                },
                {
                    "id": 2,
                    "name": "code",
                    "type": {
                        "type": tsbufferSchema.SchemaType.Union,
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": tsbufferSchema.SchemaType.String
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": tsbufferSchema.SchemaType.Number,
                                    "scalarType": "int"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ],
            "indexSignature": {
                "keyType": "String",
                "type": {
                    "type": tsbufferSchema.SchemaType.Any
                }
            }
        },
        "TsrpcErrorType": {
            "type": tsbufferSchema.SchemaType.Enum,
            "members": [
                {
                    "id": 0,
                    "value": "NetworkError"
                },
                {
                    "id": 1,
                    "value": "ServerError"
                },
                {
                    "id": 2,
                    "value": "ClientError"
                },
                {
                    "id": 3,
                    "value": "ApiError"
                }
            ]
        }
    };

    /**
     * A unified Error that returned by TSRPC server or client
     *
     * @remarks
     * It has many uses, for example:
     *
     * 1. You can handle business errors and network errors uniformly.
     * 2. In API handle process, `throw new TsrpcError('xxx')` would return the same error to client directly (like `call.error()`),
     * while `throw new Error('XXX')` would return a unified "Server Internal Error".
     */
    var TsrpcError = /** @class */ (function () {
        function TsrpcError(dataOrMessage, data) {
            var _a;
            if (typeof dataOrMessage === 'string') {
                this.message = dataOrMessage;
                this.type = (_a = data === null || data === void 0 ? void 0 : data.type) !== null && _a !== void 0 ? _a : exports.TsrpcErrorType.ApiError;
                tslib_es6.__assign(this, data);
            }
            else {
                tslib_es6.__assign(this, dataOrMessage);
            }
        }
        TsrpcError.prototype.toString = function () {
            return "[TSRPC ".concat(this.type, "]: ").concat(this.message);
        };
        TsrpcError.Type = exports.TsrpcErrorType;
        return TsrpcError;
    }());

    exports.TransportDataProto = TransportDataProto;
    exports.TsrpcError = TsrpcError;
    exports.setLogLevel = setLogLevel;
    });

    var index$2 = unwrapExports(tsrpcProto);
    var tsrpcProto_1 = tsrpcProto.TsrpcErrorType;
    var tsrpcProto_2 = tsrpcProto.TransportDataProto;
    var tsrpcProto_3 = tsrpcProto.TsrpcError;
    var tsrpcProto_4 = tsrpcProto.setLogLevel;

    var tsbufferValidator = createCommonjsModule(function (module, exports) {
    /*!
     * TSBuffer Validator v2.1.0
     * -----------------------------------------
     * MIT LICENSE
     * KingWorks (C) Copyright 2022
     * https://github.com/k8w/tsbuffer-validator
     */
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });





    var ProtoHelper = /** @class */ (function () {
        function ProtoHelper(proto) {
            this._schemaWithUuids = [];
            this._unionPropertiesCache = {};
            this._flatInterfaceSchemaCache = {};
            this.proto = proto;
        }
        /** 将ReferenceTypeSchema层层转换为它最终实际引用的类型 */
        ProtoHelper.prototype.parseReference = function (schema) {
            // Reference
            if (schema.type === tsbufferSchema.SchemaType.Reference) {
                var parsedSchema = this.proto[schema.target];
                if (!parsedSchema) {
                    throw new Error("Cannot find reference target: ".concat(schema.target));
                }
                if (this.isTypeReference(parsedSchema)) {
                    return this.parseReference(parsedSchema);
                }
                else {
                    return parsedSchema;
                }
            }
            // IndexedAccess
            else if (schema.type === tsbufferSchema.SchemaType.IndexedAccess) {
                if (!this.isInterface(schema.objectType)) {
                    throw new Error("Error objectType: ".concat(schema.objectType.type));
                }
                // find prop item
                var flat = this.getFlatInterfaceSchema(schema.objectType);
                var propItem = flat.properties.find(function (v) { return v.name === schema.index; });
                var propType = void 0;
                if (propItem) {
                    propType = propItem.type;
                }
                else {
                    if (flat.indexSignature) {
                        propType = flat.indexSignature.type;
                    }
                    else {
                        throw new Error("Error index: ".concat(schema.index));
                    }
                }
                // optional -> | undefined
                if (propItem && propItem.optional && // 引用的字段是optional
                    (propItem.type.type !== tsbufferSchema.SchemaType.Union // 自身不为Union
                        // 或自身为Union，但没有undefined成员条件
                        || propItem.type.members.findIndex(function (v) { return v.type.type === tsbufferSchema.SchemaType.Literal && v.type.literal === undefined; }) === -1)) {
                    propType = {
                        type: tsbufferSchema.SchemaType.Union,
                        members: [
                            { id: 0, type: propType },
                            {
                                id: 1,
                                type: {
                                    type: tsbufferSchema.SchemaType.Literal,
                                    literal: undefined
                                }
                            }
                        ]
                    };
                }
                return this.isTypeReference(propType) ? this.parseReference(propType) : propType;
            }
            else if (schema.type === tsbufferSchema.SchemaType.Keyof) {
                var flatInterface = this.getFlatInterfaceSchema(schema.target);
                return {
                    type: tsbufferSchema.SchemaType.Union,
                    members: flatInterface.properties.map(function (v, i) { return ({
                        id: i,
                        type: {
                            type: tsbufferSchema.SchemaType.Literal,
                            literal: v.name
                        }
                    }); })
                };
            }
            else {
                return schema;
            }
        };
        ProtoHelper.prototype.isInterface = function (schema, excludeReference) {
            if (excludeReference === void 0) { excludeReference = false; }
            if (!excludeReference && this.isTypeReference(schema)) {
                var parsed = this.parseReference(schema);
                return this.isInterface(parsed, excludeReference);
            }
            else {
                return schema.type === tsbufferSchema.SchemaType.Interface || this.isMappedType(schema) && this.parseMappedType(schema).type === tsbufferSchema.SchemaType.Interface;
            }
        };
        ProtoHelper.prototype.isMappedType = function (schema) {
            return schema.type === tsbufferSchema.SchemaType.Pick ||
                schema.type === tsbufferSchema.SchemaType.Partial ||
                schema.type === tsbufferSchema.SchemaType.Omit ||
                schema.type === tsbufferSchema.SchemaType.Overwrite;
        };
        ProtoHelper.prototype.isTypeReference = function (schema) {
            return schema.type === tsbufferSchema.SchemaType.Reference || schema.type === tsbufferSchema.SchemaType.IndexedAccess;
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
                this._unionPropertiesCache[uuid] = this._addUnionProperties([], schema.members.map(function (v) { return v.type; }));
            }
            return this._unionPropertiesCache[uuid];
        };
        /**
         * unionProperties: 在Union或Intersection类型中，出现在任意member中的字段
         */
        ProtoHelper.prototype._addUnionProperties = function (unionProperties, schemas) {
            for (var i = 0, len = schemas.length; i < len; ++i) {
                var schema = this.parseReference(schemas[i]);
                // Interface及其Ref 加入interfaces
                if (this.isInterface(schema)) {
                    var flat = this.getFlatInterfaceSchema(schema);
                    flat.properties.forEach(function (v) {
                        unionProperties.binaryInsert(v.name, true);
                    });
                    if (flat.indexSignature) {
                        var key = "[[".concat(flat.indexSignature.keyType, "]]");
                        unionProperties.binaryInsert(key, true);
                    }
                }
                // Intersection/Union 递归合并unionProperties
                else if (schema.type === tsbufferSchema.SchemaType.Intersection || schema.type === tsbufferSchema.SchemaType.Union) {
                    this._addUnionProperties(unionProperties, schema.members.map(function (v) { return v.type; }));
                }
                else if (this.isMappedType(schema)) {
                    this._addUnionProperties(unionProperties, [this.parseMappedType(schema)]);
                }
            }
            return unionProperties;
        };
        /**
         * 将unionProperties 扩展到 InterfaceTypeSchema中（optional的any类型）
         * 以此来跳过对它们的检查（用于Intersection/Union）
         */
        ProtoHelper.prototype.applyUnionProperties = function (schema, unionProperties) {
            var newSchema = tslib_es6.__assign(tslib_es6.__assign({}, schema), { properties: schema.properties.slice() });
            var _loop_1 = function (prop) {
                if (prop === '[[String]]') {
                    newSchema.indexSignature = newSchema.indexSignature || {
                        keyType: tsbufferSchema.SchemaType.String,
                        type: { type: tsbufferSchema.SchemaType.Any }
                    };
                }
                else if (prop === '[[Number]]') {
                    newSchema.indexSignature = newSchema.indexSignature || {
                        keyType: tsbufferSchema.SchemaType.Number,
                        type: { type: tsbufferSchema.SchemaType.Any }
                    };
                }
                else if (!schema.properties.find(function (v) { return v.name === prop; })) {
                    newSchema.properties.push({
                        id: -1,
                        name: prop,
                        optional: true,
                        type: {
                            type: tsbufferSchema.SchemaType.Any
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
        /**
         * 将interface及其引用转换为展平的schema
         */
        ProtoHelper.prototype.getFlatInterfaceSchema = function (schema) {
            var uuid = this._getSchemaUuid(schema);
            // from cache
            if (this._flatInterfaceSchemaCache[uuid]) {
                return this._flatInterfaceSchemaCache[uuid];
            }
            if (this.isTypeReference(schema)) {
                var parsed = this.parseReference(schema);
                if (parsed.type !== tsbufferSchema.SchemaType.Interface) {
                    throw new Error("Cannot flatten non interface type: ".concat(parsed.type));
                }
                this._flatInterfaceSchemaCache[uuid] = this.getFlatInterfaceSchema(parsed);
            }
            else if (schema.type === tsbufferSchema.SchemaType.Interface) {
                this._flatInterfaceSchemaCache[uuid] = this._flattenInterface(schema);
            }
            else if (this.isMappedType(schema)) {
                this._flatInterfaceSchemaCache[uuid] = this._flattenMappedType(schema);
            }
            else {
                // @ts-expect-error
                throw new Error('Invalid interface type: ' + schema.type);
            }
            return this._flatInterfaceSchemaCache[uuid];
        };
        /**
         * 展平interface
         */
        ProtoHelper.prototype._flattenInterface = function (schema) {
            var properties = {};
            var indexSignature;
            // 自身定义的properties和indexSignature优先级最高
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
            // extends的优先级次之，补全没有定义的字段
            if (schema.extends) {
                for (var _b = 0, _c = schema.extends; _b < _c.length; _b++) {
                    var extend = _c[_b];
                    // 解引用
                    var parsedExtRef = this.parseReference(extend.type);
                    if (this.isMappedType(parsedExtRef)) {
                        parsedExtRef = this._flattenMappedType(parsedExtRef);
                    }
                    if (!this.isInterface(parsedExtRef)) {
                        throw new Error('SchemaError: extends must from interface but from ' + parsedExtRef.type);
                    }
                    // 递归展平extends
                    var flatenExtendsSchema = this.getFlatInterfaceSchema(parsedExtRef);
                    // properties
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
                    // indexSignature
                    if (flatenExtendsSchema.indexSignature && !indexSignature) {
                        indexSignature = flatenExtendsSchema.indexSignature;
                    }
                }
            }
            return {
                type: tsbufferSchema.SchemaType.Interface,
                properties: Object.entries(properties).map(function (v, i) { return ({
                    id: i,
                    name: v[0],
                    optional: v[1].optional,
                    type: v[1].type
                }); }),
                indexSignature: indexSignature
            };
        };
        /** 将MappedTypeSchema转换为展平的Interface
         */
        ProtoHelper.prototype._flattenMappedType = function (schema) {
            // target 解引用
            var target;
            if (this.isTypeReference(schema.target)) {
                var parsed = this.parseReference(schema.target);
                target = parsed;
            }
            else {
                target = schema.target;
            }
            var flatTarget;
            // 内层仍然为MappedType 递归之
            if (target.type === tsbufferSchema.SchemaType.Pick || target.type === tsbufferSchema.SchemaType.Partial || target.type === tsbufferSchema.SchemaType.Omit || target.type === tsbufferSchema.SchemaType.Overwrite) {
                flatTarget = this._flattenMappedType(target);
            }
            else if (target.type === tsbufferSchema.SchemaType.Interface) {
                flatTarget = this._flattenInterface(target);
            }
            else {
                throw new Error("Invalid target.type: ".concat(target.type));
            }
            // 开始执行Mapped逻辑
            if (schema.type === tsbufferSchema.SchemaType.Pick) {
                var properties = [];
                var _loop_2 = function (key) {
                    var propItem = flatTarget.properties.find(function (v) { return v.name === key; });
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
                };
                for (var _i = 0, _a = schema.keys; _i < _a.length; _i++) {
                    var key = _a[_i];
                    _loop_2(key);
                }
                return {
                    type: tsbufferSchema.SchemaType.Interface,
                    properties: properties
                };
            }
            else if (schema.type === tsbufferSchema.SchemaType.Partial) {
                for (var _b = 0, _c = flatTarget.properties; _b < _c.length; _b++) {
                    var v = _c[_b];
                    v.optional = true;
                }
                return flatTarget;
            }
            else if (schema.type === tsbufferSchema.SchemaType.Omit) {
                var _loop_3 = function (key) {
                    flatTarget.properties.removeOne(function (v) { return v.name === key; });
                };
                for (var _d = 0, _e = schema.keys; _d < _e.length; _d++) {
                    var key = _e[_d];
                    _loop_3(key);
                }
                return flatTarget;
            }
            else if (schema.type === tsbufferSchema.SchemaType.Overwrite) {
                var overwrite = this.getFlatInterfaceSchema(schema.overwrite);
                if (overwrite.indexSignature) {
                    flatTarget.indexSignature = overwrite.indexSignature;
                }
                var _loop_4 = function (prop) {
                    flatTarget.properties.removeOne(function (v) { return v.name === prop.name; });
                    flatTarget.properties.push(prop);
                };
                for (var _f = 0, _g = overwrite.properties; _f < _g.length; _f++) {
                    var prop = _g[_f];
                    _loop_4(prop);
                }
                return flatTarget;
            }
            else {
                throw new Error("Unknown type: ".concat(schema.type));
            }
        };
        ProtoHelper.prototype.parseMappedType = function (schema) {
            // 解嵌套，例如：Pick<Pick<Omit, XXX, 'a'|'b'>>>
            var parents = [];
            var child = schema;
            do {
                parents.push(child);
                child = this.parseReference(child.target);
            } while (this.isMappedType(child));
            // 最内层是 interface，直接返回（validator 会验证 key 匹配）
            if (child.type === tsbufferSchema.SchemaType.Interface) {
                return child;
            }
            // PickOmit<A|B> === PickOmit<A> | PickOmit<B>
            else if (child.type === tsbufferSchema.SchemaType.Union || child.type === tsbufferSchema.SchemaType.Intersection) {
                var newSchema = {
                    type: child.type,
                    members: child.members.map(function (v) {
                        // 从里面往外装
                        var type = v.type;
                        for (var i = parents.length - 1; i > -1; --i) {
                            var parent_1 = parents[i];
                            type = tslib_es6.__assign(tslib_es6.__assign({}, parent_1), { target: type });
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
                throw new Error("Unsupported pattern ".concat(schema.type, "<").concat(child.type, ">"));
            }
        };
        return ProtoHelper;
    }());

    var _a;
    /** @internal */
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
        ErrorType["CustomError"] = "CustomError";
    })(ErrorType || (ErrorType = {}));
    /** @internal */
    var ErrorMsg = (_a = {},
        _a[ErrorType.TypeError] = function (expect, actual) { return "Expected type to be `".concat(expect, "`, actually `").concat(actual, "`."); },
        _a[ErrorType.InvalidScalarType] = function (value, scalarType) { return "`".concat(value, "` is not a valid `").concat(scalarType, "`."); },
        _a[ErrorType.TupleOverLength] = function (valueLength, schemaLength) { return "Value has ".concat(valueLength, " elements but schema allows only ").concat(schemaLength, "."); },
        _a[ErrorType.InvalidEnumValue] = function (value) { return "`".concat(value, "` is not a valid enum member."); },
        _a[ErrorType.InvalidLiteralValue] = function (expected, actual) { return "Expected to equals `".concat(stringify(expected), "`, actually `").concat(stringify(actual), "`"); },
        _a[ErrorType.MissingRequiredProperty] = function (propName) { return "Missing required property `".concat(propName, "`."); },
        _a[ErrorType.ExcessProperty] = function (propName) { return "Excess property `".concat(propName, "` should not exists."); },
        _a[ErrorType.InvalidNumberKey] = function (key) { return "`".concat(key, "` is not a valid key, the key here should be a `number`."); },
        // Union
        _a[ErrorType.UnionTypesNotMatch] = function (value, types) { return "`".concat(stringify(value), "` is not matched to `").concat(types.join(' | '), "`"); },
        _a[ErrorType.UnionMembersNotMatch] = function (memberErrors) { return "No union member matched, detail:\n".concat(memberErrors.map(function (v, i) { return "  <".concat(i, "> ").concat(v.errMsg); }).join('\n')); },
        _a[ErrorType.CustomError] = function (errMsg) { return errMsg; },
        _a);
    /** @internal */
    function stringify(value) {
        if (typeof value === 'string') {
            var output = JSON.stringify(value);
            return "'" + output.substr(1, output.length - 2) + "'";
        }
        return JSON.stringify(value);
    }

    /** @internal */
    var ValidateResultError = /** @class */ (function () {
        function ValidateResultError(error) {
            this.isSucc = false;
            this.error = error;
        }
        Object.defineProperty(ValidateResultError.prototype, "errMsg", {
            get: function () {
                return ValidateResultError.getErrMsg(this.error);
            },
            enumerable: false,
            configurable: true
        });
        ValidateResultError.getErrMsg = function (error) {
            var _a;
            var errMsg = ErrorMsg[error.type].apply(ErrorMsg, error.params);
            if ((_a = error.inner) === null || _a === void 0 ? void 0 : _a.property.length) {
                return "Property `".concat(error.inner.property.join('.'), "`: ").concat(errMsg);
            }
            else {
                return errMsg;
            }
        };
        return ValidateResultError;
    }());
    /** @internal  */
    var ValidateResultUtil = /** @class */ (function () {
        function ValidateResultUtil() {
        }
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
        ValidateResultUtil.succ = { isSucc: true };
        return ValidateResultUtil;
    }());

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
    /**
     * TSBuffer Schema Validator
     * @public
     */
    var TSBufferValidator = /** @class */ (function () {
        function TSBufferValidator(proto, options) {
            /**
             * Default options
             */
            this.options = {
                excessPropertyChecks: true,
                strictNullChecks: false,
                cloneProto: true
            };
            if (options) {
                this.options = tslib_es6.__assign(tslib_es6.__assign({}, this.options), options);
            }
            this.proto = this.options.cloneProto ? Object.merge({}, proto) : proto;
            this.protoHelper = new ProtoHelper(this.proto);
        }
        /**
         * Validate whether the value is valid to the schema
         * @param value - Value to be validated.
         * @param schemaId - Schema or schema ID.
         * For example, the schema ID for type `Test` in `a/b.ts` may be `a/b/Test`.
         */
        TSBufferValidator.prototype.validate = function (value, schemaOrId, options) {
            var _a, _b;
            var schema;
            var schemaId;
            // Get schema
            if (typeof schemaOrId === 'string') {
                schemaId = schemaOrId;
                schema = this.proto[schemaId];
                if (!schema) {
                    throw new Error("Cannot find schema: ".concat(schemaId));
                }
            }
            else {
                schema = schemaOrId;
            }
            // Merge default options
            return this._validate(value, schema, tslib_es6.__assign(tslib_es6.__assign({}, options), { excessPropertyChecks: (_a = options === null || options === void 0 ? void 0 : options.excessPropertyChecks) !== null && _a !== void 0 ? _a : this.options.excessPropertyChecks, strictNullChecks: (_b = options === null || options === void 0 ? void 0 : options.strictNullChecks) !== null && _b !== void 0 ? _b : this.options.strictNullChecks }));
        };
        TSBufferValidator.prototype._validate = function (value, schema, options) {
            var _a;
            var vRes;
            // Validate
            switch (schema.type) {
                case tsbufferSchema.SchemaType.Boolean:
                    vRes = this._validateBooleanType(value, schema);
                    break;
                case tsbufferSchema.SchemaType.Number:
                    vRes = this._validateNumberType(value, schema);
                    break;
                case tsbufferSchema.SchemaType.String:
                    vRes = this._validateStringType(value, schema);
                    break;
                case tsbufferSchema.SchemaType.Array:
                    vRes = this._validateArrayType(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Tuple:
                    vRes = this._validateTupleType(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Enum:
                    vRes = this._validateEnumType(value, schema);
                    break;
                case tsbufferSchema.SchemaType.Any:
                    vRes = this._validateAnyType(value);
                    break;
                case tsbufferSchema.SchemaType.Literal:
                    vRes = this._validateLiteralType(value, schema, (_a = options === null || options === void 0 ? void 0 : options.strictNullChecks) !== null && _a !== void 0 ? _a : this.options.strictNullChecks);
                    break;
                case tsbufferSchema.SchemaType.Object:
                    vRes = this._validateObjectType(value, schema);
                    break;
                case tsbufferSchema.SchemaType.Interface:
                    vRes = this._validateInterfaceType(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Buffer:
                    vRes = this._validateBufferType(value, schema);
                    break;
                case tsbufferSchema.SchemaType.IndexedAccess:
                case tsbufferSchema.SchemaType.Reference:
                    vRes = this._validateReferenceType(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Union:
                    vRes = this._validateUnionType(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Intersection:
                    vRes = this._validateIntersectionType(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Pick:
                case tsbufferSchema.SchemaType.Omit:
                case tsbufferSchema.SchemaType.Partial:
                case tsbufferSchema.SchemaType.Overwrite:
                    vRes = this._validateMappedType(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Date:
                    vRes = this._validateDateType(value);
                    break;
                case tsbufferSchema.SchemaType.NonNullable:
                    vRes = this._validateNonNullableType(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Custom:
                    var res = schema.validate(value);
                    vRes = res.isSucc ? ValidateResultUtil.succ : ValidateResultUtil.error(ErrorType.CustomError, res.errMsg);
                    break;
                // 错误的type
                default:
                    throw new Error("Unsupported schema type: ".concat(schema.type));
            }
            // prune
            if (options === null || options === void 0 ? void 0 : options.prune) {
                // don't need prune, return original value
                if (options.prune.output === undefined) {
                    options.prune.output = value;
                }
                // output to parent
                if (options.prune.parent) {
                    options.prune.parent.value[options.prune.parent.key] = options.prune.output;
                }
            }
            return vRes;
        };
        /**
         * 修剪 Object，移除 Schema 中未定义的 Key
         * 需要确保 value 类型合法
         * @param value - value to be validated
         * @param schemaOrId -Schema or schema ID.
         * @returns Validate result and pruned value. if validate failed, `pruneOutput` would be undefined.
         */
        TSBufferValidator.prototype.prune = function (value, schemaOrId, options) {
            var _a;
            var schema = typeof schemaOrId === 'string' ? this.proto[schemaOrId] : schemaOrId;
            if (!schema) {
                throw new Error('Cannot find schema: ' + schemaOrId);
            }
            var prune = {};
            var vRes = this._validate(value, schema, tslib_es6.__assign(tslib_es6.__assign({}, options), { prune: prune, excessPropertyChecks: false, strictNullChecks: (_a = options === null || options === void 0 ? void 0 : options.strictNullChecks) !== null && _a !== void 0 ? _a : this.options.strictNullChecks }));
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
            // 默认为double
            var scalarType = schema.scalarType || 'double';
            // Wrong Type
            var type = this._getTypeof(value);
            var rightType = scalarType.indexOf('big') > -1 ? 'bigint' : 'number';
            if (type !== rightType) {
                return ValidateResultUtil.error(ErrorType.TypeError, rightType, type);
            }
            // scalarType类型检测
            // 整形却为小数
            if (scalarType !== 'double' && type === 'number' && !Number.isInteger(value)) {
                return ValidateResultUtil.error(ErrorType.InvalidScalarType, value, scalarType);
            }
            // 无符号整形却为负数
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
            // is Array type
            var type = this._getTypeof(value);
            if (type !== tsbufferSchema.SchemaType.Array) {
                return ValidateResultUtil.error(ErrorType.TypeError, tsbufferSchema.SchemaType.Array, type);
            }
            // prune output
            var prune = options.prune;
            if (prune) {
                prune.output = Array.from({ length: value.length });
            }
            // validate elementType
            for (var i = 0; i < value.length; ++i) {
                var elemValidateResult = this._validate(value[i], schema.elementType, tslib_es6.__assign(tslib_es6.__assign({}, options), { prune: (prune === null || prune === void 0 ? void 0 : prune.output) ? {
                        parent: {
                            value: prune.output,
                            key: i
                        }
                    } : undefined }));
                if (!elemValidateResult.isSucc) {
                    return ValidateResultUtil.innerError('' + i, value[i], schema.elementType, elemValidateResult);
                }
            }
            return ValidateResultUtil.succ;
        };
        TSBufferValidator.prototype._validateTupleType = function (value, schema, options) {
            // is Array type
            var type = this._getTypeof(value);
            if (type !== tsbufferSchema.SchemaType.Array) {
                return ValidateResultUtil.error(ErrorType.TypeError, tsbufferSchema.SchemaType.Array, type);
            }
            var prune = options.prune;
            // validate length
            // excessPropertyChecks 与 prune互斥
            if (!prune && options.excessPropertyChecks && value.length > schema.elementTypes.length) {
                return ValidateResultUtil.error(ErrorType.TupleOverLength, value.length, schema.elementTypes.length);
            }
            // prune output
            if (prune) {
                prune.output = Array.from({ length: Math.min(value.length, schema.elementTypes.length) });
            }
            // validate elementType
            for (var i = 0; i < schema.elementTypes.length; ++i) {
                // MissingRequiredProperty: NotOptional && is undefined
                if (value[i] === undefined || value[i] === null && !options.strictNullChecks) {
                    var canBeNull = this._canBeNull(schema.elementTypes[i]);
                    var canBeUndefined = schema.optionalStartIndex !== undefined && i >= schema.optionalStartIndex || this._canBeUndefined(schema.elementTypes[i]);
                    var isOptional = canBeUndefined || !options.strictNullChecks && canBeNull;
                    // skip undefined property
                    if (isOptional) {
                        // Prune null & undefined->null
                        if (prune === null || prune === void 0 ? void 0 : prune.output) {
                            if (value[i] === null && canBeNull
                                || value[i] === undefined && !canBeUndefined && canBeNull) {
                                prune.output[i] = null;
                            }
                        }
                        continue;
                    }
                    else {
                        return ValidateResultUtil.error(ErrorType.MissingRequiredProperty, i);
                    }
                }
                // element type check
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
            if (schema.type === tsbufferSchema.SchemaType.Union) {
                return schema.members.some(function (v) { return _this._canBeUndefined(v.type); });
            }
            if (schema.type === tsbufferSchema.SchemaType.Literal && schema.literal === undefined) {
                return true;
            }
            return false;
        };
        TSBufferValidator.prototype._canBeNull = function (schema) {
            var _this = this;
            if (schema.type === tsbufferSchema.SchemaType.Union) {
                return schema.members.some(function (v) { return _this._canBeNull(v.type); });
            }
            if (schema.type === tsbufferSchema.SchemaType.Literal && schema.literal === null) {
                return true;
            }
            return false;
        };
        TSBufferValidator.prototype._validateEnumType = function (value, schema) {
            // must be string or number
            var type = this._getTypeof(value);
            if (type !== 'string' && type !== 'number') {
                return ValidateResultUtil.error(ErrorType.TypeError, 'string | number', type);
            }
            // 有值与预设相同
            if (schema.members.some(function (v) { return v.value === value; })) {
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
            // 非strictNullChecks严格模式，null undefined同等对待
            if (!strictNullChecks && (schema.literal === null || schema.literal === undefined)) {
                return value === null || value === undefined ?
                    ValidateResultUtil.succ
                    : ValidateResultUtil.error(ErrorType.InvalidLiteralValue, schema.literal, value);
            }
            return value === schema.literal ?
                ValidateResultUtil.succ
                : ValidateResultUtil.error(ErrorType.InvalidLiteralValue, schema.literal, value);
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
            // 先展平
            var flatSchema = this.protoHelper.getFlatInterfaceSchema(schema);
            // From union or intersecton type
            if (options.unionProperties) {
                flatSchema = this.protoHelper.applyUnionProperties(flatSchema, options.unionProperties);
            }
            return this._validateFlatInterface(value, flatSchema, options);
        };
        TSBufferValidator.prototype._validateMappedType = function (value, schema, options) {
            var parsed = this.protoHelper.parseMappedType(schema);
            if (parsed.type === tsbufferSchema.SchemaType.Interface) {
                return this._validateInterfaceType(value, schema, options);
            }
            else if (parsed.type === tsbufferSchema.SchemaType.Union) {
                return this._validateUnionType(value, parsed, options);
            }
            else if (parsed.type === tsbufferSchema.SchemaType.Intersection) {
                return this._validateIntersectionType(value, parsed, options);
            }
            // @ts-expect-error
            throw new Error("Invalid ".concat(schema.type, " target type: ").concat(parsed.type));
        };
        TSBufferValidator.prototype._validateFlatInterface = function (value, schema, options) {
            // interfaceSignature强制了key必须是数字的情况
            if (schema.indexSignature && schema.indexSignature.keyType === tsbufferSchema.SchemaType.Number) {
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
            // Excess property check (与prune互斥)
            if (!prune && options.excessPropertyChecks && !schema.indexSignature) {
                var validProperties_1 = schema.properties.map(function (v) { return v.name; });
                var firstExcessProperty = Object.keys(value).find(function (v) { return validProperties_1.indexOf(v) === -1; });
                if (firstExcessProperty) {
                    return ValidateResultUtil.error(ErrorType.ExcessProperty, firstExcessProperty);
                }
            }
            // 校验properties
            if (schema.properties) {
                for (var _i = 0, _a = schema.properties; _i < _a.length; _i++) {
                    var property = _a[_i];
                    // MissingRequiredProperty: is undefined && !isOptional
                    if (value[property.name] === undefined || value[property.name] === null && !options.strictNullChecks) {
                        var canBeNull = this._canBeNull(property.type);
                        var canBeUndefined = property.optional || this._canBeUndefined(property.type);
                        var isOptional = canBeUndefined || !options.strictNullChecks && canBeNull;
                        // skip undefined optional property
                        if (isOptional) {
                            // Prune null & undefined->null
                            if (prune === null || prune === void 0 ? void 0 : prune.output) {
                                if (value[property.name] === null && canBeNull
                                    || value[property.name] === undefined && !canBeUndefined && canBeNull) {
                                    prune.output[property.name] = null;
                                }
                            }
                            continue;
                        }
                        else {
                            return ValidateResultUtil.error(ErrorType.MissingRequiredProperty, property.name);
                        }
                    }
                    // property本身验证
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
            // 检测indexSignature
            if (schema.indexSignature) {
                for (var key in value) {
                    // only prune is (property is pruned already)
                    // let memberPrune: ValidatePruneOptions | undefined = schema.properties.some(v => v.name === key) ? undefined : {};
                    // validate each field
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
                    throw new Error("Error TypedArray type: ".concat(schema.arrayType));
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
            // 有一成功则成功
            var isSomeSucc = false;
            var memberErrors = [];
            for (var i = 0; i < schema.members.length; ++i) {
                var member = schema.members[i];
                var memberType = this.protoHelper.isTypeReference(member.type) ? this.protoHelper.parseReference(member.type) : member.type;
                var memberPrune = prune ? {} : undefined;
                var vRes = this._validate(value, memberType, tslib_es6.__assign(tslib_es6.__assign({}, options), { prune: memberPrune }));
                if (vRes.isSucc) {
                    isSomeSucc = true;
                    // if prune object: must prune all members
                    if (isObjectPrune) {
                        prune.output = tslib_es6.__assign(tslib_es6.__assign({}, prune.output), memberPrune.output);
                    }
                    // not prune object: stop checking after 1st member matched
                    else {
                        break;
                    }
                }
                else {
                    memberErrors.push(vRes);
                }
            }
            // 有一成功则成功;
            if (isSomeSucc) {
                return ValidateResultUtil.succ;
            }
            // 全部失败，则失败
            else {
                // All member error is the same, return the first
                var msg0_1 = memberErrors[0].errMsg;
                if (memberErrors.every(function (v) { return v.errMsg === msg0_1; })) {
                    return memberErrors[0];
                }
                // mutual exclusion: return the only one
                var nonLiteralErrors = memberErrors.filter(function (v) { return v.error.type !== ErrorType.InvalidLiteralValue; });
                if (nonLiteralErrors.length === 1) {
                    return nonLiteralErrors[0];
                }
                // All member error without inner: show simple msg
                if (memberErrors.every(function (v) { return !v.error.inner && (v.error.type === ErrorType.TypeError || v.error.type === ErrorType.InvalidLiteralValue); })) {
                    var valueType = this._getTypeof(value);
                    var expectedTypes = memberErrors.map(function (v) { return v.error.type === ErrorType.TypeError ? v.error.params[0] : _this._getTypeof(v.error.params[0]); }).distinct();
                    // Expected type A|B|C, actually type D
                    if (expectedTypes.indexOf(valueType) === -1) {
                        return ValidateResultUtil.error(ErrorType.TypeError, expectedTypes.join(' | '), this._getTypeof(value));
                    }
                    // `'D'` is not matched to `'A'|'B'|'C'`
                    if (valueType !== 'Object' && valueType !== tsbufferSchema.SchemaType.Array) {
                        var types = memberErrors.map(function (v) { return v.error.type === ErrorType.TypeError ? v.error.params[0] : stringify(v.error.params[0]); }).distinct();
                        return ValidateResultUtil.error(ErrorType.UnionTypesNotMatch, value, types);
                    }
                }
                // other errors
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
            // 有一失败则失败
            for (var i = 0, len = schema.members.length; i < len; ++i) {
                // 验证member
                var memberType = schema.members[i].type;
                memberType = this.protoHelper.isTypeReference(memberType) ? this.protoHelper.parseReference(memberType) : memberType;
                var memberPrune = prune ? {} : undefined;
                var vRes = this._validate(value, memberType, tslib_es6.__assign(tslib_es6.__assign({}, options), { prune: memberPrune }));
                // 有一失败则失败
                if (!vRes.isSucc) {
                    return vRes;
                }
                if (isObjectPrune) {
                    prune.output = tslib_es6.__assign(tslib_es6.__assign({}, prune.output), memberPrune.output);
                }
            }
            // 全成功则成功
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
            return !(isNaN(int) || ('' + int) !== key);
        };
        TSBufferValidator.prototype._getTypeof = function (value) {
            var type = typeof value;
            if (type === 'object') {
                if (value === null) {
                    return 'null';
                }
                else if (Array.isArray(value)) {
                    return tsbufferSchema.SchemaType.Array;
                }
                else {
                    return 'Object';
                }
            }
            return type;
        };
        return TSBufferValidator;
    }());

    exports.ProtoHelper = ProtoHelper;
    exports.TSBufferValidator = TSBufferValidator;
    });

    var index$3 = unwrapExports(tsbufferValidator);
    var tsbufferValidator_1 = tsbufferValidator.ProtoHelper;
    var tsbufferValidator_2 = tsbufferValidator.TSBufferValidator;

    var tsbuffer = createCommonjsModule(function (module, exports) {
    /*!
     * TSBuffer v2.2.3
     * -----------------------------------------
     * MIT LICENSE
     * KingWorks (C) Copyright 2022
     * https://github.com/k8w/tsbuffer
     */
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });






    var Base64Util = /** @class */ (function () {
        function Base64Util() {
        }
        Base64Util.bufferToBase64 = function (buf) {
            if (typeof Buffer !== 'undefined') {
                return Buffer.from(buf).toString('base64');
            }
            var base64 = '';
            var len = buf.length;
            for (var i = 0; i < len; i += 3) {
                base64 += base64Chars[buf[i] >> 2];
                base64 += base64Chars[((buf[i] & 3) << 4) | (buf[i + 1] >> 4)];
                base64 += base64Chars[((buf[i + 1] & 15) << 2) | (buf[i + 2] >> 6)];
                base64 += base64Chars[buf[i + 2] & 63];
            }
            if (len % 3 === 2) {
                base64 = base64.substring(0, base64.length - 1) + '=';
            }
            else if (len % 3 === 1) {
                base64 = base64.substring(0, base64.length - 2) + '==';
            }
            return base64;
        };
        Base64Util.base64ToBuffer = function (base64) {
            if (typeof Buffer !== 'undefined') {
                return new Uint8Array(Buffer.from(base64, 'base64'));
            }
            var bufferLength = base64.length * 0.75, len = base64.length, p = 0;
            var encoded1, encoded2, encoded3, encoded4;
            if (base64[base64.length - 1] === '=') {
                bufferLength--;
                if (base64[base64.length - 2] === '=') {
                    bufferLength--;
                }
            }
            var buf = new Uint8Array(bufferLength);
            for (var i = 0; i < len; i += 4) {
                encoded1 = lookup[base64.charCodeAt(i)];
                encoded2 = lookup[base64.charCodeAt(i + 1)];
                encoded3 = lookup[base64.charCodeAt(i + 2)];
                encoded4 = lookup[base64.charCodeAt(i + 3)];
                buf[p++] = (encoded1 << 2) | (encoded2 >> 4);
                buf[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                buf[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
            }
            return buf;
        };
        return Base64Util;
    }());
    /*base64*/
    var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i = 0; i < base64Chars.length; i++) {
        lookup[base64Chars.charCodeAt(i)] = i;
    }
    /*end*/

    var CoderUtil = /** @class */ (function () {
        function CoderUtil() {
        }
        CoderUtil.isJsonCompatible = function (schema, type, protoHelper) {
            var _this = this;
            var schemaInfo = schema;
            var key = type === 'encode' ? 'isJsonEncodable' : 'isJsonDecodable';
            if (schemaInfo[key] === undefined) {
                switch (schema.type) {
                    case tsbufferSchema.SchemaType.Array:
                        schemaInfo[key] = this.isJsonCompatible(schema.elementType, type, protoHelper);
                        break;
                    case tsbufferSchema.SchemaType.Tuple:
                        schemaInfo[key] = schema.elementTypes.every(function (v) { return _this.isJsonCompatible(v, type, protoHelper); });
                        break;
                    case tsbufferSchema.SchemaType.Interface:
                        var flatSchema = protoHelper.getFlatInterfaceSchema(schema);
                        schemaInfo[key] = flatSchema.properties.every(function (v) { return _this.isJsonCompatible(v.type, type, protoHelper); });
                        if (flatSchema.indexSignature) {
                            schemaInfo[key] = schemaInfo[key] && this.isJsonCompatible(flatSchema.indexSignature.type, type, protoHelper);
                        }
                        break;
                    case tsbufferSchema.SchemaType.IndexedAccess:
                    case tsbufferSchema.SchemaType.Reference: {
                        var parsed = protoHelper.parseReference(schema);
                        schemaInfo[key] = this.isJsonCompatible(parsed, type, protoHelper);
                        break;
                    }
                    case tsbufferSchema.SchemaType.Union:
                    case tsbufferSchema.SchemaType.Intersection:
                        schemaInfo[key] = schema.members.every(function (v) { return _this.isJsonCompatible(v.type, type, protoHelper); });
                        break;
                    case tsbufferSchema.SchemaType.NonNullable:
                        schemaInfo[key] = this.isJsonCompatible(schema.target, type, protoHelper);
                        break;
                    case tsbufferSchema.SchemaType.Pick:
                    case tsbufferSchema.SchemaType.Partial:
                    case tsbufferSchema.SchemaType.Omit:
                    case tsbufferSchema.SchemaType.Overwrite: {
                        var parsed = protoHelper.parseMappedType(schema);
                        schemaInfo[key] = this.isJsonCompatible(parsed, type, protoHelper);
                        break;
                    }
                    case tsbufferSchema.SchemaType.Custom:
                    case tsbufferSchema.SchemaType.Date:
                    case tsbufferSchema.SchemaType.Buffer:
                        schemaInfo[key] = false;
                        break;
                    default:
                        schemaInfo[key] = true;
                        break;
                }
            }
            return schemaInfo[key];
        };
        return CoderUtil;
    }());

    /** @internal */
    var IdBlockUtil = /** @class */ (function () {
        function IdBlockUtil() {
        }
        IdBlockUtil.getPayloadLengthInfo = function (parsedSchema, protoHelper) {
            switch (parsedSchema.type) {
                case tsbufferSchema.SchemaType.Boolean:
                case tsbufferSchema.SchemaType.Enum:
                    return { lengthType: LengthType.Varint };
                case tsbufferSchema.SchemaType.Number:
                    if (!parsedSchema.scalarType || parsedSchema.scalarType.includes('64') || parsedSchema.scalarType === 'double') {
                        return { lengthType: LengthType.Bit64 };
                    }
                    else if (parsedSchema.scalarType && parsedSchema.scalarType.startsWith('big')) {
                        return { lengthType: LengthType.LengthDelimited };
                    }
                    else {
                        return { lengthType: LengthType.Varint };
                    }
                case tsbufferSchema.SchemaType.Buffer:
                case tsbufferSchema.SchemaType.String:
                case tsbufferSchema.SchemaType.Any:
                case tsbufferSchema.SchemaType.Object:
                    return { lengthType: LengthType.LengthDelimited };
                case tsbufferSchema.SchemaType.Interface:
                case tsbufferSchema.SchemaType.Pick:
                case tsbufferSchema.SchemaType.Partial:
                case tsbufferSchema.SchemaType.Omit:
                case tsbufferSchema.SchemaType.Union:
                case tsbufferSchema.SchemaType.Intersection:
                    return { lengthType: LengthType.IdBlock };
                case tsbufferSchema.SchemaType.Array:
                case tsbufferSchema.SchemaType.Overwrite:
                case tsbufferSchema.SchemaType.Tuple:
                    return {
                        lengthType: LengthType.LengthDelimited,
                        needLengthPrefix: true
                    };
                case tsbufferSchema.SchemaType.Literal:
                    return {
                        lengthType: LengthType.LengthDelimited,
                        needLengthPrefix: false
                    };
                case tsbufferSchema.SchemaType.Date:
                    return { lengthType: LengthType.Varint };
                case tsbufferSchema.SchemaType.NonNullable:
                    return this.getPayloadLengthInfo(protoHelper.parseReference(parsedSchema.target), protoHelper);
                case tsbufferSchema.SchemaType.Custom:
                    return { lengthType: LengthType.LengthDelimited };
                default:
                    // @ts-expect-error
                    throw new Error("Unrecognized schema type: ".concat(parsedSchema.type));
            }
        };
        return IdBlockUtil;
    }());
    /** @internal */
    var LengthType;
    (function (LengthType) {
        LengthType[LengthType["LengthDelimited"] = 0] = "LengthDelimited";
        LengthType[LengthType["Varint"] = 1] = "Varint";
        LengthType[LengthType["Bit64"] = 2] = "Bit64";
        LengthType[LengthType["IdBlock"] = 3] = "IdBlock";
    })(LengthType || (LengthType = {}));

    /** @internal */
    var SchemaUtil = /** @class */ (function () {
        function SchemaUtil() {
        }
        /** type类型是否能编码为该literal */
        SchemaUtil.canBeLiteral = function (schema, literal) {
            var _this = this;
            if (schema.type === tsbufferSchema.SchemaType.Union) {
                return schema.members.some(function (v) { return _this.canBeLiteral(v.type, literal); });
            }
            if (schema.type === tsbufferSchema.SchemaType.Any) {
                return true;
            }
            if (schema.type === tsbufferSchema.SchemaType.Literal && schema.literal === literal) {
                return true;
            }
            return false;
        };
        return SchemaUtil;
    }());

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

    /**!
     * From [protobuf.js](https://github.com/protobufjs/protobuf.js/blob/master/lib/utf8/index.js)
     */
    var Utf8CoderJS = {
        measureLength: function (str) {
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
        write: function (str, buf, pos) {
            var start = pos, c1, // character 1
            c2; // character 2
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
        read: function (buf, pos, length) {
            if (length < 1) {
                return "";
            }
            var str = "";
            for (var i = pos, end = pos + length; i < end;) {
                var t = buf[i++];
                if (t <= 0x7F) {
                    str += String.fromCharCode(t);
                }
                else if (t >= 0xC0 && t < 0xE0) {
                    str += String.fromCharCode((t & 0x1F) << 6 | buf[i++] & 0x3F);
                }
                else if (t >= 0xE0 && t < 0xF0) {
                    str += String.fromCharCode((t & 0xF) << 12 | (buf[i++] & 0x3F) << 6 | buf[i++] & 0x3F);
                }
                else if (t >= 0xF0) {
                    var t2 = ((t & 7) << 18 | (buf[i++] & 0x3F) << 12 | (buf[i++] & 0x3F) << 6 | buf[i++] & 0x3F) - 0x10000;
                    str += String.fromCharCode(0xD800 + (t2 >> 10));
                    str += String.fromCharCode(0xDC00 + (t2 & 0x3FF));
                }
            }
            return str;
        }
    };
    var Utf8CoderNode = {
        measureLength: function (str) { return Buffer.byteLength(str, 'utf-8'); },
        write: function (str, buf, pos) { return Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength).write(str, pos, 'utf-8'); },
        read: function (buf, pos, length) { return Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength).toString('utf-8', pos, pos + length); }
    };
    /**
     * 自动判断环境，选择使用NodeJS Native方法编码或是JS编码
     */
    var Utf8Coder = typeof Buffer !== 'undefined' && Buffer.from && Buffer.prototype.write ? Utf8CoderNode : Utf8CoderJS;

    /** @internal */
    var Varint64 = /** @class */ (function () {
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
            get: function () {
                if (this._byteLength === undefined) {
                    var part0 = this.uint32s[1], part1 = (this.uint32s[1] >>> 28 | this.uint32s[0] << 4) >>> 0, part2 = this.uint32s[0] >>> 24;
                    this._byteLength = part2 === 0
                        ? part1 === 0
                            ? part0 < 16384
                                ? part0 < 128 ? 1 : 2
                                : part0 < 2097152 ? 3 : 4
                            : part1 < 16384
                                ? part1 < 128 ? 5 : 6
                                : part1 < 2097152 ? 7 : 8
                        : part2 < 128 ? 9 : 10;
                }
                return this._byteLength;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 编码
         * @param buf
         * @param pos
         * @returns 编码后最新的pos
         */
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
            if (buf.byteLength - pos > 4) { // fast route (lo)
                for (; i < 4; ++i) {
                    // 1st..4th
                    lo = (lo | (buf[pos] & 127) << i * 7) >>> 0;
                    if (buf[pos++] < 128)
                        return new Varint64(hi, lo, pos - startPos);
                }
                // 5th
                lo = (lo | (buf[pos] & 127) << 28) >>> 0;
                hi = (hi | (buf[pos] & 127) >> 4) >>> 0;
                if (buf[pos++] < 128)
                    return new Varint64(hi, lo, pos - startPos);
                i = 0;
            }
            else {
                for (; i < 3; ++i) {
                    /* istanbul ignore if */
                    if (pos >= buf.byteLength)
                        throw new Error('Read varint error: index out of range');
                    // 1st..3th
                    lo = (lo | (buf[pos] & 127) << i * 7) >>> 0;
                    if (buf[pos++] < 128)
                        return new Varint64(hi, lo, pos - startPos);
                }
                // 4th
                lo = (lo | (buf[pos++] & 127) << i * 7) >>> 0;
                return new Varint64(hi, lo, pos - startPos);
            }
            if (buf.byteLength - pos > 4) { // fast route (hi)
                for (; i < 5; ++i) {
                    // 6th..10th
                    hi = (hi | (buf[pos] & 127) << i * 7 + 3) >>> 0;
                    if (buf[pos++] < 128)
                        return new Varint64(hi, lo, pos - startPos);
                }
            }
            else {
                for (; i < 5; ++i) {
                    /* istanbul ignore if */
                    if (pos >= buf.byteLength)
                        throw new Error('Read varint error: index out of range');
                    // 6th..10th
                    hi = (hi | (buf[pos] & 127) << i * 7 + 3) >>> 0;
                    if (buf[pos++] < 128)
                        return new Varint64(hi, lo, pos - startPos);
                }
            }
            /* istanbul ignore next */
            throw Error("invalid varint encoding");
        };
        Varint64.Zero = new Varint64(0, 0);
        return Varint64;
    }());

    var BufferReader = /** @class */ (function () {
        function BufferReader() {
            this._pos = 0;
        }
        BufferReader.prototype.load = function (buf, pos) {
            if (pos === void 0) { pos = 0; }
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
                throw new Error("Invalid boolean encoding [".concat(value, "] at pos ").concat(this._pos - 1));
            }
        };
        Object.defineProperty(BufferReader.prototype, "unreadByteLength", {
            get: function () {
                return this._buf.byteLength - this._pos;
            },
            enumerable: false,
            configurable: true
        });
        BufferReader.prototype.dispose = function () {
            this._buf = this._view = undefined;
        };
        return BufferReader;
    }());

    /** @internal */
    var Decoder = /** @class */ (function () {
        function Decoder(options) {
            this._options = options;
            this._reader = new BufferReader();
            this._validator = options.validator;
        }
        Decoder.prototype.decode = function (buffer, schema) {
            this._reader.load(buffer);
            return this._read(schema);
        };
        Decoder.prototype.decodeJSON = function (json, schema) {
            var _this = this;
            if (json === null || CoderUtil.isJsonCompatible(schema, 'decode', this._validator.protoHelper)) {
                return json;
            }
            // 递归 只处理 ArrayBuffer、Date、ObjectId
            switch (schema.type) {
                case tsbufferSchema.SchemaType.Array:
                    if (!Array.isArray(json)) {
                        break;
                    }
                    return json.map(function (v) { return _this.decodeJSON(v, schema.elementType); });
                case tsbufferSchema.SchemaType.Tuple:
                    if (!Array.isArray(json)) {
                        break;
                    }
                    return json.map(function (v, i) { return _this.decodeJSON(v, schema.elementTypes[i]); });
                case tsbufferSchema.SchemaType.Interface:
                    if (json.constructor !== Object) {
                        break;
                    }
                    json = Object.assign({}, json);
                    var flatSchema = this._validator.protoHelper.getFlatInterfaceSchema(schema);
                    var _loop_1 = function (key) {
                        var property = flatSchema.properties.find(function (v) { return v.name === key; });
                        if (property) {
                            json[key] = this_1.decodeJSON(json[key], property.type);
                        }
                        else if (flatSchema.indexSignature) {
                            json[key] = this_1.decodeJSON(json[key], flatSchema.indexSignature.type);
                        }
                    };
                    var this_1 = this;
                    for (var key in json) {
                        _loop_1(key);
                    }
                    return json;
                case tsbufferSchema.SchemaType.Date:
                    if (typeof json !== 'string' && typeof json !== 'number') {
                        break;
                    }
                    return new Date(json);
                case tsbufferSchema.SchemaType.Partial:
                case tsbufferSchema.SchemaType.Pick:
                case tsbufferSchema.SchemaType.Omit:
                case tsbufferSchema.SchemaType.Overwrite:
                    var parsed = this._validator.protoHelper.parseMappedType(schema);
                    return this.decodeJSON(json, parsed);
                case tsbufferSchema.SchemaType.Buffer:
                    if (typeof json !== 'string') {
                        break;
                    }
                    var uint8Arr = Base64Util.base64ToBuffer(json);
                    return this._getBufferValue(uint8Arr, schema);
                case tsbufferSchema.SchemaType.IndexedAccess:
                case tsbufferSchema.SchemaType.Reference:
                case tsbufferSchema.SchemaType.Keyof:
                    return this.decodeJSON(json, this._validator.protoHelper.parseReference(schema));
                case tsbufferSchema.SchemaType.Union:
                case tsbufferSchema.SchemaType.Intersection: {
                    // 逐个编码 然后合并 （失败的会原值返回，所以不影响结果）
                    for (var _i = 0, _a = schema.members; _i < _a.length; _i++) {
                        var member = _a[_i];
                        json = this.decodeJSON(json, member.type);
                    }
                    return json;
                }
                case tsbufferSchema.SchemaType.NonNullable:
                    return this.decodeJSON(json, schema.target);
                case tsbufferSchema.SchemaType.Custom:
                    if (schema.decodeJSON) {
                        return schema.decodeJSON(json);
                    }
                    break;
                default:
                    schema.type;
            }
            return json;
        };
        Decoder.prototype._read = function (schema) {
            switch (schema.type) {
                case tsbufferSchema.SchemaType.Boolean:
                    return this._reader.readBoolean();
                case tsbufferSchema.SchemaType.Number:
                    return this._readNumber(schema);
                case tsbufferSchema.SchemaType.String:
                    return this._reader.readString();
                case tsbufferSchema.SchemaType.Array: {
                    var output = [];
                    // 数组长度：Varint
                    var length_1 = this._reader.readUint();
                    for (var i = 0; i < length_1; ++i) {
                        var item = this._read(schema.elementType);
                        output.push(item);
                    }
                    return output;
                }
                case tsbufferSchema.SchemaType.Tuple: {
                    if (schema.elementTypes.length > 64) {
                        throw new Error('Elements oversized, maximum supported tuple elements is 64, now get ' + schema.elementTypes.length);
                    }
                    var output = [];
                    // PayloadMask: Varint64
                    var payloadMask = this._reader.readVarint();
                    // 计算maskIndices
                    var maskIndices = [];
                    // Low
                    for (var i = 0; i < 32; ++i) {
                        if (payloadMask.uint32s[1] & 1 << i) {
                            maskIndices.push(i);
                        }
                    }
                    // High
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
                    // undefined as null
                    for (var i = 0; i < schema.elementTypes.length; ++i) {
                        if (this._undefinedAsNull(output[i], schema.elementTypes[i], schema.optionalStartIndex !== undefined && i >= schema.optionalStartIndex)) {
                            output[i] = null;
                        }
                    }
                    return output;
                }
                case tsbufferSchema.SchemaType.Enum:
                    var enumId_1 = this._reader.readVarint().toNumber();
                    var enumItem = schema.members.find(function (v) { return v.id === enumId_1; });
                    if (!enumItem) {
                        throw new Error("Invalid enum encoding: unexpected id ".concat(enumId_1));
                    }
                    return enumItem.value;
                case tsbufferSchema.SchemaType.Any:
                case tsbufferSchema.SchemaType.Object:
                    var jsonStr = this._reader.readString();
                    if (jsonStr === 'undefined') {
                        return undefined;
                    }
                    return JSON.parse(jsonStr);
                case tsbufferSchema.SchemaType.Literal:
                    return schema.literal;
                case tsbufferSchema.SchemaType.Interface:
                    return this._readInterface(schema);
                case tsbufferSchema.SchemaType.Buffer:
                    var uint8Arr = this._reader.readBuffer();
                    return this._getBufferValue(uint8Arr, schema);
                case tsbufferSchema.SchemaType.IndexedAccess:
                case tsbufferSchema.SchemaType.Reference:
                case tsbufferSchema.SchemaType.Keyof:
                    return this._read(this._validator.protoHelper.parseReference(schema));
                case tsbufferSchema.SchemaType.Partial:
                case tsbufferSchema.SchemaType.Pick:
                case tsbufferSchema.SchemaType.Omit:
                case tsbufferSchema.SchemaType.Overwrite:
                    var parsed = this._validator.protoHelper.parseMappedType(schema);
                    if (parsed.type === tsbufferSchema.SchemaType.Interface) {
                        return this._readPureMappedType(schema);
                    }
                    else {
                        return this._readUnionOrIntersection(parsed);
                    }
                case tsbufferSchema.SchemaType.Union:
                case tsbufferSchema.SchemaType.Intersection:
                    return this._readUnionOrIntersection(schema);
                case tsbufferSchema.SchemaType.Date:
                    return new Date(this._reader.readUint());
                case tsbufferSchema.SchemaType.NonNullable:
                    return this._read(schema.target);
                case tsbufferSchema.SchemaType.Custom:
                    if (!schema.decode) {
                        throw new Error('Missing decode method for CustomTypeSchema');
                    }
                    var buf = this._reader.readBuffer();
                    return schema.decode(buf);
                default:
                    // @ts-expect-error
                    throw new Error("Unrecognized schema type: ".concat(schema.type));
            }
        };
        /**
         * PureMappedType 每一层的target 都是MappedType或Interface（最终层）
         */
        Decoder.prototype._readPureMappedType = function (schema) {
            var output;
            var overwrite;
            if (schema.type === 'Overwrite') {
                // Overwrite Block
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
            // filter key
            if (schema.type === 'Pick') {
                // 把Pick以外的剔除
                for (var key in output) {
                    if (schema.keys.indexOf(key) === -1) {
                        delete output[key];
                    }
                }
            }
            else if (schema.type === 'Omit') {
                // 剔除Omit
                for (var key in output) {
                    if (schema.keys.indexOf(key) > -1) {
                        delete output[key];
                    }
                }
            }
            else if (schema.type === 'Overwrite') {
                Object.assign(output, overwrite);
            }
            // Partial 原样返回
            return output;
        };
        Decoder.prototype._readNumber = function (schema) {
            // 默认为double
            var scalarType = schema.scalarType || 'double';
            switch (scalarType) {
                // 定长编码
                case 'double':
                    return this._reader.readDouble();
                // Varint编码
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
            // BlockID数量
            var blockIdNum = this._reader.readUint();
            var _loop_2 = function (i) {
                // ReadBlock
                var readBlockId = this_2._reader.readUint();
                var lengthType = readBlockId & 3;
                var blockId = readBlockId >> 2;
                // indexSignature
                if (blockId === 0) {
                    if (flatSchema.indexSignature) {
                        var type = flatSchema.indexSignature.type;
                        var fieldName = this_2._reader.readString();
                        this_2._skipIdLengthPrefix(this_2._validator.protoHelper.parseReference(type));
                        output[fieldName] = this_2._read(type);
                    }
                    // indexSignature未定义，可能是新协议，此处兼容，根据lengthType跳过
                    else {
                        // skip fieldName
                        this_2._reader.skipByLengthType(LengthType.LengthDelimited);
                        // skipPayload
                        this_2._reader.skipByLengthType(lengthType);
                    }
                }
                // extend block
                else if (blockId <= 9) {
                    var extendId_1 = blockId - 1;
                    var extend = schema.extends && schema.extends.find(function (v) { return v.id === extendId_1; });
                    if (extend) {
                        this_2._skipIdLengthPrefix(this_2._validator.protoHelper.parseReference(extend.type));
                        var extendValue = this_2._read(extend.type);
                        Object.assign(output, extendValue);
                    }
                    // 未知的extendId 可能是新协议 跳过
                    else {
                        // skipPayload
                        this_2._reader.skipByLengthType(lengthType);
                    }
                }
                // property
                else {
                    var propertyId_1 = blockId - 10;
                    var property = schema.properties && schema.properties.find(function (v) { return v.id === propertyId_1; });
                    if (property) {
                        this_2._skipIdLengthPrefix(this_2._validator.protoHelper.parseReference(property.type));
                        output[property.name] = this_2._read(property.type);
                    }
                    // 未知的PropertyID 可能是新协议 跳过
                    else {
                        // skipPayload
                        this_2._reader.skipByLengthType(lengthType);
                    }
                }
            };
            var this_2 = this;
            for (var i = 0; i < blockIdNum; ++i) {
                _loop_2();
            }
            // Literal property 由于不编码 将其补回
            // undefined as null
            for (var _i = 0, _a = flatSchema.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (output.hasOwnProperty(property.name)) {
                    continue;
                }
                // Literal
                var parsedType = this._validator.protoHelper.parseReference(property.type);
                if (parsedType.type === 'Literal') {
                    output[property.name] = parsedType.literal;
                    continue;
                }
                // undefined as null
                if (this._undefinedAsNull(output[property.name], parsedType, property.optional)) {
                    output[property.name] = null;
                    continue;
                }
            }
            return output;
        };
        /** @internal 是否该null值小于当做undefined编码 */
        Decoder.prototype._undefinedAsNull = function (value, type, isOptional) {
            return value === undefined
                && this._options.undefinedAsNull
                && !SchemaUtil.canBeLiteral(type, undefined) && !isOptional
                && SchemaUtil.canBeLiteral(type, null);
        };
        Decoder.prototype._skipIdLengthPrefix = function (parsedSchema) {
            var lengthInfo = IdBlockUtil.getPayloadLengthInfo(parsedSchema, this._validator.protoHelper);
            if (lengthInfo.needLengthPrefix) {
                // skip length prefix
                this._reader.skipByLengthType(LengthType.Varint);
            }
        };
        Decoder.prototype._readUnionOrIntersection = function (schema) {
            var output;
            var idNum = this._reader.readUint();
            var _loop_3 = function (i) {
                var readId = this_3._reader.readUint();
                var lengthType = readId & 3;
                var id = readId >> 2;
                var member = schema.members.find(function (v) { return v.id === id; });
                // 不可识别的Member，可能是新协议，跳过使兼容
                if (!member) {
                    this_3._reader.skipByLengthType(lengthType);
                    return "continue";
                }
                this_3._skipIdLengthPrefix(this_3._validator.protoHelper.parseReference(member.type));
                var value = this_3._read(member.type);
                if (this_3._isObject(output) && this_3._isObject(value)) {
                    Object.assign(output, value);
                }
                else {
                    output = value;
                }
            };
            var this_3 = this;
            for (var i = 0; i < idNum; ++i) {
                _loop_3();
            }
            if (this._undefinedAsNull(output, schema)) {
                output = null;
            }
            return output;
        };
        Decoder.prototype._isObject = function (value) {
            return typeof (value) === 'object' && value !== null;
        };
        Decoder.prototype._getBufferValue = function (uint8Arr, schema) {
            if (schema.arrayType) {
                if (schema.arrayType === 'BigInt64Array' || schema.arrayType === 'BigUint64Array') {
                    throw new Error('Unsupported arrayType: ' + schema.arrayType);
                }
                // Uint8Array 性能最高
                else if (schema.arrayType === 'Uint8Array') {
                    return uint8Arr;
                }
                // 其余TypedArray 可能需要内存拷贝 性能次之
                else {
                    var typedArr = TypedArrays[schema.arrayType];
                    // 字节对齐，可以直接转，无需拷贝内存
                    if (uint8Arr.byteOffset % typedArr.BYTES_PER_ELEMENT === 0) {
                        return new typedArr(uint8Arr.buffer, uint8Arr.byteOffset, uint8Arr.byteLength / typedArr.BYTES_PER_ELEMENT);
                    }
                    // 字节不对齐，不能直接转，只能拷贝内存后再生成
                    else {
                        var arrBuf = uint8Arr.buffer.slice(uint8Arr.byteOffset, uint8Arr.byteOffset + uint8Arr.byteLength);
                        return new typedArr(arrBuf);
                    }
                }
            }
            else {
                return uint8Arr.byteLength === uint8Arr.buffer.byteLength && uint8Arr.byteOffset === 0 ? uint8Arr.buffer
                    : uint8Arr.buffer.slice(uint8Arr.byteOffset, uint8Arr.byteOffset + uint8Arr.byteLength);
            }
        };
        return Decoder;
    }());

    /** @internal */
    var Config = {
        interface: {
            maxExtendsNum: 9
        }
    };

    /**
     * 用Op来串联 next
     * Op包含 function next length
     * 先度量长度再执行编码
     * 一次性编码
     * 使用BufferPool
     * writer.uint32(xx).string(xxx).finish();
     * @internal
     */
    var BufferWriter = /** @class */ (function () {
        function BufferWriter() {
            this._ops = [];
        }
        Object.defineProperty(BufferWriter.prototype, "ops", {
            get: function () {
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
                // Length
                this.push({ type: 'varint', value: Varint64.from(valueLength) });
                // Value
                return tslib_es6.__assign(tslib_es6.__assign({}, req), { length: valueLength });
            }
            else {
                var length_1 = this.measureLength(req);
                return tslib_es6.__assign(tslib_es6.__assign({}, req), { length: length_1 });
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
            var byteLength = this._ops.sum(function (v) { return v.length; });
            var pos = 0;
            var buf = new Uint8Array(byteLength);
            var view = new DataView(buf.buffer);
            for (var _i = 0, _a = this._ops; _i < _a.length; _i++) {
                var op = _a[_i];
                switch (op.type) {
                    case 'varint':
                        var newPos = op.value.writeToBuffer(buf, pos);
                        if (newPos !== pos + op.length) {
                            throw new Error("Error varint measuredLength ".concat(op.length, ", actual is ").concat(newPos - pos, ", value is ").concat(op.value.toNumber()));
                        }
                        break;
                    case 'double':
                        view.setFloat64(buf.byteOffset + pos, op.value);
                        break;
                    case 'string':
                        var encLen = Utf8Coder.write(op.value, buf, pos);
                        if (encLen !== op.length) {
                            throw new Error("Expect ".concat(op.length, " bytes but encoded ").concat(encLen, " bytes"));
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
    }());

    /** @internal */
    var Encoder = /** @class */ (function () {
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
        Encoder.prototype.encodeJSON = function (value, schema) {
            var _this = this;
            // JSON 能直接传输的类型，直接跳过
            if (typeof value !== 'object' || value === null || CoderUtil.isJsonCompatible(schema, 'encode', this._validator.protoHelper)) {
                return value;
            }
            switch (schema.type) {
                case tsbufferSchema.SchemaType.Array:
                    if (!Array.isArray(value)) {
                        break;
                    }
                    return value.map(function (v) { return _this.encodeJSON(v, schema.elementType); });
                case tsbufferSchema.SchemaType.Tuple: {
                    if (!Array.isArray(value)) {
                        break;
                    }
                    return value.map(function (v, i) { return _this.encodeJSON(v, schema.elementTypes[i]); });
                }
                case tsbufferSchema.SchemaType.Interface: {
                    if (value.constructor !== Object) {
                        break;
                    }
                    value = Object.assign({}, value);
                    var flatSchema = this._validator.protoHelper.getFlatInterfaceSchema(schema);
                    var _loop_1 = function (key) {
                        var property = flatSchema.properties.find(function (v) { return v.name === key; });
                        if (property) {
                            value[key] = this_1.encodeJSON(value[key], property.type);
                        }
                        else if (flatSchema.indexSignature) {
                            value[key] = this_1.encodeJSON(value[key], flatSchema.indexSignature.type);
                        }
                    };
                    var this_1 = this;
                    for (var key in value) {
                        _loop_1(key);
                    }
                    return value;
                }
                case tsbufferSchema.SchemaType.Partial:
                case tsbufferSchema.SchemaType.Pick:
                case tsbufferSchema.SchemaType.Omit:
                case tsbufferSchema.SchemaType.Overwrite:
                    var parsed = this._validator.protoHelper.parseMappedType(schema);
                    return this.encodeJSON(value, parsed);
                case tsbufferSchema.SchemaType.Buffer:
                    if (!(value instanceof ArrayBuffer) && !ArrayBuffer.isView(value)) {
                        break;
                    }
                    if (schema.arrayType) {
                        if (schema.arrayType === 'Uint8Array') {
                            return Base64Util.bufferToBase64(value);
                        }
                        var view = value;
                        var buf = view.byteLength === view.buffer.byteLength && view.byteOffset === 0 ? view.buffer
                            : view.buffer.slice(view.byteOffset, view.byteOffset + view.byteLength);
                        return Base64Util.bufferToBase64(new Uint8Array(buf));
                    }
                    else {
                        return Base64Util.bufferToBase64(new Uint8Array(value));
                    }
                case tsbufferSchema.SchemaType.IndexedAccess:
                case tsbufferSchema.SchemaType.Reference:
                case tsbufferSchema.SchemaType.Keyof:
                    return this.encodeJSON(value, this._validator.protoHelper.parseReference(schema));
                case tsbufferSchema.SchemaType.Union:
                case tsbufferSchema.SchemaType.Intersection: {
                    // 逐个编码 然后合并 （失败的会原值返回，所以不影响结果）
                    for (var _i = 0, _a = schema.members; _i < _a.length; _i++) {
                        var member = _a[_i];
                        value = this.encodeJSON(value, member.type);
                    }
                    return value;
                }
                case tsbufferSchema.SchemaType.NonNullable:
                    return this.encodeJSON(value, schema.target);
                case tsbufferSchema.SchemaType.Date:
                    if (!(value instanceof Date)) {
                        break;
                    }
                    return value.toJSON();
                case tsbufferSchema.SchemaType.Custom:
                    if (schema.encodeJSON) {
                        return schema.encodeJSON(value);
                    }
                    else if (typeof (value === null || value === void 0 ? void 0 : value.toJSON) === 'function') {
                        return value.toJSON();
                    }
                    else if (typeof (value === null || value === void 0 ? void 0 : value.toString) === 'function') {
                        return value.toString();
                    }
                    return value;
                default:
                    schema.type;
            }
            return value;
        };
        Encoder.prototype._write = function (value, schema, options) {
            switch (schema.type) {
                case tsbufferSchema.SchemaType.Boolean:
                    this._writer.push({ type: 'boolean', value: value });
                    break;
                case tsbufferSchema.SchemaType.Number:
                    this._writeNumber(value, schema);
                    break;
                case tsbufferSchema.SchemaType.String:
                    this._writer.push({ type: 'string', value: value });
                    break;
                case tsbufferSchema.SchemaType.Array: {
                    var _v = value;
                    // 数组长度：Varint
                    this._writer.push({ type: 'varint', value: Varint64.from(_v.length) });
                    // Element Payload
                    for (var i = 0; i < _v.length; ++i) {
                        this._write(_v[i], schema.elementType);
                    }
                    break;
                }
                case tsbufferSchema.SchemaType.Tuple: {
                    if (schema.elementTypes.length > 64) {
                        throw new Error('Elements oversized, maximum supported tuple elements is 64, now get ' + schema.elementTypes.length);
                    }
                    var _v = value;
                    // 计算maskPos（要编码的值的index）
                    var maskIndices = [];
                    for (var i = 0; i < _v.length; ++i) {
                        // undefined 不编码
                        // null as undefined
                        if (_v[i] === undefined || this._nullAsUndefined(_v[i], schema.elementTypes[i])) {
                            continue;
                        }
                        maskIndices.push(i);
                    }
                    // 生成PayloadMask：Varint64
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
                    this._writer.push({ type: 'varint', value: new Varint64(hi, lo) });
                    // Element Payload
                    for (var _a = 0, maskIndices_2 = maskIndices; _a < maskIndices_2.length; _a++) {
                        var i = maskIndices_2[_a];
                        this._write(_v[i], schema.elementTypes[i]);
                    }
                    break;
                }
                case tsbufferSchema.SchemaType.Enum:
                    var enumItem = schema.members.find(function (v) { return v.value === value; });
                    if (!enumItem) {
                        throw new Error("Unexpect enum value: ".concat(value));
                    }
                    this._writer.push({ type: 'varint', value: Varint64.from(enumItem.id) });
                    break;
                case tsbufferSchema.SchemaType.Any:
                    if (value === undefined) {
                        this._writer.push({ type: 'string', value: 'undefined' });
                    }
                    else {
                        this._writer.push({ type: 'string', value: JSON.stringify(value) });
                    }
                    break;
                case tsbufferSchema.SchemaType.Object:
                    this._writer.push({ type: 'string', value: JSON.stringify(value) });
                    break;
                case tsbufferSchema.SchemaType.Literal:
                    break;
                case tsbufferSchema.SchemaType.Interface:
                    this._writeInterface(value, schema, options);
                    break;
                case tsbufferSchema.SchemaType.Buffer:
                    this._writeBuffer(value);
                    break;
                case tsbufferSchema.SchemaType.IndexedAccess:
                case tsbufferSchema.SchemaType.Reference:
                case tsbufferSchema.SchemaType.Keyof:
                    this._write(value, this._validator.protoHelper.parseReference(schema), options);
                    break;
                case tsbufferSchema.SchemaType.Partial:
                case tsbufferSchema.SchemaType.Pick:
                case tsbufferSchema.SchemaType.Omit:
                case tsbufferSchema.SchemaType.Overwrite:
                    var parsed = this._validator.protoHelper.parseMappedType(schema);
                    if (parsed.type === tsbufferSchema.SchemaType.Interface) {
                        this._writePureMappedType(value, schema, options);
                    }
                    else if (parsed.type === tsbufferSchema.SchemaType.Union) {
                        this._writeUnion(value, parsed, options === null || options === void 0 ? void 0 : options.skipFields);
                    }
                    else if (parsed.type === tsbufferSchema.SchemaType.Intersection) {
                        this._writeIntersection(value, parsed, options === null || options === void 0 ? void 0 : options.skipFields);
                    }
                    break;
                case tsbufferSchema.SchemaType.Union:
                    this._writeUnion(value, schema, options === null || options === void 0 ? void 0 : options.skipFields);
                    break;
                case tsbufferSchema.SchemaType.Intersection:
                    this._writeIntersection(value, schema, options === null || options === void 0 ? void 0 : options.skipFields);
                    break;
                case tsbufferSchema.SchemaType.Date:
                    this._writer.push({ type: 'varint', value: Varint64.from(value.getTime()) });
                    break;
                case tsbufferSchema.SchemaType.NonNullable:
                    this._write(value, schema.target, options);
                    break;
                case tsbufferSchema.SchemaType.Custom:
                    if (!schema.encode) {
                        throw new Error('Missing encode method for CustomTypeSchema');
                    }
                    var buf = schema.encode(value);
                    // 以 Buffer 形式写入
                    this._writeBuffer(buf);
                    break;
                default:
                    // @ts-expect-error
                    throw new Error("Unrecognized schema type: ".concat(schema.type));
            }
        };
        Encoder.prototype._writePureMappedType = function (value, schema, options) {
            if (!options) {
                options = {};
            }
            if (schema.type === 'Pick') {
                // 已存在 取交集
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
                // 不存在 初始化
                else {
                    options.pickFields = {};
                    for (var _b = 0, _c = schema.keys; _b < _c.length; _b++) {
                        var v = _c[_b];
                        options.pickFields[v] = 1;
                    }
                }
            }
            else if (schema.type === 'Omit') {
                // 不存在 初始化
                if (!(options === null || options === void 0 ? void 0 : options.skipFields)) {
                    if (!options) {
                        options = {};
                    }
                    options.skipFields = {};
                }
                // 取并集                
                for (var _d = 0, _e = schema.keys; _d < _e.length; _d++) {
                    var v = _e[_d];
                    options.skipFields[v] = 1;
                }
            }
            else if (schema.type === 'Overwrite') {
                var parsed = this._parseOverwrite(value, schema);
                // 写入Overwrite部分
                this._write(parsed.overwriteValue, parsed.overwrite, options);
            }
            else if (schema.type === 'Partial') ;
            else {
                // @ts-expect-error
                throw new Error('Invalid PureMappedType child: ' + schema.type);
            }
            // Write Interface
            var parsedTarget = this._validator.protoHelper.parseReference(schema.target);
            if (parsedTarget.type === 'Interface') {
                this._writeInterface(value, parsedTarget, options);
            }
            else {
                this._writePureMappedType(value, parsedTarget, options);
            }
        };
        Encoder.prototype._writeNumber = function (value, schema) {
            // 默认为double
            var scalarType = schema.scalarType || 'double';
            switch (scalarType) {
                // 定长编码
                case 'double':
                    this._writer.push({ type: scalarType, value: value });
                    break;
                // Varint编码
                case 'int':
                    this._writer.push({ type: 'varint', value: Varint64.from(value).zzEncode() });
                    break;
                case 'uint':
                    this._writer.push({ type: 'varint', value: Varint64.from(value) });
                    break;
                default:
                    throw new Error('Scalar type not support : ' + scalarType);
            }
        };
        Encoder.prototype._writeInterface = function (value, schema, options) {
            // skipFields默认值
            if (!options) {
                options = {};
            }
            if (!options.skipFields) {
                options.skipFields = {};
            }
            // 记录起始op位置，用于最后插入BlockID数量
            var opStartOps = this._writer.ops.length;
            var blockIdCount = 0;
            // 以下，interface
            // extends
            if (schema.extends) {
                // 支持的继承数量有上限
                if (schema.extends.length > Config.interface.maxExtendsNum) {
                    throw new Error("Max support ".concat(Config.interface.maxExtendsNum, " extends, actual: ").concat(schema.extends.length));
                }
                for (var _i = 0, _a = schema.extends; _i < _a.length; _i++) {
                    var extend = _a[_i];
                    // BlockID = extend.id + 1
                    var blockId = extend.id + 1;
                    this._writer.push({ type: 'varint', value: Varint64.from(blockId) });
                    var blockIdPos = this._writer.ops.length - 1;
                    // 写入extend interface前 writeOps的长度
                    var opsLengthBeforeWrite = this._writer.ops.length;
                    // extend Block
                    var parsedExtend = this._validator.protoHelper.parseReference(extend.type);
                    this._writeInterface(value, parsedExtend, tslib_es6.__assign(tslib_es6.__assign({}, options), { 
                        // 确保indexSignature是在最小层级编码
                        skipIndexSignature: !!schema.indexSignature || options.skipIndexSignature // 如果父级有indexSignature 或 父级跳过 则跳过indexSignature
                     }));
                    // 写入前后writeOps只增加了一个（block length），说明该extend并未写入任何property字段，取消编码这个block
                    if (this._writer.ops.length === opsLengthBeforeWrite + 1) {
                        // 移除BlockID
                        this._writer.ops.splice(this._writer.ops.length - 2, 2);
                    }
                    // extend写入成功 blockId数量+1
                    else {
                        ++blockIdCount;
                        this._processIdWithLengthType(blockIdPos, extend.type);
                    }
                }
            }
            // property
            if (schema.properties) {
                for (var _b = 0, _c = schema.properties; _b < _c.length; _b++) {
                    var property = _c[_b];
                    var parsedType = this._validator.protoHelper.parseReference(property.type);
                    var propValue = value[property.name];
                    // PickFields
                    if (options.pickFields && !options.pickFields[property.name]) {
                        continue;
                    }
                    // Literal不编码 直接跳过
                    if (parsedType.type === 'Literal') {
                        options.skipFields[property.name] = 1;
                        continue;
                    }
                    // null as undefined
                    if (this._nullAsUndefined(propValue, property.type)) {
                        propValue = undefined;
                    }
                    // undefined不编码
                    if (propValue === undefined) {
                        continue;
                    }
                    // SkipFields
                    if (options.skipFields[property.name]) {
                        continue;
                    }
                    options.skipFields[property.name] = 1;
                    var blockId = property.id + Config.interface.maxExtendsNum + 1;
                    // BlockID (propertyID)
                    this._writer.push({ type: 'varint', value: Varint64.from(blockId) });
                    var blockIdPos = this._writer.ops.length - 1;
                    // Value Payload
                    this._write(propValue, parsedType);
                    ++blockIdCount;
                    this._processIdWithLengthType(blockIdPos, parsedType);
                }
            }
            // indexSignature
            if (!options.skipIndexSignature) {
                var flat = this._validator.protoHelper.getFlatInterfaceSchema(schema);
                if (flat.indexSignature) {
                    for (var key in value) {
                        if (value[key] === undefined || this._nullAsUndefined(value[key], flat.indexSignature.type)) {
                            continue;
                        }
                        // PickFields
                        if (options.pickFields && !options.pickFields[key]) {
                            continue;
                        }
                        // SkipFields
                        if (options.skipFields[key]) {
                            continue;
                        }
                        options.skipFields[key] = 1;
                        // BlockID == 0
                        this._writer.push({ type: 'varint', value: Varint64.from(0) });
                        var blockIdPos = this._writer.ops.length - 1;
                        // 字段名
                        this._writer.push({ type: 'string', value: key });
                        var lengthPrefixPos = this._writer.ops.length;
                        // Value Payload
                        this._write(value[key], flat.indexSignature.type);
                        ++blockIdCount;
                        this._processIdWithLengthType(blockIdPos, flat.indexSignature.type, lengthPrefixPos);
                    }
                }
            }
            this._writer.ops.splice(opStartOps, 0, this._writer.req2op({ type: 'varint', value: Varint64.from(blockIdCount) }));
        };
        /** @internal 是否该null值小于当做undefined编码 */
        Encoder.prototype._nullAsUndefined = function (value, type) {
            return value === null
                && this._options.nullAsUndefined
                && !SchemaUtil.canBeLiteral(type, null);
            // && SchemaUtil.canBeLiteral(type, undefined)  一定为true 因为先validate过了
        };
        Encoder.prototype._parseOverwrite = function (value, schema) {
            var skipFields = {};
            // 解引用
            var target = this._validator.protoHelper.parseReference(schema.target);
            var overwrite = this._validator.protoHelper.parseReference(schema.overwrite);
            var flatTarget = this._validator.protoHelper.getFlatInterfaceSchema(target);
            var flatOverwrite = this._validator.protoHelper.getFlatInterfaceSchema(overwrite);
            // 先区分哪些字段进入Target块，哪些字段进入Overwrite块
            var overwriteValue = {};
            var targetValue = {};
            // Overwrite块 property
            if (flatOverwrite.properties) {
                // 只要Overwrite中有此Property，即在Overwrite块编码
                for (var _i = 0, _a = flatOverwrite.properties; _i < _a.length; _i++) {
                    var property = _a[_i];
                    // undefined不编码，跳过SkipFIelds
                    if (value[property.name] !== undefined && !skipFields[property.name]) {
                        overwriteValue[property.name] = value[property.name];
                        skipFields[property.name] = 1;
                    }
                }
            }
            // Target块 property
            if (flatTarget.properties) {
                for (var _b = 0, _c = flatTarget.properties; _b < _c.length; _b++) {
                    var property = _c[_b];
                    // undefined不编码，跳过SkipFields
                    if (value[property.name] !== undefined && !skipFields[property.name]) {
                        targetValue[property.name] = value[property.name];
                        skipFields[property.name] = 1;
                    }
                }
            }
            // indexSignature
            var indexSignatureWriteValue; // indexSignature要写入的目标（overwrite或target）
            var indexSignature;
            // IndexSignature，优先使用Overwrite的
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
            // 编码，此处不再需要SkipFields，因为已经筛选过
            return {
                target: target,
                targetValue: targetValue,
                overwrite: overwrite,
                overwriteValue: overwriteValue
            };
        };
        Encoder.prototype._writeUnion = function (value, schema, skipFields, unionProperties) {
            // 计算unionProperties
            // if (!unionProperties) {
            //     unionProperties = skipFields ? Object.keys(skipFields) : [];
            // }
            // this._validator.protoHelper.getUnionProperties(schema).forEach(v => {
            //     unionProperties!.binaryInsert(v, true);
            // })
            if (skipFields === void 0) { skipFields = {}; }
            // 记住编码起点
            var encodeStartPos = this._writer.ops.length;
            var idNum = 0;
            // null as undefined
            if (this._nullAsUndefined(value, schema)) {
                value = undefined;
            }
            for (var _i = 0, _a = schema.members; _i < _a.length; _i++) {
                var member = _a[_i];
                // 验证该member是否可以编码            
                var vRes = this._validator.validate(value, member.type, {
                    // 禁用excessPropertyChecks（以代替unionProperties）
                    excessPropertyChecks: false,
                    // 启用strictNullChecks（null as undefined已经前置处理）
                    // strictNullChecks: true
                });
                if (vRes.isSucc) {
                    // 编码
                    // Part2: ID
                    this._writer.push({ type: 'varint', value: Varint64.from(member.id) });
                    var idPos = this._writer.ops.length - 1;
                    // Part3: Payload
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
                    // 非object的value，类型一定互斥，只编码一个足矣
                    if (typeof value !== 'object') {
                        break;
                    }
                }
            }
            // 已经编码
            if (idNum > 0) {
                // 前置ID数量
                this._writer.ops.splice(encodeStartPos, 0, this._writer.req2op({ type: 'varint', value: Varint64.from(idNum) }));
                return;
            }
            else {
                // 未编码，没有任何条件满足，抛出异常
                throw new Error('Non member is satisfied for union type');
            }
        };
        Encoder.prototype._writeIntersection = function (value, schema, skipFields) {
            if (skipFields === void 0) { skipFields = {}; }
            // ID数量（member数量）
            this._writer.push({ type: 'varint', value: Varint64.from(schema.members.length) });
            // 按Member依次编码
            for (var _i = 0, _a = schema.members; _i < _a.length; _i++) {
                var member = _a[_i];
                // ID
                this._writer.push({ type: 'varint', value: Varint64.from(member.id) });
                var idPos = this._writer.ops.length - 1;
                // 编码块
                this._write(value, member.type, {
                    skipFields: skipFields
                });
                this._processIdWithLengthType(idPos, member.type);
            }
        };
        Encoder.prototype._writeBuffer = function (value) {
            // ArrayBuffer 转为Uint8Array
            if (value instanceof ArrayBuffer) {
                this._writer.push({ type: 'buffer', value: new Uint8Array(value) });
            }
            // Uint8Array 直接写入
            else if (value instanceof Uint8Array) {
                this._writer.push({ type: 'buffer', value: value });
            }
            // 其它TypedArray 转为Uint8Array
            else {
                var key = value.constructor.name;
                var arrType = TypedArrays[key];
                var uint8Arr = new Uint8Array(value.buffer, value.byteOffset, value.length * arrType.BYTES_PER_ELEMENT);
                this._writer.push({ type: 'buffer', value: uint8Arr });
            }
        };
        // private _writeIdBlocks(blocks: IDBlockItem[]) {
        //     // 字段数量: Varint
        //     this._writer.push({ type: 'varint', value: Varint64.from(blocks.length) });
        //     // 依次编码
        //     for (let item of blocks) {
        //         // ID
        //         this._writer.push({ type: 'varint', value: Varint64.from(item.id) });
        //         // Payload
        //         this._write(item.value, item.schema)
        //     }
        // }
        /**
         * 重新处理ID位，使其加入末位长度信息2Bit
         * @param idPos
         */
        Encoder.prototype._processIdWithLengthType = function (idPos, payloadType, lengthPrefixPos) {
            var idOp = this._writer.ops[idPos];
            if (idOp.type !== 'varint') {
                throw new Error('Error idPos: ' + idPos);
            }
            // 解引用
            var parsedSchema = this._validator.protoHelper.parseReference(payloadType);
            var lengthInfo = IdBlockUtil.getPayloadLengthInfo(parsedSchema, this._validator.protoHelper);
            var newId = (idOp.value.toNumber() << 2) + lengthInfo.lengthType;
            this._writer.ops[idPos] = this._writer.req2op({
                type: 'varint',
                value: Varint64.from(newId)
            });
            if (lengthInfo.needLengthPrefix) {
                var payloadByteLength = this._writer.ops.filter(function (v, i) { return i > idPos; }).sum(function (v) { return v.length; });
                this._writer.ops.splice(lengthPrefixPos == undefined ? idPos + 1 : lengthPrefixPos, 0, this._writer.req2op({
                    type: 'varint',
                    value: Varint64.from(payloadByteLength)
                }));
            }
        };
        return Encoder;
    }());

    /**
     * @public
     */
    var TSBuffer = /** @class */ (function () {
        function TSBuffer(proto, options) {
            /** @internal 默认配置 */
            this._options = {
                excessPropertyChecks: true,
                strictNullChecks: false,
                skipEncodeValidate: false,
                skipDecodeValidate: false,
                cloneProto: true,
            };
            // but `options.validatorOptions` has higher priority to validate process (don't affect encode)
            this._options = tslib_es6.__assign(tslib_es6.__assign({}, this._options), options);
            this._proto = this._options.cloneProto ? Object.merge({}, proto) : proto;
            Object.assign(this._proto, Object.merge({}, options === null || options === void 0 ? void 0 : options.customTypes));
            this._validator = new tsbufferValidator.TSBufferValidator(this._proto, {
                excessPropertyChecks: this._options.excessPropertyChecks,
                strictNullChecks: this._options.strictNullChecks,
                cloneProto: false
            });
            this.validate = this._validator.validate.bind(this._validator);
            this.prune = this._validator.prune.bind(this._validator);
            this._encoder = new Encoder({
                validator: this._validator,
                // if !strictNullChecks, then encoder can convert null to undefined
                nullAsUndefined: !this._options.strictNullChecks
            });
            this._decoder = new Decoder({
                validator: this._validator,
                // if !strictNullChecks, then decoder can convert undefined to null
                undefinedAsNull: !this._options.strictNullChecks
            });
        }
        /**
         * 编码
         * @param value - 要编码的值
         * @param schemaOrId - Schema 或 SchemaID，例如`a/b.ts`下的`Test`类型，其ID为`a/b/Test`
         */
        TSBuffer.prototype.encode = function (value, schemaOrId, options) {
            var _a;
            var schema;
            if (typeof schemaOrId === 'string') {
                schema = this._proto[schemaOrId];
                if (!schema) {
                    return { isSucc: false, errMsg: "Cannot find schema\uFF1A ".concat(schemaOrId) };
                }
            }
            else {
                schema = schemaOrId;
            }
            // validate before encode
            if (!((_a = options === null || options === void 0 ? void 0 : options.skipValidate) !== null && _a !== void 0 ? _a : this._options.skipEncodeValidate)) {
                var vRes = this._validator.validate(value, schema, {
                    // 禁用excessPropertyChecks，因为不会编码excess property
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
                return { isSucc: false, errMsg: e.message };
            }
            return { isSucc: true, buf: buf };
        };
        /**
         * 解码
         * @param buf - 待解码的二进制数据
         * @param schemaOrId - Schema 或 SchemaID，例如`a/b.ts`下的`Test`类型，其ID为`a/b/Test`
         */
        TSBuffer.prototype.decode = function (buf, schemaOrId, options) {
            var _a;
            var schema;
            if (typeof schemaOrId === 'string') {
                schema = this._proto[schemaOrId];
                if (!schema) {
                    return { isSucc: false, errMsg: "Cannot find schema\uFF1A ".concat(schemaOrId) };
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
                return { isSucc: false, errMsg: e.message };
            }
            if (!((_a = options === null || options === void 0 ? void 0 : options.skipValidate) !== null && _a !== void 0 ? _a : this._options.skipDecodeValidate)) {
                var vRes = this._validator.validate(value, schema);
                if (!vRes.isSucc) {
                    return vRes;
                }
            }
            return { isSucc: true, value: value };
        };
        /**
         * 编码为 JSON Object，根据协议将 JSON 不支持的格式（如 ArrayBuffer、Date、ObjectId）转换成 JSON 可传输的格式
         * @param value
         * @param schemaOrId
         * @param options
         */
        TSBuffer.prototype.encodeJSON = function (value, schemaOrId, options) {
            var _a;
            var schema;
            if (typeof schemaOrId === 'string') {
                schema = this._proto[schemaOrId];
                if (!schema) {
                    return { isSucc: false, errMsg: "Cannot find schema\uFF1A ".concat(schemaOrId) };
                }
            }
            else {
                schema = schemaOrId;
            }
            // validate before encode
            if (!((_a = options === null || options === void 0 ? void 0 : options.skipValidate) !== null && _a !== void 0 ? _a : this._options.skipEncodeValidate)) {
                var vRes = this._validator.prune(value, schema);
                if (!vRes.isSucc) {
                    return vRes;
                }
                value = vRes.pruneOutput;
            }
            // TODO schema 里没有 Buffer 和 Custom 的自动跳过
            var json;
            try {
                json = this._encoder.encodeJSON(value, schema);
            }
            catch (e) {
                return { isSucc: false, errMsg: e.message };
            }
            return { isSucc: true, json: json };
        };
        /**
         * 从 JSON Object 解码，根据协议将 ArrayBuffer、Date、ObjectId 等类型从 JSON 中还原
         * @param json - JSON Object (是 JSON 对象，而非 JSON 字符串)
         * @param schemaOrId
         * @param options
         */
        TSBuffer.prototype.decodeJSON = function (json, schemaOrId, options) {
            var _a;
            var schema;
            if (typeof schemaOrId === 'string') {
                schema = this._proto[schemaOrId];
                if (!schema) {
                    return { isSucc: false, errMsg: "Cannot find schema\uFF1A ".concat(schemaOrId) };
                }
            }
            else {
                schema = schemaOrId;
            }
            // TODO schema 里没有 Buffer 和 Custom 的自动跳过
            var value;
            try {
                value = this._decoder.decodeJSON(json, schema);
            }
            catch (e) {
                return { isSucc: false, errMsg: e.message };
            }
            if (!((_a = options === null || options === void 0 ? void 0 : options.skipValidate) !== null && _a !== void 0 ? _a : this._options.skipDecodeValidate)) {
                var vRes = this._validator.prune(value, schema);
                if (!vRes.isSucc) {
                    return vRes;
                }
                return { isSucc: true, value: vRes.pruneOutput };
            }
            return { isSucc: true, value: value };
        };
        return TSBuffer;
    }());

    exports.Base64Util = Base64Util;
    exports.TSBuffer = TSBuffer;
    });

    var index$4 = unwrapExports(tsbuffer);
    var tsbuffer_1 = tsbuffer.Base64Util;
    var tsbuffer_2 = tsbuffer.TSBuffer;

    var tsrpcBaseClient = createCommonjsModule(function (module, exports) {
    /*!
     * TSRPC Base Client v2.1.4
     * -----------------------------------------
     * Copyright (c) Kingworks Corporation.
     * MIT License
     * https://github.com/k8w/tsrpc-base-client
     */
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });







    /**
     * An auto-increment counter
     */
    var Counter = /** @class */ (function () {
        function Counter(min, max) {
            if (min === void 0) { min = 1; }
            if (max === void 0) { max = Number.MAX_SAFE_INTEGER; }
            this._min = min;
            this._max = max;
            this._last = max;
        }
        /**
         * Reset the counter, makes `getNext()` restart from `0`
         */
        Counter.prototype.reset = function () {
            this._last = this._max;
        };
        /**
         * Get next counter value, and auto increment `1`
         * @param notInc - Just get the next possible value, not actually increasing the sequence
         */
        Counter.prototype.getNext = function (notInc) {
            return this._last >= this._max ? (this._last = this._min) : (notInc ? this._last : ++this._last);
        };
        Object.defineProperty(Counter.prototype, "last", {
            /**
             * Last return of `getNext()`
             */
            get: function () {
                return this._last;
            },
            enumerable: false,
            configurable: true
        });
        return Counter;
    }());

    /**
     * A `Flow` is consists of many `FlowNode`, which is function with the same input and output (like pipeline).
     *
     * @remarks
     * `Flow` is like a hook or event, executed at a specific time.
     * The difference to event is it can be used to **interrupt** an action, by return `undefined` or `null` in a node.
     */
    var Flow = /** @class */ (function () {
        function Flow() {
            /**
             * All node functions, if you want to adjust the sort you can modify this.
             */
            this.nodes = [];
            /**
             * Event when error throwed from a `FlowNode` function.
             * By default, it does nothing except print a `Uncaught FlowError` error log.
             * @param e
             * @param last
             * @param input
             * @param logger
             */
            this.onError = function (e, last, input, logger) {
                logger === null || logger === void 0 ? void 0 : logger.error('Uncaught FlowError:', e);
            };
        }
        /**
         * Execute all node function one by one, the previous output is the next input,
         * until the last output would be return to the caller.
         *
         * @remarks
         * If any node function return `null | undefined`, or throws an error,
         * the latter node functions would not be executed.
         * And it would return `null | undefined` immediately to the caller,
         * which tell the caller it means a interruption,
         * to let the caller stop latter behaviours.
         *
         * @param input The input of the first `FlowNode`
         * @param logger Logger to print log, `undefined` means to hide all log.
         * @returns
         */
        Flow.prototype.exec = function (input, logger) {
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var res, i, e_1;
                return tslib_es6.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            res = input;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < this.nodes.length)) return [3 /*break*/, 7];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.nodes[i](res)];
                        case 3:
                            res = _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            this.onError(e_1, res, input, logger);
                            return [2 /*return*/, undefined];
                        case 5:
                            // Return 非true 表示不继续后续流程 立即中止
                            if (res === null || res === undefined) {
                                return [2 /*return*/, res];
                            }
                            _a.label = 6;
                        case 6:
                            ++i;
                            return [3 /*break*/, 1];
                        case 7: return [2 /*return*/, res];
                    }
                });
            });
        };
        /**
         * Append a node function to the last
         * @param node
         * @returns
         */
        Flow.prototype.push = function (node) {
            this.nodes.push(node);
            return node;
        };
        /**
         * Remove a node function
         * @param node
         * @returns
         */
        Flow.prototype.remove = function (node) {
            return this.nodes.remove(function (v) { return v === node; });
        };
        return Flow;
    }());

    function getCustomObjectIdTypes(classObjectId) {
        var output = {};
        // string
        if (classObjectId === String) {
            output['?mongodb/ObjectId'] = {
                type: tsbufferSchema.SchemaType.Custom,
                validate: function (value) {
                    if (typeof value !== 'string') {
                        return { isSucc: false, errMsg: "Expected type to be `string`, actually `".concat(typeof value, "`.") };
                    }
                    if (!/[0-9a-fA-F]{24}/.test(value)) {
                        return { isSucc: false, errMsg: 'ObjectId must be a string of 24 hex characters' };
                    }
                    return { isSucc: true };
                },
                encode: function (value) {
                    return new Uint8Array(Array.from({ length: 12 }, function (_, i) { return Number.parseInt('0x' + value.substr(i * 2, 2)); }));
                },
                decode: function (buf) {
                    return Array.from(buf, function (v) {
                        var str = v.toString(16);
                        if (str.length === 1) {
                            str = '0' + str;
                        }
                        return str;
                    }).join('');
                }
            };
        }
        // ObjectId
        else {
            output['?mongodb/ObjectId'] = {
                type: tsbufferSchema.SchemaType.Custom,
                validate: function (value) { return (value instanceof classObjectId) ?
                    { isSucc: true } :
                    { isSucc: false, errMsg: "Expected to be instance of `ObjectId`, actually not." }; },
                encode: function (value) { return new Uint8Array(value.id); },
                decode: function (buf) { return new classObjectId(buf); },
                decodeJSON: function (json) { return new classObjectId(json); }
            };
        }
        output['?mongodb/ObjectID'] = output['?mongodb/ObjectId'];
        output['?bson/ObjectId'] = output['?mongodb/ObjectId'];
        output['?bson/ObjectID'] = output['?mongodb/ObjectId'];
        return output;
    }

    /**
     * A manager for TSRPC receiving messages
     */
    var MsgHandlerManager = /** @class */ (function () {
        function MsgHandlerManager() {
            this._handlers = {};
        }
        /**
         * Execute all handlers parallelly
         * @returns handlers count
         */
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
        /**
         * Add message handler, duplicate handlers to the same `msgName` would be ignored.
         * @param msgName
         * @param handler
         * @returns
         */
        MsgHandlerManager.prototype.addHandler = function (msgName, handler) {
            var handlers = this._handlers[msgName];
            // 初始化Handlers
            if (!handlers) {
                handlers = this._handlers[msgName] = [];
            }
            // 防止重复监听
            else if (handlers.some(function (v) { return v === handler; })) {
                return;
            }
            handlers.push(handler);
        };
        /**
         * Remove handler from the specific `msgName`
         * @param msgName
         * @param handler
         * @returns
         */
        MsgHandlerManager.prototype.removeHandler = function (msgName, handler) {
            var handlers = this._handlers[msgName];
            if (!handlers) {
                return;
            }
            handlers.removeOne(function (v) { return v === handler; });
        };
        /**
         * Remove all handlers for the specific `msgName`
         * @param msgName
         */
        MsgHandlerManager.prototype.removeAllHandlers = function (msgName) {
            this._handlers[msgName] = undefined;
        };
        return MsgHandlerManager;
    }());

    /** A utility for generate `ServiceMap` */
    var ServiceMapUtil = /** @class */ (function () {
        function ServiceMapUtil() {
        }
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
                    var svc = tslib_es6.__assign(tslib_es6.__assign({}, v), { reqSchemaId: "".concat(path, "Ptl").concat(name_1, "/Req").concat(name_1), resSchemaId: "".concat(path, "Ptl").concat(name_1, "/Res").concat(name_1) });
                    map.apiName2Service[v.name] = svc;
                    map.id2Service[v.id] = svc;
                }
                else {
                    var svc = tslib_es6.__assign(tslib_es6.__assign({}, v), { msgSchemaId: "".concat(path, "Msg").concat(name_1, "/Msg").concat(name_1) });
                    map.msgName2Service[v.name] = svc;
                    map.id2Service[v.id] = svc;
                }
            }
            return map;
        };
        return ServiceMapUtil;
    }());

    var TransportDataUtil = /** @class */ (function () {
        function TransportDataUtil() {
        }
        Object.defineProperty(TransportDataUtil, "tsbuffer", {
            get: function () {
                if (!this._tsbuffer) {
                    this._tsbuffer = new tsbuffer.TSBuffer(tsrpcProto.TransportDataProto);
                }
                return this._tsbuffer;
            },
            enumerable: false,
            configurable: true
        });
        TransportDataUtil.encodeClientMsg = function (tsbuffer, service, msg, type, connType) {
            if (type === 'buffer') {
                var op = tsbuffer.encode(msg, service.msgSchemaId);
                if (!op.isSucc) {
                    return op;
                }
                var serverInputData = {
                    serviceId: service.id,
                    buffer: op.buf
                };
                var opOut = this.tsbuffer.encode(serverInputData, 'ServerInputData');
                return opOut.isSucc ? { isSucc: true, output: opOut.buf } : { isSucc: false, errMsg: opOut.errMsg };
            }
            else {
                var op = tsbuffer.encodeJSON(msg, service.msgSchemaId);
                if (!op.isSucc) {
                    return op;
                }
                var json = connType === 'SHORT' ? op.json : [service.name, op.json];
                return { isSucc: true, output: type === 'json' ? json : JSON.stringify(json) };
            }
        };
        TransportDataUtil.encodeApiReq = function (tsbuffer, service, req, type, sn) {
            if (type === 'buffer') {
                var op = tsbuffer.encode(req, service.reqSchemaId);
                if (!op.isSucc) {
                    return op;
                }
                var serverInputData = {
                    serviceId: service.id,
                    buffer: op.buf,
                    sn: sn
                };
                var opOut = this.tsbuffer.encode(serverInputData, 'ServerInputData');
                return opOut.isSucc ? { isSucc: true, output: opOut.buf } : { isSucc: false, errMsg: opOut.errMsg };
            }
            else {
                var op = tsbuffer.encodeJSON(req, service.reqSchemaId);
                if (!op.isSucc) {
                    return op;
                }
                var json = sn === undefined ? op.json : [service.name, op.json, sn];
                return { isSucc: true, output: type === 'json' ? json : JSON.stringify(json) };
            }
        };
        TransportDataUtil.encodeServerMsg = function (tsbuffer, service, msg, type, connType) {
            if (type === 'buffer') {
                var op = tsbuffer.encode(msg, service.msgSchemaId);
                if (!op.isSucc) {
                    return op;
                }
                var serverOutputData = {
                    serviceId: service.id,
                    buffer: op.buf
                };
                var opOut = this.tsbuffer.encode(serverOutputData, 'ServerOutputData');
                return opOut.isSucc ? { isSucc: true, output: opOut.buf } : { isSucc: false, errMsg: opOut.errMsg };
            }
            else {
                var op = tsbuffer.encodeJSON(msg, service.msgSchemaId);
                if (!op.isSucc) {
                    return op;
                }
                var json = connType === 'SHORT' ? op.json : [service.name, op.json];
                return { isSucc: true, output: type === 'json' ? json : JSON.stringify(json) };
            }
        };
        TransportDataUtil.parseServerOutout = function (tsbuffer, serviceMap, data, serviceId) {
            var _a;
            if (data instanceof Uint8Array) {
                var opServerOutputData = this.tsbuffer.decode(data, 'ServerOutputData');
                if (!opServerOutputData.isSucc) {
                    return opServerOutputData;
                }
                var serverOutputData = opServerOutputData.value;
                serviceId = serviceId !== null && serviceId !== void 0 ? serviceId : serverOutputData.serviceId;
                if (serviceId === undefined) {
                    return { isSucc: false, errMsg: "Missing 'serviceId' in ServerOutput" };
                }
                var service = serviceMap.id2Service[serviceId];
                if (!service) {
                    return { isSucc: false, errMsg: "Invalid service ID: ".concat(serviceId, " (from ServerOutput)") };
                }
                if (service.type === 'msg') {
                    if (!serverOutputData.buffer) {
                        return { isSucc: false, errMsg: 'Empty msg buffer (from ServerOutput)' };
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
                                    err: new tsrpcProto.TsrpcError(serverOutputData.error)
                                }
                            }
                        };
                    }
                    else {
                        if (!serverOutputData.buffer) {
                            return { isSucc: false, errMsg: 'Empty API res buffer (from ServerOutput)' };
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
                                    res: opRes.value,
                                }
                            }
                        };
                    }
                }
            }
            else {
                var json = void 0;
                if (typeof data === 'string') {
                    try {
                        json = JSON.parse(data);
                    }
                    catch (e) {
                        return { isSucc: false, errMsg: "Invalid input JSON: ".concat(e.message) };
                    }
                }
                else {
                    json = data;
                }
                var body = void 0;
                var sn = void 0;
                var service = void 0;
                if (serviceId == undefined) {
                    if (!Array.isArray(json)) {
                        return { isSucc: false, errMsg: "Invalid server output format" };
                    }
                    var serviceName = json[0];
                    service = (_a = serviceMap.apiName2Service[serviceName]) !== null && _a !== void 0 ? _a : serviceMap.msgName2Service[serviceName];
                    if (!service) {
                        return { isSucc: false, errMsg: "Invalid service name: ".concat(serviceName, " (from ServerOutputData)") };
                    }
                    body = json[1];
                    sn = json[2];
                }
                else {
                    service = serviceMap.id2Service[serviceId];
                    if (!service) {
                        return { isSucc: false, errMsg: "Invalid service ID: ".concat(serviceId) };
                    }
                    body = json;
                }
                if (service.type === 'api') {
                    if (body.isSucc && 'res' in body) {
                        var op = tsbuffer.decodeJSON(body.res, service.resSchemaId);
                        if (!op.isSucc) {
                            return op;
                        }
                        body.res = op.value;
                    }
                    else if (body.err) {
                        body.err = new tsrpcProto.TsrpcError(body.err);
                    }
                    else {
                        return { isSucc: false, errMsg: "Invalid server output format" };
                    }
                    return {
                        isSucc: true,
                        result: {
                            type: 'api',
                            service: service,
                            sn: sn,
                            ret: body
                        }
                    };
                }
                else {
                    var op = tsbuffer.decodeJSON(body, service.msgSchemaId);
                    if (!op.isSucc) {
                        return op;
                    }
                    return {
                        isSucc: true,
                        result: {
                            type: 'msg',
                            service: service,
                            msg: op.value
                        }
                    };
                }
            }
        };
        // 心跳包（Ping & Pong），所有开头为 0 的 Buffer，均为控制指令
        TransportDataUtil.HeartbeatPacket = new Uint8Array([0]);
        return TransportDataUtil;
    }());

    /**
     * An abstract base class for TSRPC Client,
     * which includes some common buffer process flows.
     *
     * @remarks
     * You can implement a client on a specific transportation protocol (like HTTP, WebSocket, QUIP) by extend this.
     *
     * @typeParam ServiceType - `ServiceType` from generated `proto.ts`
     *
     * @see
     * {@link https://github.com/k8w/tsrpc}
     * {@link https://github.com/k8w/tsrpc-browser}
     * {@link https://github.com/k8w/tsrpc-miniapp}
     */
    var BaseClient = /** @class */ (function () {
        function BaseClient(proto, options) {
            this._msgHandlers = new MsgHandlerManager();
            /**
             * {@link Flow} to process `callApi`, `sendMsg`, buffer input/output, etc...
             */
            this.flows = {
                // callApi
                preCallApiFlow: new Flow(),
                preApiReturnFlow: new Flow(),
                postApiReturnFlow: new Flow(),
                // sendMsg
                preSendMsgFlow: new Flow(),
                postSendMsgFlow: new Flow(),
                preRecvMsgFlow: new Flow(),
                postRecvMsgFlow: new Flow(),
                // buffer
                preSendDataFlow: new Flow(),
                preRecvDataFlow: new Flow(),
                /**
                 * @deprecated Please use `preSendDataFlow` instead
                 */
                preSendBufferFlow: new Flow(),
                /**
                 * @deprecated Please use `preRecvDataFlow` instead
                 */
                preRecvBufferFlow: new Flow(),
                // Connection Flows (Only for WebSocket)
                /** Before connect to WebSocket server */
                preConnectFlow: new Flow(),
                /** After WebSocket connect successfully */
                postConnectFlow: new Flow(),
                /** After WebSocket disconnected (from connected status) */
                postDisconnectFlow: new Flow(),
            };
            this._apiSnCounter = new Counter(1);
            /**
             * Pending API Requests
             */
            this._pendingApis = [];
            /** @deprecated Please use `_onRecvData` instead */
            this._onRecvBuf = this._onRecvData;
            this.options = options;
            this.serviceMap = ServiceMapUtil.getServiceMap(proto);
            this.dataType = this.options.json ? 'text' : 'buffer';
            var types = tslib_es6.__assign({}, proto.types);
            // Custom ObjectId handler
            if (options.customObjectIdClass) {
                types = tslib_es6.__assign(tslib_es6.__assign({}, types), getCustomObjectIdTypes(options.customObjectIdClass));
            }
            this.tsbuffer = new tsbuffer.TSBuffer(types);
            this.logger = this.options.logger;
            this.logger && tsrpcProto.setLogLevel(this.logger, this.options.logLevel);
        }
        Object.defineProperty(BaseClient.prototype, "lastSN", {
            /**
             * The `SN` number of the last `callApi()`,
             * which can be passed to `abort()` to abort an API request.
             * @example
             * ```ts
             * client.callApi('xxx', { value: 'xxx' })
             *   .then(ret=>{ console.log('succ', ret) });
             * let lastSN = client.lastSN;
             * client.abort(lastSN);
             * ```
             */
            get: function () {
                return this._apiSnCounter.last;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseClient.prototype, "nextSN", {
            /**
             * The `SN` number of the next `callApi()`,
             * which can be passed to `abort()` to abort an API request.
             * @example
             * ```ts
             * let nextSN = client.nextSN;
             * client.callApi('xxx', { value: 'xxx' })
             * ```
             */
            get: function () {
                return this._apiSnCounter.getNext(true);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Send request and wait for the return
         * @param apiName
         * @param req - Request body
         * @param options - Transport options
         * @returns return a `ApiReturn`, all error (network error, business error, code exception...) is unified as `TsrpcError`.
         * The promise is never rejected, so you just need to process all error in one place.
         */
        BaseClient.prototype.callApi = function (apiName, req, options) {
            if (options === void 0) { options = {}; }
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var sn, pendingItem, promise;
                var _this = this;
                return tslib_es6.__generator(this, function (_a) {
                    sn = this._apiSnCounter.getNext();
                    pendingItem = {
                        sn: sn,
                        abortKey: options.abortKey,
                        service: this.serviceMap.apiName2Service[apiName]
                    };
                    this._pendingApis.push(pendingItem);
                    promise = new Promise(function (rs) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
                        var pre, ret, preReturn;
                        var _a, _b;
                        return tslib_es6.__generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, this.flows.preCallApiFlow.exec({
                                        apiName: apiName,
                                        req: req,
                                        options: options
                                    }, this.logger)];
                                case 1:
                                    pre = _c.sent();
                                    if (!pre || pendingItem.isAborted) {
                                        this.abort(pendingItem.sn);
                                        return [2 /*return*/];
                                    }
                                    if (!pre.return) return [3 /*break*/, 2];
                                    ret = pre.return;
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, this._doCallApi(pre.apiName, pre.req, pre.options, pendingItem)];
                                case 3:
                                    // do call means it will send buffer via network
                                    ret = _c.sent();
                                    _c.label = 4;
                                case 4:
                                    if (pendingItem.isAborted) {
                                        return [2 /*return*/];
                                    }
                                    // Log Original Return
                                    if (ret.isSucc) {
                                        this.options.logApi && ((_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[ApiRes] #".concat(pendingItem.sn, " ").concat(apiName), ret.res));
                                    }
                                    else {
                                        this.options.logApi && ((_b = this.logger) === null || _b === void 0 ? void 0 : _b[ret.err.type === tsrpcProto.TsrpcError.Type.ApiError ? 'log' : 'error']("[ApiErr] #".concat(pendingItem.sn, " ").concat(apiName), ret.err));
                                    }
                                    return [4 /*yield*/, this.flows.preApiReturnFlow.exec(tslib_es6.__assign(tslib_es6.__assign({}, pre), { return: ret }), this.logger)];
                                case 5:
                                    preReturn = _c.sent();
                                    if (!preReturn) {
                                        this.abort(pendingItem.sn);
                                        return [2 /*return*/];
                                    }
                                    rs(preReturn.return);
                                    // Post Flow
                                    this.flows.postApiReturnFlow.exec(preReturn, this.logger);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    // Finally clear pendings
                    promise.catch().then(function () {
                        _this._pendingApis.removeOne(function (v) { return v.sn === pendingItem.sn; });
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        BaseClient.prototype._doCallApi = function (apiName, req, options, pendingItem) {
            var _a;
            if (options === void 0) { options = {}; }
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var promise;
                var _this = this;
                return tslib_es6.__generator(this, function (_b) {
                    this.options.logApi && ((_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[ApiReq] #".concat(pendingItem.sn), apiName, req));
                    promise = new Promise(function (rs) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
                        var service, opEncode, promiseReturn, promiseSend, opSend, ret;
                        var _a;
                        return tslib_es6.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    service = this.serviceMap.apiName2Service[apiName];
                                    if (!service) {
                                        rs({
                                            isSucc: false,
                                            err: new tsrpcProto.TsrpcError('Invalid api name: ' + apiName, {
                                                code: 'INVALID_API_NAME',
                                                type: tsrpcProto.TsrpcErrorType.ClientError
                                            })
                                        });
                                        return [2 /*return*/];
                                    }
                                    pendingItem.service = service;
                                    opEncode = TransportDataUtil.encodeApiReq(this.tsbuffer, service, req, this.dataType, this.type === 'LONG' ? pendingItem.sn : undefined);
                                    if (!opEncode.isSucc) {
                                        rs({
                                            isSucc: false, err: new tsrpcProto.TsrpcError(opEncode.errMsg, {
                                                type: tsrpcProto.TsrpcErrorType.ClientError,
                                                code: 'INPUT_DATA_ERR'
                                            })
                                        });
                                        return [2 /*return*/];
                                    }
                                    promiseReturn = this._waitApiReturn(pendingItem, (_a = options.timeout) !== null && _a !== void 0 ? _a : this.options.timeout);
                                    promiseSend = this.sendData(opEncode.output, options, service.id, pendingItem);
                                    return [4 /*yield*/, promiseSend];
                                case 1:
                                    opSend = _b.sent();
                                    if (opSend.err) {
                                        rs({
                                            isSucc: false,
                                            err: opSend.err
                                        });
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, promiseReturn];
                                case 2:
                                    ret = _b.sent();
                                    if (pendingItem.isAborted) {
                                        return [2 /*return*/];
                                    }
                                    rs(ret);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/, promise];
                });
            });
        };
        /**
         * Send message, without response, not ensuring the server is received and processed correctly.
         * @param msgName
         * @param msg - Message body
         * @param options - Transport options
         * @returns If the promise is resolved, it means the request is sent to system kernel successfully.
         * Notice that not means the server received and processed the message correctly.
         */
        BaseClient.prototype.sendMsg = function (msgName, msg, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var promise = new Promise(function (rs) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
                var pre, service, opEncode, promiseSend, opSend;
                var _a, _b;
                return tslib_es6.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.flows.preSendMsgFlow.exec({
                                msgName: msgName,
                                msg: msg,
                                options: options
                            }, this.logger)];
                        case 1:
                            pre = _c.sent();
                            if (!pre) {
                                return [2 /*return*/];
                            }
                            // The msg is not prevented by pre flow
                            this.options.logMsg && ((_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[SendMsg]", msgName, msg));
                            service = this.serviceMap.msgName2Service[msgName];
                            if (!service) {
                                (_b = this.logger) === null || _b === void 0 ? void 0 : _b.error('Invalid msg name: ' + msgName);
                                rs({
                                    isSucc: false,
                                    err: new tsrpcProto.TsrpcError('Invalid msg name: ' + msgName, {
                                        code: 'INVALID_MSG_NAME',
                                        type: tsrpcProto.TsrpcErrorType.ClientError
                                    })
                                });
                                return [2 /*return*/];
                            }
                            opEncode = TransportDataUtil.encodeClientMsg(this.tsbuffer, service, msg, this.dataType, this.type);
                            if (!opEncode.isSucc) {
                                rs({
                                    isSucc: false,
                                    err: new tsrpcProto.TsrpcError(opEncode.errMsg, {
                                        type: tsrpcProto.TsrpcErrorType.ClientError,
                                        code: 'ENCODE_MSG_ERR'
                                    })
                                });
                                return [2 /*return*/];
                            }
                            promiseSend = this.sendData(opEncode.output, options, service.id);
                            return [4 /*yield*/, promiseSend];
                        case 2:
                            opSend = _c.sent();
                            if (opSend.err) {
                                rs({
                                    isSucc: false,
                                    err: opSend.err
                                });
                                return [2 /*return*/];
                            }
                            rs({ isSucc: true });
                            // Post Flow
                            this.flows.postSendMsgFlow.exec(pre, this.logger);
                            return [2 /*return*/];
                    }
                });
            }); });
            promise.then(function (v) {
                var _a;
                if (!v.isSucc) {
                    ((_a = _this.logger) !== null && _a !== void 0 ? _a : console).error('[SendMsgErr]', v.err);
                }
            });
            return promise;
        };
        /**
         * Add a message handler,
         * duplicate handlers to the same `msgName` would be ignored.
         * @param msgName
         * @param handler
         * @returns
         */
        // listenMsg<T extends keyof ServiceType['msg']>(msgName: T, handler: ClientMsgHandler<ServiceType, T, this>): ClientMsgHandler<ServiceType, T, this>;
        // listenMsg(msgName: RegExp, handler: ClientMsgHandler<ServiceType, keyof ServiceType['msg'], this>): ClientMsgHandler<ServiceType, keyof ServiceType['msg'], this>;
        // listenMsg(msgName: string | RegExp, handler: ClientMsgHandler<ServiceType, string, this>): ClientMsgHandler<ServiceType, string, this> {
        BaseClient.prototype.listenMsg = function (msgName, handler) {
            var _this = this;
            if (msgName instanceof RegExp) {
                Object.keys(this.serviceMap.msgName2Service).filter(function (k) { return msgName.test(k); }).forEach(function (k) {
                    _this._msgHandlers.addHandler(k, handler);
                });
            }
            else {
                this._msgHandlers.addHandler(msgName, handler);
            }
            return handler;
        };
        /**
         * Remove a message handler
         */
        BaseClient.prototype.unlistenMsg = function (msgName, handler) {
            var _this = this;
            if (msgName instanceof RegExp) {
                Object.keys(this.serviceMap.msgName2Service).filter(function (k) { return msgName.test(k); }).forEach(function (k) {
                    _this._msgHandlers.removeHandler(k, handler);
                });
            }
            else {
                this._msgHandlers.removeHandler(msgName, handler);
            }
        };
        /**
         * Remove all handlers from a message
         */
        BaseClient.prototype.unlistenMsgAll = function (msgName) {
            var _this = this;
            if (msgName instanceof RegExp) {
                Object.keys(this.serviceMap.msgName2Service).filter(function (k) { return msgName.test(k); }).forEach(function (k) {
                    _this._msgHandlers.removeAllHandlers(k);
                });
            }
            else {
                this._msgHandlers.removeAllHandlers(msgName);
            }
        };
        /**
         * Abort a pending API request, it makes the promise returned by `callApi()` neither resolved nor rejected forever.
         * @param sn - Every api request has a unique `sn` number, you can get it by `this.lastSN`
         */
        BaseClient.prototype.abort = function (sn) {
            var _a, _b;
            // Find
            var index = this._pendingApis.findIndex(function (v) { return v.sn === sn; });
            if (index === -1) {
                return;
            }
            var pendingItem = this._pendingApis[index];
            // Clear
            this._pendingApis.splice(index, 1);
            pendingItem.onReturn = undefined;
            pendingItem.isAborted = true;
            // Log
            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[ApiAbort] #".concat(pendingItem.sn, " ").concat(pendingItem.service.name));
            // onAbort
            (_b = pendingItem.onAbort) === null || _b === void 0 ? void 0 : _b.call(pendingItem);
        };
        /**
         * Abort all API requests that has the `abortKey`.
         * It makes the promise returned by `callApi` neither resolved nor rejected forever.
         * @param abortKey - The `abortKey` of options when `callApi()`, see {@link TransportOptions.abortKey}.
         * @example
         * ```ts
         * // Send API request many times
         * client.callApi('SendData', { data: 'AAA' }, { abortKey: 'Session#123' });
         * client.callApi('SendData', { data: 'BBB' }, { abortKey: 'Session#123' });
         * client.callApi('SendData', { data: 'CCC' }, { abortKey: 'Session#123' });
         *
         * // And abort the at once
         * client.abortByKey('Session#123');
         * ```
         */
        BaseClient.prototype.abortByKey = function (abortKey) {
            var _this = this;
            this._pendingApis.filter(function (v) { return v.abortKey === abortKey; }).forEach(function (v) { _this.abort(v.sn); });
        };
        /**
         * Abort all pending API requests.
         * It makes the promise returned by `callApi` neither resolved nor rejected forever.
         */
        BaseClient.prototype.abortAll = function () {
            var _this = this;
            this._pendingApis.slice().forEach(function (v) { return _this.abort(v.sn); });
        };
        /**
         * Send data (binary or text)
         * @remarks
         * Long connection: wait res by listenning `conn.onmessage`
         * Short connection: wait res by waitting response
         * @param data
         * @param options
         * @param sn
         */
        BaseClient.prototype.sendData = function (data, options, serviceId, pendingApiItem) {
            var _a, _b, _c;
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var pre, preBuf;
                return tslib_es6.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.flows.preSendDataFlow.exec({ data: data, sn: pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn }, this.logger)];
                        case 1:
                            pre = _d.sent();
                            if (!pre) {
                                return [2 /*return*/, new Promise(function (rs) { })];
                            }
                            data = pre.data;
                            if (!(data instanceof Uint8Array)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.flows.preSendBufferFlow.exec({ buf: data, sn: pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn }, this.logger)];
                        case 2:
                            preBuf = _d.sent();
                            if (!preBuf) {
                                return [2 /*return*/, new Promise(function (rs) { })];
                            }
                            data = preBuf.buf;
                            _d.label = 3;
                        case 3:
                            // debugBuf log
                            if (this.options.debugBuf) {
                                if (typeof data === 'string') {
                                    (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug('[SendText]' + (pendingApiItem ? (' #' + pendingApiItem.sn) : '') + " length=".concat(data.length), data);
                                }
                                else if (data instanceof Uint8Array) {
                                    (_b = this.logger) === null || _b === void 0 ? void 0 : _b.debug('[SendBuf]' + (pendingApiItem ? (' #' + pendingApiItem.sn) : '') + " length=".concat(data.length), data);
                                }
                                else {
                                    (_c = this.logger) === null || _c === void 0 ? void 0 : _c.debug('[SendJSON]' + (pendingApiItem ? (' #' + pendingApiItem.sn) : ''), data);
                                }
                            }
                            return [2 /*return*/, this._sendData(data, options, serviceId, pendingApiItem)];
                    }
                });
            });
        };
        // 信道可传输二进制或字符串
        BaseClient.prototype._onRecvData = function (data, pendingApiItem) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var sn, pre, pre_1, opParsed, parsed, pre_2;
                return tslib_es6.__generator(this, function (_k) {
                    switch (_k.label) {
                        case 0:
                            sn = pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn;
                            return [4 /*yield*/, this.flows.preRecvDataFlow.exec({ data: data, sn: sn }, this.logger)];
                        case 1:
                            pre = _k.sent();
                            if (!pre) {
                                return [2 /*return*/];
                            }
                            data = pre.data;
                            if (!(typeof data === 'string')) return [3 /*break*/, 2];
                            this.options.debugBuf && ((_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug('[RecvText]' + (sn ? (' #' + sn) : ''), data));
                            return [3 /*break*/, 5];
                        case 2:
                            if (!(data instanceof Uint8Array)) return [3 /*break*/, 4];
                            this.options.debugBuf && ((_b = this.logger) === null || _b === void 0 ? void 0 : _b.debug('[RecvBuf]' + (sn ? (' #' + sn) : ''), 'length=' + data.length, data));
                            return [4 /*yield*/, this.flows.preRecvBufferFlow.exec({ buf: data, sn: sn }, this.logger)];
                        case 3:
                            pre_1 = _k.sent();
                            if (!pre_1) {
                                return [2 /*return*/];
                            }
                            data = pre_1.buf;
                            return [3 /*break*/, 5];
                        case 4:
                            this.options.debugBuf && ((_c = this.logger) === null || _c === void 0 ? void 0 : _c.debug('[RecvJSON]' + (sn ? (' #' + sn) : ''), data));
                            _k.label = 5;
                        case 5:
                            opParsed = TransportDataUtil.parseServerOutout(this.tsbuffer, this.serviceMap, data, pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.service.id);
                            if (!opParsed.isSucc) {
                                (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error('ParseServerOutputError: ' + opParsed.errMsg);
                                if (data instanceof Uint8Array) {
                                    (_e = this.logger) === null || _e === void 0 ? void 0 : _e.error('Please check the version of serviceProto between server and client');
                                }
                                if (pendingApiItem) {
                                    (_f = pendingApiItem.onReturn) === null || _f === void 0 ? void 0 : _f.call(pendingApiItem, {
                                        isSucc: false,
                                        err: new tsrpcProto.TsrpcError('Parse server output error', { type: tsrpcProto.TsrpcErrorType.ServerError })
                                    });
                                }
                                return [2 /*return*/];
                            }
                            parsed = opParsed.result;
                            if (!(parsed.type === 'api')) return [3 /*break*/, 6];
                            sn = sn !== null && sn !== void 0 ? sn : parsed.sn;
                            // call ApiReturn listeners
                            (_h = (_g = this._pendingApis.find(function (v) { return v.sn === sn; })) === null || _g === void 0 ? void 0 : _g.onReturn) === null || _h === void 0 ? void 0 : _h.call(_g, parsed.ret);
                            return [3 /*break*/, 9];
                        case 6:
                            if (!(parsed.type === 'msg')) return [3 /*break*/, 9];
                            this.options.logMsg && ((_j = this.logger) === null || _j === void 0 ? void 0 : _j.log("[RecvMsg] ".concat(parsed.service.name), parsed.msg));
                            return [4 /*yield*/, this.flows.preRecvMsgFlow.exec({ msgName: parsed.service.name, msg: parsed.msg }, this.logger)];
                        case 7:
                            pre_2 = _k.sent();
                            if (!pre_2) {
                                return [2 /*return*/];
                            }
                            this._msgHandlers.forEachHandler(pre_2.msgName, this.logger, pre_2.msg, pre_2.msgName);
                            // Post Flow
                            return [4 /*yield*/, this.flows.postRecvMsgFlow.exec(pre_2, this.logger)];
                        case 8:
                            // Post Flow
                            _k.sent();
                            _k.label = 9;
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param sn
         * @param timeout
         * @returns `undefined` 代表 canceled
         */
        BaseClient.prototype._waitApiReturn = function (pendingItem, timeout) {
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_es6.__generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (rs) {
                            // Timeout
                            var timer;
                            if (timeout) {
                                timer = setTimeout(function () {
                                    timer = undefined;
                                    _this._pendingApis.removeOne(function (v) { return v.sn === pendingItem.sn; });
                                    rs({
                                        isSucc: false,
                                        err: new tsrpcProto.TsrpcError('Request Timeout', {
                                            type: tsrpcProto.TsrpcErrorType.NetworkError,
                                            code: 'TIMEOUT'
                                        })
                                    });
                                }, timeout);
                            }
                            // Listener (trigger by `this._onRecvBuf`)
                            pendingItem.onReturn = function (ret) {
                                if (timer) {
                                    clearTimeout(timer);
                                    timer = undefined;
                                }
                                _this._pendingApis.removeOne(function (v) { return v.sn === pendingItem.sn; });
                                rs(ret);
                            };
                        })];
                });
            });
        };
        return BaseClient;
    }());
    var defaultBaseClientOptions = {
        logLevel: 'debug',
        logApi: true,
        logMsg: true,
        json: false,
        timeout: 15000,
        debugBuf: false
    };

    /**
     * Base HTTP Client
     */
    var BaseHttpClient = /** @class */ (function (_super) {
        tslib_es6.__extends(BaseHttpClient, _super);
        function BaseHttpClient(proto, http, options) {
            var _this = this;
            var _a;
            _this = _super.call(this, proto, tslib_es6.__assign(tslib_es6.__assign({}, defaultBaseHttpClientOptions), options)) || this;
            _this.type = 'SHORT';
            _this._http = http;
            _this._jsonServer = _this.options.server + (_this.options.server.endsWith('/') ? '' : '/');
            (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.log('TSRPC HTTP Client :', _this.options.server);
            return _this;
        }
        BaseHttpClient.prototype._sendData = function (data, options, serviceId, pendingApiItem) {
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var promise;
                var _this = this;
                return tslib_es6.__generator(this, function (_a) {
                    promise = (function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
                        var service, urlSearch, url, _a, fetchPromise, abort, fetchRes;
                        return tslib_es6.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    service = this.serviceMap.id2Service[serviceId];
                                    urlSearch = service.type === 'msg' ? '?type=msg' : '';
                                    url = typeof data === 'string' ? (this._jsonServer + service.name + urlSearch) : this.options.server;
                                    _a = this._http.fetch({
                                        url: url,
                                        data: data,
                                        method: 'POST',
                                        timeout: options.timeout || this.options.timeout,
                                        headers: { 'Content-Type': typeof data === 'string' ? 'application/json' : 'application/octet-stream' },
                                        transportOptions: options,
                                        responseType: typeof data === 'string' ? 'text' : 'arraybuffer',
                                    }), fetchPromise = _a.promise, abort = _a.abort;
                                    if (pendingApiItem) {
                                        pendingApiItem.onAbort = function () {
                                            abort();
                                        };
                                    }
                                    // Aborted
                                    if (pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.isAborted) {
                                        return [2 /*return*/, new Promise(function (rs) { })];
                                    }
                                    return [4 /*yield*/, fetchPromise];
                                case 1:
                                    fetchRes = _b.sent();
                                    if (!fetchRes.isSucc) {
                                        return [2 /*return*/, { err: fetchRes.err }];
                                    }
                                    return [2 /*return*/, { res: fetchRes.res }];
                            }
                        });
                    }); })();
                    promise.then(function (v) {
                        // Msg 不需要 onRecvData
                        if (pendingApiItem && v.res) {
                            _this._onRecvData(v.res, pendingApiItem);
                        }
                    });
                    // Finally
                    promise.catch(function (e) { }).then(function () {
                        if (pendingApiItem) {
                            pendingApiItem.onAbort = undefined;
                        }
                    });
                    return [2 /*return*/, promise];
                });
            });
        };
        return BaseHttpClient;
    }(BaseClient));
    var defaultBaseHttpClientOptions = tslib_es6.__assign(tslib_es6.__assign({}, defaultBaseClientOptions), { server: 'http://localhost:3000', 
        // logger: new TerminalColorLogger(),
        jsonPrune: true });

    /**
     * WebSocket Client for TSRPC.
     * It uses native `WebSocket` of browser.
     * @typeParam ServiceType - `ServiceType` from generated `proto.ts`
     */
    var BaseWsClient = /** @class */ (function (_super) {
        tslib_es6.__extends(BaseWsClient, _super);
        function BaseWsClient(proto, wsp, options) {
            var _this = this;
            var _a;
            _this = _super.call(this, proto, tslib_es6.__assign(tslib_es6.__assign({}, defaultBaseWsClientOptions), options)) || this;
            _this.type = 'LONG';
            _this._onWsOpen = function () {
                var _a;
                if (!_this._connecting) {
                    return;
                }
                _this._status = exports.WsClientStatus.Opened;
                _this._connecting.rs({ isSucc: true });
                _this._connecting = undefined;
                (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.log('WebSocket connection to server successful');
                _this.flows.postConnectFlow.exec({}, _this.logger);
                // First heartbeat
                if (_this.options.heartbeat) {
                    _this._heartbeat();
                }
            };
            _this._onWsClose = function (code, reason) {
                var _a, _b, _c;
                // 防止重复执行
                if (_this._status === exports.WsClientStatus.Closed) {
                    return;
                }
                var isManual = !!_this._rsDisconnecting;
                var isConnectedBefore = _this.isConnected || isManual;
                _this._status = exports.WsClientStatus.Closed;
                // 连接中，返回连接失败
                if (_this._connecting) {
                    _this._connecting.rs({
                        isSucc: false,
                        errMsg: "Failed to connect to WebSocket server: ".concat(_this.options.server)
                    });
                    _this._connecting = undefined;
                    (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.error("Failed to connect to WebSocket server: ".concat(_this.options.server));
                }
                // Clear heartbeat
                if (_this._pendingHeartbeat) {
                    clearTimeout(_this._pendingHeartbeat.timeoutTimer);
                    _this._pendingHeartbeat = undefined;
                }
                if (_this._nextHeartbeatTimer) {
                    clearTimeout(_this._nextHeartbeatTimer);
                }
                // disconnect中，返回成功
                if (_this._rsDisconnecting) {
                    _this._rsDisconnecting();
                    _this._rsDisconnecting = undefined;
                    (_b = _this.logger) === null || _b === void 0 ? void 0 : _b.log('Disconnected succ', "code=".concat(code, " reason=").concat(reason));
                }
                // 非 disconnect 中，从连接中意外断开
                else if (isConnectedBefore) {
                    (_c = _this.logger) === null || _c === void 0 ? void 0 : _c.log("Lost connection to ".concat(_this.options.server), "code=".concat(code, " reason=").concat(reason));
                }
                // postDisconnectFlow，仅从连接状态断开时触发
                if (isConnectedBefore) {
                    _this.flows.postDisconnectFlow.exec({
                        reason: reason,
                        isManual: isManual
                    }, _this.logger);
                }
                // 对所有请求中的 API 报错
                _this._pendingApis.slice().forEach(function (v) {
                    var _a;
                    (_a = v.onReturn) === null || _a === void 0 ? void 0 : _a.call(v, {
                        isSucc: false,
                        err: new tsrpcProto.TsrpcError(reason || 'Lost connection to server', { type: tsrpcProto.TsrpcErrorType.NetworkError, code: 'LOST_CONN' })
                    });
                });
            };
            _this._onWsError = function (e) {
                var _a, _b;
                (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.error('[WebSocket Error]', e);
                // 连接中，返回连接失败
                if (_this._connecting) {
                    _this._connecting.rs({
                        isSucc: false,
                        errMsg: "Failed to connect to WebSocket server: ".concat(_this.options.server)
                    });
                    _this._connecting = undefined;
                    (_b = _this.logger) === null || _b === void 0 ? void 0 : _b.error("Failed to connect to WebSocket server: ".concat(_this.options.server));
                }
            };
            _this._onWsMessage = function (data) {
                if (_this._status !== exports.WsClientStatus.Opened) {
                    return;
                }
                // 心跳包回包
                if (data instanceof Uint8Array && data.length === TransportDataUtil.HeartbeatPacket.length && data.every(function (v, i) { return v === TransportDataUtil.HeartbeatPacket[i]; })) {
                    _this._onHeartbeatAnswer(data);
                    return;
                }
                _this._onRecvData(data);
            };
            // #region Heartbeat
            /**
             * Last latency time (ms) of heartbeat test
             */
            _this.lastHeartbeatLatency = 0;
            // #endregion
            _this._status = exports.WsClientStatus.Closed;
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
        BaseWsClient.prototype._sendData = function (data) {
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_es6.__generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (rs) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
                            return tslib_es6.__generator(this, function (_a) {
                                if (!this.isConnected) {
                                    rs({
                                        err: new tsrpcProto.TsrpcError('WebSocket is not connected', {
                                            code: 'WS_NOT_OPEN',
                                            type: tsrpcProto.TsrpcError.Type.ClientError
                                        })
                                    });
                                    return [2 /*return*/];
                                }
                                // Do Send
                                rs(this._wsp.send(data));
                                return [2 /*return*/];
                            });
                        }); })];
                });
            });
        };
        /**
         * Send a heartbeat packet
         */
        BaseWsClient.prototype._heartbeat = function () {
            var _this = this;
            var _a;
            if (this._pendingHeartbeat || this._status !== exports.WsClientStatus.Opened || !this.options.heartbeat) {
                return;
            }
            this._pendingHeartbeat = {
                startTime: Date.now(),
                timeoutTimer: setTimeout(function () {
                    var _a;
                    _this._pendingHeartbeat = undefined;
                    // heartbeat timeout, disconnect if still connected
                    (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.error('[Heartbeat] Heartbeat timeout, the connection disconnected automatically.');
                    if (_this._status === exports.WsClientStatus.Opened) {
                        _this._wsp.close(3000, 'Heartbeat timeout');
                        _this._wsp.options.onClose(3000, 'Heartbeat timeout');
                    }
                }, this.options.heartbeat.timeout)
            };
            this.options.debugBuf && ((_a = this.logger) === null || _a === void 0 ? void 0 : _a.log('[Heartbeat] Send ping', TransportDataUtil.HeartbeatPacket));
            this._sendData(TransportDataUtil.HeartbeatPacket);
        };
        BaseWsClient.prototype._onHeartbeatAnswer = function (data) {
            var _this = this;
            var _a;
            if (!this._pendingHeartbeat || this._status !== exports.WsClientStatus.Opened || !this.options.heartbeat) {
                return;
            }
            // heartbeat succ
            this.lastHeartbeatLatency = Date.now() - this._pendingHeartbeat.startTime;
            this.options.debugBuf && ((_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[Heartbeat] Recv pong, latency=".concat(this.lastHeartbeatLatency, "ms"), data));
            clearTimeout(this._pendingHeartbeat.timeoutTimer);
            this._pendingHeartbeat = undefined;
            // next heartbeat timer
            this._nextHeartbeatTimer = setTimeout(function () {
                _this._heartbeat();
            }, this.options.heartbeat.interval);
        };
        Object.defineProperty(BaseWsClient.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseWsClient.prototype, "isConnected", {
            get: function () {
                return this._status === exports.WsClientStatus.Opened;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Start connecting, you must connect first before `callApi()` and `sendMsg()`.
         * @throws never
         */
        BaseWsClient.prototype.connect = function () {
            var _a, _b;
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var pre, promiseConnect;
                var _this = this;
                return tslib_es6.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            // 已连接成功
                            if (this.isConnected) {
                                return [2 /*return*/, { isSucc: true }];
                            }
                            // 已连接中
                            if (this._connecting) {
                                return [2 /*return*/, this._connecting.promise];
                            }
                            return [4 /*yield*/, this.flows.preConnectFlow.exec({}, this.logger)];
                        case 1:
                            pre = _c.sent();
                            // Pre return
                            if (pre === null || pre === void 0 ? void 0 : pre.return) {
                                return [2 /*return*/, pre.return];
                            }
                            // Canceled
                            if (!pre) {
                                return [2 /*return*/, new Promise(function (rs) { })];
                            }
                            try {
                                this._wsp.connect(this.options.server, [this.options.json ? 'text' : 'buffer']);
                            }
                            catch (e) {
                                (_a = this.logger) === null || _a === void 0 ? void 0 : _a.error(e);
                                return [2 /*return*/, { isSucc: false, errMsg: e.message }];
                            }
                            this._status = exports.WsClientStatus.Opening;
                            (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("Start connecting ".concat(this.options.server, "..."));
                            this._connecting = {};
                            promiseConnect = new Promise(function (rs) {
                                _this._connecting.rs = rs;
                            });
                            this._connecting.promise = promiseConnect;
                            return [2 /*return*/, promiseConnect];
                    }
                });
            });
        };
        /**
         * Disconnect immediately
         * @throws never
         */
        BaseWsClient.prototype.disconnect = function (code, reason) {
            var _a;
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_es6.__generator(this, function (_b) {
                    if (this._status === exports.WsClientStatus.Closed) {
                        return [2 /*return*/];
                    }
                    this._status = exports.WsClientStatus.Closing;
                    (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log('Start disconnecting...');
                    return [2 /*return*/, new Promise(function (rs) {
                            _this._rsDisconnecting = rs;
                            // 兼容 Cocos Creator 的原生实现
                            if (code === undefined && reason === undefined) {
                                _this._wsp.close();
                            }
                            else if (reason === undefined) {
                                _this._wsp.close(code);
                            }
                            else {
                                _this._wsp.close(code, reason);
                            }
                        })];
                });
            });
        };
        return BaseWsClient;
    }(BaseClient));
    var defaultBaseWsClientOptions = tslib_es6.__assign(tslib_es6.__assign({}, defaultBaseClientOptions), { server: 'ws://localhost:3000' });
    exports.WsClientStatus = void 0;
    (function (WsClientStatus) {
        WsClientStatus["Opening"] = "OPENING";
        WsClientStatus["Opened"] = "OPENED";
        WsClientStatus["Closing"] = "CLOSING";
        WsClientStatus["Closed"] = "CLOSED";
    })(exports.WsClientStatus || (exports.WsClientStatus = {}));

    exports.BaseClient = BaseClient;
    exports.BaseHttpClient = BaseHttpClient;
    exports.BaseWsClient = BaseWsClient;
    exports.Counter = Counter;
    exports.Flow = Flow;
    exports.MsgHandlerManager = MsgHandlerManager;
    exports.ServiceMapUtil = ServiceMapUtil;
    exports.TransportDataUtil = TransportDataUtil;
    exports.defaultBaseClientOptions = defaultBaseClientOptions;
    exports.defaultBaseHttpClientOptions = defaultBaseHttpClientOptions;
    exports.defaultBaseWsClientOptions = defaultBaseWsClientOptions;
    exports.getCustomObjectIdTypes = getCustomObjectIdTypes;
    });

    var index$5 = unwrapExports(tsrpcBaseClient);
    var tsrpcBaseClient_1 = tsrpcBaseClient.WsClientStatus;
    var tsrpcBaseClient_2 = tsrpcBaseClient.BaseClient;
    var tsrpcBaseClient_3 = tsrpcBaseClient.BaseHttpClient;
    var tsrpcBaseClient_4 = tsrpcBaseClient.BaseWsClient;
    var tsrpcBaseClient_5 = tsrpcBaseClient.Counter;
    var tsrpcBaseClient_6 = tsrpcBaseClient.Flow;
    var tsrpcBaseClient_7 = tsrpcBaseClient.MsgHandlerManager;
    var tsrpcBaseClient_8 = tsrpcBaseClient.ServiceMapUtil;
    var tsrpcBaseClient_9 = tsrpcBaseClient.TransportDataUtil;
    var tsrpcBaseClient_10 = tsrpcBaseClient.defaultBaseClientOptions;
    var tsrpcBaseClient_11 = tsrpcBaseClient.defaultBaseHttpClientOptions;
    var tsrpcBaseClient_12 = tsrpcBaseClient.defaultBaseWsClientOptions;
    var tsrpcBaseClient_13 = tsrpcBaseClient.getCustomObjectIdTypes;

    var tsrpcBrowser = createCommonjsModule(function (module, exports) {
    /*!
     * TSRPC Browser v3.4.5
     * -----------------------------------------
     * Copyright (c) King Wang.
     * MIT License
     * https://github.com/k8w/tsrpc-browser
     */
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });














































































    /**
     * @internal
     */
    var HttpProxy = /** @class */ (function () {
        function HttpProxy() {
        }
        HttpProxy.prototype.fetch = function (options) {
            var _this = this;
            var _a;
            var rs;
            var promise = new Promise(function (_rs) {
                rs = _rs;
            });
            var xhr = new XMLHttpRequest();
            if (typeof navigator !== 'undefined' && ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) === null || _a === void 0 ? void 0 : _a.indexOf('MSIE 8.0;')) > -1) {
                //IE8 不支持onload onabort onerror事件
                xhr.onreadystatechange = function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
                    return tslib_es6.__generator(this, function (_a) {
                        if (xhr.readyState == 4) {
                            //Network Error
                            if (xhr.status == 0 || (xhr.response == null && xhr.responseText == null)) {
                                rs({
                                    isSucc: false,
                                    err: new tsrpcProto.TsrpcError('Network Error', {
                                        type: tsrpcProto.TsrpcError.Type.NetworkError,
                                        httpCode: xhr.status
                                    })
                                });
                                return [2 /*return*/];
                            }
                            //IE9 wrongURL 会返回12029
                            if (xhr.status == 12029) {
                                rs({
                                    isSucc: false,
                                    err: new tsrpcProto.TsrpcError({
                                        message: 'Network Error',
                                        type: tsrpcProto.TsrpcError.Type.NetworkError,
                                        httpCode: xhr.status
                                    })
                                });
                                return [2 /*return*/];
                            }
                            // Res
                            rs({
                                isSucc: true,
                                res: options.responseType === 'text' ? xhr.responseText : new Uint8Array(xhr.response)
                            });
                        }
                        return [2 /*return*/];
                    });
                }); };
            }
            else {
                xhr.onerror = function () {
                    rs({
                        isSucc: false,
                        err: new tsrpcProto.TsrpcError({
                            message: 'Network Error',
                            type: tsrpcProto.TsrpcError.Type.NetworkError,
                            httpCode: xhr.status
                        })
                    });
                };
                // 有的平台 超时不触发onerror
                xhr.ontimeout = function () {
                    rs({
                        isSucc: false,
                        err: new tsrpcProto.TsrpcError({
                            message: 'Request Timeout',
                            type: tsrpcProto.TsrpcError.Type.NetworkError,
                            code: 'TIMEOUT'
                        })
                    });
                };
                // Res
                xhr.onload = function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
                    return tslib_es6.__generator(this, function (_a) {
                        if (xhr.status === 200 || xhr.status === 500) {
                            rs({
                                isSucc: true,
                                res: xhr.response && (options.responseType === 'text' ? xhr.responseText : new Uint8Array(xhr.response))
                            });
                        }
                        else {
                            rs({
                                isSucc: false,
                                err: new tsrpcProto.TsrpcError({
                                    message: 'HTTP Error ' + xhr.status,
                                    type: tsrpcProto.TsrpcError.Type.ServerError,
                                    httpCode: xhr.status
                                })
                            });
                        }
                        return [2 /*return*/];
                    });
                }); };
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

    /**
     * HTTP Client for TSRPC.
     * It uses XMLHttpRequest to send requests.
     * @typeParam ServiceType - `ServiceType` from generated `proto.ts`
     */
    var HttpClient = /** @class */ (function (_super) {
        tslib_es6.__extends(HttpClient, _super);
        function HttpClient(proto, options) {
            var httpProxy = new HttpProxy;
            return _super.call(this, proto, httpProxy, tslib_es6.__assign(tslib_es6.__assign({}, defaultHttpClientOptions), options)) || this;
        }
        HttpClient.prototype.callApi = function (apiName, req, options) {
            if (options === void 0) { options = {}; }
            return _super.prototype.callApi.call(this, apiName, req, options);
        };
        HttpClient.prototype.sendMsg = function (msgName, msg, options) {
            if (options === void 0) { options = {}; }
            return _super.prototype.sendMsg.call(this, msgName, msg, options);
        };
        return HttpClient;
    }(tsrpcBaseClient.BaseHttpClient));
    var defaultHttpClientOptions = tslib_es6.__assign(tslib_es6.__assign({}, tsrpcBaseClient.defaultBaseHttpClientOptions), { customObjectIdClass: String });

    /**
     * @internal
     */
    var WebSocketProxy = /** @class */ (function () {
        function WebSocketProxy() {
        }
        WebSocketProxy.prototype.connect = function (server, protocols) {
            var _this = this;
            this._ws = new WebSocket(server, protocols);
            this._ws.binaryType = 'arraybuffer';
            this._ws.onopen = this.options.onOpen;
            this._ws.onerror = this.options.onError;
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
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                var sendData, buf;
                return tslib_es6.__generator(this, function (_a) {
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
                        return [2 /*return*/, {}];
                    }
                    catch (err) {
                        return [2 /*return*/, {
                                err: new tsrpcProto.TsrpcError('Network Error', {
                                    code: 'SEND_BUF_ERR',
                                    type: tsrpcProto.TsrpcError.Type.NetworkError,
                                    innerErr: err
                                })
                            }];
                    }
                    return [2 /*return*/];
                });
            });
        };
        return WebSocketProxy;
    }());

    /**
     * Client for TSRPC WebSocket Server.
     * @typeParam ServiceType - `ServiceType` from generated `proto.ts`
     */
    var WsClient = /** @class */ (function (_super) {
        tslib_es6.__extends(WsClient, _super);
        function WsClient(proto, options) {
            var wsp = new WebSocketProxy();
            return _super.call(this, proto, wsp, tslib_es6.__assign(tslib_es6.__assign({}, defaultWsClientOptions), options)) || this;
        }
        return WsClient;
    }(tsrpcBaseClient.BaseWsClient));
    var defaultWsClientOptions = tslib_es6.__assign(tslib_es6.__assign({}, tsrpcBaseClient.defaultBaseWsClientOptions), { customObjectIdClass: String });

    exports.HttpClient = HttpClient;
    exports.WsClient = WsClient;
    Object.keys(tsrpcProto).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return tsrpcProto[k]; }
        });
    });
    });

    var index$6 = unwrapExports(tsrpcBrowser);
    var tsrpcBrowser_1 = tsrpcBrowser.HttpClient;
    var tsrpcBrowser_2 = tsrpcBrowser.WsClient;

    let client = new tsrpcBrowser_1(serviceProto, {
        server: 'http://localhost:3000',
        logger: console
    });
    function test$1() {
        return __awaiter(this, void 0, void 0, function* () {
            yield client.callApi('AddData', {
                content: 'AAAAA'
            });
            let ret = yield client.callApi('GetData', {});
            console.log('ret', ret);
        });
    }
    test$1();
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
