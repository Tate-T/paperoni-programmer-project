const input = document.querySelector(".header-modal-input")
const headerHello = document.querySelector(".header-hello")
const btnSave = document.querySelector(".header-modal-btn-save")
// const errorMessage = document.querySelector(".error-message");

const modalMain = document.querySelector(".header-modal")
const modalMainBackdrop = document.querySelector(".header-modal-backdrop")
const modalSubBackdrop = document.querySelector(".header-modal-sub-backdrop")

const modalSub = document.querySelector(".header-modal-sub")
const btnClose = document.querySelector(".header-modal-btn-close")
const btnSubClose = document.querySelector(".header-modal-sub-btn-close")

btnSave.addEventListener("click", () => {
    if (input.value.length >= 3) {
        headerHello.textContent = `Вітаємо ${input.value}!`;
        input.style.border = "1px solid green";
      } else {
        headerHello.textContent = `Вітаємо, User!`
        input.style.border = "1px solid red";
      }
})

// btnSave.addEventListener("click", () => {
//     if (input.value.length >= 3) {
//       headerHello.textContent = `Вітаємо ${input.value}!`;
//     } else {
//       alert("Введіть щонайменше 3 символи!");
//     }
//   });

//   input.addEventListener("input", () => {
//     btnSave.disabled = input.value.length < 3;
//   });
  
//   btnSave.addEventListener("click", () => {
//     headerHello.textContent = `Вітаємо ${input.value}!`;
//   });
  




btnClose.addEventListener("click", () => {
    modalMainBackdrop.classList.toggle('header-modal-backdrop-vision')
})


btnSave.addEventListener("click", () => {
    modalMainBackdrop.classList.toggle('header-modal-backdrop-vision')
    modalSubBackdrop.classList.toggle('header-modal-sub-backdrop-vision')
})

btnSubClose.addEventListener("click", () => {
    modalSubBackdrop.classList.toggle('header-modal-sub-backdrop-vision')
})