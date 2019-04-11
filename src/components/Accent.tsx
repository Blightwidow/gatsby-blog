import * as React from "react"
import styled from "styled-components"

export interface AccentProps {
  children: React.ReactChild
  primary: boolean
}

export const Accent = styled.span<AccentProps>`
  color: ${props => (props.primary ? props.theme.primary : props.theme.base)};
`
