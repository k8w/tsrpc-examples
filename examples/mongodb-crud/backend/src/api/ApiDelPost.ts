import { ObjectID } from 'mongodb';
import { ApiCall } from "tsrpc";
import { Global } from "../models/Global";
import { ReqDelPost, ResDelPost } from "../shared/protocols/PtlDelPost";

export async function ApiDelPost(call: ApiCall<ReqDelPost, ResDelPost>) {
    let op = await Global.collection('Post').deleteOne({
        _id: new ObjectID(call.req._id)
    })

    call.succ({});
}