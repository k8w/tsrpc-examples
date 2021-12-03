export type ArrowState = {
    id: number,
    // 谁发出的箭
    fromPlayerId: number,
    // 落地时间（游戏时间）
    targetTime: number,
    // 落点位置（游戏位置）
    targetPos: { x: number, y: number }
}