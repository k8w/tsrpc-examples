export interface PlayerState {
    id: number,
    // 位置
    pos: { x: number, y: number },
    // 晕眩结束时间
    dizzyEndTime?: number,
}