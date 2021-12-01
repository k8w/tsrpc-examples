import { ServiceProto } from 'tsrpc-proto';
import { MsgInput } from './clientMsgs/MsgInput';
import { ReqJoinRoom, ResJoinRoom } from './PtlJoinRoom';
import { MsgFrame } from './serverMsgs/MsgFrame';
import { MsgJoin } from './serverMsgs/MsgJoin';
import { MsgLeave } from './serverMsgs/MsgLeave';

export interface ServiceType {
    api: {
        "JoinRoom": {
            req: ReqJoinRoom,
            res: ResJoinRoom
        }
    },
    msg: {
        "clientMsgs/Input": MsgInput,
        "serverMsgs/Frame": MsgFrame,
        "serverMsgs/Join": MsgJoin,
        "serverMsgs/Leave": MsgLeave
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 3,
    "services": [
        {
            "id": 2,
            "name": "clientMsgs/Input",
            "type": "msg"
        },
        {
            "id": 3,
            "name": "JoinRoom",
            "type": "api"
        },
        {
            "id": 7,
            "name": "serverMsgs/Frame",
            "type": "msg"
        },
        {
            "id": 4,
            "name": "serverMsgs/Join",
            "type": "msg"
        },
        {
            "id": 5,
            "name": "serverMsgs/Leave",
            "type": "msg"
        }
    ],
    "types": {
        "clientMsgs/MsgInput/MsgInput": {
            "type": "Intersection",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "sn",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../states/Player/PlayerInput"
                    }
                }
            ]
        },
        "../states/Player/PlayerInput": {
            "type": "Reference",
            "target": "../states/Player/PlayerMove"
        },
        "../states/Player/PlayerMove": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "move"
                    }
                },
                {
                    "id": 1,
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
        "PtlJoinRoom/ReqJoinRoom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "skinId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlJoinRoom/ResJoinRoom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "roomState",
                    "type": {
                        "type": "Reference",
                        "target": "../states/RoomState/RoomState"
                    }
                }
            ]
        },
        "../states/RoomState/RoomState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "players",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../states/Player/PlayerState"
                        }
                    }
                }
            ]
        },
        "../states/Player/PlayerState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "Number"
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
                    "name": "skinId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
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
        "serverMsgs/MsgFrame/MsgFrame": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "inputs",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "uid",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "msgInput",
                                    "type": {
                                        "type": "Reference",
                                        "target": "clientMsgs/MsgInput/MsgInput"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "serverMsgs/MsgJoin/MsgJoin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "player",
                    "type": {
                        "type": "Reference",
                        "target": "../states/Player/PlayerState"
                    }
                }
            ]
        },
        "serverMsgs/MsgLeave/MsgLeave": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        }
    }
};