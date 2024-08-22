let speech = new SpeechSynthesisUtterance();


// This changes the voices
let voices = [];
let voiceSelect = document.querySelector('select');

//This will get all the voices availabe on the device

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    //Displays each voices in the dropdown
    voices.forEach((voice, i) =>(voiceSelect.options[i] = new Option(
        voice.name, i)));
};

voiceSelect.addEventListener('change', () =>{
    speech.voice = voices[voiceSelect.value];
})

//This will get the value of the textarea when the listen button is clicked
//then read it with a voice over
document.querySelector('button').addEventListener('click', () =>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});

