import { HttpServer } from "tsrpc";
import * as uuid from "uuid";
import { BaseRequest } from "../shared/protocols/base";

// This example store session data to memory for convinience.
// You can store it into database or redis as you need.
export class ServerSession {

    async enable(server: HttpServer) {
        server.flows.preApiCallFlow.push(async v => {
            // Init Session
            let req = v.req as BaseRequest;
            let { sessionId } = await this.initSession(req.__cookie?.sessionId)
            req.__cookie = {
                ...req.__cookie,
                sessionId: sessionId
            }

            // ApiCall: Get & Set Session
            v.getSession = this.getSession.bind(this, sessionId);
            v.setSession = this.setSession.bind(this, sessionId);

            return v;
        });
    }

    // Test session storage
    private _sessionData: {
        [sessionId: string]: SessionData;
    } = {};

    // Storage in server memory for test
    // You can modify it to storage into redis / database...
    async initSession(sessionId?: string) {
        // Existed sessionId
        if (sessionId) {
            if (this._sessionData[sessionId]) {
                return {
                    sessionId: sessionId
                }
            }
        }

        sessionId = uuid.v4();
        this._sessionData[sessionId] = {};
        return {
            sessionId: sessionId
        };
    }
    async getSession<T extends keyof SessionData>(sessioinId: string, key: T): Promise<SessionData[T]> {
        return this._sessionData[sessioinId][key];
    }
    async setSession<T extends keyof SessionData>(sessioinId: string, key: T, value: SessionData[T]): Promise<void> {
        this._sessionData[sessioinId][key] = value;
    }
}

declare module 'tsrpc' {
    export interface ApiCall {
        getSession: <T extends keyof SessionData>(key: T) => Promise<SessionData[T]>,
        setSession: <T extends keyof SessionData>(key: T, value: SessionData[T]) => Promise<void>
    }
}

// Your custom session type definition
export interface SessionData {
    testSession?: string
}