// This is a demo code file
// Feel free to delete it

/**
 * 获取数据
 */
export interface ReqGetData {

}

export interface ResGetData {
    /** 返回所有数据列表 */
    data: {
        /** 消息内容 */
        content: string,
        /** 创建时间 */
        time: Date
    }[]
}