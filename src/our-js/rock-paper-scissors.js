const reset = function () {
  document.querySelector('.rock-paper-scissors-user').textContent = 0;
  document.querySelector('.rock-paper-scissors-tie').textContent = 0;
  document.querySelector('.rock-paper-scissors-pc').textContent = 0;
  resultText.textContent = 'Почніть гру';
  resultText.style.color = 'black';
  pcScore = 0;
  userScore = 0;
  tieScore = 0;
  userChoice = 0;
  buttons[0].classList.remove('rock-paper-scissors-item-hover');
  buttons[1].classList.remove('rock-paper-scissors-item-hover');
  buttons[2].classList.remove('rock-paper-scissors-item-hover');
};

const difficulties = document.querySelectorAll(
  '.rock-paper-scissors-difficulty'
);
const buttons = document.querySelectorAll('.rock-paper-scissors-item');
const resultBtn = document.querySelector('.rock-paper-scissors-button');
const resultText = document.querySelector('.rock-paper-scissors-text');
let userChoice = 0;
let difficulty = 2;

difficulties[0].addEventListener('click', event => {
  difficulty = 1;
  difficulties[0].classList.add('rock-paper-scissors-difficulty-hover');
  difficulties[1].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[2].classList.remove('rock-paper-scissors-difficulty-hover');
  reset();
});

difficulties[1].addEventListener('click', event => {
  difficulty = 2;
  difficulties[0].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[1].classList.add('rock-paper-scissors-difficulty-hover');
  difficulties[2].classList.remove('rock-paper-scissors-difficulty-hover');
  reset();
});

difficulties[2].addEventListener('click', event => {
  difficulty = 3;
  difficulties[0].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[1].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[2].classList.add('rock-paper-scissors-difficulty-hover');
  reset();
});

buttons[0].addEventListener('click', event => {
  userChoice = 1;
  buttons[0].classList.add('rock-paper-scissors-item-hover');
  buttons[1].classList.remove('rock-paper-scissors-item-hover');
  buttons[2].classList.remove('rock-paper-scissors-item-hover');
});
buttons[1].addEventListener('click', event => {
  userChoice = 2;
  buttons[1].classList.add('rock-paper-scissors-item-hover');
  buttons[0].classList.remove('rock-paper-scissors-item-hover');
  buttons[2].classList.remove('rock-paper-scissors-item-hover');
});
buttons[2].addEventListener('click', event => {
  userChoice = 3;
  buttons[2].classList.add('rock-paper-scissors-item-hover');
  buttons[0].classList.remove('rock-paper-scissors-item-hover');
  buttons[1].classList.remove('rock-paper-scissors-item-hover');
});

let pcScore = 0;
let userScore = 0;
let tieScore = 0;
resultBtn.addEventListener('click', event => {
  let pcChoice = Math.floor(Math.random() * 3) + 1;
  if (difficulty === 1) {
    if (Math.floor(Math.random() * 10) + 1 === 1) {
      if (userChoice === 1) {
        pcChoice = 3;
      } else {
        pcChoice = userChoice - 1;
      }
    } else if (Math.floor(Math.random() * 10) + 1 === 1) {
      pcChoice = userChoice;
    } else {
      if (userChoice === 3) {
        pcChoice = 1;
      } else {
        pcChoice = userChoice + 1;
      }
    }
  } else if (difficulty === 3) {
    if (Math.floor(Math.random() * 50) + 1 === 1) {
      if (userChoice === 3) {
        pcChoice = 1;
      } else {
        pcChoice = userChoice + 1;
      }
    } else if (Math.floor(Math.random() * 50) + 1 === 1) {
      pcChoice = userChoice;
    } else {
      if (userChoice === 1) {
        pcChoice = 3;
      } else {
        pcChoice = userChoice - 1;
      }
    }
  }

  if (
    (userChoice === 1 && pcChoice === 2) ||
    (userChoice === 2 && pcChoice === 3) ||
    (userChoice === 3 && pcChoice === 1)
  ) {
    userScore += 1;
    document.querySelector('.rock-paper-scissors-user').textContent = userScore;
    resultText.textContent = 'Ви виграли раунд!';
    resultText.style.color = 'green';
  } else if (userChoice === pcChoice) {
    tieScore += 1;
    document.querySelector('.rock-paper-scissors-tie').textContent = tieScore;
    resultText.textContent = 'Нічия!';
    resultText.style.color = 'grey';
  } else if (userChoice === 0) {
  } else {
    pcScore += 1;
    document.querySelector('.rock-paper-scissors-pc').textContent = pcScore;
    resultText.textContent = "Комп'ютер виграв раунд!";
    resultText.style.color = 'red';
  }
  pcChoice = Math.round(Math.random() * (3 - 1) + 1);
});

document
  .querySelector('.rock-paper-scissors-update')
  .addEventListener('click', event => {
    reset();
  });
