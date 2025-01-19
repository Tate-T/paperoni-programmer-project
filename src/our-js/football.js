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

// .....................................

const field = document.querySelector(".football-box");
const ball = document.querySelector(".football-ball");
const goal = document.querySelector(".football-goal");
const scoreDisplay = document.querySelector(".football-score");

let score = 0;
const initialPosition = { left: 0, top: 0 }; 


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
    ball.style.left = `${initialPosition.left}px`;
    ball.style.top = `${initialPosition.top}px`;
}


field.addEventListener("click", (event) => {
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
        scoreDisplay.textContent = score; 
        resetBallPosition(); 
    }
});
