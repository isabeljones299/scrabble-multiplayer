import React, { useContext } from "react"
import { useState } from "react"
import gameContext from "../../gameContext"
import socketService from "../../services/socketService"
import gameService from "../../services/gameService"



interface IJoinRoomProps { }

export function JoinRoom(props: IJoinRoomProps) {

    const [roomName, setRoomName] = useState("")
    const [isJoining, setJoining] = useState(false)

    const { setInRoom, isInRoom } = useContext(gameContext)

    const handleRoomNameChange = (e: React.ChangeEvent<any>) => {
        const value = e.target.value;
        setRoomName(value)
    }

    const joinRoom = async (e: React.FormEvent) => {
        e.preventDefault();
        const socket = socketService.socket;
        if (!roomName || roomName.trim() === "" || !socket) return;

        setJoining(true);

        const joined = await gameService.joinGameRoom(socket, roomName)
            .catch((err) => {
                alert(err)
            })

        if (joined)
            console.log("joined")
        setInRoom(true)
        setJoining(false)
    }


    return (

        <form onSubmit={joinRoom}>
            <div>
                <h1>Enter room ID to join the game</h1>
                <input
                    placeholder="Room 10"
                    value={roomName}
                    onChange={handleRoomNameChange} />
                <button type="submit" disabled={isJoining}>
                    {isJoining ? "Joining..." : "join"}

                </button>
            </div>
        </form>

    )

}