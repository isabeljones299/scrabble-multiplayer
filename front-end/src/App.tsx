
import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import ScrabbleBoard from './components/ScrabbleBoard'

import styled from "styled-components"
import { io } from "socket.io-client"
import socketService from "./services/socketService/index"
import { JoinRoom } from './components/joinRoom/index';

import GameContext, { IGameContextProps } from './gameContext';
import gameContext from './gameContext';


// const MainContainer = styled.div``
// const AppContainer = styled.div``

function App() {

  const [isInRoom, setInRoom] = useState(false)
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("x");


  const connectSocket = async () => {
    const socket = socketService.connect("http://localhost:9000")
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  useEffect(() => {
    connectSocket();
  }, []);



  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    isPlayerTurn,
    setPlayerTurn,
    isGameStarted,
    setGameStarted,
    playerSymbol,
    setPlayerSymbol,
  }
  const MainContainer = styled.div``
  const AppContainer = styled.div``

  return (
    <GameContext.Provider value={gameContextValue}>
      <AppContainer>
        <MainContainer>
          < div className="App" >
            {!isInRoom && <JoinRoom />}
            {isInRoom && <ScrabbleBoard />}

            <Router>
              <Routes>
                {/* <Route path='/' element={isInRoom ? < ScrabbleBoard /> : < JoinRoom />} />
                <Route path='/scrabbleboard' element={< ScrabbleBoard />} /> */}
              </Routes>
            </Router>
          </div>
        </MainContainer>
      </AppContainer>
    </GameContext.Provider>

  );
}

export default App;
