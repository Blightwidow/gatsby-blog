import styled, { ColorKeys, SizeKeys } from "styled-components"

export interface TextProps {
  variant?: "primary" | "secondary"
  collapse?: boolean
}

function getColor(variant: TextProps["variant"] = "primary"): ColorKeys {
  switch (variant) {
    case "primary":
    case "secondary":
      return "base"
  }
}

function getSize(variant: TextProps["variant"] = "primary"): SizeKeys {
  switch (variant) {
    case "primary":
    case "secondary":
      return "m"
  }
}

function getOpacity(variant: TextProps["variant"] = "primary"): string {
  switch (variant) {
    case "primary":
      return "1"
    case "secondary":
      return "0.75"
  }
}

export const Text = styled.p<TextProps>`
  color: ${props => props.theme.colors[getColor(props.variant)]};
  font-size: ${props => props.theme.fontSizes[getSize(props.variant)]};
  margin-bottom: ${props => (props.collapse ? 0 : props.theme.fontSizes.m)};
  opacity: ${props => getOpacity(props.variant)};
`

Text.defaultProps = {
  collapse: false,
  variant: "primary",
}
