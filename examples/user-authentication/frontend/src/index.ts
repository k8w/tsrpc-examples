import { client } from "./client";

const $ = document.querySelector.bind(document) as (v: string) => HTMLElement;

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

export function setStatus(logined: boolean) {
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
