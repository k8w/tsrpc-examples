import { ServiceProto } from 'tsrpc-proto';
import { MsgClientInput } from './client/MsgClientInput';
import { ReqJoin, ResJoin } from './PtlJoin';
import { MsgFrame } from './server/MsgFrame';

export interface ServiceType {
    api: {
        "Join": {
            req: ReqJoin,
            res: ResJoin
        }
    },
    msg: {
        "client/ClientInput": MsgClientInput,
        "server/Frame": MsgFrame
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 2,
    "services": [
        {
            "id": 0,
            "name": "client/ClientInput",
            "type": "msg"
        },
        {
            "id": 1,
            "name": "Join",
            "type": "api"
        },
        {
            "id": 2,
            "name": "server/Frame",
            "type": "msg"
        }
    ],
    "types": {
        "client/MsgClientInput/MsgClientInput": {
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
                            "target": "client/MsgClientInput/ClientInput"
                        }
                    }
                }
            ]
        },
        "client/MsgClientInput/ClientInput": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../game/GameSystem/PlayerMove"
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
                            "target": "../game/GameSystem/PlayerAttack"
                        },
                        "keys": [
                            "playerId"
                        ],
                        "type": "Omit"
                    }
                }
            ]
        },
        "../game/GameSystem/PlayerMove": {
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
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "speed",
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
                    "name": "dt",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/GameSystem/PlayerAttack": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "PlayerAttack"
                    }
                },
                {
                    "id": 1,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
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
                }
            ]
        },
        "PtlJoin/ReqJoin": {
            "type": "Interface"
        },
        "PtlJoin/ResJoin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "gameState",
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystem/GameSystemState"
                    }
                }
            ]
        },
        "../game/GameSystem/GameSystemState": {
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
                            "target": "../game/state/PlayerState/PlayerState"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "arrows",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/state/ArrowState/ArrowState"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "nextArrowId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/state/PlayerState/PlayerState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
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
                    "name": "dizzyEndTime",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "../game/state/ArrowState/ArrowState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "fromPlayerId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "startTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "startPos",
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
                    "id": 4,
                    "name": "targetTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "targetPos",
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
        },
        "server/MsgFrame/MsgFrame": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "inputs",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/GameSystem/GameSystemInput"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "lastSn",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "../game/GameSystem/GameSystemInput": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystem/PlayerMove"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystem/PlayerAttack"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystem/PlayerJoin"
                    }
                },
                {
                    "id": 3,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystem/PlayerLeave"
                    }
                },
                {
                    "id": 4,
                    "type": {
                        "type": "Reference",
                        "target": "../game/GameSystem/TimePast"
                    }
                }
            ]
        },
        "../game/GameSystem/PlayerJoin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "PlayerJoin"
                    }
                },
                {
                    "id": 1,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
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
                }
            ]
        },
        "../game/GameSystem/PlayerLeave": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "PlayerLeave"
                    }
                },
                {
                    "id": 1,
                    "name": "playerId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/GameSystem/TimePast": {
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
        }
    }
};