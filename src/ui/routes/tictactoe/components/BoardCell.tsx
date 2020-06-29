import * as React from "react"
import styled from "styled-components"

import { Owner } from "../models/GameState"

import { Heading } from "@components/Heading"

export interface CellProps {
  owner: Owner
  onTake: () => void
}

const getCellContent = (owner: Owner): string => {
  switch (owner) {
    case Owner.Player:
      return "X"
    case Owner.Ai:
      return "O"
    default:
      return ""
  }
}
export const BoardCell: React.FunctionComponent<CellProps> = ({ owner, onTake }) => (
  <CellWrapper onClick={onTake}>
    <CellMarker variant="primary">{getCellContent(owner)}</CellMarker>
  </CellWrapper>
)

const CellWrapper = styled.div`
  display: flex;
  border: 2px solid ${props => props.theme.colors.primary};
`

const CellMarker = styled(Heading)`
  margin: auto;
`
