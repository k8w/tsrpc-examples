export type ArrowState = {
    id: number,
    fromPlayerId: number,
    startTime: number,
    startPos: { x: number, y: number },
    targetTime: number,
    targetPos: { x: number, y: number }
}