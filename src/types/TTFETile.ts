import { TTFEDirection } from "./TTFEDirection"

export class TTFETile {
  private _value: number = 0
  private _x: number
  private _y: number
  private _hasMoved: boolean = false

  get value(): number {
    return Math.pow(2, this._value)
  }

  get hasMoved(): boolean {
    return this._hasMoved
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  spawn() {
    if (this.value !== 0) {
      throw new Error("Already init")
    }

    this._value = 1
  }

  absorb(value: number): boolean {
    if (this.value === 0 || this.value !== value || this._hasMoved) {
      return false
    }

    this._value += 1
    this._hasMoved = true
    return true
  }

  endTurn() {
    this._hasMoved = false
  }
}
