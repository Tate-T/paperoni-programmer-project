const formGus = document.querySelector(".guess-number-form")
const inputGus = document.querySelector(".guess-number-input")
const btnGus = document.querySelector(".guess-number-btn")
const textGus = document.querySelector(".guess-number-text")
const svg = document.querySelector(".guess-number-search")

function randomNumber() {
    return Math.round(Math.random() * 100);
}

btnGus.addEventListener("click", (event) => {
    event.preventDefault(); 
    const result = Number(inputGus.value)
    const randomNum = randomNumber()

    if(result === randomNum) {
        textGus.textContent = `Вітаю ви відгадали число! ${randomNum}`
        textGus.classList.toggle("guess-number-text-true")
    } else {
        textGus.textContent = `Ви програли, комп’ютер загадав ${randomNum}`
        textGus.classList.toggle("guess-number-text-false")
    }

    inputGus.value = ""
})

svg.addEventListener("click", (event) => {
    event.preventDefault(); 
    const result = Number(inputGus.value)
    const randomNum = randomNumber()

    if(result === randomNum) {
        textGus.textContent = `Вітаю ви відгадали число! ${randomNum}`
        textGus.classList.toggle("guess-number-text-true")
    } else {
        textGus.textContent = `Ви програли, комп’ютер загадав ${randomNum}`
        textGus.classList.toggle("guess-number-text-false")
    }

    inputGus.value = ""
})
