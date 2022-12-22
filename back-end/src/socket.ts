import { Server } from "socket.io"
import { useSocketServer } from "socket-controllers"


export default (httpserver) => {
    const io = new Server(httpserver, {
        cors: {
            origin: "*"
        }
    });

    useSocketServer(io, {
        controllers: [
            __dirname + "/api/controllers/*.ts"
        ]
    })

    return io;
}