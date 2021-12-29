import { ObjectId } from "mongodb";
import { Overwrite } from "tsrpc";
import { Post } from "../../shared/protocols/models/Post";

export type DbPost = Overwrite<Post, {
    _id: ObjectId
}>