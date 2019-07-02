import styled, { ColorKeys, SizeKeys, WeightKeys } from "styled-components"

export interface HeadingProps {
  variant: "primary" | "secondary" | "tertiary"
}

function getColor(variant: HeadingProps["variant"]): ColorKeys {
  switch (variant) {
    case "primary":
    case "secondary":
      return "light"
    case "tertiary":
      return "base"
  }
}

function getMobileSize(variant: HeadingProps["variant"]): SizeKeys {
  switch (variant) {
    case "primary":
      return "xl"
    case "secondary":
      return "m"
    case "tertiary":
      return "s"
  }
}

function getDesktopSize(variant: HeadingProps["variant"]): SizeKeys {
  switch (variant) {
    case "primary":
      return "xxxl"
    case "secondary":
      return "xl"
    case "tertiary":
      return "l"
  }
}

function getWeight(variant: HeadingProps["variant"]): WeightKeys {
  switch (variant) {
    case "primary":
    case "secondary":
      return "bold"
    case "tertiary":
      return "base"
  }
}

function getMargin(variant: HeadingProps["variant"]): string {
  switch (variant) {
    case "primary":
    case "secondary":
    case "tertiary":
      return "1rem"
  }
}

export const Heading = styled.h1<HeadingProps>`
  color: ${props => props.theme.colors[getColor(props.variant)]};
  font-size: ${props => props.theme.fontSizes[getMobileSize(props.variant)]};
  font-weight: ${props => props.theme.fontWeights[getWeight(props.variant)]};
  margin-bottom: ${props => getMargin(props.variant)};

  @media (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes[getDesktopSize(props.variant)]};
  }
`
