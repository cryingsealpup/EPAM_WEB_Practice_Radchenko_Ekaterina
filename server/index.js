const app = require("express")();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.use(cors());
const port = process.env.PORT || 3000;
const path = require('path');
let messages = [];
app.get('/', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

http.listen(port, () => {
    console.log('listening on *:3000');
});

app.get('/voices', function (req, res) {
    res.send(messages);
})

io.sockets.on('connection', (socket) => {
    socket.broadcast.emit("showMessage", { name: 'Anonymous', message: 'new message was send' });
    socket.on('sendMessage', message => io.emit('showMessage', message));
    socket.on('disconnect', () => {
        console.log('disconnected');
    });
    socket.on('audioMessage', (data) => {
        messages.push({
            timeStamp: new Date().toString(),
            audioBlob: data
        });
        socket.broadcast.emit('audioMessage', data);
    });
});