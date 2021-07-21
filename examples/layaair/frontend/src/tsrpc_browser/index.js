/*!
 * TSRPC Browser v3.0.5-dev.0
 * -----------------------------------------
 * Copyright (c) King Wang.
 * MIT License
 * https://github.com/k8w/tsrpc-browser
 */
!Array.prototype.__k8w_extended && Object.defineProperties(Array.prototype, {
  remove: {
    value: function value(filter) {
      if (typeof filter == 'function') {
        for (var i = this.length - 1; i > -1; --i) {
          filter(this[i], i, this) && this.splice(i, 1);
        }
      } else {
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
      } else {
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
      } else {
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
      } else {
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
          } else if (va < vb) {
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
          } else if (va < vb) {
            return 1;
          }
        }

        return 0;
      });
    }
  },
  binarySearch: {
    value: function value(_value, keyMapper) {
      var low = 0,
          high = this.length - 1;

      while (low <= high) {
        var mid = (high + low) / 2 | 0;
        var midValue = keyMapper ? keyMapper(this[mid]) : this[mid];

        if (_value === midValue) {
          return mid;
        } else if (_value > midValue) {
          low = mid + 1;
        } else if (_value < midValue) {
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

      var low = 0,
          high = this.length - 1;
      var mid = NaN;
      var itemValue = keyMapper ? keyMapper(item) : item;

      while (low <= high) {
        mid = (high + low) / 2 | 0;
        var midValue = keyMapper ? keyMapper(this[mid]) : this[mid];

        if (itemValue === midValue) {
          if (unique) {
            return mid;
          } else {
            break;
          }
        } else if (itemValue > midValue) {
          low = mid + 1;
        } else if (itemValue < midValue) {
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
    "S+": this.getMilliseconds() //毫秒

  };
  if (/(y+)/.test(formatString)) formatString = formatString.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(formatString)) formatString = formatString.replace(RegExp.$1, repeat('0', Math.max(RegExp.$1.length - ('' + o[k]).length, 0)) + o[k]);
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
  } else {
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
      //只处理自身的key 这里可能来自于外部prototype的扩展
      if (!source.hasOwnProperty(skey)) {
        continue;
      }

      if (source[skey] instanceof Date) {
        //Date类型 要克隆一份 保证深拷贝
        target[skey] = new Date(source[skey]);
        continue;
      } else if (_typeof(target[skey]) == 'object' && target[skey] != null && _typeof(source[skey]) == 'object' && source[skey] != null) {
        // 两个都是Object 递归merge之
        Object.merge(target[skey], source[skey]);
      } else {
        if (Array.isArray(source[skey])) {
          // 数组merge后还是数组
          target[skey] = Object.merge([], source[skey]);
        } else if (_typeof(source[skey]) == 'object' && source[skey] !== null) {
          // Object要克隆一份以确保深拷贝
          target[skey] = Object.merge({}, source[skey]);
        } else {
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

if (typeof window != 'undefined' && !window.console) {
  window.console = {};

  console.log = console.debug = console.info = console.warn = console.error = console.time = console.timeEnd = function () {};
} //应对某些浏览器没有console.debug的情况


if (!console.debug) {
  console.debug = console.log;
}

/*! *****************************************************************************
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

/*!
 * TSRPC Proto v1.3.4
 * -----------------------------------------
 * Copyright (c) Kingworks Corporation.
 * MIT License
 * https://github.com/k8w/tsrpc-proto
 */
var TsrpcErrorType;

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

var TsrpcError =
/** @class */
function () {
  function TsrpcError(dataOrMessage, data) {
    var _a;

    if (typeof dataOrMessage === 'string') {
      this.message = dataOrMessage;
      this.type = (_a = data === null || data === void 0 ? void 0 : data.type) !== null && _a !== void 0 ? _a : TsrpcErrorType.ApiError;

      __assign(this, data);
    } else {
      __assign(this, dataOrMessage);
    }
  }

  TsrpcError.prototype.toString = function () {
    return "[TSRPC " + this.type + "]: " + this.message;
  };

  TsrpcError.Type = TsrpcErrorType;
  return TsrpcError;
}();

/*!
 * TSBuffer Schema v2.0.2
 * -----------------------------------------
 * MIT LICENSE
 * KingWorks (C) Copyright 2021
 * https://github.com/k8w/tsbuffer-schema
 */

/**
 * Enum for every possible `TSBufferSchema['type']`
 */
var SchemaType;

(function (SchemaType) {
  // #region 确定的TypeScript的类型
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
  SchemaType["Date"] = "Date"; // #endregion
  // #region 非TypeScript基本类型，临时过渡用

  SchemaType["Pick"] = "Pick";
  SchemaType["Partial"] = "Partial";
  SchemaType["Omit"] = "Omit";
  SchemaType["Overwrite"] = "Overwrite"; // #endregion
})(SchemaType || (SchemaType = {}));

/** @public */

var ProtoHelper =
/** @class */
function () {
  function ProtoHelper(proto) {
    this._schemaWithUuids = [];
    this._unionPropertiesCache = {};
    this._flatInterfaceSchemaCache = {};
    this.proto = proto;
  }
  /** 将ReferenceTYpeSchema层层转换为它最终实际引用的类型 */


  ProtoHelper.prototype.parseReference = function (schema) {
    // Reference
    if (schema.type === SchemaType.Reference) {
      var parsedSchema = this.proto[schema.target];

      if (!parsedSchema) {
        throw new Error("Cannot find reference target: " + schema.target);
      }

      if (this.isTypeReference(parsedSchema)) {
        return this.parseReference(parsedSchema);
      } else {
        return parsedSchema;
      }
    } // IndexedAccess
    else if (schema.type === SchemaType.IndexedAccess) {
        if (!this.isInterface(schema.objectType)) {
          throw new Error("Error objectType: " + schema.objectType.type);
        } // find prop item


        var flat = this.getFlatInterfaceSchema(schema.objectType);
        var propItem = flat.properties.find(function (v) {
          return v.name === schema.index;
        });
        var propType = void 0;

        if (propItem) {
          propType = propItem.type;
        } else {
          if (flat.indexSignature) {
            propType = flat.indexSignature.type;
          } else {
            throw new Error("Error index: " + schema.index);
          }
        } // optional -> | undefined


        if (propItem && propItem.optional && ( // 引用的字段是optional
        propItem.type.type !== SchemaType.Union // 自身不为Union
        // 或自身为Union，但没有undefined成员条件
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
      } else {
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
    } else {
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
  /**
   * unionProperties: 在Union或Intersection类型中，出现在任意member中的字段
   */


  ProtoHelper.prototype._addUnionProperties = function (unionProperties, schemas) {
    for (var i = 0, len = schemas.length; i < len; ++i) {
      var schema = this.parseReference(schemas[i]); // Interface及其Ref 加入interfaces

      if (this.isInterface(schema)) {
        var flat = this.getFlatInterfaceSchema(schema);
        flat.properties.forEach(function (v) {
          unionProperties.binaryInsert(v.name, true);
        });

        if (flat.indexSignature) {
          var key = "[[" + flat.indexSignature.keyType + "]]";
          unionProperties.binaryInsert(key, true);
        }
      } // Intersection/Union 递归合并unionProperties
      else if (schema.type === SchemaType.Intersection || schema.type === SchemaType.Union) {
          this._addUnionProperties(unionProperties, schema.members.map(function (v) {
            return v.type;
          }));
        }
    }

    return unionProperties;
  };
  /**
   * 将unionProperties 扩展到 InterfaceTypeSchema中（optional的any类型）
   * 以此来跳过对它们的检查（用于Intersection/Union）
   */


  ProtoHelper.prototype.applyUnionProperties = function (schema, unionProperties) {
    var newSchema = __assign(__assign({}, schema), {
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
      } else if (prop === '[[Number]]') {
        newSchema.indexSignature = newSchema.indexSignature || {
          keyType: SchemaType.Number,
          type: {
            type: SchemaType.Any
          }
        };
      } else if (!schema.properties.find(function (v) {
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
  /**
   * 将interface及其引用转换为展平的schema
   */


  ProtoHelper.prototype.getFlatInterfaceSchema = function (schema) {
    var uuid = this._getSchemaUuid(schema); // from cache


    if (this._flatInterfaceSchemaCache[uuid]) {
      return this._flatInterfaceSchemaCache[uuid];
    }

    if (this.isTypeReference(schema)) {
      var parsed = this.parseReference(schema);

      if (parsed.type !== SchemaType.Interface) {
        throw new Error("Cannot flatten non interface type: " + parsed.type);
      }

      this._flatInterfaceSchemaCache[uuid] = this.getFlatInterfaceSchema(parsed);
    } else if (schema.type === SchemaType.Interface) {
      this._flatInterfaceSchemaCache[uuid] = this._flattenInterface(schema);
    } else {
      this._flatInterfaceSchemaCache[uuid] = this._flattenMappedType(schema);
    }

    return this._flatInterfaceSchemaCache[uuid];
  };
  /**
   * 展平interface
   */


  ProtoHelper.prototype._flattenInterface = function (schema) {
    var properties = {};
    var indexSignature; // 自身定义的properties和indexSignature优先级最高

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
    } // extends的优先级次之，补全没有定义的字段


    if (schema.extends) {
      for (var _b = 0, _c = schema.extends; _b < _c.length; _b++) {
        var extend = _c[_b]; // 解引用

        var parsedExtRef = this.parseReference(extend.type);

        if (parsedExtRef.type !== SchemaType.Interface) {
          throw new Error('SchemaError: extends must from interface but from ' + parsedExtRef.type);
        } // 递归展平extends


        var flatenExtendsSchema = this.getFlatInterfaceSchema(parsedExtRef); // properties

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
        } // indexSignature


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
  /** 将MappedTypeSchema转换为展平的Interface
   */


  ProtoHelper.prototype._flattenMappedType = function (schema) {
    // target 解引用
    var target;

    if (this.isTypeReference(schema.target)) {
      var parsed = this.parseReference(schema.target);
      target = parsed;
    } else {
      target = schema.target;
    }

    var flatTarget; // 内层仍然为MappedType 递归之

    if (target.type === SchemaType.Pick || target.type === SchemaType.Partial || target.type === SchemaType.Omit || target.type === SchemaType.Overwrite) {
      flatTarget = this._flattenMappedType(target);
    } else if (target.type === SchemaType.Interface) {
      flatTarget = this._flattenInterface(target);
    } else {
      throw new Error("Invalid target.type: " + target.type);
    } // 开始执行Mapped逻辑


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
        } else if (flatTarget.indexSignature) {
          properties.push({
            id: properties.length,
            name: key,
            type: flatTarget.indexSignature.type
          });
        } else {
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
    } else if (schema.type === SchemaType.Partial) {
      for (var _b = 0, _c = flatTarget.properties; _b < _c.length; _b++) {
        var v = _c[_b];
        v.optional = true;
      }

      return flatTarget;
    } else if (schema.type === SchemaType.Omit) {
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
    } else if (schema.type === SchemaType.Overwrite) {
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
    } else {
      throw new Error("Unknown type: " + schema.type);
    }
  };

  ProtoHelper.prototype.parseMappedType = function (schema) {
    var parents = [];
    var child = schema;

    do {
      parents.push(child);
      child = this.parseReference(child.target);
    } while (child.type === SchemaType.Pick || child.type === SchemaType.Omit || child.type === SchemaType.Partial || child.type === SchemaType.Overwrite); // Final


    if (child.type === SchemaType.Interface) {
      return child;
    } // PickOmit<A|B> === PickOmit<A> | PickOmit<B>
    else if (child.type === SchemaType.Union) {
        var newSchema = {
          type: SchemaType.Union,
          members: child.members.map(function (v) {
            // 从里面往外装
            var type = v.type;

            for (var i = parents.length - 1; i > -1; --i) {
              var parent_1 = parents[i];
              type = __assign(__assign({}, parent_1), {
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
      } else {
        throw new Error("Unsupported pattern " + schema.type + "<" + child.type + ">");
      }
  };

  return ProtoHelper;
}();

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
})(ErrorType || (ErrorType = {}));
/** @internal */


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
}, // Union
_a[ErrorType.UnionTypesNotMatch] = function (value, types) {
  return "`" + stringify(value) + "` is not matched to `" + types.join(' | ') + "`";
}, _a[ErrorType.UnionMembersNotMatch] = function (memberErrors) {
  return "No union member matched, detail:\n" + memberErrors.map(function (v, i) {
    return "  <" + i + "> " + v.errMsg;
  }).join('\n');
}, _a);
/** @internal */

function stringify(value) {
  if (typeof value === 'string') {
    var output = JSON.stringify(value);
    return "'" + output.substr(1, output.length - 2) + "'";
  }

  return JSON.stringify(value);
}
/** @internal */


var ValidateResultError =
/** @class */
function () {
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
    } else {
      return errMsg;
    }
  };

  return ValidateResultError;
}();
/** @internal  */


var ValidateResultUtil =
/** @class */
function () {
  function ValidateResultUtil() {}

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
      } else {
        (_a = error.error.inner.property).unshift.apply(_a, property);
      }
    } else {
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
/**
 * TSBuffer Schema Validator
 * @public
 */

var TSBufferValidator =
/** @class */
function () {
  function TSBufferValidator(proto, options) {
    /**
     * Default options
     */
    this.options = {
      excessPropertyChecks: true,
      strictNullChecks: true,
      cloneProto: true
    };

    if (options) {
      this.options = __assign(__assign({}, this.options), options);
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
    var schemaId; // Get schema

    if (typeof schemaOrId === 'string') {
      schemaId = schemaOrId;
      schema = this.proto[schemaId];

      if (!schema) {
        throw new Error("Cannot find schema: " + schemaId);
      }
    } else {
      schema = schemaOrId;
    } // Merge default options


    return this._validate(value, schema, __assign(__assign({}, options), {
      excessPropertyChecks: (_a = options === null || options === void 0 ? void 0 : options.excessPropertyChecks) !== null && _a !== void 0 ? _a : this.options.excessPropertyChecks,
      strictNullChecks: (_b = options === null || options === void 0 ? void 0 : options.strictNullChecks) !== null && _b !== void 0 ? _b : this.options.strictNullChecks
    }));
  };

  TSBufferValidator.prototype._validate = function (value, schema, options) {
    var _a;

    var vRes; // Validate

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
      // 错误的type

      default:
        throw new Error("Unsupported schema type: " + schema.type);
    } // prune


    if (options === null || options === void 0 ? void 0 : options.prune) {
      // don't need prune, return original value
      if (options.prune.output === undefined) {
        options.prune.output = value;
      } // output to parent


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

    var vRes = this._validate(value, schema, __assign(__assign({}, options), {
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
    } else {
      return ValidateResultUtil.error(ErrorType.TypeError, 'boolean', type);
    }
  };

  TSBufferValidator.prototype._validateNumberType = function (value, schema) {
    // 默认为double
    var scalarType = schema.scalarType || 'double'; // Wrong Type

    var type = this._getTypeof(value);

    var rightType = scalarType.indexOf('big') > -1 ? 'bigint' : 'number';

    if (type !== rightType) {
      return ValidateResultUtil.error(ErrorType.TypeError, rightType, type);
    } // scalarType类型检测
    // 整形却为小数


    if (scalarType !== 'double' && type === 'number' && !Number.isInteger(value)) {
      return ValidateResultUtil.error(ErrorType.InvalidScalarType, value, scalarType);
    } // 无符号整形却为负数


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

    if (type !== SchemaType.Array) {
      return ValidateResultUtil.error(ErrorType.TypeError, SchemaType.Array, type);
    } // prune output


    var prune = options.prune;

    if (prune) {
      prune.output = Array.from({
        length: value.length
      });
    } // validate elementType


    for (var i = 0; i < value.length; ++i) {
      var elemValidateResult = this._validate(value[i], schema.elementType, __assign(__assign({}, options), {
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
    // is Array type
    var type = this._getTypeof(value);

    if (type !== SchemaType.Array) {
      return ValidateResultUtil.error(ErrorType.TypeError, SchemaType.Array, type);
    }

    var prune = options.prune; // validate length
    // excessPropertyChecks 与 prune互斥

    if (!prune && options.excessPropertyChecks && value.length > schema.elementTypes.length) {
      return ValidateResultUtil.error(ErrorType.TupleOverLength, value.length, schema.elementTypes.length);
    } // prune output


    if (prune) {
      prune.output = Array.from({
        length: Math.min(value.length, schema.elementTypes.length)
      });
    } // validate elementType


    for (var i = 0; i < schema.elementTypes.length; ++i) {
      // MissingRequiredProperty: NotOptional && is undefined
      if (value[i] === undefined || value[i] === null && !options.strictNullChecks) {
        var isOptional = schema.optionalStartIndex !== undefined && i >= schema.optionalStartIndex || this._canBeUndefined(schema.elementTypes[i]); // skip undefined property


        if (isOptional) {
          continue;
        } else {
          return ValidateResultUtil.error(ErrorType.MissingRequiredProperty, i);
        }
      } // element type check


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
    // must be string or number
    var type = this._getTypeof(value);

    if (type !== 'string' && type !== 'number') {
      return ValidateResultUtil.error(ErrorType.TypeError, 'string | number', type);
    } // 有值与预设相同


    if (schema.members.some(function (v) {
      return v.value === value;
    })) {
      return ValidateResultUtil.succ;
    } else {
      return ValidateResultUtil.error(ErrorType.InvalidEnumValue, value);
    }
  };

  TSBufferValidator.prototype._validateAnyType = function (value) {
    return ValidateResultUtil.succ;
  };

  TSBufferValidator.prototype._validateLiteralType = function (value, schema, strictNullChecks) {
    // 非strictNullChecks严格模式，null undefined同等对待
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
    } // 先展平


    var flatSchema = this.protoHelper.getFlatInterfaceSchema(schema); // From union or intersecton type

    if (options.unionProperties) {
      flatSchema = this.protoHelper.applyUnionProperties(flatSchema, options.unionProperties);
    }

    return this._validateFlatInterface(value, flatSchema, options);
  };

  TSBufferValidator.prototype._validateMappedType = function (value, schema, options) {
    var parsed = this.protoHelper.parseMappedType(schema);

    if (parsed.type === SchemaType.Interface) {
      return this._validateInterfaceType(value, schema, options);
    } else if (parsed.type === SchemaType.Union) {
      return this._validateUnionType(value, parsed, options);
    }

    throw new Error();
  };

  TSBufferValidator.prototype._validateFlatInterface = function (value, schema, options) {
    // interfaceSignature强制了key必须是数字的情况
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
    } // Excess property check (与prune互斥)


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
    } // 校验properties


    if (schema.properties) {
      for (var _i = 0, _a = schema.properties; _i < _a.length; _i++) {
        var property = _a[_i]; // MissingRequiredProperty: is undefined && !isOptional

        if (value[property.name] === undefined || value[property.name] === null && !options.strictNullChecks) {
          var isOptional = property.optional || this._canBeUndefined(property.type); // skip undefined optional property


          if (isOptional) {
            continue;
          } else {
            return ValidateResultUtil.error(ErrorType.MissingRequiredProperty, property.name);
          }
        } // property本身验证


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
    } // 检测indexSignature


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
    } else if (schema.arrayType) {
      var typeArrayClass = typedArrays[schema.arrayType];

      if (!typeArrayClass) {
        throw new Error("Error TypedArray type: " + schema.arrayType);
      }

      return value instanceof typeArrayClass ? ValidateResultUtil.succ : ValidateResultUtil.error(ErrorType.TypeError, schema.arrayType, (_a = value === null || value === void 0 ? void 0 : value.constructor) === null || _a === void 0 ? void 0 : _a.name);
    } else {
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
    } // 有一成功则成功


    var isSomeSucc = false;
    var memberErrors = [];

    for (var i = 0; i < schema.members.length; ++i) {
      var member = schema.members[i];
      var memberType = this.protoHelper.isTypeReference(member.type) ? this.protoHelper.parseReference(member.type) : member.type;
      var memberPrune = prune ? {} : undefined;

      var vRes = this._validate(value, memberType, __assign(__assign({}, options), {
        prune: memberPrune
      }));

      if (vRes.isSucc) {
        isSomeSucc = true; // if prune object: must prune all members

        if (isObjectPrune) {
          prune.output = __assign(__assign({}, prune.output), memberPrune.output);
        } // not prune object: stop checking after 1st member matched
        else {
            break;
          }
      } else {
        memberErrors.push(vRes);
      }
    } // 有一成功则成功;


    if (isSomeSucc) {
      return ValidateResultUtil.succ;
    } // 全部失败，则失败
    else {
        // All member error is the same, return the first
        var msg0_1 = memberErrors[0].errMsg;

        if (memberErrors.every(function (v) {
          return v.errMsg === msg0_1;
        })) {
          return memberErrors[0];
        } // mutual exclusion: return the only one


        var nonLiteralErrors = memberErrors.filter(function (v) {
          return v.error.type !== ErrorType.InvalidLiteralValue;
        });

        if (nonLiteralErrors.length === 1) {
          return nonLiteralErrors[0];
        } // All member error without inner: show simple msg


        if (memberErrors.every(function (v) {
          return !v.error.inner && (v.error.type === ErrorType.TypeError || v.error.type === ErrorType.InvalidLiteralValue);
        })) {
          var valueType = this._getTypeof(value);

          var expectedTypes = memberErrors.map(function (v) {
            return v.error.type === ErrorType.TypeError ? v.error.params[0] : _this._getTypeof(v.error.params[0]);
          }).distinct(); // Expected type A|B|C, actually type D

          if (expectedTypes.indexOf(valueType) === -1) {
            return ValidateResultUtil.error(ErrorType.TypeError, expectedTypes.join(' | '), this._getTypeof(value));
          } // `'D'` is not matched to `'A'|'B'|'C'`


          if (valueType !== 'Object' && valueType !== SchemaType.Array) {
            var types = memberErrors.map(function (v) {
              return v.error.type === ErrorType.TypeError ? v.error.params[0] : stringify(v.error.params[0]);
            }).distinct();
            return ValidateResultUtil.error(ErrorType.UnionTypesNotMatch, value, types);
          }
        } // other errors


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
    } // 有一失败则失败


    for (var i = 0, len = schema.members.length; i < len; ++i) {
      // 验证member
      var memberType = schema.members[i].type;
      memberType = this.protoHelper.isTypeReference(memberType) ? this.protoHelper.parseReference(memberType) : memberType;
      var memberPrune = prune ? {} : undefined;

      var vRes = this._validate(value, memberType, __assign(__assign({}, options), {
        prune: memberPrune
      })); // 有一失败则失败


      if (!vRes.isSucc) {
        return vRes;
      }

      if (isObjectPrune) {
        prune.output = __assign(__assign({}, prune.output), memberPrune.output);
      }
    } // 全成功则成功


    return ValidateResultUtil.succ;
  };

  TSBufferValidator.prototype._validateDateType = function (value) {
    if (value instanceof Date) {
      return ValidateResultUtil.succ;
    } else {
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
      } else if (Array.isArray(value)) {
        return SchemaType.Array;
      } else {
        return 'Object';
      }
    }

    return type;
  };

  return TSBufferValidator;
}();

/** @internal */

var IdBlockUtil =
/** @class */
function () {
  function IdBlockUtil() {}

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
        } else if (parsedSchema.scalarType && parsedSchema.scalarType.startsWith('big')) {
          return {
            lengthType: LengthType.LengthDelimited
          };
        } else {
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
/** @internal */


var LengthType;

(function (LengthType) {
  LengthType[LengthType["LengthDelimited"] = 0] = "LengthDelimited";
  LengthType[LengthType["Varint"] = 1] = "Varint";
  LengthType[LengthType["Bit64"] = 2] = "Bit64";
  LengthType[LengthType["IdBlock"] = 3] = "IdBlock";
})(LengthType || (LengthType = {}));
/** @internal */


var SchemaUtil =
/** @class */
function () {
  function SchemaUtil() {}
  /** type类型是否能编码为该literal */


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
    var len = 0,
        c = 0;

    for (var i = 0; i < str.length; ++i) {
      c = str.charCodeAt(i);
      if (c < 128) len += 1;else if (c < 2048) len += 2;else if ((c & 0xFC00) === 0xD800 && (str.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
        ++i;
        len += 4;
      } else len += 3;
    }

    return len;
  },
  write: function write(str, buf, pos) {
    var start = pos,
        c1,
        // character 1
    c2; // character 2

    for (var i = 0; i < str.length; ++i) {
      c1 = str.charCodeAt(i);

      if (c1 < 128) {
        buf[pos++] = c1;
      } else if (c1 < 2048) {
        buf[pos++] = c1 >> 6 | 192;
        buf[pos++] = c1 & 63 | 128;
      } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = str.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
        c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
        ++i;
        buf[pos++] = c1 >> 18 | 240;
        buf[pos++] = c1 >> 12 & 63 | 128;
        buf[pos++] = c1 >> 6 & 63 | 128;
        buf[pos++] = c1 & 63 | 128;
      } else {
        buf[pos++] = c1 >> 12 | 224;
        buf[pos++] = c1 >> 6 & 63 | 128;
        buf[pos++] = c1 & 63 | 128;
      }
    }

    return pos - start;
  },
  read: function read(buf, pos, length) {
    if (length < 1) return "";
    var parts = undefined,
        chunk = [],
        i = 0,
        // char offset
    t; // temporary

    var end = pos + length;

    while (pos < end) {
      t = buf[pos++];
      if (t < 128) chunk[i++] = t;else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buf[pos++] & 63;else if (t > 239 && t < 365) {
        t = ((t & 7) << 18 | (buf[pos++] & 63) << 12 | (buf[pos++] & 63) << 6 | buf[pos++] & 63) - 0x10000;
        chunk[i++] = 0xD800 + (t >> 10);
        chunk[i++] = 0xDC00 + (t & 1023);
      } else chunk[i++] = (t & 15) << 12 | (buf[pos++] & 63) << 6 | buf[pos++] & 63;

      if (i > 8191) {
        (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
        i = 0;
      }
    }

    if (parts) {
      if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
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
/**
 * 自动判断环境，选择使用NodeJS Native方法编码或是JS编码
 */

var Utf8Coder = typeof Buffer !== 'undefined' && Buffer.from && Buffer.prototype.write ? Utf8CoderNode : Utf8CoderJS;
/** @internal */

var Varint64 =
/** @class */
function () {
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

    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;

    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;

      if (++lo > 4294967295) {
        lo = 0;
        if (++hi > 4294967295) hi = 0;
      }
    }

    return new Varint64(hi, lo);
  };

  Varint64.prototype.toNumber = function (unsigned) {
    if (!unsigned && this.uint32s[0] >>> 31) {
      var low = ~this.uint32s[1] + 1 >>> 0,
          high = ~this.uint32s[0] >>> 0;
      if (!low) high = high + 1 >>> 0;
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
        var part0 = this.uint32s[1],
            part1 = (this.uint32s[1] >>> 28 | this.uint32s[0] << 4) >>> 0,
            part2 = this.uint32s[0] >>> 24;
        this._byteLength = part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
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
    var hi = 0,
        lo = 0;
    var i = 0;

    if (buf.byteLength - pos > 4) {
      // fast route (lo)
      for (; i < 4; ++i) {
        // 1st..4th
        lo = (lo | (buf[pos] & 127) << i * 7) >>> 0;
        if (buf[pos++] < 128) return new Varint64(hi, lo, pos - startPos);
      } // 5th


      lo = (lo | (buf[pos] & 127) << 28) >>> 0;
      hi = (hi | (buf[pos] & 127) >> 4) >>> 0;
      if (buf[pos++] < 128) return new Varint64(hi, lo, pos - startPos);
      i = 0;
    } else {
      for (; i < 3; ++i) {
        /* istanbul ignore if */
        if (pos >= buf.byteLength) throw new Error('Read varint error: index out of range'); // 1st..3th

        lo = (lo | (buf[pos] & 127) << i * 7) >>> 0;
        if (buf[pos++] < 128) return new Varint64(hi, lo, pos - startPos);
      } // 4th


      lo = (lo | (buf[pos++] & 127) << i * 7) >>> 0;
      return new Varint64(hi, lo, pos - startPos);
    }

    if (buf.byteLength - pos > 4) {
      // fast route (hi)
      for (; i < 5; ++i) {
        // 6th..10th
        hi = (hi | (buf[pos] & 127) << i * 7 + 3) >>> 0;
        if (buf[pos++] < 128) return new Varint64(hi, lo, pos - startPos);
      }
    } else {
      for (; i < 5; ++i) {
        /* istanbul ignore if */
        if (pos >= buf.byteLength) throw new Error('Read varint error: index out of range'); // 6th..10th

        hi = (hi | (buf[pos] & 127) << i * 7 + 3) >>> 0;
        if (buf[pos++] < 128) return new Varint64(hi, lo, pos - startPos);
      }
    }
    /* istanbul ignore next */


    throw Error("invalid varint encoding");
  };

  Varint64.Zero = new Varint64(0, 0);
  return Varint64;
}();

var BufferReader =
/** @class */
function () {
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
    } else if (lengthType === LengthType.Varint) {
      this.readVarint();
    } else if (lengthType === LengthType.LengthDelimited) {
      var bufByteLength = this.readUint();
      this._pos += bufByteLength;
    } else if (lengthType === LengthType.IdBlock) {
      this.skipIdBlock();
    } else {
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
    } else if (value === 0) {
      return false;
    } else {
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
/** @internal */


var Decoder =
/** @class */
function () {
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
          var output = []; // 数组长度：Varint

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

          var output = []; // PayloadMask: Varint64

          var payloadMask = this._reader.readVarint(); // 计算maskIndices


          var maskIndices = []; // Low

          for (var i = 0; i < 32; ++i) {
            if (payloadMask.uint32s[1] & 1 << i) {
              maskIndices.push(i);
            }
          } // High


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
            } else {
              output[i] = undefined;
            }
          } // undefined as null


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
          } // Uint8Array 性能最高
          else if (schema.arrayType === 'Uint8Array') {
              return uint8Arr;
            } // 其余TypedArray 可能需要内存拷贝 性能次之
            else {
                var typedArr = TypedArrays[schema.arrayType]; // 字节对齐，可以直接转，无需拷贝内存

                if (uint8Arr.byteOffset % typedArr.BYTES_PER_ELEMENT === 0) {
                  return new typedArr(uint8Arr.buffer, uint8Arr.byteOffset, uint8Arr.byteLength / typedArr.BYTES_PER_ELEMENT);
                } // 字节不对齐，不能直接转，只能拷贝内存后再生成
                else {
                    var arrBuf = uint8Arr.buffer.slice(uint8Arr.byteOffset, uint8Arr.byteOffset + uint8Arr.byteLength);
                    return new typedArr(arrBuf);
                  }
              }
        } else {
          // ArrayBuffer涉及内存拷贝，性能较低，不建议用
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
        } else if (parsed.type === 'Union') {
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
    } else if (parsedTarget.type === 'Pick' || parsedTarget.type === 'Omit' || parsedTarget.type === 'Partial' || parsedTarget.type === 'Overwrite') {
      output = this._readPureMappedType(parsedTarget);
    } else {
      throw new Error('Invalid PureMappedType child: ' + schema.type);
    } // filter key


    if (schema.type === 'Pick') {
      // 把Pick以外的剔除
      for (var key in output) {
        if (schema.keys.indexOf(key) === -1) {
          delete output[key];
        }
      }
    } else if (schema.type === 'Omit') {
      // 剔除Omit
      for (var key in output) {
        if (schema.keys.indexOf(key) > -1) {
          delete output[key];
        }
      }
    } else if (schema.type === 'Overwrite') {
      Object.assign(output, overwrite);
    } // Partial 原样返回


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

    var flatSchema = this._validator.protoHelper.getFlatInterfaceSchema(schema); // BlockID数量


    var blockIdNum = this._reader.readUint();

    var _loop_1 = function _loop_1(i) {
      // ReadBlock
      var readBlockId = this_1._reader.readUint();

      var lengthType = readBlockId & 3;
      var blockId = readBlockId >> 2; // indexSignature

      if (blockId === 0) {
        if (flatSchema.indexSignature) {
          var type = flatSchema.indexSignature.type;

          var fieldName = this_1._reader.readString();

          this_1._skipIdLengthPrefix(this_1._validator.protoHelper.parseReference(type));

          output[fieldName] = this_1._read(type);
        } // indexSignature未定义，可能是新协议，此处兼容，根据lengthType跳过
        else {
            // skip fieldName
            this_1._reader.skipByLengthType(LengthType.LengthDelimited); // skipPayload


            this_1._reader.skipByLengthType(lengthType);
          }
      } // extend block
      else if (blockId <= 9) {
          var extendId_1 = blockId - 1;
          var extend = schema.extends && schema.extends.find(function (v) {
            return v.id === extendId_1;
          });

          if (extend) {
            this_1._skipIdLengthPrefix(this_1._validator.protoHelper.parseReference(extend.type));

            var extendValue = this_1._read(extend.type);

            Object.assign(output, extendValue);
          } // 未知的extendId 可能是新协议 跳过
          else {
              // skipPayload
              this_1._reader.skipByLengthType(lengthType);
            }
        } // property
        else {
            var propertyId_1 = blockId - 10;
            var property = schema.properties && schema.properties.find(function (v) {
              return v.id === propertyId_1;
            });

            if (property) {
              this_1._skipIdLengthPrefix(this_1._validator.protoHelper.parseReference(property.type));

              output[property.name] = this_1._read(property.type);
            } // 未知的PropertyID 可能是新协议 跳过
            else {
                // skipPayload
                this_1._reader.skipByLengthType(lengthType);
              }
          }
    };

    var this_1 = this;

    for (var i = 0; i < blockIdNum; ++i) {
      _loop_1();
    } // Literal property 由于不编码 将其补回
    // undefined as null


    for (var _i = 0, _a = flatSchema.properties; _i < _a.length; _i++) {
      var property = _a[_i];

      if (output.hasOwnProperty(property.name)) {
        continue;
      } // Literal


      var parsedType = this._validator.protoHelper.parseReference(property.type);

      if (parsedType.type === 'Literal') {
        output[property.name] = parsedType.literal;
        continue;
      } // undefined as null


      if (this._undefinedAsNull(output[property.name], parsedType, property.optional)) {
        output[property.name] = null;
        continue;
      }
    }

    return output;
  };
  /** @internal 是否该null值小于当做undefined编码 */


  Decoder.prototype._undefinedAsNull = function (value, type, isOptional) {
    return value === undefined && this._options.undefinedAsNull && !SchemaUtil.canBeLiteral(type, undefined) && !isOptional && SchemaUtil.canBeLiteral(type, null);
  };

  Decoder.prototype._skipIdLengthPrefix = function (parsedSchema) {
    var lengthInfo = IdBlockUtil.getPayloadLengthInfo(parsedSchema);

    if (lengthInfo.needLengthPrefix) {
      // skip length prefix
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
      }); // 不可识别的Member，可能是新协议，跳过使兼容

      if (!member) {
        this_2._reader.skipByLengthType(lengthType);

        return "continue";
      }

      this_2._skipIdLengthPrefix(this_2._validator.protoHelper.parseReference(member.type));

      var value = this_2._read(member.type);

      if (this_2._isObject(output) && this_2._isObject(value)) {
        Object.assign(output, value);
      } else {
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

var BufferWriter =
/** @class */
function () {
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
      var valueLength = this.measureLength(req); // Length

      this.push({
        type: 'varint',
        value: Varint64.from(valueLength)
      }); // Value

      return __assign(__assign({}, req), {
        length: valueLength
      });
    } else {
      var length_1 = this.measureLength(req);
      return __assign(__assign({}, req), {
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
/** @internal */


var Encoder =
/** @class */
function () {
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
          var _v = value; // 数组长度：Varint

          this._writer.push({
            type: 'varint',
            value: Varint64.from(_v.length)
          }); // Element Payload


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

          var _v = value; // 计算maskPos（要编码的值的index）

          var maskIndices = [];

          for (var i = 0; i < _v.length; ++i) {
            // undefined 不编码
            // null as undefined
            if (_v[i] === undefined || this._nullAsUndefined(_v[i], schema.elementTypes[i])) {
              continue;
            }

            maskIndices.push(i);
          } // 生成PayloadMask：Varint64


          var lo = 0;
          var hi = 0;

          for (var _i = 0, maskIndices_1 = maskIndices; _i < maskIndices_1.length; _i++) {
            var v = maskIndices_1[_i];

            if (v < 32) {
              lo |= 1 << v;
            } else {
              hi |= 1 << v - 32;
            }
          }

          this._writer.push({
            type: 'varint',
            value: new Varint64(hi, lo)
          }); // Element Payload


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
        } else {
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
        } else {
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
      } // 不存在 初始化
      else {
          options.pickFields = {};

          for (var _b = 0, _c = schema.keys; _b < _c.length; _b++) {
            var v = _c[_b];
            options.pickFields[v] = 1;
          }
        }
    } else if (schema.type === 'Omit') {
      // 不存在 初始化
      if (!(options === null || options === void 0 ? void 0 : options.skipFields)) {
        if (!options) {
          options = {};
        }

        options.skipFields = {};
      } // 取并集                


      for (var _d = 0, _e = schema.keys; _d < _e.length; _d++) {
        var v = _e[_d];
        options.skipFields[v] = 1;
      }
    } else if (schema.type === 'Overwrite') {
      var parsed = this._parseOverwrite(value, schema); // 写入Overwrite部分


      this._write(parsed.overwriteValue, parsed.overwrite, options);
    } else if (schema.type === 'Partial') ;else {
      throw new Error('Invalid PureMappedType child: ' + schema.type);
    } // Write Interface


    var parsedTarget = this._validator.protoHelper.parseReference(schema.target);

    if (parsedTarget.type === 'Interface') {
      this._writeInterface(value, parsedTarget, options);
    } else {
      this._writePureMappedType(value, parsedTarget, options);
    }
  };

  Encoder.prototype._writeNumber = function (value, schema) {
    // 默认为double
    var scalarType = schema.scalarType || 'double';

    switch (scalarType) {
      // 定长编码
      case 'double':
        this._writer.push({
          type: scalarType,
          value: value
        });

        break;
      // Varint编码

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
    // skipFields默认值
    if (!options) {
      options = {};
    }

    if (!options.skipFields) {
      options.skipFields = {};
    } // 记录起始op位置，用于最后插入BlockID数量


    var opStartOps = this._writer.ops.length;
    var blockIdCount = 0; // 以下，interface
    // extends

    if (schema.extends) {
      // 支持的继承数量有上限
      if (schema.extends.length > Config.interface.maxExtendsNum) {
        throw new Error("Max support " + Config.interface.maxExtendsNum + " extends, actual: " + schema.extends.length);
      }

      for (var _i = 0, _a = schema.extends; _i < _a.length; _i++) {
        var extend = _a[_i]; // BlockID = extend.id + 1

        var blockId = extend.id + 1;

        this._writer.push({
          type: 'varint',
          value: Varint64.from(blockId)
        });

        var blockIdPos = this._writer.ops.length - 1; // 写入extend interface前 writeOps的长度

        var opsLengthBeforeWrite = this._writer.ops.length; // extend Block

        var parsedExtend = this._validator.protoHelper.parseReference(extend.type);

        this._writeInterface(value, parsedExtend, __assign(__assign({}, options), {
          // 确保indexSignature是在最小层级编码
          skipIndexSignature: !!schema.indexSignature || options.skipIndexSignature // 如果父级有indexSignature 或 父级跳过 则跳过indexSignature

        })); // 写入前后writeOps只增加了一个（block length），说明该extend并未写入任何property字段，取消编码这个block


        if (this._writer.ops.length === opsLengthBeforeWrite + 1) {
          // 移除BlockID
          this._writer.ops.splice(this._writer.ops.length - 2, 2);
        } // extend写入成功 blockId数量+1
        else {
            ++blockIdCount;

            this._processIdWithLengthType(blockIdPos, extend.type);
          }
      }
    } // property


    if (schema.properties) {
      for (var _b = 0, _c = schema.properties; _b < _c.length; _b++) {
        var property = _c[_b];

        var parsedType = this._validator.protoHelper.parseReference(property.type);

        var propValue = value[property.name]; // PickFields

        if (options.pickFields && !options.pickFields[property.name]) {
          continue;
        } // Literal不编码 直接跳过


        if (parsedType.type === 'Literal') {
          options.skipFields[property.name] = 1;
          continue;
        } // null as undefined


        if (this._nullAsUndefined(propValue, property.type)) {
          propValue = undefined;
        } // undefined不编码


        if (propValue === undefined) {
          continue;
        } // SkipFields


        if (options.skipFields[property.name]) {
          continue;
        }

        options.skipFields[property.name] = 1;
        var blockId = property.id + Config.interface.maxExtendsNum + 1; // BlockID (propertyID)

        this._writer.push({
          type: 'varint',
          value: Varint64.from(blockId)
        });

        var blockIdPos = this._writer.ops.length - 1; // Value Payload

        this._write(propValue, parsedType);

        ++blockIdCount;

        this._processIdWithLengthType(blockIdPos, parsedType);
      }
    } // indexSignature


    if (!options.skipIndexSignature) {
      var flat = this._validator.protoHelper.getFlatInterfaceSchema(schema);

      if (flat.indexSignature) {
        for (var key in value) {
          if (value[key] === undefined || this._nullAsUndefined(value[key], flat.indexSignature.type)) {
            continue;
          } // PickFields


          if (options.pickFields && !options.pickFields[key]) {
            continue;
          } // SkipFields


          if (options.skipFields[key]) {
            continue;
          }

          options.skipFields[key] = 1; // BlockID == 0

          this._writer.push({
            type: 'varint',
            value: Varint64.from(0)
          });

          var blockIdPos = this._writer.ops.length - 1; // 字段名

          this._writer.push({
            type: 'string',
            value: key
          });

          var lengthPrefixPos = this._writer.ops.length; // Value Payload

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
  /** @internal 是否该null值小于当做undefined编码 */


  Encoder.prototype._nullAsUndefined = function (value, type) {
    return value === null && this._options.nullAsUndefined && !SchemaUtil.canBeLiteral(type, null); // && SchemaUtil.canBeLiteral(type, undefined)  一定为true 因为先validate过了
  };

  Encoder.prototype._parseOverwrite = function (value, schema) {
    var skipFields = {}; // 解引用

    var target = this._validator.protoHelper.parseReference(schema.target);

    var overwrite = this._validator.protoHelper.parseReference(schema.overwrite);

    var flatTarget = this._validator.protoHelper.getFlatInterfaceSchema(target);

    var flatOverwrite = this._validator.protoHelper.getFlatInterfaceSchema(overwrite); // 先区分哪些字段进入Target块，哪些字段进入Overwrite块


    var overwriteValue = {};
    var targetValue = {}; // Overwrite块 property

    if (flatOverwrite.properties) {
      // 只要Overwrite中有此Property，即在Overwrite块编码
      for (var _i = 0, _a = flatOverwrite.properties; _i < _a.length; _i++) {
        var property = _a[_i]; // undefined不编码，跳过SkipFIelds

        if (value[property.name] !== undefined && !skipFields[property.name]) {
          overwriteValue[property.name] = value[property.name];
          skipFields[property.name] = 1;
        }
      }
    } // Target块 property


    if (flatTarget.properties) {
      for (var _b = 0, _c = flatTarget.properties; _b < _c.length; _b++) {
        var property = _c[_b]; // undefined不编码，跳过SkipFields

        if (value[property.name] !== undefined && !skipFields[property.name]) {
          targetValue[property.name] = value[property.name];
          skipFields[property.name] = 1;
        }
      }
    } // indexSignature


    var indexSignatureWriteValue; // indexSignature要写入的目标（overwrite或target）

    var indexSignature; // IndexSignature，优先使用Overwrite的

    if (flatOverwrite.indexSignature) {
      indexSignature = flatOverwrite.indexSignature;
      indexSignatureWriteValue = overwriteValue;
    } else if (flatTarget.indexSignature) {
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
    } // 编码，此处不再需要SkipFields，因为已经筛选过


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
    if (skipFields === void 0) {
      skipFields = {};
    } // 记住编码起点


    var encodeStartPos = this._writer.ops.length;
    var idNum = 0; // null as undefined

    if (this._nullAsUndefined(value, schema)) {
      value = undefined;
    }

    for (var _i = 0, _a = schema.members; _i < _a.length; _i++) {
      var member = _a[_i]; // 验证该member是否可以编码            

      var vRes = this._validator.validate(value, member.type, {
        // 禁用excessPropertyChecks（以代替unionProperties）
        excessPropertyChecks: false,
        // 启用strictNullChecks（null as undefined已经前置处理）
        strictNullChecks: true
      });

      if (vRes.isSucc) {
        // 编码
        // Part2: ID
        this._writer.push({
          type: 'varint',
          value: Varint64.from(member.id)
        });

        var idPos = this._writer.ops.length - 1; // Part3: Payload

        if (member.type.type === 'Union') {
          this._writeUnion(value, member.type, skipFields);
        } else {
          this._write(value, member.type, {
            skipFields: skipFields
          });
        }

        idNum++;

        this._processIdWithLengthType(idPos, member.type); // 非object的value，类型一定互斥，只编码一个足矣


        if (_typeof(value) !== 'object') {
          break;
        }
      }
    } // 已经编码


    if (idNum > 0) {
      // 前置ID数量
      this._writer.ops.splice(encodeStartPos, 0, this._writer.req2op({
        type: 'varint',
        value: Varint64.from(idNum)
      }));

      return;
    } else {
      // 未编码，没有任何条件满足，抛出异常
      throw new Error('Non member is satisfied for union type');
    }
  };

  Encoder.prototype._writeIntersection = function (value, schema, skipFields) {
    if (skipFields === void 0) {
      skipFields = {};
    } // ID数量（member数量）


    this._writer.push({
      type: 'varint',
      value: Varint64.from(schema.members.length)
    }); // 按Member依次编码


    for (var _i = 0, _a = schema.members; _i < _a.length; _i++) {
      var member = _a[_i]; // ID

      this._writer.push({
        type: 'varint',
        value: Varint64.from(member.id)
      });

      var idPos = this._writer.ops.length - 1; // 编码块

      this._write(value, member.type, {
        skipFields: skipFields
      });

      this._processIdWithLengthType(idPos, member.type);
    }
  };

  Encoder.prototype._writeBuffer = function (value, schema) {
    // ArrayBuffer 转为Uint8Array
    if (value instanceof ArrayBuffer) {
      this._writer.push({
        type: 'buffer',
        value: new Uint8Array(value)
      });
    } // Uint8Array 直接写入
    else if (value instanceof Uint8Array) {
        this._writer.push({
          type: 'buffer',
          value: value
        });
      } // 其它TypedArray 转为Uint8Array
      else {
          var key = value.constructor.name;
          var arrType = TypedArrays[key];
          var uint8Arr = new Uint8Array(value.buffer, value.byteOffset, value.length * arrType.BYTES_PER_ELEMENT);

          this._writer.push({
            type: 'buffer',
            value: uint8Arr
          });
        }
  }; // private _writeIdBlocks(blocks: IDBlockItem[]) {
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
    } // 解引用


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
/**
 * @public
 */


var TSBuffer =
/** @class */
function () {
  function TSBuffer(proto, options) {
    /** @internal 默认配置 */
    this._options = {
      excessPropertyChecks: true,
      strictNullChecks: true,
      skipEncodeValidate: false,
      skipDecodeValidate: false,
      cloneProto: true
    }; // but `options.validatorOptions` has higher priority to validate process (don't affect encode)

    this._options = __assign(__assign({}, this._options), options);
    this._proto = this._options.cloneProto ? Object.merge({}, proto) : proto;
    this._validator = new TSBufferValidator(this._proto, {
      excessPropertyChecks: this._options.excessPropertyChecks,
      strictNullChecks: this._options.strictNullChecks
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
        return {
          isSucc: false,
          errMsg: "Cannot find schema\uFF1A " + schemaOrId
        };
      }
    } else {
      schema = schemaOrId;
    } // validate before encode


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
    } catch (e) {
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
        return {
          isSucc: false,
          errMsg: "Cannot find schema\uFF1A " + schemaOrId
        };
      }
    } else {
      schema = schemaOrId;
    }

    var value;

    try {
      value = this._decoder.decode(buf, schema);
    } catch (e) {
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

/*!
 * TSRPC Base Client v1.0.6
 * -----------------------------------------
 * Copyright (c) Kingworks Corporation.
 * MIT License
 * https://github.com/k8w/tsrpc-base-client
 */
/**
 * An auto-increment counter
 */

var Counter =
/** @class */
function () {
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
    return this._last >= this._max ? this._last = this._min : notInc ? this._last : ++this._last;
  };

  Object.defineProperty(Counter.prototype, "last", {
    /**
     * Last return of `getNext()`
     */
    get: function get() {
      return this._last;
    },
    enumerable: false,
    configurable: true
  });
  return Counter;
}();
/**
 * A `Flow` is consists of many `FlowNode`, which is function with the same input and output (like pipeline).
 *
 * @remarks
 * `Flow` is like a hook or event, executed at a specific time.
 * The difference to event is it can be used to **interrupt** an action, by return `undefined` or `null` in a node.
 */


var Flow =
/** @class */
function () {
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
    return __awaiter(this, void 0, void 0, function () {
      var res, i, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            res = input;
            i = 0;
            _a.label = 1;

          case 1:
            if (!(i < this.nodes.length)) return [3
            /*break*/
            , 7];
            _a.label = 2;

          case 2:
            _a.trys.push([2, 4,, 5]);

            return [4
            /*yield*/
            , this.nodes[i](res)];

          case 3:
            res = _a.sent();
            return [3
            /*break*/
            , 5];

          case 4:
            e_1 = _a.sent();
            this.onError(e_1, res, input, logger);
            return [2
            /*return*/
            , undefined];

          case 5:
            // Return 非true 表示不继续后续流程 立即中止
            if (res === null || res === undefined) {
              return [2
              /*return*/
              , res];
            }

            _a.label = 6;

          case 6:
            ++i;
            return [3
            /*break*/
            , 1];

          case 7:
            return [2
            /*return*/
            , res];
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
    return this.nodes.remove(function (v) {
      return v === node;
    });
  };

  return Flow;
}();
/**
 * A manager for TSRPC receiving messages
 */


var MsgHandlerManager =
/** @class */
function () {
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
      } catch (e) {
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
    var handlers = this._handlers[msgName]; // 初始化Handlers

    if (!handlers) {
      handlers = this._handlers[msgName] = [];
    } // 防止重复监听
    else if (handlers.some(function (v) {
        return v === handler;
      })) {
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

    handlers.removeOne(function (v) {
      return v === handler;
    });
  };
  /**
   * Remove all handlers for the specific `msgName`
   * @param msgName
   */


  MsgHandlerManager.prototype.removeAllHandlers = function (msgName) {
    this._handlers[msgName] = undefined;
  };

  return MsgHandlerManager;
}();
/** A utility for generate `ServiceMap` */


var ServiceMapUtil =
/** @class */
function () {
  function ServiceMapUtil() {}

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
        var svc = __assign(__assign({}, v), {
          reqSchemaId: path + "Ptl" + name_1 + "/Req" + name_1,
          resSchemaId: path + "Ptl" + name_1 + "/Res" + name_1
        });

        map.apiName2Service[v.name] = svc;
        map.id2Service[v.id] = svc;
      } else {
        var svc = __assign(__assign({}, v), {
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

var TransportDataUtil =
/** @class */
function () {
  function TransportDataUtil() {}

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
    } else {
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

    var serverInput = opServerInputData.value; // 确认是哪个Service

    var service = serviceMap.id2Service[serverInput.serviceId];

    if (!service) {
      return {
        isSucc: false,
        errMsg: "Cannot find service ID: " + serverInput.serviceId
      };
    } // 解码Body


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
    } else {
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
    } else {
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
      } else {
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


var BaseClient =
/** @class */
function () {
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
      // buffer
      preSendBufferFlow: new Flow(),
      preRecvBufferFlow: new Flow(),
      // Connection Flows (Only for WebSocket)

      /** Before connect to WebSocket server */
      preConnectFlow: new Flow(),

      /** After WebSocket connect successfully */
      postConnectFlow: new Flow(),

      /** After WebSocket disconnected (from connected status) */
      postDisconnectFlow: new Flow()
    };
    this._apiSnCounter = new Counter(1);
    /**
     * Pending API Requests
     */

    this._pendingApis = [];
    this.options = options;
    this.serviceMap = ServiceMapUtil.getServiceMap(proto);
    this.tsbuffer = new TSBuffer(proto.types);
    this.logger = this.options.logger;
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
    get: function get() {
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
    get: function get() {
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
    if (options === void 0) {
      options = {};
    }

    return __awaiter(this, void 0, void 0, function () {
      var sn, pendingItem, promise;

      var _this = this;

      return __generator(this, function (_a) {
        sn = this._apiSnCounter.getNext();
        pendingItem = {
          sn: sn,
          abortKey: options.abortKey,
          service: this.serviceMap.apiName2Service[apiName]
        };

        this._pendingApis.push(pendingItem);

        promise = new Promise(function (rs) {
          return __awaiter(_this, void 0, void 0, function () {
            var pre, ret, preReturn;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.flows.preCallApiFlow.exec({
                    apiName: apiName,
                    req: req,
                    options: options
                  }, this.logger)];

                case 1:
                  pre = _a.sent();

                  if (!pre || pendingItem.isAborted) {
                    this.abort(pendingItem.sn);
                    return [2
                    /*return*/
                    ];
                  }

                  if (!pre.return) return [3
                  /*break*/
                  , 2];
                  ret = pre.return;
                  return [3
                  /*break*/
                  , 4];

                case 2:
                  return [4
                  /*yield*/
                  , this._doCallApi(pre.apiName, pre.req, pre.options, pendingItem)];

                case 3:
                  // do call means it will send buffer via network
                  ret = _a.sent();
                  _a.label = 4;

                case 4:
                  if (pendingItem.isAborted) {
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , this.flows.preApiReturnFlow.exec(__assign(__assign({}, pre), {
                    return: ret
                  }), this.logger)];

                case 5:
                  preReturn = _a.sent();

                  if (!preReturn) {
                    this.abort(pendingItem.sn);
                    return [2
                    /*return*/
                    ];
                  }

                  rs(preReturn.return); // Post Flow

                  this.flows.postApiReturnFlow.exec(preReturn, this.logger);
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }); // Finally clear pendings

        promise.catch().then(function () {
          _this._pendingApis.removeOne(function (v) {
            return v.sn === pendingItem.sn;
          });
        });
        return [2
        /*return*/
        , promise];
      });
    });
  };

  BaseClient.prototype._doCallApi = function (apiName, req, options, pendingItem) {
    var _a;

    if (options === void 0) {
      options = {};
    }

    return __awaiter(this, void 0, void 0, function () {
      var promise;

      var _this = this;

      return __generator(this, function (_b) {
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[ApiReq] #" + pendingItem.sn, apiName, req);
        promise = new Promise(function (rs) {
          return __awaiter(_this, void 0, void 0, function () {
            var service, opEncode, promiseReturn, promiseSend, opSend, ret;

            var _a, _b, _c;

            return __generator(this, function (_d) {
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
                    /*return*/
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
                    /*return*/
                    ];
                  }

                  promiseReturn = this._waitApiReturn(pendingItem, (_a = options.timeout) !== null && _a !== void 0 ? _a : this.options.timeout);
                  promiseSend = this._sendBuf(opEncode.buf, options, service.id, pendingItem);
                  return [4
                  /*yield*/
                  , promiseSend];

                case 1:
                  opSend = _d.sent();

                  if (opSend.err) {
                    rs({
                      isSucc: false,
                      err: opSend.err
                    });
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , promiseReturn];

                case 2:
                  ret = _d.sent();

                  if (pendingItem.isAborted) {
                    return [2
                    /*return*/
                    ];
                  }

                  if (ret.isSucc) {
                    (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("[ApiRes] #" + pendingItem.sn + " " + apiName, ret.res);
                  } else {
                    (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("[ApiErr] #" + pendingItem.sn + " " + apiName, ret.err);
                  }

                  rs(ret);
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        });
        return [2
        /*return*/
        , promise];
      });
    });
  };

  BaseClient.prototype._encodeApiReq = function (service, req, pendingItem) {
    return TransportDataUtil.encodeApiReq(this.tsbuffer, service, req, this.type === 'LONG' ? pendingItem.sn : undefined);
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

    if (options === void 0) {
      options = {};
    }

    var promise = new Promise(function (rs) {
      return __awaiter(_this, void 0, void 0, function () {
        var pre, service, opEncode, promiseSend, opSend;

        var _a, _b;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              return [4
              /*yield*/
              , this.flows.preSendMsgFlow.exec({
                msgName: msgName,
                msg: msg,
                options: options
              }, this.logger)];

            case 1:
              pre = _c.sent();

              if (!pre) {
                return [2
                /*return*/
                ];
              } // The msg is not prevented by pre flow


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
                /*return*/
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
                /*return*/
                ];
              }

              promiseSend = this._sendBuf(opEncode.buf, options, service.id);
              return [4
              /*yield*/
              , promiseSend];

            case 2:
              opSend = _c.sent();

              if (opSend.err) {
                rs({
                  isSucc: false,
                  err: opSend.err
                });
                return [2
                /*return*/
                ];
              }

              rs({
                isSucc: true
              }); // Post Flow

              this.flows.postSendMsgFlow.exec(pre, this.logger);
              return [2
              /*return*/
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
  /**
   * Add a message handler,
   * duplicate handlers to the same `msgName` would be ignored.
   * @param msgName
   * @param handler
   * @returns
   */


  BaseClient.prototype.listenMsg = function (msgName, handler) {
    this._msgHandlers.addHandler(msgName, handler);

    return handler;
  };
  /**
   * Remove a message handler
   */


  BaseClient.prototype.unlistenMsg = function (msgName, handler) {
    this._msgHandlers.removeHandler(msgName, handler);
  };
  /**
   * Remove all handlers from a message
   */


  BaseClient.prototype.unlistenMsgAll = function (msgName) {
    this._msgHandlers.removeAllHandlers(msgName);
  };
  /**
   * Abort a pending API request, it makes the promise returned by `callApi()` neither resolved nor rejected forever.
   * @param sn - Every api request has a unique `sn` number, you can get it by `this.lastSN`
   */


  BaseClient.prototype.abort = function (sn) {
    var _a, _b; // Find


    var index = this._pendingApis.findIndex(function (v) {
      return v.sn === sn;
    });

    if (index === -1) {
      return;
    }

    var pendingItem = this._pendingApis[index]; // Clear

    this._pendingApis.splice(index, 1);

    pendingItem.onReturn = undefined;
    pendingItem.isAborted = true; // Log

    (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("[ApiAbort] #" + pendingItem.sn + " " + pendingItem.service.name); // onAbort

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

    this._pendingApis.filter(function (v) {
      return v.abortKey === abortKey;
    }).forEach(function (v) {
      _this.abort(v.sn);
    });
  };
  /**
   * Abort all pending API requests.
   * It makes the promise returned by `callApi` neither resolved nor rejected forever.
   */


  BaseClient.prototype.abortAll = function () {
    var _this = this;

    this._pendingApis.slice().forEach(function (v) {
      return _this.abort(v.sn);
    });
  };

  BaseClient.prototype._onRecvBuf = function (buf, pendingApiItem) {
    var _a, _b, _c, _d, _e, _f, _g;

    return __awaiter(this, void 0, void 0, function () {
      var sn, pre, opParsed, parsed;
      return __generator(this, function (_h) {
        switch (_h.label) {
          case 0:
            sn = pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn;
            this.options.debugBuf && ((_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug('[RecvBuf]' + (sn ? ' #' + sn : ''), 'length=' + buf.length, buf));
            return [4
            /*yield*/
            , this.flows.preRecvBufferFlow.exec({
              buf: buf,
              sn: sn
            }, this.logger)];

          case 1:
            pre = _h.sent();

            if (!pre) {
              return [2
              /*return*/
              ];
            }

            buf = pre.buf;
            opParsed = TransportDataUtil.parseServerOutout(this.tsbuffer, this.serviceMap, buf, pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.service.id);

            if (opParsed.isSucc) {
              parsed = opParsed.result;

              if (parsed.type === 'api') {
                sn = sn !== null && sn !== void 0 ? sn : parsed.sn; // call ApiReturn listeners

                (_c = (_b = this._pendingApis.find(function (v) {
                  return v.sn === sn;
                })) === null || _b === void 0 ? void 0 : _b.onReturn) === null || _c === void 0 ? void 0 : _c.call(_b, parsed.ret);
              } else if (parsed.type === 'msg') {
                (_d = this.logger) === null || _d === void 0 ? void 0 : _d.log("[RecvMsg] " + parsed.service.name, parsed.msg);

                this._msgHandlers.forEachHandler(parsed.service.name, this.logger, parsed.msg, this);
              }
            } else {
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
            /*return*/
            ];
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
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (rs) {
          // Timeout
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
          } // Listener (trigger by `this._onRecvBuf`)


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
/**
 * Base HTTP Client
 */

var BaseHttpClient =
/** @class */
function (_super) {
  __extends(BaseHttpClient, _super);

  function BaseHttpClient(proto, http, options) {
    var _a;

    var _this = _super.call(this, proto, __assign(__assign({}, defaultBaseHttpClientOptions), options)) || this;

    _this.type = 'SHORT';
    _this._http = http;
    _this._jsonServer = _this.options.server + (_this.options.server.endsWith('/') ? '' : '/');
    (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.log('TSRPC HTTP Client :', _this.options.server);
    return _this;
  } // Hack for JSON compatibility


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
    } else {
      return TransportDataUtil.encodeApiReq(this.tsbuffer, service, req, undefined);
    }
  }; // Hack for JSON compatibility


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
    } else {
      return TransportDataUtil.encodeClientMsg(this.tsbuffer, service, msg);
    }
  };

  BaseHttpClient.prototype._sendBuf = function (buf, options, serviceId, pendingApiItem) {
    return __awaiter(this, void 0, void 0, function () {
      var sn, promise;

      var _this = this;

      return __generator(this, function (_a) {
        // JSON Compatible Mode
        if (this.options.json) {
          return [2
          /*return*/
          , this._sendJSON(buf, options, serviceId, pendingApiItem)];
        }

        sn = pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn;
        promise = new Promise(function (rs) {
          return __awaiter(_this, void 0, void 0, function () {
            var pre, _a, fetchPromise, abort, fetchRes;

            var _b;

            return __generator(this, function (_c) {
              switch (_c.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.flows.preSendBufferFlow.exec({
                    buf: buf,
                    sn: pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn
                  }, this.logger)];

                case 1:
                  pre = _c.sent();

                  if (!pre) {
                    return [2
                    /*return*/
                    ];
                  }

                  buf = pre.buf; // Do Send

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
                  } // Aborted


                  if (pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.isAborted) {
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , fetchPromise];

                case 2:
                  fetchRes = _c.sent();

                  if (!fetchRes.isSucc) {
                    rs({
                      err: fetchRes.err
                    });
                    return [2
                    /*return*/
                    ];
                  }

                  rs({});

                  this._onRecvBuf(fetchRes.res, pendingApiItem);

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }); // Finally

        promise.catch(function (e) {}).then(function () {
          if (pendingApiItem) {
            pendingApiItem.onAbort = undefined;
          }
        });
        return [2
        /*return*/
        , promise];
      });
    });
  };

  BaseHttpClient.prototype._sendJSON = function (jsonStr, options, serviceId, pendingApiItem) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (rs) {
          return __awaiter(_this, void 0, void 0, function () {
            var _a, fetchPromise, abort, fetchRes, ret, opPrune;

            var _b;

            return __generator(this, function (_c) {
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
                  } // Aborted


                  if (pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.isAborted) {
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , fetchPromise];

                case 1:
                  fetchRes = _c.sent();

                  if (!fetchRes.isSucc) {
                    rs({
                      err: fetchRes.err
                    });
                    return [2
                    /*return*/
                    ];
                  }

                  rs({});

                  try {
                    ret = JSON.parse(fetchRes.res);
                  } catch (e) {
                    ret = {
                      isSucc: false,
                      err: new TsrpcError({
                        message: e.message,
                        type: TsrpcError.Type.ServerError,
                        res: fetchRes.res
                      })
                    };
                  } // API Return


                  if (pendingApiItem) {
                    if (ret.isSucc) {
                      if (this.options.jsonPrune) {
                        opPrune = this.tsbuffer.prune(ret.res, pendingApiItem.service.resSchemaId);

                        if (opPrune.isSucc) {
                          ret.res = opPrune.pruneOutput;
                        } else {
                          ret = {
                            isSucc: false,
                            err: new TsrpcError('Invalid Server Output', {
                              type: TsrpcError.Type.ClientError,
                              innerErr: opPrune.errMsg
                            })
                          };
                        }
                      }
                    } else {
                      ret.err = new TsrpcError(ret.err);
                    }

                    (_b = pendingApiItem.onReturn) === null || _b === void 0 ? void 0 : _b.call(pendingApiItem, ret);
                  }

                  return [2
                  /*return*/
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

var defaultBaseHttpClientOptions = __assign(__assign({}, defaultBaseClientOptions), {
  server: 'http://localhost:3000',
  // logger: new TerminalColorLogger(),
  json: false,
  jsonPrune: true
});
/**
 * WebSocket Client for TSRPC.
 * It uses native `WebSocket` of browser.
 * @typeParam ServiceType - `ServiceType` from generated `proto.ts`
 */


var BaseWsClient =
/** @class */
function (_super) {
  __extends(BaseWsClient, _super);

  function BaseWsClient(proto, wsp, options) {
    var _a;

    var _this = _super.call(this, proto, __assign(__assign({}, defaultBaseWsClientOptions), options)) || this;

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
      _this._status = WsClientStatus.Closed; // 连接中，返回连接失败

      if (_this._connecting) {
        _this._connecting.rs({
          isSucc: false,
          errMsg: 'WebSocket connection to server failed'
        });

        _this._connecting = undefined;
      } // disconnect中，返回成功


      var isManual = !!_this._rsDisconnecting;

      if (_this._rsDisconnecting) {
        _this._rsDisconnecting();

        _this._rsDisconnecting = undefined;
        (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.log('Disconnected succ', "code=" + code + " reason=" + reason);
      } // 非 disconnect 中，从连接中意外断开
      else if (isConnectedBefore) {
          (_b = _this.logger) === null || _b === void 0 ? void 0 : _b.log("Lost connection to " + _this.options.server, "code=" + code + " reason=" + reason);
        } // postDisconnectFlow，仅从连接状态断开时触发


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
      } else {
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
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (rs) {
          return __awaiter(_this, void 0, void 0, function () {
            var pre;

            var _a;

            return __generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.flows.preSendBufferFlow.exec({
                    buf: buf,
                    sn: pendingApiItem === null || pendingApiItem === void 0 ? void 0 : pendingApiItem.sn
                  }, this.logger)];

                case 1:
                  pre = _b.sent();

                  if (!pre) {
                    return [2
                    /*return*/
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
                    /*return*/
                    ];
                  } // Do Send


                  if (this.options.debugBuf && buf instanceof Uint8Array) {
                    (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug('[SendBuf]' + (pendingApiItem ? ' #' + pendingApiItem.sn : ''), "length=" + buf.byteLength, buf);
                  }

                  rs(this._wsp.send(buf));
                  return [2
                  /*return*/
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
  /**
   * Start connecting, you must connect first before `callApi()` and `sendMsg()`.
   * @throws never
   */

  BaseWsClient.prototype.connect = function () {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var pre, promiseConnect;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            // 已连接成功
            if (this.isConnected) {
              return [2
              /*return*/
              , {
                isSucc: true
              }];
            } // 已连接中


            if (this._connecting) {
              return [2
              /*return*/
              , this._connecting.promise];
            }

            return [4
            /*yield*/
            , this.flows.preConnectFlow.exec({}, this.logger)];

          case 1:
            pre = _b.sent(); // Pre return

            if (pre === null || pre === void 0 ? void 0 : pre.return) {
              return [2
              /*return*/
              , pre.return];
            } // Canceled


            if (!pre) {
              return [2
              /*return*/
              , new Promise(function (rs) {})];
            }

            try {
              this._wsp.connect(this.options.server);
            } catch (e) {
              return [2
              /*return*/
              , {
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
            return [2
            /*return*/
            , promiseConnect];
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

    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_b) {
        if (this._status === WsClientStatus.Closed) {
          return [2
          /*return*/
          ];
        }

        this._status = WsClientStatus.Closing;
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log('Start disconnecting...');
        return [2
        /*return*/
        , new Promise(function (rs) {
          _this._rsDisconnecting = rs;

          _this._wsp.close(code, reason);
        })];
      });
    });
  };

  return BaseWsClient;
}(BaseClient);

var defaultBaseWsClientOptions = __assign(__assign({}, defaultBaseClientOptions), {
  server: 'ws://localhost:3000'
});

var WsClientStatus;

(function (WsClientStatus) {
  WsClientStatus["Opening"] = "OPENING";
  WsClientStatus["Opened"] = "OPENED";
  WsClientStatus["Closing"] = "CLOSING";
  WsClientStatus["Closed"] = "CLOSED";
})(WsClientStatus || (WsClientStatus = {}));

/**
 * @internal
 */
var HttpProxy = /** @class */ (function () {
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
            //IE8 不支持onload onabort onerror事件
            xhr.onreadystatechange = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (xhr.readyState == 4) {
                        //Network Error
                        if (xhr.status == 0 || (xhr.response == null && xhr.responseText == null)) {
                            rs({
                                isSucc: false,
                                err: new TsrpcError('Network Error', {
                                    type: TsrpcError.Type.NetworkError,
                                    httpCode: xhr.status
                                })
                            });
                            return [2 /*return*/];
                        }
                        //IE9 wrongURL 会返回12029
                        if (xhr.status == 12029) {
                            rs({
                                isSucc: false,
                                err: new TsrpcError({
                                    message: 'Network Error',
                                    type: TsrpcError.Type.NetworkError,
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
                    err: new TsrpcError({
                        message: 'Network Error',
                        type: TsrpcError.Type.NetworkError,
                        httpCode: xhr.status
                    })
                });
            };
            // 有的平台 超时不触发onerror
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
            // Res
            xhr.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    rs({
                        isSucc: true,
                        res: xhr.response && (options.responseType === 'text' ? xhr.responseText : new Uint8Array(xhr.response))
                    });
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
    __extends(HttpClient, _super);
    function HttpClient(proto, options) {
        var _this = this;
        var httpProxy = new HttpProxy;
        _this = _super.call(this, proto, httpProxy, __assign(__assign({}, defaultHttpClientOptions), options)) || this;
        return _this;
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
}(BaseHttpClient));
var defaultHttpClientOptions = __assign({}, defaultBaseHttpClientOptions);

/**
 * @internal
 */
var WebSocketProxy = /** @class */ (function () {
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
        return __awaiter(this, void 0, void 0, function () {
            var sendData, buf;
            return __generator(this, function (_a) {
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
                            err: new TsrpcError('Network Error', {
                                code: 'SEND_BUF_ERR',
                                type: TsrpcError.Type.NetworkError,
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
    __extends(WsClient, _super);
    function WsClient(proto, options) {
        var _this = this;
        var wsp = new WebSocketProxy();
        _this = _super.call(this, proto, wsp, __assign(__assign({}, defaultWsClientOptions), options)) || this;
        return _this;
    }
    return WsClient;
}(BaseWsClient));
var defaultWsClientOptions = __assign({}, defaultBaseWsClientOptions);

export { HttpClient, TransportDataProto, TsrpcError, TsrpcErrorType, WsClient };
