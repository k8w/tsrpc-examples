import { Collection, Db, MongoClient } from "mongodb";
import { Logger } from "tsrpc";
import { BackConfig } from "./BackConfig";
import { DbPost } from "./dbItems/DbPost";

export class Global {

    static db: Db;

    static async init(logger?: Logger) {
        this.db = await this._getMongoDb(BackConfig.mongoDb, logger);
    }

    private static _getMongoDb(uri: string, logger?: Logger): Promise<Db> {
        logger?.log(`Start connecting db...(${uri})`)
        let promise = new Promise<Db>((rs, rj) => {
            MongoClient.connect(uri, {
                useUnifiedTopology: true,
            }, (err, client) => {
                if (err) {
                    logger?.error('× Failed connected db.', err)
                    rj(err);
                } else {
                    logger?.log(`√ Connect db succ. (${uri})`)
                    rs(client.db());
                }
            })
        })
        return promise;
    }

    static collection<T extends keyof DbCollectionType>(col: T): Collection<DbCollectionType[T]> {
        return this.db.collection(col);
    }

}

export interface DbCollectionType {
    Post: DbPost
}