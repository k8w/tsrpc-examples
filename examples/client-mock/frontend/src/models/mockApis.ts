// Mock API request, simulate server

import { ApiReturn } from "tsrpc-browser";
import { ServiceType } from "../shared/protocols/serviceProto";

// Storage test data for mock
const data: {
    content: string,
    time: Date
}[] = [];

// { apiName: (req: ReqXXX) => ResXXX }
export const mockApis: {
    [K in keyof ServiceType['api']]?: (req: ServiceType['api'][K]['req']) => ApiReturn<ServiceType['api'][K]['res']> | Promise<ApiReturn<ServiceType['api'][K]['res']>>
} = {
    AddData: req => {
        let time = new Date();
        data.unshift({ content: req.content, time: time })
        return {
            isSucc: true,
            res: { time: time }
        }
    },

    GetData: async req => {
        // simulate latency
        await new Promise(rs => {
            setTimeout(rs, 500);
        })

        return {
            isSucc: true,
            res: {
                data: data
            }
        }
    }
};