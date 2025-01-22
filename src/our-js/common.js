const numericalBtn = document.querySelector('.header-numerical');
const playableBtn = document.querySelector('.header-playable');
const intoductoryBtn = document.querySelector('.header-introductory');
const nothingBtn = document.querySelector('.header-no-filters');

const numerical = [
  document.querySelector('.born-year'),
  document.querySelector('.calculator'),
  document.querySelector('.guess-number'),
  document.querySelector('.time-calculator'),
  document.querySelector('.max-number'),
];
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
  playable.forEach(section => (section.style.display = 'none'));
  introductory.forEach(section => (section.style.display = 'none'));
});

playableBtn.addEventListener('click', event => {
  numerical.forEach(section => (section.style.display = 'none'));
  playable.forEach(section => (section.style.display = 'block'));
  introductory.forEach(section => (section.style.display = 'none'));
});

intoductoryBtn.addEventListener('click', event => {
  numerical.forEach(section => (section.style.display = 'none'));
  playable.forEach(section => (section.style.display = 'none'));
  introductory.forEach(section => (section.style.display = 'block'));
});

nothingBtn.addEventListener('click', event => {
  numerical.forEach(section => (section.style.display = 'block'));
  playable.forEach(section => (section.style.display = 'block'));
  introductory.forEach(section => (section.style.display = 'block'));
});
