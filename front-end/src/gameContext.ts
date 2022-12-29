import React from "react"

export interface IGameContextProps {
    isInRoom: boolean;
    setInRoom: (inRoom: boolean) => void;
    isPlayerTurn: boolean;
    setPlayerTurn: (turn: boolean) => void;
    isGameStarted: boolean;
    setGameStarted: (started: boolean) => void;
    playerSymbol: "x" | "o";
    setPlayerSymbol: (symbol: "x" | "o") => void;
}


const defaultState: IGameContextProps = {
    isInRoom: false,
    setInRoom: () => { },
    isPlayerTurn: false,
    setPlayerTurn: () => { },
    isGameStarted: false,
    setGameStarted: () => { },
    playerSymbol: "x",
    setPlayerSymbol: () => { },
}

export default React.createContext(defaultState)