import * as uuid from "uuid";
import { CurrentUser } from "../shared/models/CurrentUser";

const SSO_VALID_TIME = 86400000 * 7;

export class UserUtil {

    // Store data in memory for test
    // You can store data into database
    static users: {
        uid: number,
        username: string,
        password: string,
        roles: string[]
    }[] = [
            {
                uid: 1,
                username: 'Normal',
                password: '123456',
                roles: ['Normal']
            },
            {
                uid: 2,
                username: 'Admin',
                password: '123456',
                roles: ['Admin']
            }
        ];

    static ssoTokenInfo: {
        [token: string]: { expiredTime: number, uid: number }
    } = {};

    static async createSsoToken(uid: number): Promise<string> {
        let token = uuid.v1();
        // Expired after some time without any action
        let expiredTime = Date.now() + SSO_VALID_TIME;

        this.ssoTokenInfo[token] = {
            uid: uid,
            expiredTime: expiredTime
        };

        return token;
    }

    static async destroySsoToken(ssoToken: string): Promise<void> {
        delete this.ssoTokenInfo[ssoToken];
    }

    static async parseSSO(ssoToken: string): Promise<CurrentUser | undefined> {
        let info = this.ssoTokenInfo[ssoToken];
        // Token not exists or expired
        if (!info || info.expiredTime < Date.now()) {
            return undefined;
        }

        // Parse User
        let user = this.users.find(v => v.uid === info.uid);
        if (!user) {
            return undefined;
        }

        // Extend expired time
        info.expiredTime = Date.now() + SSO_VALID_TIME;

        // Return parsed CurrentUser
        return {
            uid: user.uid,
            username: user.username,
            roles: user.roles
        }

    }

}