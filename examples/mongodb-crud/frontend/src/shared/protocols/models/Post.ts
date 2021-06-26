export interface Post {
    _id: string;
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