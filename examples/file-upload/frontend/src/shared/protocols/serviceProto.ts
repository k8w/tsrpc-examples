import { ServiceProto } from 'tsrpc-proto';
import { ReqUpload, ResUpload } from './PtlUpload';

export interface ServiceType {
    api: {
        "Upload": {
            req: ReqUpload,
            res: ResUpload
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 2,
    "services": [
        {
            "id": 0,
            "name": "Upload",
            "type": "api"
        }
    ],
    "types": {
        "PtlUpload/ReqUpload": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "fileName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "fileData",
                    "type": {
                        "type": "Buffer",
                        "arrayType": "Uint8Array"
                    }
                }
            ]
        },
        "PtlUpload/ResUpload": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "url",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        }
    }
};