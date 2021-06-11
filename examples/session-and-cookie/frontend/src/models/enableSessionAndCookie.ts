import { HttpClient } from "tsrpc-browser";

const CookieStorageKey = '__MY_COOKIE__';
const SessionStorageKey = '__MY_SESSION__';

export function enableSessionAndCookie(client: HttpClient<any>) {
    // Send
    client.flows.preCallApiFlow.push(v => {
        // Auto get __cookie from localStorage
        let cookieStr = localStorage.getItem(CookieStorageKey);
        v.req.__cookie = cookieStr ? JSON.parse(cookieStr) : undefined;

        // Auto get __session from sessionStorage
        let sessionStr = sessionStorage.getItem(SessionStorageKey);
        v.req.__session = sessionStr ? JSON.parse(sessionStr) : undefined;

        return v;
    })

    // Return
    client.flows.preApiReturnFlow.push(v => {
        if (v.return.isSucc) {
            // Auto set __cookie to localStorage
            if (v.return.res.__cookie) {
                localStorage.setItem(CookieStorageKey, JSON.stringify(v.return.res.__cookie))
            }
            // Auto set __session to sessionStorage
            if (v.return.res.__session) {
                sessionStorage.setItem(SessionStorageKey, JSON.stringify(v.return.res.__session))
            }
        }

        return v;
    })
}