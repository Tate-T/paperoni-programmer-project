const field = document.querySelector(".football-box");
const ball = document.querySelector(".football-ball");

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
});