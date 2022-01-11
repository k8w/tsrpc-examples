import { DbPost } from "../db/DbPost";

export interface ReqUpdatePost {
    update: Pick<DbPost, '_id'> & Partial<Pick<DbPost, 'title' | 'content'>>;
}

export interface ResUpdatePost {
    matchedCount: number;
}