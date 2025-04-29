const WebSocket = require("ws");
const socket = new WebSocket("ws:localhost:8080");
const readline = require("readline")

socket.on("open", () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.on("line", input => {
        socket.send(input)
    })

})