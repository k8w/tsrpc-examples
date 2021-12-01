import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqSend, ResSend } from "../shared/protocols/PtlSend";

// This is a demo code file
// Feel free to delete it

export async function ApiSend(call: ApiCall<ReqSend, ResSend>) {
    // Error
    if (call.req.content.length === 0) {
        call.error('Content is empty')
        return;
    }

    // Success
    let time = new Date();
    call.succ({
        time: time
    });

    // Broadcast
    server.broadcastMsg('Chat', {
        content: call.req.content,
        time: time
    })
}