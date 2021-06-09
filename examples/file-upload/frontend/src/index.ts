import { HttpClient } from 'tsrpc-browser';
import { serviceProto } from './shared/protocols/serviceProto';

let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

async function upload() {
    let file = (document.querySelector('input[type=file]') as HTMLInputElement).files?.[0];
    if (!file) {
        alert('Please select a file')
        return;
    }

    // Load file as Uint8Array
    let fileData = await loadFile(file);

    // Upload
    let ret = await client.callApi('Upload', {
        fileData: fileData,
        fileName: file.name
    });

    // Error
    if (!ret.isSucc) {
        alert(ret.err.message);
        return;
    }

    // Succ
    document.querySelector('ol')!.innerHTML += `<li><a href="${ret.res.url}" target="_blank">${ret.res.url}</a></li>\n`;
    alert('Upload successfully!')
}

function loadFile(file: File): Promise<Uint8Array> {
    return new Promise(rs => {
        let reader = new FileReader();
        reader.onload = e => {
            rs(new Uint8Array(e.target!.result as ArrayBuffer))
        }
        reader.readAsArrayBuffer(file);
    })
}

document.querySelector('button')!.onclick = upload;