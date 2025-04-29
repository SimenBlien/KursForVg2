const WebSocket = require("ws"); 
const server = new WebSocket.Server({port: 8080});

server.on("connection", socket => {
    socket.onmessage = (message) => {
        msg = message.data.toString();
        console.log(msg);
    }
})