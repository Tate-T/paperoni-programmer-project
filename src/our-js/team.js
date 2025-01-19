const left = document.querySelector('[data-left]');
const right = document.querySelector('[data-right]');
const fullName = document.querySelector('[data-name]');
const des = document.querySelector('[data-description]');
const bars = document.querySelectorAll('.part');
const img = document.querySelector('.team-img');
let index = 0;

const members = [
  {
    name: 'Андрій Мальцев',
    description:
      'Скрам-майстер, зробив секції: Калькулятор часу; Google динозавр; Камінь - ножиці - папір; Footer; Scroll To Top; Темна тема',
    image: '../img/team1.jpg',
  },
  {
    name: 'Артем Дикий',
    description:
      'Лідер команди, зробив секції: Header; Вгадай число, яке загадав комп’ютер; Футбол; Введіть 3 числа; Модельне вікно',
    image: '../img/team2.png',
  },
  {
    name: 'Святослав Калугін',
    description:
      'Голова робочого відділу, зробив секції: Перевір в який рік ти народився; Калькулятор; Наша команда; Обери вченого/их; Космічні загарбники',
    image: '../img/team3.jpg',
  },
];

function setContent(index) {
  fullName.textContent = members[index].name;
  des.innerHTML = members[index].description;
  img.src = members[index].image;

  bars.forEach((bar, i) => {
    bar.style.width = '25px';
    bar.style.backgroundColor = i === index ? '#868686' : '#e3e3e3';
  });
}

function animateContent(isNext) {
  const currentClass = isNext ? 'fade-out-right' : 'fade-out-left';
  const nextClass = isNext ? 'fade-in' : 'fade-in';

  fullName.classList.add(currentClass);
  des.classList.add(currentClass);
  img.classList.add(currentClass);

  setTimeout(() => {
    setContent(index);
    fullName.classList.remove(currentClass);
    des.classList.remove(currentClass);
    img.classList.remove(currentClass);
    fullName.classList.add(nextClass);
    des.classList.add(nextClass);
    img.classList.add(nextClass);

    setTimeout(() => {
      fullName.classList.remove(nextClass);
      des.classList.remove(nextClass);
      img.classList.remove(nextClass);
    }, 500);
  }, 500);
}

left.addEventListener('click', () => {
  index = (index - 1 + members.length) % members.length;
  animateContent(false);
});

right.addEventListener('click', () => {
  index = (index + 1) % members.length;
  animateContent(true);
});

setContent(index);
