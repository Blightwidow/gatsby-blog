import * as React from "react"
import styled from "../utils/styled-components"

export interface AccentProps {
  children: React.ReactChild
  primary: boolean
}

export const Accent = styled<AccentProps, "span">("span")`
  color: ${props => (props.primary ? props.theme.primary : props.theme.primaryText)};
`
