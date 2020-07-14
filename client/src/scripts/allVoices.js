import "../styles/voiceContent.scss";

//fetch('http://voicy-speaker.herokuapp.com/voices')
fetch('http://localhost:3000/voices')
    .then(resp => resp.json()
        .then(data => {
            const voices = document.getElementById("voices");
            console.log("looking for voices...");
            voices.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                if (data[i].audioBlob[0] !== undefined && data[i].audioBlob[0].data.length != 0) {
                    const voice = new MakeVoice(data[i]);
                    voices.appendChild(voice.getElem());
                }
            }
        }))
function MakeVoice(data) {
    let elem;

    function getElem() {
        if (!elem) insertElement();
        return elem;
    }

    function insertElement() {
        let voice = document.createElement('div');
        voice.className = "voice";
        let audio = document.createElement('audio');
        const blob = new Blob([new Uint8Array(data.audioBlob[0].data).buffer]);
        audio.src = URL.createObjectURL(blob);
        let audioDiv = document.createElement('div');
        let div = document.createElement('div');

        audio.controls = "controls";
        audioDiv.className = "audioDiv";
        audioDiv.appendChild(audio);
        voice.appendChild(div);
        div.appendChild(audioDiv);
        elem = voice;
    }

    this.getElem = getElem;
}



