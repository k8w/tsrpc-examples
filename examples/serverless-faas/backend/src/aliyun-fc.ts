// 阿里云 - 函数计算：FC
// https://cloud.tencent.com/product/scf

import { init, server } from "./models/server";

// 阿里云函数计算 - HTTP函数
export async function handler(req: any, res: any, context: any) {
    // JSON 请求
    if (req.headers['content-type']?.includes('application/json')) {
        let apiName = req.path.slice(1);    // 去除开头的 "/"
        let ret = await server.inputJSON(apiName, JSON.parse(req.body));
        res.setStatusCode(ret.isSucc ? 200 : 500);
        res.send(JSON.stringify(ret));
    }
    // 二进制请求
    else {
        let output = await server.inputBuffer(req.body);
        res.send(Buffer.from(output));
    }
}

// 阿里云函数计算 - 初始化
export async function initializer(context: unknown, callback: Function) {
    await init();
    callback();
}