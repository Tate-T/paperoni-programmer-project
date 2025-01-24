const player = document.querySelector('.google-dino-player');
const obstackle = document.querySelector('.google-dino-obs');
const obstackle2 = document.querySelector('.google-dino-obs2');
const reward = document.querySelector('.google-dino-reward');
const loseText = document.querySelector('.google-dino-text');
const pointsText = document.querySelector('.google-dino-points');
const btn = document.querySelector('.google-dino-button');
const overlay = document.querySelector('.google-dino-backdrop');

let isPlaying = true;
let readyToPlay = false;
let isUp = false;
let counter = 0;

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp' || event.code === 'Space') {
    event.preventDefault();
  }
});

document.addEventListener('keydown', event => {
  if (isPlaying && readyToPlay) {
    if ((event.code === 'ArrowUp' || event.code === 'Space') && !isUp) {
      event.preventDefault();
      player.classList.add('google-dino-player-up');
      isUp = true;
      setTimeout(function () {
        player.classList.remove('google-dino-player-up');
      }, 600);

      setTimeout(function () {
        isUp = false;
      }, 1100);
    }
  }
});

let obsPosition = 0;
let obsPosition2 = -500;
let rewardPosition = -580;

function incrementPosition(obstackle, interval, incrementValue) {
  if (obsPosition <= 0 || obsPosition >= 610) {
    obstackle.style.opacity = 0;
  } else {
    obstackle.style.opacity = 1;
  }
  obsPosition += incrementValue;
  if (obsPosition >= 535 && obsPosition <= 600 && !isUp) {
    obsPosition -= 60;
    loseText.style.opacity = 1;
    isPlaying = false;
    clearInterval(interval);
    clearInterval(intervalobs2);
    clearInterval(intervalreward);
    overlay.style.display = 'flex';
    overlay.firstElementChild.textContent = 'Ви програли!';
    overlay.lastElementChild.textContent = 'Заново';
  }
  if (obsPosition >= 680) {
    obsPosition = -170;
    obstackle.style.zIndex = -1;
    setTimeout(function () {
      obstackle.style.zIndex = 1;
    }, 1000);
  }
  obstackle.style.right = `${obsPosition}px`;
}

function incrementTopPosition(obstackle, interval, incrementValue) {
  if (obsPosition2 <= 0 || obsPosition2 >= 640) {
    obstackle.style.opacity = 0;
  } else {
    obstackle.style.opacity = 1;
  }
  obsPosition2 += incrementValue;
  if (obsPosition2 >= 520 && obsPosition2 <= 600 && isUp) {
    obsPosition2 -= 40;
    loseText.style.opacity = 1;
    isPlaying = false;
    clearInterval(interval);
    clearInterval(intervalobs1);
    clearInterval(intervalreward);
    overlay.style.display = 'flex';
    overlay.firstElementChild.textContent = 'Ви програли!';
    overlay.lastElementChild.textContent = 'Заново';
  }
  if (obsPosition2 >= 750) {
    obsPosition2 = -270;
    obstackle.style.zIndex = -1;
    setTimeout(function () {
      obstackle.style.zIndex = 1;
    }, 1000);
  }
  obstackle.style.right = `${obsPosition2}px`;
}

let poinTaken = false;
function incrementRewardPosition(obstackle, interval, incrementValue) {
  if (rewardPosition <= 0 || rewardPosition >= 680) {
    obstackle.style.opacity = 0;
  } else {
    obstackle.style.opacity = 1;
  }
  rewardPosition += incrementValue;
  if (rewardPosition >= 520 && rewardPosition <= 600 && isUp && !poinTaken) {
    counter += 1;
    poinTaken = true;
    obstackle.innerHTML = '';
    setTimeout(function () {
      poinTaken = false;
      obstackle.innerHTML =
        '<img class="google-dino-image" src="../img/coin.png" alt="dino">';
    }, 3000);
  }
  if (rewardPosition >= 730) {
    rewardPosition = -270;
    obstackle.style.zIndex = -1;
    setTimeout(function () {
      obstackle.style.zIndex = 1;
    }, 1000);
  }
  obstackle.style.right = `${rewardPosition}px`;
  pointsText.textContent = counter;
}

let intervalobs1;
let intervalobs2;
let intervalreward;

btn.addEventListener('click', event => {
  pointsText.textContent = 0;
  counter = 0;
  obsPosition = 0;
  obsPosition2 = -500;
  rewardPosition = -580;
  overlay.style.display = 'none';
  readyToPlay = true;
  obstackle.style.display = 'block';
  obstackle2.style.display = 'block';
  reward.style.display = 'block';
  isPlaying = true;
  if (isPlaying) {
    intervalreward = setInterval(() =>
      incrementRewardPosition(reward, intervalreward, 0.3)
    );
    intervalobs1 = setInterval(
      () => incrementPosition(obstackle, intervalobs1, 22),
      150
    );
    intervalobs2 = setInterval(() =>
      incrementTopPosition(obstackle2, intervalobs2, 0.7)
    );
  }
});

// ArrowUp
// ArrowDown
// ArrowLeft
// ArrowRight
// Space
// Enter
