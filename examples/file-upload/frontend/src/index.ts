import { HttpClient } from 'tsrpc-browser';
import { serviceProto } from './shared/protocols/serviceProto';

let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

async function upload() {
    // Load File
    let file = document.querySelector('input[type=file]') as HTMLInputElement;
    if (!file.files || !file.files[0]) {
        alert('Please select a file')
        return;
    }
    let fileData = await loadFile(file.files[0]);

    // Upload
    let ret = await client.callApi('Upload', {
        fileData: fileData,
        fileName: file.files[0].name
    });

    // Error
    if (!ret.isSucc) {
        alert(ret.err.message);
        return;
    }

    // Succ
    document.querySelector('ol')!.innerHTML += `<li><a href="${ret.res.url}" target="_blank">${ret.res.url}</a></li>\n`;
    file.value = '';
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