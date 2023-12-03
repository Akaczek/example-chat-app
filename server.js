const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});
const path = require('path');

http.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/scripts', express.static('scripts'));
app.use('/styles', express.static('styles'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (data) => {
      io.emit('message', data);
  });

  socket.on('disconnecting', () => {
    console.log('user disconnected');
  });
});