import { IncomingMessage } from "http";
import * as path from "path";
import { Counter, HttpConnection, HttpServer } from "tsrpc";
import { serviceProto, ServiceType } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

// Init
export async function init(context: any, callback: (err: Error | null, data: any) => void) {
    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, 'api'));
    callback(null, '');
}

const connCounter = new Counter(1);

// Handler
export function handler(httpReq: IncomingMessage, httpRes: {
    setStatusCode: (code: number) => void,
    setHeader: (key: string, value: string) => void,
    deleteHeader: (key: string) => void,
    send: (body: Buffer | string) => void
}, context: any) {
    httpRes.setStatusCode(200);
    httpRes.setHeader('X-Powered-By', `TSRPC`);
    httpRes.setHeader('Access-Control-Allow-Origin', '*');
    httpRes.setHeader('Access-Control-Allow-Headers', 'Content-Type,*');
    if (httpReq.method === 'OPTIONS') {
        httpRes.send('');
        return;
    }

    let chunks: Buffer[] = [];
    httpReq.on('data', data => {
        chunks.push(data);
    });

    let conn: HttpConnection<ServiceType> | undefined;
    httpReq.on('end', async () => {
        let isJSON = false;
        conn = new HttpConnection({
            server: 'FAAS' as any,
            id: '' + connCounter.getNext(),
            ip: '???',
            httpReq: httpReq,
            httpRes: { end: httpRes.send.bind(httpRes) } as any,
            isJSON: isJSON
        });
        await server.flows.postConnectFlow.exec(conn, conn.logger);

        let buf = chunks.length === 1 ? chunks[0] : Buffer.concat(chunks);

        server['_onRecvBuffer'](conn, buf);
    });
}

