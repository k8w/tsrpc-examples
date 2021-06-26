import { ObjectID } from "bson";
import { Overwrite } from "tsrpc";
import { Post } from "../../shared/protocols/models/Post";

export type DbPost = Overwrite<Post, {
    _id: ObjectID
}>