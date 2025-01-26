const numericalBtn = document.querySelector('.header-numerical');
const playableBtn = document.querySelector('.header-playable');
const intoductoryBtn = document.querySelector('.header-introductory');
const nothingBtn = document.querySelector('.header-no-filters');
const bg = document.querySelector('.background');

const numerical = [
  document.querySelector('.calculator'),
  document.querySelector('.guess-number'),
  document.querySelector('.time-calculator'),
  document.querySelector('.max-number'),
];
const special = document.querySelector('.born-year');

const playable = [
  document.querySelector('.rock-paper-scissors'),
  document.querySelector('.google-dino'),
  document.querySelector('.football'),
  document.querySelector('.space'),
];
const introductory = [
  document.querySelector('.team'),
  document.querySelector('#scientists'),
];

numericalBtn.addEventListener('click', event => {
  numerical.forEach(section => (section.style.display = 'block'));
  special.style.display = 'flex';
  playable.forEach(section => (section.style.display = 'none'));
  introductory.forEach(section => (section.style.display = 'none'));
  bg.style.height = `1200px`;
  if (window.screen.width <= 768) {
    bg.style.height = `1800px`;
  }
});

playableBtn.addEventListener('click', event => {
  numerical.forEach(section => (section.style.display = 'none'));
  special.style.display = 'none';
  playable.forEach(section => (section.style.display = 'block'));
  introductory.forEach(section => (section.style.display = 'none'));
  bg.style.height = `2000px`;
  if (window.screen.width <= 1200) {
    bg.style.height = `1800px`;
  } 
  if (window.screen.width <= 768) {
    bg.style.height = `2200px`;
  }
});

intoductoryBtn.addEventListener('click', event => {
  numerical.forEach(section => (section.style.display = 'none'));
  special.style.display = 'none';
  playable.forEach(section => (section.style.display = 'none'));
  introductory.forEach(section => (section.style.display = 'block'));
  bg.style.height = `1400px`;
  if (window.screen.width <= 1200) {
    bg.style.height = `1600px`;
  }
  if (window.screen.width <= 768) {
    bg.style.height = `2000px`;
  }
});

nothingBtn.addEventListener('click', event => {
  numerical.forEach(section => (section.style.display = 'block'));
  special.style.display = 'flex';
  playable.forEach(section => (section.style.display = 'block'));
  introductory.forEach(section => (section.style.display = 'block'));
  bg.style.height = `4200px`;
  if (window.screen.width <= 1200) {
    bg.style.height = `4200px`;
  }
  if (window.screen.width <= 768) {
    bg.style.height = `5600px`;
  }
});
