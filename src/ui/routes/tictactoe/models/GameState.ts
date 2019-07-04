export type CellId = number

export enum Owner {
  None = 0,
  Player = -1,
  Ai = 1,
}

export type BoardState = Owner[]

export interface GameState {
  isFinished: boolean
  winner: Owner | null
  board: BoardState
  maxDepth: number
}
