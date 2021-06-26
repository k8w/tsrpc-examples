import { Post } from "./models/Post";

export interface ReqGetPost {
    _id: string;
}

export interface ResGetPost {
    post: Post;
}
