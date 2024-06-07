function play(){

    let msg = document.querySelector(".text").value;
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.pitch = "1";
    speech.rate = "1";
    speech.volume = "2";
    speech.text = msg;
    console.log(speech);
    speechSynthesis.speak(speech);
}