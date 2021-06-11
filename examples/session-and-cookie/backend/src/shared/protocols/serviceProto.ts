import { ServiceProto } from 'tsrpc-proto';
import { ReqClear, ResClear } from './PtlClear';
import { ReqGetCookie, ResGetCookie } from './PtlGetCookie';
import { ReqGetSession, ResGetSession } from './PtlGetSession';
import { ReqTest, ResTest } from './PtlTest';

export interface ServiceType {
    api: {
        "Clear": {
            req: ReqClear,
            res: ResClear
        },
        "GetCookie": {
            req: ReqGetCookie,
            res: ResGetCookie
        },
        "GetSession": {
            req: ReqGetSession,
            res: ResGetSession
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
    "version": 3,
    "services": [
        {
            "id": 3,
            "name": "Clear",
            "type": "api"
        },
        {
            "id": 0,
            "name": "GetCookie",
            "type": "api"
        },
        {
            "id": 1,
            "name": "GetSession",
            "type": "api"
        },
        {
            "id": 2,
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
                    "name": "__session",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Any"
                            }
                        }
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "__cookie",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Any"
                            }
                        }
                    },
                    "optional": true
                }
            ]
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
                    "name": "__session",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Any"
                            }
                        }
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "__cookie",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Any"
                            }
                        }
                    },
                    "optional": true
                }
            ]
        },
        "PtlGetCookie/ReqGetCookie": {
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
        "PtlGetCookie/ResGetCookie": {
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
        "PtlGetSession/ReqGetSession": {
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
        "PtlGetSession/ResGetSession": {
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
            ]
        }
    }
};