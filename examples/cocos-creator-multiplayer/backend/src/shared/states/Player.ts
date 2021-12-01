export interface PlayerState {
    uid: number,
    nickname: string,
    skinId: number,

    // 可变状态
    pos: {
        x: number,
        y: number
    }
}

export interface PlayerMove {
    type: 'move',
    // 位移距离
    offset: {
        x: number,
        y: number
    }
}
export type PlayerInput = PlayerMove;

export function applyPlayerInput(state: PlayerState, input: PlayerInput): PlayerState {
    if (input.type === 'move') {
        state.pos.x += input.offset.x;
        state.pos.y += input.offset.y;
    }

    return state;
}