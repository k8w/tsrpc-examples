import { ObjectId } from "mongodb";

export interface DbPost {
    _id: ObjectId;
    author: string;
    title: string;
    content: string;
    visitedNum: number;

    create: {
        uid: string;
        time: Date;
    }

    update?: {
        uid: string,
        time: Date
    }
}