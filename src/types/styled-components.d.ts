import "styled-components"

declare module "styled-components" {
  type ColorKeys = "background" | "backgroundRgb" | "primary" | "base" | "light"

  type SizeKeys = "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl"

  type WeightKeys = "bold" | "base"

  export interface DefaultTheme {
    colors: { [K in ColorKeys]: string }
    spaces: { [K in SizeKeys]: string }
    fontFamily: string
    fontSizes: { [K in SizeKeys]: string }
    fontWeights: { [K in WeightKeys]: string }
  }
}
