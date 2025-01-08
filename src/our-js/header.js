const dropdownBtn = document.querySelector(".header-dropdown-btn");
const dropdownList = document.querySelector(".header-dropdown-content");
const cirkle = document.querySelector(".header-cirkle")
const body = document.querySelector("body")

dropdownBtn.addEventListener("click", () => {
    dropdownList.classList.toggle("show");
});

cirkle.addEventListener('click', event => {
    event.target.classList.toggle('time-calculator-cirkle-right');
    if (event.target.classList.contains('time-calculator-cirkle-right')) {
      body.style.backgroundColor = "red"
    } else {
       body.style.backgroundColor = "blue"
    }
  });