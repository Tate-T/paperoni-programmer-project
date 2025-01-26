// const field = document.querySelector(".football-box");
// const ball = document.querySelector(".football-ball");

// field.addEventListener("click", (event) => {
//     const fieldCoords = field.getBoundingClientRect();

//     let left = event.clientX - fieldCoords.left - ball.offsetWidth / 2;
//     let top = event.clientY - fieldCoords.top - ball.offsetHeight / 2;

//     if (left < 0) left = 0;
//     if (top < 0) top = 0;
//     if (left + ball.offsetWidth > field.clientWidth) {
//         left = field.clientWidth - ball.offsetWidth;
//     }
//     if (top + ball.offsetHeight > field.clientHeight) {
//         top = field.clientHeight - ball.offsetHeight;
//     }

//     ball.style.left = `${left}px`;
//     ball.style.top = `${top}px`;
// });

// .....................................................................................................

// .....................................................................................................


// const field = document.querySelector(".football-box");
// const ball = document.querySelector(".football-ball");
// const goal = document.querySelector(".football-goal");
// const scoreElement = document.getElementById("score");
// const messageBox = document.querySelector(".football-end")
// const restartGame = document.querySelector(".football-end-btn")

// const timerElem = document.querySelector(".football-timer")

// /////////////////////////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////////////////////////////

// let score = 0;
// const maxScore = 20; 
// const initialPosition = { left: "20px", top: "20px" };

// ball.style.left = initialPosition.left;
// ball.style.top = initialPosition.top;

// function checkGoal() {
//   const goalCoords = goal.getBoundingClientRect();
//   const ballCoords = ball.getBoundingClientRect();

//   const ballCenterX = ballCoords.left + ballCoords.width / 2;
//   const ballCenterY = ballCoords.top + ballCoords.height / 2;

//   return (
//     ballCenterX > goalCoords.left &&
//     ballCenterX < goalCoords.right &&
//     ballCenterY > goalCoords.top &&
//     ballCenterY < goalCoords.bottom
//   );
// }

// function resetBallPosition() {
//   ball.style.left = initialPosition.left;
//   ball.style.top = initialPosition.top;
// }

// function endGame() {
//   messageBox.style.display = "block";
   

// }

// function returnGame() {
//     messageBox.style.display = "none";
//     score = 0; 
//     scoreElement.textContent = score; 
//     // resetBallPosition(); 
//   }

//   restartGame.addEventListener("click", () => {
//     returnGame()
//   })

// field.addEventListener("click", (event) => {

//   if (score >= maxScore) return;

//   const fieldCoords = field.getBoundingClientRect();

//   let left = event.clientX - fieldCoords.left - ball.offsetWidth / 2;
//   let top = event.clientY - fieldCoords.top - ball.offsetHeight / 2;

//   if (left < 0) left = 0;
//   if (top < 0) top = 0;
//   if (left + ball.offsetWidth > field.clientWidth) {
//     left = field.clientWidth - ball.offsetWidth;
//   }
//   if (top + ball.offsetHeight > field.clientHeight) {
//     top = field.clientHeight - ball.offsetHeight;
//   }

//   ball.style.left = `${left}px`;
//   ball.style.top = `${top}px`;

//   if (checkGoal()) {
//     score += 1;
//     scoreElement.textContent = score;
//     resetBallPosition();

//     if (score >= maxScore) {
//       endGame();
//     }
//   }

// });
 


// function startCountdown(seconds) {
//   let timeLeft = seconds;

//   function updateTimer() {
//       const minutes = Math.floor((timeLeft % 3600) / 60);
//       const seconds = timeLeft % 60;

//       timerElem.textContent = 
//           `${minutes}:${seconds}`;

//       if (timeLeft <= 0) {
//           clearInterval(timerInterval);
//           timerElem.textContent = "Час вийшов ви програли!";
//       }

//       timeLeft--;
//   }

//   updateTimer(); 
//   const timerInterval = setInterval(updateTimer, 1000);
// }

// console.log(startCountdown(30));



const field = document.querySelector(".football-box");
const ball = document.querySelector(".football-ball");
const goal = document.querySelector(".football-goal");
const scoreElement = document.getElementById("score");
const messageBox = document.querySelector(".football-end");
const restartGame = document.querySelector(".football-end-btn");
const timerElem = document.querySelector(".football-timer");

const endText = document.querySelector(".football-end-text");

/////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////

let score = 0;
const maxScore = 40;
const initialPosition = { left: "20px", top: "20px" };
let timerInterval;
let timerStarted = false;

ball.style.left = initialPosition.left;
ball.style.top = initialPosition.top;

function checkGoal() {
  const goalCoords = goal.getBoundingClientRect();
  const ballCoords = ball.getBoundingClientRect();

  const ballCenterX = ballCoords.left + ballCoords.width / 2;
  const ballCenterY = ballCoords.top + ballCoords.height / 2;

  return (
    ballCenterX > goalCoords.left &&
    ballCenterX < goalCoords.right &&
    ballCenterY > goalCoords.top &&
    ballCenterY < goalCoords.bottom
  );
}

function resetBallPosition() {
  ball.style.left = initialPosition.left;
  ball.style.top = initialPosition.top;
}


function endGame(win) {
  clearInterval(timerInterval); // Зупиняємо таймер
  messageBox.style.display = "block";
  if (win) {
    endText.textContent = "Гру завершено, ви набрали максимальну кількість балів";
  } else {
    endText.textContent = "Час вийшов, ви програли!";
  }
}

function returnGame() {
  messageBox.style.display = "none";
  score = 0;
  scoreElement.textContent = score;
  timerElem.textContent = "";
  resetBallPosition();
  timerStarted = false;
}

restartGame.addEventListener("click", () => {
  returnGame();
});

field.addEventListener("click", (event) => {
  if (!timerStarted) {
    timerStarted = true;
    startCountdown(30);
  }

  if (score >= maxScore) return;

  const fieldCoords = field.getBoundingClientRect();

  let left = event.clientX - fieldCoords.left - ball.offsetWidth / 2;
  let top = event.clientY - fieldCoords.top - ball.offsetHeight / 2;

  if (left < 0) left = 0;
  if (top < 0) top = 0;
  if (left + ball.offsetWidth > field.clientWidth) {
    left = field.clientWidth - ball.offsetWidth;
  }
  if (top + ball.offsetHeight > field.clientHeight) {
    top = field.clientHeight - ball.offsetHeight;
  }

  ball.style.left = `${left}px`;
  ball.style.top = `${top}px`;

  if (checkGoal()) {
    score += 1;
    scoreElement.textContent = score;
    resetBallPosition();

    if (score >= maxScore) {
      endGame(true);
    }
  }
});

function startCountdown(seconds) {
  let timeLeft = seconds;

  function updateTimer() {
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    timerElem.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (score < maxScore) {
        endGame(false);
      }
    }

    timeLeft--;
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

restartGame.addEventListener("click", () => {
  returnGame();
});
