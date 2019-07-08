import styled from "styled-components"

export interface ButtonProps {
  children: React.ReactChild
}

export const Button = styled.button<ButtonProps>`
  border: solid 1px ${props => props.theme.colors.primary};
  background: transparent;
  padding: ${props => props.theme.spaces.xs} ${props => props.theme.spaces.s};
  cursor: pointer;
`
