
import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link
} from "react-router-dom";
import ScrabbleBoard from './components/ScrabbleBoard'

import styled from "styled-components"
import { io } from "socket.io-client"
import socketService from "./services/socketService/index"
import { JoinRoom } from './components/joinRoom/index';

import GameContext, { IGameContextProps } from './gameContext';


// const MainContainer = styled.div``
// const AppContainer = styled.div``

function App() {

  const [isInRoom, setInRoom] = useState(false)

  // const connectSocket = () => {
  //   const socket = io("http://localhost:9000")

  //   socket.on("connect", () => {
  //     socket.emit("custom_event", { name: "Izzie", age: 22 })
  //   })
  // };

  // useEffect(() => {
  //   connectSocket();
  // }, [])


  const ConnectSocket = async () => {
    const socket = socketService.connect("http://localhost:9000")
      .catch((err) => {
        console.log("error: ", err)

      })

    useEffect(() => {
      ConnectSocket();
    }, []);

    const gameContextValue: IGameContextProps = {
      isInRoom, setInRoom
    }
  }
  const MainContainer = styled.div``
  const AppContainer = styled.div``

  return (

    <AppContainer>
      <MainContainer>
        <JoinRoom />
        < div className="App" >

          <Router>
            <Routes>
              <Route path='/' element={< ScrabbleBoard />} />
            </Routes>
          </Router>
        </div>
      </MainContainer>
    </AppContainer>

  );
}

export default App;
