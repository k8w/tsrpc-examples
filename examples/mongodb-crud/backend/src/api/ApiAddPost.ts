import { Document, ObjectId } from "mongodb";
import { ApiCall } from "tsrpc";
import { Global } from "../models/Global";
import { ReqAddPost, ResAddPost } from "../shared/protocols/PtlAddPost";

export async function ApiAddPost(call: ApiCall<ReqAddPost, ResAddPost>) {
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