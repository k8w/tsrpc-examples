import { Post } from "./models/Post";

export interface ReqUpdatePost {
    update: { _id: string } & Partial<Pick<Post, 'title' | 'content'>>;
}

export interface ResUpdatePost {
    matchedCount: number;
}