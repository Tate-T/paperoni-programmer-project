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
const scoreDisplay = document.getElementById("score");

let score = 0;
const initialPosition = { left: 0, top: 0 }; // Початкові координати м'яча

// Функція перевірки попадання у ворота
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

// Функція для повернення м'яча на початкову позицію
function resetBallPosition() {
    ball.style.left = `${initialPosition.left}px`;
    ball.style.top = `${initialPosition.top}px`;
}

// Додавання слухача кліку для переміщення м'яча
field.addEventListener("click", (event) => {
    const fieldCoords = field.getBoundingClientRect();

    let left = event.clientX - fieldCoords.left - ball.offsetWidth / 2;
    let top = event.clientY - fieldCoords.top - ball.offsetHeight / 2;

    // Обмеження м'яча в межах поля
    if (left < 0) left = 0;
    if (top < 0) top = 0;
    if (left + ball.offsetWidth > field.clientWidth) {
        left = field.clientWidth - ball.offsetWidth;
    }
    if (top + ball.offsetHeight > field.clientHeight) {
        top = field.clientHeight - ball.offsetHeight;
    }

    // Встановлення нової позиції м'яча
    ball.style.left = `${left}px`;
    ball.style.top = `${top}px`;

    // Перевірка попадання у ворота
    if (checkGoal()) {
        score += 1; // Збільшуємо рахунок
        scoreDisplay.textContent = score; // Оновлюємо рахунок у DOM
        resetBallPosition(); // Повертаємо м'яч на початкову позицію
    }
});
