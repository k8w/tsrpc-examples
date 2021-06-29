import { HttpClient, TsrpcError } from 'tsrpc-browser';
import { client } from './models/client';
import { serviceProto } from './shared/protocols/serviceProto';

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