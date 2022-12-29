
import { Socket } from "socket.io-client";
import { IStartGame } from "../../components/ScrabbleBoard";

class GameService {
    public async joinGameRoom(socket: Socket, roomId: string): Promise<Boolean> {
        return new Promise((rs, rj) => {
            socket.emit("join_game", { roomId })
            socket.on("room_joined", () => rs(true));
            socket.on("room_joined_error", ({ error }) => rj(error))
        })
    }

    public async onStartGame(
        socket: Socket,
        listener: (options: IStartGame) => void) {
        socket.on("start_game", listener)
    }
}

export default new GameService();