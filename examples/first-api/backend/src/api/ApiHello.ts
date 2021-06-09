import { ApiCall } from "tsrpc";
import { ReqHello, ResHello } from "../shared/protocols/PtlHello";

export async function ApiHello(call: ApiCall<ReqHello, ResHello>) {
    if (call.req.name === 'World') {
        call.succ({
            reply: 'Hello, ' + call.req.name,
            time: new Date()
        });
    }
    else {
        call.error('Invalid name');
    }
}