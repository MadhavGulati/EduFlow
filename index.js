const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public', { extensions: ['html', 'json', 'css'] }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('new question', ({array, question}) => {
    socket.broadcast.emit('new question', {array, question});
  });
  socket.on('new answer', ({array, question}) => {
    socket.broadcast.emit('new answer', {array, question});
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});