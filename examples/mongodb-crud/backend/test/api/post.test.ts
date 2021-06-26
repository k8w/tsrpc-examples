import { HttpClient } from 'tsrpc';
import { Post } from '../../src/shared/protocols/models/Post';
import { serviceProto } from '../../src/shared/protocols/serviceProto';

// 1. EXECUTE `npm run dev` TO START A LOCAL DEV SERVER
// 2. EXECUTE `npm test` TO START UNIT TEST

describe('ApiGetSalary', function () {
    let client = new HttpClient(serviceProto, {
        server: 'http://127.0.0.1:3000',
        logger: console
    });

    let post!: Post;
    it('Success', async function () {
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

        post = retGet.res!.post;
        post.title = 'TSRPC 123';
        post.content = 'xxxxxxxx';

        let retUpdate = await client.callApi('UpdatePost', {
            update: post
        });

        let retDel = await client.callApi('DelPost', {
            _id: post._id
        })
    });
})