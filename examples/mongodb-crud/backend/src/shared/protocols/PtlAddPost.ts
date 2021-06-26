import { Post } from "./models/Post";

export interface ReqAddPost {
    newPost: Omit<Post, '_id' | 'create' | 'update' | 'visitedNum'>;
}

export interface ResAddPost {
    insertedId: string;
}