import { ServiceProto } from 'tsrpc-proto';
import { ReqClear, ResClear } from './PtlClear';
import { ReqSetCookie, ResSetCookie } from './PtlSetCookie';
import { ReqSetSession, ResSetSession } from './PtlSetSession';
import { ReqTest, ResTest } from './PtlTest';

export interface ServiceType {
    api: {
        "Clear": {
            req: ReqClear,
            res: ResClear
        },
        "SetCookie": {
            req: ReqSetCookie,
            res: ResSetCookie
        },
        "SetSession": {
            req: ReqSetSession,
            res: ResSetSession
        },
        "Test": {
            req: ReqTest,
            res: ResTest
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "services": [
        {
            "id": 0,
            "name": "Clear",
            "type": "api"
        },
        {
            "id": 1,
            "name": "SetCookie",
            "type": "api"
        },
        {
            "id": 2,
            "name": "SetSession",
            "type": "api"
        },
        {
            "id": 3,
            "name": "Test",
            "type": "api"
        }
    ],
    "types": {
        "PtlClear/ReqClear": {
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
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__cookie",
                    "type": {
                        "type": "Reference",
                        "target": "base/Cookie"
                    },
                    "optional": true
                }
            ]
        },
        "base/Cookie": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sessionId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ],
            "indexSignature": {
                "keyType": "String",
                "type": {
                    "type": "Any"
                }
            }
        },
        "PtlClear/ResClear": {
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
        "base/BaseResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__cookie",
                    "type": {
                        "type": "Reference",
                        "target": "base/Cookie"
                    },
                    "optional": true
                }
            ]
        },
        "PtlSetCookie/ReqSetCookie": {
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
        "PtlSetCookie/ResSetCookie": {
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
        "PtlSetSession/ReqSetSession": {
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
        "PtlSetSession/ResSetSession": {
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
        "PtlTest/ReqTest": {
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
        "PtlTest/ResTest": {
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
                    "name": "testSession",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        }
    }
};