export interface Theme {
  background: string
  primary: string
  secondary: string
  tertiary?: string
  primaryText: string
  secondaryText: string
}

export const defaultTheme: Theme = {
  background: "white",
  primary: "#EF476F",
  primaryText: "#053342",
  secondary: "#05B183",
  secondaryText: "#365F6D",
  tertiary: "#FFD166",
}

export const darkTheme: Theme = {
  background: "white",
  primary: "#EF476F",
  primaryText: "#053342",
  secondary: "#05B183",
  secondaryText: "#365F6D",
  tertiary: "#FFD166",
}
