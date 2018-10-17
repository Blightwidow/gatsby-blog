export interface Theme {
  background: string
  primary: string
  secondary: string
  primaryText: string
  secondaryText: string
}

function generateTheme(hue: number, accentHue: number, dark: boolean = false): Theme {
  return {
    background: `hsl(${hue}, ${dark ? "20%" : "0%"},  ${dark ? "12%" : "100%"})`,
    primary: `hsl(${hue}, ${dark ? "100%" : "100%"},  ${dark ? "61%" : "61%"})`,
    primaryText: `hsl(${hue}, ${dark ? "10%" : "8%"},  ${dark ? "62%" : "20%"})`,
    secondary: `hsl(${accentHue}, ${dark ? "100%" : "100%"},  ${dark ? "70%" : "35%"})`,
    secondaryText: `hsl(${hue}, ${dark ? "50%" : "8%"},  ${dark ? "72%" : "40%"})`,
  }
}

export const defaultTheme: Theme = generateTheme(346, 162, false)
export const darkTheme: Theme = generateTheme(275, 180, true)
