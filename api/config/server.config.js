const express = require("express");
const http = require("http");
const app = express();
const socketServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(socketServer);

// const routes_v2 = require('./routes/v2.routes');



io.on('connection', (socket) => {
    // emit event - send-message
    socket.on('send-message', (data) => {
        console.log("Chat Message: ", data)
    })
});


module.exports = io;