// TSRPC would decode ObjectId as string in frontend.
declare module 'mongodb' {
    export type ObjectId = string;
    export type ObjectID = string;
}
declare module 'bson' {
    export type ObjectId = string;
    export type ObjectID = string;
}