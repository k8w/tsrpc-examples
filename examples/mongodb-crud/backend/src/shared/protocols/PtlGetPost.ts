import { ObjectId } from "bson";
import { DbPost } from "../db/DbPost";

export interface ReqGetPost {
    _id: ObjectId;
}

export interface ResGetPost {
    post: DbPost;
}
