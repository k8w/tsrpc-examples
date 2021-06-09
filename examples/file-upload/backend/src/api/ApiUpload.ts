import fs from "fs/promises";
import { ApiCall } from "tsrpc";
import { ReqUpload, ResUpload } from "../shared/protocols/PtlUpload";

export async function ApiUpload(call: ApiCall<ReqUpload, ResUpload>) {
    // Write to file, or push to remote OSS...
    await fs.writeFile('uploads/' + call.req.fileName, call.req.fileData);

    call.succ({
        url: 'http://127.0.0.1:3000/uploads/' + call.req.fileName
    });
}