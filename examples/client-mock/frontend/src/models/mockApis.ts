// 模拟后端，Mock API 请求

import { ApiReturn } from "tsrpc-browser";
import { ServiceType } from "../shared/protocols/serviceProto";

// 临时存储数据
const data: {
    content: string,
    time: Date
}[] = [];

// { 接口名: (req: 请求) => 响应 }
export const mockApis: { [K in keyof ServiceType['api']]?: (req: ServiceType['api'][K]['req']) => ApiReturn<ServiceType['api'][K]['res']> } = {
    AddData: req => {
        let time = new Date();
        data.unshift({ content: req.content, time: time })
        return {
            isSucc: true,
            res: { time: time }
        }
    },

    GetData: req => {
        return {
            isSucc: true,
            res: {
                data: data
            }
        }
    }
};