import { HttpClient } from 'tsrpc-browser';
import { enableCookie } from './models/enableCookie';
import { showReqAndRes } from './models/showReqAndRes';
import { serviceProto } from './shared/protocols/serviceProto';

// Create Client
let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

// Session and Cookie
enableCookie(client);

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
$('#btnSetCookie').onclick = () => {
    client.callApi('SetCookie', {});
};
$('#btnSetSession').onclick = () => {
    client.callApi('SetSession', {});
};