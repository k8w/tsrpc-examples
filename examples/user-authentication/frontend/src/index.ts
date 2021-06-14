import { HttpClient } from 'tsrpc-browser';
import { BaseResponse } from './shared/protocols/base';
import { serviceProto } from './shared/protocols/serviceProto';

const $ = document.querySelector.bind(document) as (v: string) => HTMLElement;

// Create Client
let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

// When server return a SSOToken, store it to localStorage
client.flows.postApiReturnFlow.push(v => {
    if (v.return.isSucc) {
        let res = v.return.res as BaseResponse;
        if (res.__ssoToken !== undefined) {
            localStorage.setItem('SSO_TOKEN', res.__ssoToken);
        }
    }
    else if (v.return.err.code === 'NEED_LOGIN') {
        localStorage.removeItem('SSO_TOKEN');
        setStatus(false);
    }
    return v;
});
// Append "__ssoToken" to request automatically
client.flows.preCallApiFlow.push(v => {
    let ssoToken = localStorage.getItem('SSO_TOKEN');
    if (ssoToken) {
        v.req.__ssoToken = ssoToken;
    }
    return v;
})

// Login & Logout
$('.login-normal button').onclick = async () => {
    let ret = await client.callApi('user/Login', {
        username: 'Normal',
        password: '123456'
    });

    if (!ret.isSucc) {
        alert(ret.err.message);
        return;
    }

    localStorage.setItem('LoginedRole', 'Normal');
    setStatus(true);
    document.querySelectorAll<HTMLElement>('.return').forEach(v => { v.style.display = 'none' });
}
$('.login-admin button').onclick = async () => {
    let ret = await client.callApi('user/Login', {
        username: 'Admin',
        password: '123456'
    });

    if (!ret.isSucc) {
        alert(ret.err.message);
        return;
    }

    localStorage.setItem('LoginedRole', 'Admin');
    setStatus(true);
    document.querySelectorAll<HTMLElement>('.return').forEach(v => { v.style.display = 'none' });
}
$('.logout button').onclick = async () => {
    let ret = await client.callApi('user/Logout', {});

    if (!ret.isSucc) {
        alert(ret.err.message);
        return;
    }

    setStatus(false);
    document.querySelectorAll<HTMLElement>('.return').forEach(v => { v.style.display = 'none' });
}

// Actions (server validation)
$('.action .guest button').onclick = async () => {
    let ret = await client.callApi('action/GuestAction', {});
    $('.action .guest pre').innerText = JSON.stringify(ret, null, 2);
    $('.action .guest pre').style.background = ret.isSucc ? 'green' : 'darkred';
    $('.action .guest .return').style.display = 'block';
}
$('.action .normal button').onclick = async () => {
    let ret = await client.callApi('action/NormalAction', {});
    $('.action .normal pre').innerText = JSON.stringify(ret, null, 2);
    $('.action .normal pre').style.background = ret.isSucc ? 'green' : 'darkred';
    $('.action .normal .return').style.display = 'block';
}
$('.action .admin button').onclick = async () => {
    let ret = await client.callApi('action/AdminAction', {});
    $('.action .admin pre').innerText = JSON.stringify(ret, null, 2);
    $('.action .admin pre').style.background = ret.isSucc ? 'green' : 'darkred';
    $('.action .admin .return').style.display = 'block';
}

function setStatus(logined: boolean) {
    if (logined) {
        $('.status').className = 'status logined';
        $('.status').innerText = `Logined as ${localStorage.getItem('LoginedRole')} Role`;
    }
    else {
        $('.status').className = 'status';
        $('.status').innerText = 'Not Logined';
    }
}
// Init logined status
setStatus(!!localStorage.getItem('SSO_TOKEN'));