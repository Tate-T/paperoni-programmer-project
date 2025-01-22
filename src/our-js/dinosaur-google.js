const player = document.querySelector('.google-dino-player');
const obstackle = document.querySelector('.google-dino-obs');
const loseText = document.querySelector('.google-dino-text');
let isPlaying = true;
let isUp = false;

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp') {
    player.classList.add('google-dino-player-up');
    isUp = true;
    setTimeout(function () {
      player.classList.remove('google-dino-player-up');
    }, 500);

    setTimeout(function () {
        isUp = false;
      }, 1000);
  }
});

let obsPosition = 300;

function incrementPosition() {
  obsPosition += 20;
  if (obsPosition >= 550 && obsPosition <= 650 && !isUp) {
    obsPosition -= 40;
    loseText.style.opacity = 1;
    isPlaying = false;
    clearInterval(interval);
  }
  if (obsPosition >= 680) {
    obsPosition = -170;
    obstackle.style.zIndex = -1;
    setTimeout(function () {
      obstackle.style.zIndex = 1;
    }, 1000);
  }
  console.log(isUp)
  obstackle.style.right = `${obsPosition}px`;
}

let interval
if (isPlaying) {
  // interval = setInterval(incrementPosition, 150);
}


// ArrowUp
// ArrowDown
// ArrowLeft
// ArrowRight
// Space
// Enter
