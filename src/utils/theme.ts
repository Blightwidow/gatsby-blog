interface HueModifiers {
  background: [number, number]
  primary: [number, number]
  primaryText: [number, number]
  secondaryText: [number, number]
}

export class Theme implements Theme {
  background: string
  primary: string
  primaryText: string
  secondaryText: string

  constructor(hue: number, modifiers: HueModifiers) {
    this.background = this.generateHSL(hue, modifiers.background)
    this.primary = this.generateHSL(hue, modifiers.primary)
    this.primaryText = this.generateHSL(hue, modifiers.primaryText)
    this.secondaryText = this.generateHSL(hue, modifiers.secondaryText)
  }

  private generateHSL(hue: number, modifier: [number, number]): string {
    return `hsl(${hue}, ${modifier[0]}%,  ${modifier[1]}%)`
  }
}

const darkModifiers: HueModifiers = {
  background: [20, 12],
  primary: [100, 61],
  primaryText: [10, 62],
  secondaryText: [50, 72],
}

const lightModifiers: HueModifiers = {
  background: [0, 100],
  primary: [100, 61],
  primaryText: [8, 20],
  secondaryText: [8, 40],
}

export const defaultTheme: Theme = new Theme(346, lightModifiers)
export const darkTheme: Theme = new Theme(275, darkModifiers)
