import { HttpClient } from "tsrpc-browser";
import { setStatus } from "./index";
import { BaseResponse } from "./shared/protocols/base";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create Client
export const client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

// When server return a SSOToken, store it to localStorage
client.flows.postApiReturnFlow.push(v => {
    if (v.return.isSucc) {
        let res = v.return.res as BaseResponse;
        if (res.__ssoToken !== undefined) {
            localStorage.setItem('SSO_TOKEN', res.__ssoToken);
        }
    }
    else if (v.return.err.code === 'NEED_LOGIN') {
        localStorage.removeItem('SSO_TOKEN');
        setStatus(false);
    }
    return v;
});

// Append "__ssoToken" to request automatically
client.flows.preCallApiFlow.push(v => {
    let ssoToken = localStorage.getItem('SSO_TOKEN');
    if (ssoToken) {
        v.req.__ssoToken = ssoToken;
    }
    return v;
})