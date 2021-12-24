import { ApiCall } from "tsrpc";
import { ReqAddData, ResAddData } from "../shared/protocols/PtlAddData";
import { AllData } from "./ApiGetData";

// This is a demo code file
// Feel free to delete it

export async function ApiAddData(call: ApiCall<ReqAddData, ResAddData>) {
    // Error
    if (call.req.content === '') {
        call.error('Content is empty');
        return;
    }

    let time = new Date();
    AllData.unshift({
        content: call.req.content,
        time: time
    })
    console.log('AllData', AllData)

    // Success
    call.succ({
        time: time
    });
}