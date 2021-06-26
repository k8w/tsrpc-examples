import { HttpClient } from 'tsrpc-browser';
import { serviceProto } from './shared/protocols/serviceProto';

let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
});

window.onload = async () => {
    let retAdd = await client.callApi('AddPost', {
        newPost: {
            author: 'k8w',
            title: 'TSPRC',
            content: '太好用了'
        }
    });

    let retGet = await client.callApi('GetPost', {
        _id: retAdd.res!.insertedId
    });

    let post = retGet.res!.post;
    post.title = 'TSRPC 123';
    post.content = 'xxxxxxxx';

    let retUpdate = await client.callApi('UpdatePost', {
        update: post
    });

    let retDel = await client.callApi('DelPost', {
        _id: post._id
    })
}