import React from "react"
import styled from "styled-components"

const GameContainer = styled.div``
const Cell = styled.div``
const PlayStopper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  cursor: default;
`;

const letterPlaced = styled.span`
font-size: 50px;
& ::after {
    content:"letterwasplaced"
}
`;


export function Game() {



}