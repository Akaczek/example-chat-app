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