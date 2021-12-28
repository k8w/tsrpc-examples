import { uint } from "tsrpc-proto";
import { GameSystemInput } from "../../../game/GameSystemInput";

/** 
 * 服务端定期广播的同步帧
 * 包含了这一段期间所有输入
 */
export interface MsgServerFrame {
    frameIndex: uint,
    inputs: GameSystemInput[],
    /** 当前用户提交的，经服务端确认的最后一条输入的 SN */
    lastSn?: number
}