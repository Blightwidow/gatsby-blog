export interface Theme {
  primary: string
  secondary: string
  tertiary?: string
  darkText: string
  lightText: string
}

export const defaultTheme: Theme = {
  darkText: "#053342",
  lightText: "#365F6D",
  primary: "#EF476F",
  secondary: "#05B183",
  tertiary: "#FFD166",
}
