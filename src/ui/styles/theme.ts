import { DefaultTheme } from "styled-components"

const scale = {
  l: "1.333em",
  m: "1em",
  s: "0.75rem",
  xl: "1.777em",
  xs: "0.563em",
  xxl: "2.369em",
  xxxl: "3.157em",
}

export const defaultTheme: DefaultTheme = {
  colors: {
    background: "#282A36",
    backgroundRgb: "40, 42, 54",
    base: "#C8C8C2",
    light: "#F8F8F2",
    primary: "#BD93F9",
  },
  fontFamily:  "\"Roboto Mono\", monospace",
  fontSizes: scale,
  fontWeights: {
    base: "400",
    bold: "700",
  },
  spaces: scale,
}

export const futureSpaceTheme: DefaultTheme = {
  colors: {
    background: "black",
    backgroundRgb: "40, 42, 54",
    base: "#C8C8C2",
    light: "#F8F8F2",
    primary: "#BD93F9",
  },
  fontFamily:  "\"Roboto Mono\", monospace",
  fontSizes: scale,
  fontWeights: {
    base: "400",
    bold: "700",
  },
  spaces: scale,
}