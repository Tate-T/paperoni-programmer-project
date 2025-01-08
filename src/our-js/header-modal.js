const input = document.querySelector(".header-modal-input")
const headerHello = document.querySelector(".header-hello")
const btnSave = document.querySelector(".header-modal-btn-save")

const modalMain = document.querySelector(".header-modal")
const modalSub = document.querySelector(".header-modal-sub")
const btnClose = document.querySelector(".header-modal-btn-close")
const btnSubClose = document.querySelector(".header-modal-sub-btn-close")

btnSave.addEventListener("click", () => {
    headerHello.textContent = `Вітаємо ${input.value}`
})


