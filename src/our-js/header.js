const dropdownBtn = document.querySelector(".header-dropdown-btn");
const dropdownList = document.querySelector(".header-dropdown-content");
const cirkle = document.querySelector(".header-cirkle")
const img = document.querySelector(".header-cirkle-img")
const body = document.querySelector("body")


dropdownBtn.addEventListener("click", () => {
    dropdownList.classList.toggle("show");
});

cirkle.addEventListener('click', event => {
    cirkle.classList.toggle('header-cirkle-right');

    if (cirkle.classList.contains('header-cirkle-right')) {
      body.style.backgroundColor = "red"
      img.src = "../img/moon.svg"
      cirkle.style.backgroundColor ="black"
    } else {
      img
       body.style.backgroundColor = "blue"
      img.src = "../img/sun.svg"
      cirkle.style.backgroundColor ="white"
    }
  });