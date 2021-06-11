import { ApiCall } from "tsrpc";
import { ReqTest, ResTest } from "../shared/protocols/PtlTest";

export async function ApiTest(call: ApiCall<ReqTest, ResTest>) {
    call.succ({});
}