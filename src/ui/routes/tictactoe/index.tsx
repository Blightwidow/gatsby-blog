import * as React from "react"
import styled from "styled-components"

import { Accent } from "../../components/Accent"
import { Head } from "../../components/Head"
import { Header } from "../../components/Header"
import { Heading } from "../../components/Heading"
import { Text } from "../../components/Text"

import { BoardCell } from "./components/BoardCell"
import { GameManager } from "./models/GameManager"
import { CellId, GameState, Owner } from "./models/GameState"

const TicTacToePage: React.FunctionComponent = () => {
  const [easyMode, updateEasyMode] = React.useState(false)
  const [gameState, updateGameState] = React.useState(GameManager.newGame(easyMode))

  const onModeToggle = () => {
    updateEasyMode(!easyMode)
    updateGameState(GameManager.newGame(!easyMode))
  }

  const onReset = () => {
    updateGameState(GameManager.newGame(easyMode))
  }

  const onTakeCell = (id: CellId) => {
    const game = new GameManager()
    const nextGameState = game.playerPlayCell(id, gameState)

    updateGameState(nextGameState)
  }

  const getEndingText = (state: GameState): string => {
    if (!state.isFinished) {
      return "Good luck"
    }

    if (state.winner === Owner.Player) {
      return "You won!"
    }

    if (state.winner === Owner.Ai) {
      return "You lost!"
    }

    return "It's a tie"
  }

  return (
    <React.Fragment>
      <Head />
      <Header title=".tictactoe()" />
      <Wrapper>
        <Heading variant="secondary">{getEndingText(gameState)}</Heading>
        <Board>
          {gameState.board.map((owner, id) => (
            <BoardCell key={id} owner={owner} onTake={() => onTakeCell(id)} />
          ))}
        </Board>
        <Text variant="secondary">You play cross</Text>
        <Text>
          <Accent onClick={onModeToggle}>{`Switch to ${easyMode ? "hard" : "easy"} mode`}</Accent>
        </Text>
        <Text>
          <Accent onClick={onReset}>Reset</Accent>
        </Text>
      </Wrapper>
    </React.Fragment>
  )
}

export default TicTacToePage

const Wrapper = styled.div`
  grid-area: content;
  margin: auto;
  text-align: center;
`

const Board = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
`
