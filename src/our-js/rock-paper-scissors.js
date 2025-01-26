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
  buttons[3].classList.remove('rock-paper-scissors-item-hover');
  buttons[4].classList.remove('rock-paper-scissors-item-hover');
};

const difficulties = document.querySelectorAll(
  '.rock-paper-scissors-difficulty'
);
const buttons = document.querySelectorAll('.rock-paper-scissors-item');
const resultBtn = document.querySelector('.rock-paper-scissors-button');
const resultText = document.querySelector('.rock-paper-scissors-text');
const list = document.querySelector('.rock-paper-scissors-list');
const info = document.querySelector('.rock-paper-scissors-info');
const choice = document.querySelector('.rock-paper-scissors-choice');
let userChoice = 0;
let difficulty = 2;

difficulties[0].addEventListener('click', event => {
  difficulty = 1;
  difficulties[0].classList.add('rock-paper-scissors-difficulty-hover');
  difficulties[1].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[2].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[3].classList.remove('rock-paper-scissors-difficulty-hover');
  buttons[3].style.opacity = 0;
  buttons[3].style.transform = `translate(0, -90px)`;
  buttons[3].style.zIndex = `-1`;
  buttons[4].style.opacity = 0;
  buttons[4].style.transform = `translate(0, -90px)`;
  buttons[4].style.zIndex = `-1`;
  list.style.padding = '170px 0 24px';
  list.style.height = '240px';
  info.style.top = '390px';
  if (window.screen.width >= 768) {
    info.style.top = '92px';
    list.style.padding = '36px 0 0';
    list.style.height = '130px';
  }
  reset();
});
difficulties[1].addEventListener('click', event => {
  difficulty = 2;
  difficulties[0].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[1].classList.add('rock-paper-scissors-difficulty-hover');
  difficulties[2].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[3].classList.remove('rock-paper-scissors-difficulty-hover');
  buttons[3].style.opacity = 0;
  buttons[3].style.transform = `translate(0, -90px)`;
  buttons[3].style.zIndex = `-1`;
  buttons[4].style.opacity = 0;
  buttons[4].style.transform = `translate(0, -90px)`;
  buttons[4].style.zIndex = `-1`;
  list.style.padding = '170px 0 24px';
  list.style.height = '240px';
  info.style.top = '390px';
  if (window.screen.width >= 768) {
    info.style.top = '92px';
    list.style.padding = '36px 0 0';
    list.style.height = '130px';
  }
  reset();
});
difficulties[2].addEventListener('click', event => {
  difficulty = 3;
  difficulties[0].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[1].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[2].classList.add('rock-paper-scissors-difficulty-hover');
  difficulties[3].classList.remove('rock-paper-scissors-difficulty-hover');
  buttons[3].style.opacity = 0;
  buttons[3].style.transform = `translate(0, -90px)`;
  buttons[3].style.zIndex = `-1`;
  buttons[4].style.opacity = 0;
  buttons[4].style.transform = `translate(0, -90px)`;
  buttons[4].style.zIndex = `-1`;
  list.style.padding = '170px 0 24px';
  list.style.height = '240px';
  info.style.top = '390px';
  if (window.screen.width >= 768) {
    info.style.top = '92px';
    list.style.padding = '36px 0 0';
    list.style.height = '130px';
  }
  reset();
});
difficulties[3].addEventListener('click', event => {
  difficulty = 4;
  difficulties[0].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[1].classList.remove('rock-paper-scissors-difficulty-hover');
  difficulties[3].classList.add('rock-paper-scissors-difficulty-hover');
  difficulties[2].classList.remove('rock-paper-scissors-difficulty-hover');
  buttons[3].style.opacity = 1;
  buttons[3].style.transform = `translate(0, 0)`;
  buttons[3].style.zIndex = `1`;
  buttons[4].style.opacity = 1;
  buttons[4].style.transform = `translate(0, 0)`;
  buttons[4].style.zIndex = `1`;
  list.style.padding = '170px 0 24px';
  list.style.height = '340px';
  info.style.top = '490px';
  if (window.screen.width >= 768) {
    info.style.top = '92px';
    list.style.padding = '36px 0';
    list.style.height = '222px';
  }
  reset();
});

buttons[0].addEventListener('click', event => {
  userChoice = 1;
  buttons[0].classList.add('rock-paper-scissors-item-hover');
  buttons[1].classList.remove('rock-paper-scissors-item-hover');
  buttons[2].classList.remove('rock-paper-scissors-item-hover');
  buttons[3].classList.remove('rock-paper-scissors-item-hover');
  buttons[4].classList.remove('rock-paper-scissors-item-hover');
});
buttons[1].addEventListener('click', event => {
  userChoice = 2;
  buttons[1].classList.add('rock-paper-scissors-item-hover');
  buttons[0].classList.remove('rock-paper-scissors-item-hover');
  buttons[2].classList.remove('rock-paper-scissors-item-hover');
  buttons[3].classList.remove('rock-paper-scissors-item-hover');
  buttons[4].classList.remove('rock-paper-scissors-item-hover');
});
buttons[2].addEventListener('click', event => {
  userChoice = 3;
  buttons[2].classList.add('rock-paper-scissors-item-hover');
  buttons[0].classList.remove('rock-paper-scissors-item-hover');
  buttons[1].classList.remove('rock-paper-scissors-item-hover');
  buttons[3].classList.remove('rock-paper-scissors-item-hover');
  buttons[4].classList.remove('rock-paper-scissors-item-hover');
});
buttons[3].addEventListener('click', event => {
  userChoice = 4;
  buttons[3].classList.add('rock-paper-scissors-item-hover');
  buttons[0].classList.remove('rock-paper-scissors-item-hover');
  buttons[1].classList.remove('rock-paper-scissors-item-hover');
  buttons[2].classList.remove('rock-paper-scissors-item-hover');
  buttons[4].classList.remove('rock-paper-scissors-item-hover');
});
buttons[4].addEventListener('click', event => {
  userChoice = 5;
  buttons[4].classList.add('rock-paper-scissors-item-hover');
  buttons[0].classList.remove('rock-paper-scissors-item-hover');
  buttons[1].classList.remove('rock-paper-scissors-item-hover');
  buttons[2].classList.remove('rock-paper-scissors-item-hover');
  buttons[3].classList.remove('rock-paper-scissors-item-hover');
});

let pcScore = 0;
let userScore = 0;
let tieScore = 0;

// 1 - 2, 5
// 2 - 3, 5
// 3 - 1, 4
// 4 - 1, 2
// 5 - 3, 4

resultBtn.addEventListener('click', event => {
  // if (difficulty === 4) {
  //   let pcChoice = Math.floor(Math.random() * 5) + 1;
  //   console.log(pcChoice);
  //   console.log(userChoice);

  // }

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
  } else if (difficulty === 4) {
    pcChoice = Math.floor(Math.random() * 5) + 1;
  }
  if (pcChoice === 1) {
    choice.textContent = "Комп'ютер обрав камінь";
  } else if (pcChoice === 2) {
    choice.textContent = "Комп'ютер обрав ножиці";
  } else if (pcChoice === 3) {
    choice.textContent = "Комп'ютер обрав папір";
  } else if (pcChoice === 4) {
    choice.textContent = "Комп'ютер обрав факел";
  } else if (pcChoice === 5) {
    choice.textContent = "Комп'ютер обрав стакан з водою";
  }
  console.log(pcChoice);
  if (
    (userChoice === 1 && (pcChoice === 2 || pcChoice === 5)) ||
    (userChoice === 2 && (pcChoice === 3 || pcChoice === 5)) ||
    (userChoice === 3 && (pcChoice === 1 || pcChoice === 4)) ||
    (userChoice === 4 && (pcChoice === 1 || pcChoice === 2)) ||
    (userChoice === 5 && (pcChoice === 3 || pcChoice === 4))
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
