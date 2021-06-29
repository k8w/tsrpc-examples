export class EncryptUtil {

    static encrypt(buf: Uint8Array): Uint8Array {
        for (let i = 0; i < buf.length; ++i) {
            buf[i] -= 1;
        }
        return buf;
    }

    static decrypt(buf: Uint8Array): Uint8Array {
        for (let i = 0; i < buf.length; ++i) {
            buf[i] += 1;
        }
        return buf;
    }

}