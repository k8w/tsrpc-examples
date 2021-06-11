import { HttpClient } from 'tsrpc-browser';
import { enableSessionAndCookie } from './models/enableSessionAndCookie';
import { showReqAndRes } from './models/showReqAndRes';
import { serviceProto } from './shared/protocols/serviceProto';

// Create Client
let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

// Session and Cookie
enableSessionAndCookie(client);

// Show Req and Return to View
showReqAndRes(client);

// Bind Events
const $ = document.querySelector.bind(document) as (v: string) => HTMLElement;
$('#btnTest').onclick = () => {
    client.callApi('Test', {});
};
$('#btnClear').onclick = () => {
    client.callApi('Clear', {});
};
$('#btnGetCookie').onclick = () => {
    client.callApi('GetCookie', {});
};
$('#btnGetSession').onclick = () => {
    client.callApi('GetSession', {});
};