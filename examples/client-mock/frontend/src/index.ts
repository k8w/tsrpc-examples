import { HttpClient, TsrpcError } from 'tsrpc-browser';
import { serviceProto } from './shared/protocols/serviceProto';

// This is a demo code file
// Feel free to modify or clear it

// Create Client
let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

// Mock 后端逻辑临时存储数据
let data: {
    content: string,
    time: Date
}[] = [];

// Client Mock
client.flows.preCallApiFlow.push(v => {
    // 模拟网络错误：20% 网络错误概率
    if (Math.random() < 0.2) {
        // 模拟返回
        v.return = {
            isSucc: false,
            err: new TsrpcError('模拟网络错误: ' + v.apiName, {
                type: TsrpcError.Type.NetworkError
            })
        }
        return v;
    }

    // 模拟后端逻辑， Mock 返回结果，实际不请求后端
    client.logger?.log('[MockReq]', v.apiName, v.req);
    if (v.apiName === 'AddData') {
        let time = new Date();
        data.unshift({ content: v.req.content, time: time })
        v.return = {
            isSucc: true,
            res: { time: time }
        }
    }
    else if (v.apiName === 'GetData') {
        v.return = {
            isSucc: true,
            res: {
                data: data
            }
        }
    }
    client.logger?.log('[MockRes]', v.apiName, v.return);

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