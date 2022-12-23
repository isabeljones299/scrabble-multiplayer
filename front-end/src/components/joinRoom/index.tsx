import React from "react"
import { useState } from "react"


interface IJoinRoomProps { }

export function JoinRoom(props: IJoinRoomProps) {

    const [roomName, setRoomName] = useState("")

    const handleRoomNameChange = (e: React.ChangeEvent<any>) => {
        const value = e.target.value;
        setRoomName(value)
    }

    return (

        <form>
            <div>
                <h1>Enter room ID to join the game</h1>
                <input placeholder="Room 10" value={roomName} onChange={handleRoomNameChange} />
                <button>
                    Join
                </button>
            </div>
        </form>

    )
}