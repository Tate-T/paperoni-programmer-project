const cirkle = document.querySelector('.time-calculator-cirkle');
const input = document.querySelector('.time-calculator-input');
const result = document.querySelector('.time-calculator-result');

document
  .querySelector('.time-calculator-ellipse')
  .addEventListener('click', event => {
    cirkle.classList.toggle('time-calculator-cirkle-right');
    if (cirkle.classList.contains('time-calculator-cirkle-right')) {
      input.placeholder = 'Кількість хвилин';
      input.value = '';
      result.textContent = '0 р. 0 дн. 0 год. 0 хв.';
    } else {
      input.placeholder = 'Кількість секунд';
      input.value = '';
      result.textContent = '0 дн. 0 год. 0 хв. 0 сек.';
    }
  });

let value;
input.addEventListener('change', event => {
  value = event.target.value;
});

document
  .querySelector('.time-calculator-wrap')
  .addEventListener('click', event => {
    if (!isNaN(value) && value >= 0) {
      if (cirkle.classList.contains('time-calculator-cirkle-right')) {
        result.textContent = `${(value - (value % 525600)) / 525600} р. ${
          ((value % 525600) - ((value % 525600) % 1440)) / 1440
        } дн. ${
          (((value % 525600) % 1440) - (((value % 525600) % 1440) % 60)) / 60
        } год. ${((value % 525600) % 1440) % 60} хв.`;
      } else {
        result.textContent = `${(value - (value % 86400)) / 86400} дн. ${
          ((value % 86400) - ((value % 86400) % 3600)) / 3600
        } год. ${
          (((value % 86400) % 3600) - (((value % 86400) % 3600) % 60)) / 60
        } хв. ${((value % 86400) % 3600) % 60} сек.`;
      }
    }
  });

document.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    if (!isNaN(value) && value >= 0) {
      if (cirkle.classList.contains('time-calculator-cirkle-right')) {
        result.textContent = `${(value - (value % 525600)) / 525600} р. ${
          ((value % 525600) - ((value % 525600) % 1440)) / 1440
        } дн. ${
          (((value % 525600) % 1440) - (((value % 525600) % 1440) % 60)) / 60
        } год. ${((value % 525600) % 1440) % 60} хв.`;
      } else {
        result.textContent = `${(value - (value % 86400)) / 86400} дн. ${
          ((value % 86400) - ((value % 86400) % 3600)) / 3600
        } год. ${
          (((value % 86400) % 3600) - (((value % 86400) % 3600) % 60)) / 60
        } хв. ${((value % 86400) % 3600) % 60} сек.`;
      }
    }
  }
});
