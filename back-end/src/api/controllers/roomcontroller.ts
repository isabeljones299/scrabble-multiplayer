import { Socket, Server } from "socket.io"
import { ConnectedSocket, SocketController, OnConnect, SocketIO, OnMessage, MessageBody } from "socket-controllers"

@SocketController()
export class RoomController {

    @OnMessage("join_game")
    public async joinGame(@SocketIO() io: Server, @ConnectedSocket() socket: Socket, @MessageBody() message: any) {
        console.log("new user joining room: ", message);

        const connectedSockets = io.sockets.adapter.rooms.get(message.roomId)
        // add authenticiation
        const socketRooms = Array.from(socket.rooms.values()).filter((r) => r !== socket.id)

        if (socketRooms.length > 0 || connectedSockets && connectedSockets.size === 4) {
            socket.emit("room_join_error", {
                error: "this room is at max player capacity please choose another room"
            })
        } else {
            await socket.join(message.roomId)
            socket.emit("room_joined")
        }
    }

}