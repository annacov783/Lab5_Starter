// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const select = document.getElementById('voice-select');
  const userText = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const image = document.querySelector('#explore img');
  
  let voices = [];
  function populateVoices() {
    voices = synth.getVoices();


    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.value = i;
      if(voices[i].default) {
        option.textContent += " - DEFAULT";
      }

      select.appendChild(option);
    }
  }

  populateVoices();

  if(typeof synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  playButton.addEventListener('click', () => {
    const text = userText.value.trim();
    const selectedValue = select.value;

    if(!text || selectedValue === 'select') {
      return;
    }

    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voices[selectedValue];

    utterThis.onstart = () => {
      image.src = 'assets/images/smiling-open.png';

    };

    utterThis.onend = () => {
      image.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);

  });

  // TODO
}