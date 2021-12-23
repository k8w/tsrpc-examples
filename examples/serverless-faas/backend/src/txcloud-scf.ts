// 腾讯云 - 云函数：SCF
// https://cloud.tencent.com/product/scf

import { init, server } from "./models/server";

export async function handler(event: any, context: any) {
    // init
    await ensureInit();

    let apiName = event.path.slice(event.requestContext.path.length + 1);    // 从 URL 中提取 ApiName
    let ret = await server.inputJSON(apiName, JSON.parse(event.body));

    return {
        "statusCode": ret.isSucc ? 200 : 500,
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(ret)
    }
}

let promiseInit: Promise<void> | undefined;
async function ensureInit() {
    if (!promiseInit) {
        promiseInit = init(true);
    }
    return promiseInit;
}