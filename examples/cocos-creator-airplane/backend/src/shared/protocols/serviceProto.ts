import { ServiceProto } from 'tsrpc-proto';
import { MsgGameInput } from './game/client/MsgGameInput';
import { MsgGameOver } from './game/client/MsgGameOver';
import { MsgGameStart } from './game/server/MsgGameStart';
import { MsgServerFrame } from './game/server/MsgServerFrame';
import { ReqLogin, ResLogin } from './PtlLogin';
import { ReqCreateRoom, ResCreateRoom } from './room/PtlCreateRoom';
import { ReqGetRoomList, ResGetRoomList } from './room/PtlGetRoomList';
import { ReqJoinRoom, ResJoinRoom } from './room/PtlJoinRoom';
import { ReqSetReady, ResSetReady } from './room/PtlSetReady';
import { MsgUpdateRoomState } from './room/server/MsgUpdateRoomState';

export interface ServiceType {
    api: {
        "Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "room/CreateRoom": {
            req: ReqCreateRoom,
            res: ResCreateRoom
        },
        "room/GetRoomList": {
            req: ReqGetRoomList,
            res: ResGetRoomList
        },
        "room/JoinRoom": {
            req: ReqJoinRoom,
            res: ResJoinRoom
        },
        "room/SetReady": {
            req: ReqSetReady,
            res: ResSetReady
        }
    },
    msg: {
        "game/client/GameInput": MsgGameInput,
        "game/client/GameOver": MsgGameOver,
        "game/server/GameStart": MsgGameStart,
        "game/server/ServerFrame": MsgServerFrame,
        "room/server/UpdateRoomState": MsgUpdateRoomState
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 3,
    "services": [
        {
            "id": 11,
            "name": "game/client/GameInput",
            "type": "msg"
        },
        {
            "id": 12,
            "name": "game/client/GameOver",
            "type": "msg"
        },
        {
            "id": 13,
            "name": "game/server/GameStart",
            "type": "msg"
        },
        {
            "id": 14,
            "name": "game/server/ServerFrame",
            "type": "msg"
        },
        {
            "id": 15,
            "name": "Login",
            "type": "api",
            "conf": {}
        },
        {
            "id": 7,
            "name": "room/CreateRoom",
            "type": "api",
            "conf": {}
        },
        {
            "id": 16,
            "name": "room/GetRoomList",
            "type": "api",
            "conf": {}
        },
        {
            "id": 8,
            "name": "room/JoinRoom",
            "type": "api",
            "conf": {}
        },
        {
            "id": 19,
            "name": "room/SetReady",
            "type": "api",
            "conf": {}
        },
        {
            "id": 18,
            "name": "room/server/UpdateRoomState",
            "type": "msg"
        }
    ],
    "types": {
        "game/client/MsgGameInput/MsgGameInput": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sn",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "inputs",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "game/client/MsgGameInput/ClientInput"
                        }
                    }
                }
            ]
        },
        "game/client/MsgGameInput/ClientInput": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../game/GameSystemInput/PlayerMove"
                        },
                        "keys": [
                            "playerId"
                        ],
                        "type": "Omit"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../game/GameSystemInput/PlayerHitEnemy"
                        },
                        "keys": [
                            "playerId"
                        ],
                        "type": "Omit"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../game/GameSystemInput/PlayerHitFightIcon"
                        },
                        "keys": [
                            "playerId"
                        ],
                        "type": "Omit"
                    }
                },
                {
                    "id": 3,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../game/GameSystemInput/PlayerHurt"
                        },
                        "keys": [
                            "playerId"
                        ],
                        "type": "Omit"
                    }
                },
                {
                    "id": 4,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../game/GameSystemInput/BulletHit"
                        },
                        "keys": [
                            "playerId"
                        ],
                        "type": "Omit"
                    }
                }
            ]
        },
        "../game/GameSystemInput/PlayerMove": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "PlayerMove"
                    }
                },
                {
                    "id": 1,
                    "name": "playerId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 2,
                    "name": "offset",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "name": "createBullets",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "bullets",
                        "objectType": {
                            "type": "Reference",
                            "target": "../game/GameSystemState/PlayerState"
                        }
                    }
                }
            ]
        },
        "../game/GameSystemState/PlayerState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 7,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "life",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "currentBulletType",
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemState/PlayerBulletType"
                    }
                },
                {
                    "id": 4,
                    "name": "pos",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "bullets",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "id",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "type",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/GameSystemState/PlayerBulletType"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "pos",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "x",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "y",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "init",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "time",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "pos",
                                                "type": {
                                                    "type": "Interface",
                                                    "properties": [
                                                        {
                                                            "id": 0,
                                                            "name": "x",
                                                            "type": {
                                                                "type": "Number"
                                                            }
                                                        },
                                                        {
                                                            "id": 1,
                                                            "name": "y",
                                                            "type": {
                                                                "type": "Number"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "name": "direction",
                                                "type": {
                                                    "type": "Interface",
                                                    "properties": [
                                                        {
                                                            "id": 0,
                                                            "name": "x",
                                                            "type": {
                                                                "type": "Number"
                                                            }
                                                        },
                                                        {
                                                            "id": 1,
                                                            "name": "y",
                                                            "type": {
                                                                "type": "Number"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "nextId",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "bullet",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "../game/GameSystemState/PlayerBulletType": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Literal",
                        "literal": "M"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Literal",
                        "literal": "H"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "type": "Literal",
                        "literal": "S"
                    }
                }
            ]
        },
        "../game/GameSystemInput/PlayerHitEnemy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "PlayerHitEnemy"
                    }
                },
                {
                    "id": 1,
                    "name": "playerId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 2,
                    "name": "enemyId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "../game/GameSystemInput/PlayerHitFightIcon": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "PlayerHitFightIcon"
                    }
                },
                {
                    "id": 1,
                    "name": "playerId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 2,
                    "name": "fightIconId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "../game/GameSystemInput/PlayerHurt": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "PlayerHurt"
                    }
                },
                {
                    "id": 1,
                    "name": "playerId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 2,
                    "name": "hurtLife",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/GameSystemInput/BulletHit": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "BulletHit"
                    }
                },
                {
                    "id": 3,
                    "name": "playerId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 4,
                    "name": "playerBulletId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 5,
                    "name": "enemyId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 6,
                    "name": "enemyBulletId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "game/client/MsgGameOver/MsgGameOver": {
            "type": "Interface"
        },
        "game/server/MsgGameStart/MsgGameStart": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "frameIndex",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "gameState",
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemState/GameSystemState"
                    }
                }
            ]
        },
        "../game/GameSystemState/GameSystemState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "now",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/GameSystemState/PlayerState"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "enemies",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/GameSystemState/EnemyState"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "fightIcons",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/GameSystemState/FightIconState"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "nextId",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "enemy",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 1,
                                "name": "fightIcon",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "lastCreateEnemyTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "random",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "seed",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "state",
                                "type": {
                                    "type": "Object"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "../game/GameSystemState/EnemyState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemState/EnemyType"
                    }
                },
                {
                    "id": 2,
                    "name": "pos",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "name": "init",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "pos",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "x",
                                            "type": {
                                                "type": "Number"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "y",
                                            "type": {
                                                "type": "Number"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 4,
                    "name": "bullets",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "id",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "pos",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "x",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "y",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "init",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "time",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "pos",
                                                "type": {
                                                    "type": "Interface",
                                                    "properties": [
                                                        {
                                                            "id": 0,
                                                            "name": "x",
                                                            "type": {
                                                                "type": "Number"
                                                            }
                                                        },
                                                        {
                                                            "id": 1,
                                                            "name": "y",
                                                            "type": {
                                                                "type": "Number"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "lastBulletTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "nextId",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "bullet",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "../game/GameSystemState/EnemyType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "../game/GameSystemState/FightIconState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemState/PlayerBulletType"
                    }
                },
                {
                    "id": 2,
                    "name": "init",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "pos",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "x",
                                            "type": {
                                                "type": "Number"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "y",
                                            "type": {
                                                "type": "Number"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "game/server/MsgServerFrame/MsgServerFrame": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "frameIndex",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "inputs",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/GameSystemInput/GameSystemInput"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "lastSn",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "../game/GameSystemInput/GameSystemInput": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemInput/PlayerMove"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemInput/PlayerHitEnemy"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemInput/PlayerHitFightIcon"
                    }
                },
                {
                    "id": 3,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemInput/PlayerHurt"
                    }
                },
                {
                    "id": 4,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemInput/BulletHit"
                    }
                },
                {
                    "id": 5,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystemInput/TimePast"
                    }
                }
            ]
        },
        "../game/GameSystemInput/TimePast": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "TimePast"
                    }
                },
                {
                    "id": 1,
                    "name": "dt",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlLogin/ReqLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface"
        },
        "PtlLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 1,
                    "name": "currentUser",
                    "type": {
                        "type": "Reference",
                        "target": "../types/CurrentUser/CurrentUser"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "../types/CurrentUser/CurrentUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/PtlCreateRoom/ReqCreateRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "room/PtlCreateRoom/ResCreateRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "room/PtlGetRoomList/ReqGetRoomList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "room/PtlGetRoomList/ResGetRoomList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "room/PtlJoinRoom/ReqJoinRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "room/PtlJoinRoom/ResJoinRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "roomState",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoomState/RoomState"
                    }
                }
            ]
        },
        "../types/RoomState/RoomState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "id",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "nickname",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "isReady",
                                    "type": {
                                        "type": "Boolean"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "status",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Literal",
                                    "literal": "wait"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": "ready"
                                }
                            },
                            {
                                "id": 2,
                                "type": {
                                    "type": "Literal",
                                    "literal": "start"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "room/PtlSetReady/ReqSetReady": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "isReady",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "room/PtlSetReady/ResSetReady": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "room/server/MsgUpdateRoomState/MsgUpdateRoomState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "state",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoomState/RoomState"
                    }
                }
            ]
        }
    }
};