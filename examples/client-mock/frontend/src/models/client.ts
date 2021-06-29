import { HttpClient } from "tsrpc-browser";
import { serviceProto } from "../shared/protocols/serviceProto";
import { mockApis } from "./mockApis";

// Global Client
export const client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

// Client Mock
client.flows.preCallApiFlow.push(async v => {
    // 有对应的 MockAPI 则 Mock，否则请求真实后端
    let mockApi = mockApis[v.apiName];
    if (mockApi) {
        client.logger?.log('[MockReq]', v.apiName, v.req);
        v.return = await mockApi!(v.req as any);
        client.logger?.log('[MockRes]', v.apiName, v.return);
    }

    return v;
})