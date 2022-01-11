import { DbPost } from "../db/DbPost";

export interface ReqAddPost {
    newPost: Omit<DbPost, '_id' | 'create' | 'update' | 'visitedNum'>;
}

export interface ResAddPost {
    insertedId: string;
}