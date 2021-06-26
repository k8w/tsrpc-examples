import { ApiCall } from "tsrpc";
import { Global } from "../models/Global";
import { ReqAddPost, ResAddPost } from "../shared/protocols/PtlAddPost";

export async function ApiAddPost(call: ApiCall<ReqAddPost, ResAddPost>) {
    console.log('cccgasdgasd', call.service.conf)
    if (call.service.conf) {
        // if (没登录) {
        //     call.error('你还没登录');
        //     return;
        // }
    }

    let op = await Global.collection('Post').insertOne({
        ...call.req.newPost,
        create: {
            uid: 'xxx',
            time: new Date()
        },
        visitedNum: 0
    });

    call.succ({
        insertedId: op.insertedId.toHexString()
    })
}