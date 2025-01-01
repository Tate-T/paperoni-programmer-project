const formGus = document.querySelector(".guess-form")
const inputGus = document.querySelector(".guess-input")
const btnGus = document.querySelector(".guess-btn")
const textGus = document.querySelector(".guess-text")

function randomNumber() {
    return Math.round(Math.random() * 100);
}

btnGus.addEventListener("click", (event) => {
    event.preventDefault(); 
    const result = Number(inputGus.value)
    const randomNum = randomNumber()

    if(result === randomNum) {
        textGus.textContent = `Вітаю ви відгадали число! ${randomNum}`
    } else {
        textGus.textContent = `Ви програли, комп’ютер загадав ${randomNum}`
    }

    inputGus.value = ""
})