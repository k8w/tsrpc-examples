import { ApiCall } from "tsrpc";
import { ReqGetData, ResGetData } from "../shared/protocols/PtlGetData";

// This is a demo code file
// Feel free to delete it

export async function ApiGetData(call: ApiCall<ReqGetData, ResGetData>) {
    call.succ({
        data: AllData
    })
}

export const AllData: { content: string, time: Date }[] = [];