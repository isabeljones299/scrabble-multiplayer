
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


const MainContainer = styled.div``
const AppContainer = styled.div``

function App() {
  const connectSocket = () => {
    const socket = io("http://localhost:9000")
  };

  useEffect(() => {
    connectSocket();
  }, [])

  return (
    <AppContainer>
      <MainContainer>
        <p>word</p>
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
