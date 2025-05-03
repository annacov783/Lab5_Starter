// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
    const getElement = document.getElementById('horn-select');
    const image = document.querySelector('#expose img');
    const audio = document.querySelector('audio');
    const playButton = document.querySelector('button');
    const vSlider = document.getElementById('volume');
    const vImage = document.querySelector('#volume-controls img');


    const options = {
      'air-horn': {
        img: 'assets/images/air-horn.svg',
        audio: 'assets/audio/air-horn.mp3'
      },
      'car-horn': {
        img: 'assets/images/car-horn.svg',
        audio: 'assets/audio/car-horn.mp3'
      },
      'party-horn': {
        img: 'assets/images/party-horn.svg',
        audio: 'assets/audio/party-horn.mp3'
      }
    };

    getElement.addEventListener('change', function (event) {
      const getValue = event.target.value;
      
      const op = options[getValue];

      if(op) {
        image.src = op.img;
        audio.src = op.audio;
      }
      else {
        image.src = 'assets/images/no-image.png';
        audio.src = '';
      }

    });

    vSlider.addEventListener('input', function () {
      const volume = vSlider.value;
      const vScale = volume / 100;
      audio.volume = vScale;

      if(volume == 0) {
        vImage.src = 'assets/icons/volume-level-0.svg';
      }
       else if(volume >= 1 && volume <= 32) {
        vImage.src = 'assets/icons/volume-level-1.svg';
      }
      else if(volume >= 33 && volume <= 66) {
        vImage.src = 'assets/icons/volume-level-2.svg';
      }
      else if(volume >= 67) {
        vImage.src = 'assets/icons/volume-level-3.svg';
      }

    });
  
    const jsConfetti = new JSConfetti();

    playButton.addEventListener('click', function() {
      if (audio.src) {
        audio.play();

        if(select.value === 'party-horn') {
          jsConfetti.addConfetti();
        }
      }
    });
  
  // TODO
}