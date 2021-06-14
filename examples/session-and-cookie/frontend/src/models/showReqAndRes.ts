import { HttpClient } from "tsrpc-browser";

export function showReqAndRes(client: HttpClient<any>) {
    // Clear when send
    client.flows.preCallApiFlow.push(v => {
        document.querySelector('.apiReq')!.innerHTML = '';
        document.querySelector('.apiReturn')!.innerHTML = '';
        return v;
    });
    // Ouput when recv
    client.flows.postApiReturnFlow.push(v => {
        (document.querySelector('.apiReq') as HTMLElement).innerText = 'callApi: ' + v.apiName + '\n\n' + JSON.stringify(v.req, null, 2);
        (document.querySelector('.apiReturn') as HTMLElement).innerText = JSON.stringify(v.return, null, 2);
        return v;
    });
}