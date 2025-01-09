const left = document.querySelector("[data-left]");
const right = document.querySelector("[data-right]");
const fullName = document.querySelector("[data-name]");
const des = document.querySelector("[data-description]");
const bars = document.querySelectorAll(".part");
let index = 0;

const members = [
  {
    name: "Андрій Мальцев",
    description: "тут заглушка",
  },
  {
    name: "Артем Дикий",
    description: "тут заглушка",
  },
  {
    name: "Святослав Калугін",
    description: "тут заглушка",
  },
];

function setContent(index) {
  fullName.textContent = members[index].name;
  des.innerHTML = members[index].description;

  bars.forEach((bar, i) => {
    if (i === index) {
      bar.style.width = "25px";
      bar.style.backgroundColor = "#868686";
    } else {
      bar.style.width = "25px";
      bar.style.backgroundColor = "#e3e3e3";
    }
  });
}

function animateContent(isNext) {
  const currentClass = isNext ? "fade-out" : "fade-in";
  const nextClass = isNext ? "fade-in" : "fade-out";

  fullName.classList.add(currentClass);
  des.classList.add(currentClass);

  setTimeout(() => {
    setContent(index);
    fullName.classList.remove(currentClass);
    des.classList.remove(currentClass);
    fullName.classList.add(nextClass);
    des.classList.add(nextClass);

    setTimeout(() => {
      fullName.classList.remove(nextClass);
      des.classList.remove(nextClass);
    }, 500);
  }, 500);
}

// Обробники кнопок
left.addEventListener("click", () => {
  index = (index - 1 + members.length) % members.length; 
  animateContent(false);
});

right.addEventListener("click", () => {
  index = (index + 1) % members.length; 
  animateContent(true);
});

setContent(index);
