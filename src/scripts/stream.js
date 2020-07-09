import io from 'socket.io-client';
const socket = io('https://voicy-speaker.herokuapp.com/');
console.log("stream in processing");
socket.on('audioMessage', function (audioChunks) {
    const audioBlob = new Blob(audioChunks);
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
    console.log("it's playing!");
});