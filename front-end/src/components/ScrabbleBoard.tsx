import BuildBoardGrid from './Board';
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import gameContext from "../../src/gameContext";
import gameService from "../services/gameService/index";
import socketService from "../services/socketService/index";

export interface IStartGame {
  start: boolean;
  symbol: "x" | "o";
}

const ScrabbleBoard = () => {



  const PlayStopper = styled.div``

  const {
    playerSymbol,
    setPlayerSymbol,
    setPlayerTurn,
    isPlayerTurn,
    setGameStarted,
    isGameStarted,
    isInRoom,
    setInRoom
  } = useContext(gameContext);

  const handleGameStart = () => {
    if (socketService.socket) {
      gameService.onStartGame(socketService.socket, (options) => {
        setGameStarted(true)
        setPlayerSymbol(options.symbol)
        if (options.start) {
          setPlayerTurn(true)
        } else {
          setPlayerTurn(false)
        }
      })
      console.log("game should be started now")
    }
  }

  useEffect(() => {
    console.log("called useeffect")
    handleGameStart();
  }, []);



  if (!isGameStarted) {
    return (
      <>

        <h2> Waiting for players to join</h2>
        <form onSubmit={handleGameStart}>
          <button type="submit"> Refresh</button>
        </form>
      </>
    )
  } if ((!isGameStarted || !isPlayerTurn) && <PlayStopper />) {
    return (
      <h1> game not started OR game started and not this player turn</h1>
    )
  }
  else {
    return (
      <>
        <h2> play started </h2>
        <BuildBoardGrid />
      </>

    )
  }
};

export default ScrabbleBoard;