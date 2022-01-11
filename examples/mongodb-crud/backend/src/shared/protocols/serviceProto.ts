import { ServiceProto } from 'tsrpc-proto';
import { ReqAddPost, ResAddPost } from './PtlAddPost';
import { ReqDelPost, ResDelPost } from './PtlDelPost';
import { ReqGetPost, ResGetPost } from './PtlGetPost';
import { ReqUpdatePost, ResUpdatePost } from './PtlUpdatePost';

export interface ServiceType {
    api: {
        "AddPost": {
            req: ReqAddPost,
            res: ResAddPost
        },
        "DelPost": {
            req: ReqDelPost,
            res: ResDelPost
        },
        "GetPost": {
            req: ReqGetPost,
            res: ResGetPost
        },
        "UpdatePost": {
            req: ReqUpdatePost,
            res: ResUpdatePost
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 17,
    "services": [
        {
            "id": 0,
            "name": "AddPost",
            "type": "api"
        },
        {
            "id": 1,
            "name": "DelPost",
            "type": "api"
        },
        {
            "id": 2,
            "name": "GetPost",
            "type": "api"
        },
        {
            "id": 3,
            "name": "UpdatePost",
            "type": "api"
        }
    ],
    "types": {
        "PtlAddPost/ReqAddPost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "newPost",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/DbPost/DbPost"
                        },
                        "keys": [
                            "_id",
                            "create",
                            "update",
                            "visitedNum"
                        ],
                        "type": "Omit"
                    }
                }
            ]
        },
        "../db/DbPost/DbPost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                },
                {
                    "id": 1,
                    "name": "author",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "visitedNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "create",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "uid",
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
                },
                {
                    "id": 6,
                    "name": "update",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "uid",
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
                    },
                    "optional": true
                }
            ]
        },
        "PtlAddPost/ResAddPost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "insertedId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlDelPost/ReqDelPost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?bson/ObjectId"
                    }
                }
            ]
        },
        "PtlDelPost/ResDelPost": {
            "type": "Interface"
        },
        "PtlGetPost/ReqGetPost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?bson/ObjectId"
                    }
                }
            ]
        },
        "PtlGetPost/ResGetPost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "post",
                    "type": {
                        "type": "Reference",
                        "target": "../db/DbPost/DbPost"
                    }
                }
            ]
        },
        "PtlUpdatePost/ReqUpdatePost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "update",
                    "type": {
                        "type": "Intersection",
                        "members": [
                            {
                                "id": 4,
                                "type": {
                                    "target": {
                                        "type": "Reference",
                                        "target": "../db/DbPost/DbPost"
                                    },
                                    "keys": [
                                        "_id"
                                    ],
                                    "type": "Pick"
                                }
                            },
                            {
                                "id": 5,
                                "type": {
                                    "type": "Partial",
                                    "target": {
                                        "target": {
                                            "type": "Reference",
                                            "target": "../db/DbPost/DbPost"
                                        },
                                        "keys": [
                                            "title",
                                            "content"
                                        ],
                                        "type": "Pick"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "PtlUpdatePost/ResUpdatePost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "matchedCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        }
    }
};