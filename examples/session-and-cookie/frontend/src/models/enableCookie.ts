import { HttpClient } from "tsrpc-browser";

const CookieStorageKey = '__MY_COOKIE__';

export function enableCookie(client: HttpClient<any>) {
    // Send
    client.flows.preCallApiFlow.push(v => {
        // Auto get __cookie from localStorage
        let cookieStr = localStorage.getItem(CookieStorageKey);
        v.req.__cookie = cookieStr ? JSON.parse(cookieStr) : undefined;
        return v;
    })

    // Return
    client.flows.preApiReturnFlow.push(v => {
        if (v.return.isSucc) {
            // Auto set __cookie to localStorage
            if (v.return.res.__cookie) {
                localStorage.setItem(CookieStorageKey, JSON.stringify(v.return.res.__cookie))
            }
        }

        return v;
    })
}