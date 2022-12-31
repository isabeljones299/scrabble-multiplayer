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



  const PlayStopper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  cursor: default;
`;

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
  }
  else {
    return (
      <>
        {(!isGameStarted || !isPlayerTurn) && <PlayStopper />}
        <h2> play started </h2>
        <BuildBoardGrid />
      </>

    )
  }
};

export default ScrabbleBoard;