import { HttpClient } from "tsrpc-browser";

export function showReqAndRes(client: HttpClient<any>) {
    // Send
    client.flows.postApiReturnFlow.push(v => {
        (document.querySelector('.apiReq') as HTMLElement).innerText = 'callApi: ' + v.apiName + '\n\n' + JSON.stringify(v.req, null, 2);
        (document.querySelector('.apiReturn') as HTMLElement).innerText = JSON.stringify(v.return, null, 2);
        return v;
    });
}