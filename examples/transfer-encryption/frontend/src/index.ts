import { HttpClient } from 'tsrpc-browser';
import { EncryptUtil } from './shared/models/EncryptUtil';
import { serviceProto } from './shared/protocols/serviceProto';

// Create Client
let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console,
    debugBuf: true
});

// Encrypt
client.flows.preSendBufferFlow.push(v => {
    v.buf = EncryptUtil.encrypt(v.buf);
    return v;
});
// Decrypt
client.flows.preRecvBufferFlow.push(v => {
    v.buf = EncryptUtil.decrypt(v.buf);
    return v;
})

// Reload message list
async function loadList() {
    let ret = await client.callApi('GetData', {});

    // Error
    if (!ret.isSucc) {
        alert(ret.err.message);
        return;
    }

    // Success
    const list = document.querySelector('.list')!;
    list.innerHTML = '';
    ret.res.data.forEach(v => {
        let li = document.createElement('li');
        li.innerHTML = `<div class="content"></div><div class="time"></div>`;
        (li.querySelector('.content') as HTMLDivElement).innerText = v.content;
        (li.querySelector('.time') as HTMLDivElement).innerText = v.time.toLocaleTimeString();
        list.appendChild(li);
    })
}

// Send Message
async function send() {
    const textarea = document.querySelector('.send>textarea') as HTMLTextAreaElement;
    let ret = await client.callApi('AddData', {
        content: textarea.value
    });

    // Error
    if (!ret.isSucc) {
        alert(ret.err.message);
        return;
    }

    // Success
    textarea.value = '';
    loadList();
}

// Bind Events
(document.querySelector('.send>button') as HTMLButtonElement).onclick = send;

// Load list after page load
loadList();