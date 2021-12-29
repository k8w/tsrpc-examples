import { ObjectId } from 'mongodb';
import { ApiCall } from "tsrpc";
import { Global } from "../models/Global";
import { ReqUpdatePost, ResUpdatePost } from "../shared/protocols/PtlUpdatePost";

export async function ApiUpdatePost(call: ApiCall<ReqUpdatePost, ResUpdatePost>) {
    let { _id, ...update } = call.req.update;

    let op = await Global.collection('Post').updateOne({
        _id: new ObjectId(_id)
    }, {
        $set: {
            ...update,
            update: {
                uid: 'xxx',
                time: new Date()
            }
        }
    });

    call.succ({
        matchedCount: op.matchedCount
    })
}