
import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link
} from "react-router-dom";
import ScrabbleBoard from './components/ScrabbleBoard.jsx'

import styled from "styled-components"
import io from "socket.io-client"
import socketService from "./services/socketService/index.ts"
import { JoinRoom } from './components/joinRoom/index.tsx';


const MainContainer = styled.div``
const AppContainer = styled.div``

function App() {
  // const connectSocket = () => {
  //   const socket = io("http://localhost:9000")

  //   socket.on("connect", () => {
  //     socket.emit("custom_event", { name: "Izzie", age: 22 })
  //   })
  // };

  // useEffect(() => {
  //   connectSocket();
  // }, [])


  const connectSocket = async () => {
    const socket = socketService.connect("http://localhost:9000")
      .catch((err) => {
        console.log("error: ", err)

      })
  }
  useEffect(() => {
    connectSocket();
  }, [])

  return (
    <AppContainer>
      <MainContainer>
        <JoinRoom />
        <div className="App">

          <Router>
            <Routes>
              <Route path='/' element={<ScrabbleBoard />} />
            </Routes>
          </Router>
        </div>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
