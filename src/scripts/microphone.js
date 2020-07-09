import "../styles/micContent.scss";
import io from 'socket.io-client';
let rec;
const socket = io("https://voicy-speaker.herokuapp.com");
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => { handlerFunction(stream) })


function handlerFunction(stream) {
  rec = new MediaRecorder(stream);
  let audioChunks = []
  rec.ondataavailable = e => {
    audioChunks.push(e.data);
    if (rec.state == "inactive") {
      let blob = new Blob(audioChunks);
      sendData(blob)
    }
  }
}
function sendData(data) {
  socket.emit('audioMessage', data);
  console.log("audioMessage was send!");
}

record.onclick = () => {
  console.log('started')
  record.disabled = true;
  record.style.backgroundColor = "blue"
  stopRecord.disabled = false;
  rec.start();
}
stopRecord.onclick = () => {
  console.log("finished")
  record.disabled = false;
  stop.disabled = true;
  record.style.backgroundColor = "red"
  rec.stop();
}