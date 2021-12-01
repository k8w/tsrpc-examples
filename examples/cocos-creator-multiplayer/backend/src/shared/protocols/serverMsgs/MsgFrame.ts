import { MsgInput } from "../clientMsgs/MsgInput";

export interface MsgFrame {
    inputs: {
        uid: number,
        msgInput: MsgInput
    }[]
}