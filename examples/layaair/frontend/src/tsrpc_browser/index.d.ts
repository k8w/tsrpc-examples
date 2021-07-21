/*!
 * TSRPC Browser v3.0.5-dev.0
 * -----------------------------------------
 * Copyright (c) King Wang.
 * MIT License
 * https://github.com/k8w/tsrpc-browser
 */
import { ApiReturn } from 'tsrpc-proto';
import { BaseHttpClient } from 'tsrpc-base-client';
import { BaseHttpClientOptions } from 'tsrpc-base-client';
import { BaseServiceType } from 'tsrpc-proto';
import { BaseWsClient } from 'tsrpc-base-client';
import { BaseWsClientOptions } from 'tsrpc-base-client';
import { ServiceProto } from 'tsrpc-proto';
import { TransportOptions } from 'tsrpc-base-client';
import { TsrpcError } from 'tsrpc-proto';

/**
 * HTTP Client for TSRPC.
 * It uses XMLHttpRequest to send requests.
 * @typeParam ServiceType - `ServiceType` from generated `proto.ts`
 */
export declare class HttpClient<ServiceType extends BaseServiceType = any> extends BaseHttpClient<ServiceType> {
    readonly options: Readonly<HttpClientOptions>;
    constructor(proto: ServiceProto<ServiceType>, options?: Partial<HttpClientOptions>);
    callApi<T extends keyof ServiceType['api']>(apiName: T, req: ServiceType['api'][T]['req'], options?: HttpClientTransportOptions): Promise<ApiReturn<ServiceType['api'][T]['res']>>;
    sendMsg<T extends keyof ServiceType['msg']>(msgName: T, msg: ServiceType['msg'][T], options?: HttpClientTransportOptions): Promise<{
        isSucc: true;
    } | {
        isSucc: false;
        err: TsrpcError;
    }>;
}

export declare interface HttpClientOptions extends BaseHttpClientOptions {
}

export declare interface HttpClientTransportOptions extends TransportOptions {
    /**
     * Event when progress of data sent is changed
     * @param ratio - 0~1
     */
    onProgress?: (ratio: number) => void;
}

/**
 * Client for TSRPC WebSocket Server.
 * @typeParam ServiceType - `ServiceType` from generated `proto.ts`
 */
export declare class WsClient<ServiceType extends BaseServiceType = any> extends BaseWsClient<ServiceType> {
    readonly options: Readonly<WsClientOptions>;
    constructor(proto: ServiceProto<ServiceType>, options?: Partial<WsClientOptions>);
}

export declare interface WsClientOptions extends BaseWsClientOptions {
}

export * from "tsrpc-proto";

export { }
