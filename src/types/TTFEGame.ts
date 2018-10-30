import { TTFEDirection } from "./TTFEDirection"
import { TTFETile } from "./TTFETile"

export class TTFEGame {
  static MAX_X = 3
  static MAX_Y = 3
  static PROBABILITY_FOUR = 0.1

  static new(): TTFEGame {
    return new TTFEGame()
  }

  private _cells: TTFETile[][] = []
  private _running: boolean = true

  get running(): boolean {
    return this._running
  }

  constructor() {
    for (let x = 0; x < TTFEGame.MAX_X; x++) {
      for (let y = 0; y < TTFEGame.MAX_X; y++) {
        this._cells[x][y] = new TTFETile(x, y)
      }
    }
  }

  move(direction: TTFEDirection) {
    try {
      this.endTurn()
    } catch (error) {
      console.error(error)
    }
  }

  private endTurn() {
    this.cellsMap((cell: TTFETile) => cell.endTurn())
    this.spawnNewTile()
    this.checkLoss()
  }

  private checkLoss() {
    if (this.getEmptyCells().length === 0) {
      this._running = true
    }
  }

  private spawnNewTile() {
    const freeSpaces = this.getEmptyCells()
    const newTile = freeSpaces[Math.floor(Math.random() * freeSpaces.length)]
    this._cells[newTile.x][newTile.y].spawn()
  }

  private getEmptyCells(): TTFETile[] {
    const freeSpaces: TTFETile[] = []
    this.cellsMap((cell: TTFETile) => {
      if (cell.value === 0) {
        freeSpaces.push(cell)
      }
    })
    return freeSpaces
  }

  private cellsMap(mapMethod: (cell: TTFETile) => any): TTFETile[][] {
    return this._cells.map((row: TTFETile[]) =>
      row.map((cell: TTFETile) => {
        return mapMethod(cell)
      })
    )
  }
}
