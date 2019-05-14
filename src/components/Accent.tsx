import styled, { ColorKeys, WeightKeys } from "styled-components"

export interface AccentProps {
  children: React.ReactChild
  variant?: "primary"
}

function getColor(variant: AccentProps["variant"] = "primary"): ColorKeys {
  switch (variant) {
    case "primary":
      return "primary"
  }
}

export const Accent = styled.span<AccentProps>`
  color: ${props => props.theme.colors[getColor(props.variant)]};
`

Accent.defaultProps = {
  variant: "primary",
}
