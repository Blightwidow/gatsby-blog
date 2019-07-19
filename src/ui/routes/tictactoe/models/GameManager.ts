import { BoardState, CellId, GameState, Owner } from "./GameState"

export class GameManager {
  static newGame(easyMode: boolean = false): GameState {
    return {
      board: new Array(9).fill(Owner.None),
      isFinished: false,
      maxDepth: easyMode ? 5 : -1,
      winner: null,
    }
  }

  public playerPlayCell(id: CellId, state: GameState): GameState {
    if (state.isFinished) {
      return state
    }

    let nextBoard = this.takeCell(id, Owner.Player, state.board)

    if (nextBoard === state.board) {
      return state
    }

    if (this.getWinner(nextBoard) === Owner.Player) {
      return {
        ...state,
        board: nextBoard,
        isFinished: true,
        winner: Owner.Player,
      }
    }

    if (this.isBoardFull(nextBoard)) {
      return {
        ...state,
        board: nextBoard,
        isFinished: true,
      }
    }

    nextBoard = this.takeCell(this.getMinMax(Owner.Ai, nextBoard, state.maxDepth).id, Owner.Ai, nextBoard)

    if (this.getWinner(nextBoard) === Owner.Ai) {
      return {
        ...state,
        board: nextBoard,
        isFinished: true,
        winner: Owner.Ai,
      }
    }

    if (this.isBoardFull(nextBoard)) {
      return {
        ...state,
        board: nextBoard,
        isFinished: true,
      }
    }

    return {
      ...state,
      board: nextBoard,
    }
  }

  private takeCell(id: CellId, owner: Owner, board: BoardState): BoardState {
    if (board[id] === Owner.None) {
      const nextBoard = [...board]
      nextBoard[id] = owner
      return nextBoard
    }

    return board
  }

  private getAvailableMoves(board: BoardState): CellId[] {
    return board.map((owner, id) => (owner === Owner.None ? id : -1)).filter(id => id >= 0)
  }

  private getMinMax(player: Owner, board: BoardState, maxDepth: number = -1, depth: number = 0): { id: CellId; score: number } {
    const winner = this.getWinner(board)

    if (winner) {
      return { id: -1, score: winner }
    }

    if (this.isBoardFull(board)) {
      return { id: -1, score: 0 }
    }

    if (maxDepth === depth) {
      return { id: -1, score: 0 }
    }

    const moves = this.getAvailableMoves(board).map(id => {
      const nextBoard = this.takeCell(id, player, board)
      const score = this.getMinMax(this.getOtherPlayer(player), nextBoard, maxDepth, depth + 1).score

      return { id, score }
    })

    return moves.reduce((bestMove, move) => (move.score * player > bestMove.score * player ? move : bestMove), {
      id: -1,
      score: -Infinity * player,
    })
  }

  private getOtherPlayer(player: Owner) {
    if (player === Owner.Player) {
      return Owner.Ai
    }

    if (player === Owner.Ai) {
      return Owner.Player
    }

    return Owner.None
  }

  private getWinner(board: BoardState): Owner | null {
    let winner = null

    // Horizontal
    for (let i = 1; i < 9; i = i + 3) {
      winner = this.getRowOwner(i, i - 1, i + 1, board)

      if (winner) {
        break
      }
    }

    // Vertical
    for (let i = 3; i < 6; i++) {
      winner = this.getRowOwner(i, i - 3, i + 3, board)

      if (winner) {
        break
      }
    }

    // Diagonals
    winner = this.getRowOwner(0, 4, 8, board)
    winner = this.getRowOwner(2, 4, 6, board)

    return winner
  }

  private getRowOwner(i: number, j: number, k: number, board: BoardState): Owner | null {
    if (board[i] === board[j] && board[i] === board[k] && board[i] !== Owner.None) {
      return board[i]
    }

    return null
  }

  private isBoardFull(board: BoardState): boolean {
    for (const cell of board) {
      if (cell === Owner.None) {
        return false
      }
    }

    return true
  }
}
