import { Collection, Db, MongoClient } from "mongodb";
import { Logger } from "tsrpc";
import { BackConfig } from "./BackConfig";
import { DbPost } from "./dbItems/DbPost";

export class Global {

    static db: Db;

    static async init(logger?: Logger) {
        logger?.log(`Start connecting db...`)
        const client = await new MongoClient(BackConfig.mongoDb).connect();
        logger?.log(`Db connected successfully...`)
        this.db = client.db();
    }

    static collection<T extends keyof DbCollectionType>(col: T): Collection<DbCollectionType[T]> {
        return this.db.collection(col);
    }

}

export interface DbCollectionType {
    Post: DbPost
}