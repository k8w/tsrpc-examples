import assert from 'assert';
import { HttpClient } from 'tsrpc';
import { serviceProto } from '../../src/shared/protocols/serviceProto';

// 1. EXECUTE `npm run dev` TO START A LOCAL DEV SERVER
// 2. EXECUTE `npm test` TO START UNIT TEST

describe('ApiGetData', function () {
    let client = new HttpClient(serviceProto, {
        server: 'http://127.0.0.1:3000',
        logger: console
    });

    it('Add & Get', async function () {
        let ret1 = await client.callApi('GetData', {});
        assert.strictEqual(ret1.isSucc, true);

        let ret2 = await client.callApi('AddData', { content: 'AABBCC' });
        assert.strictEqual(ret2.isSucc, true);

        let ret3 = await client.callApi('GetData', {});
        assert.strictEqual(ret3.isSucc, true);
        assert.strictEqual(ret3.res!.data.length, ret1.res!.data.length + 1);
        assert.strictEqual(ret3.res!.data[0].content, 'AABBCC');
    });
})