let input1 = document.getElementById('counter-calculator1');
let input2 = document.getElementById('counter-calculator2');
let resultField = document.getElementById('text-result');
let operation = null;

document.getElementById('plus-button').addEventListener('click', () => {
  operation = '+';
  highlightActiveButton('plus-button');
});

document.getElementById('plus-umltiplate').addEventListener('click', () => {
  operation = '*';
  highlightActiveButton('plus-umltiplate');
});

document.getElementById('plus-minus').addEventListener('click', () => {
  operation = '-';
  highlightActiveButton('plus-minus');
});

document.getElementById('plus-divadet').addEventListener('click', () => {
  operation = '/';
  highlightActiveButton('plus-divadet');
});

document.getElementById('button-equal').addEventListener('click', () => {
  let num1 = parseFloat(input1.value);
  let num2 = parseFloat(input2.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultField.value = 'Помилка: введіть числа';
    return;
  }

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Ділення на 0!';
      break;
    default:
      result = 'Оберіть операцію';
  }

  resultField.value = result;
});

function autoResizeInput(input) {
  const measurer = document.createElement('span');
  document.body.appendChild(measurer);
  measurer.style.visibility = 'hidden';
  measurer.style.position = 'absolute';
  measurer.style.whiteSpace = 'pre';
  measurer.style.font = getComputedStyle(input).font;
  measurer.style.padding = getComputedStyle(input).padding;

  const updateWidth = () => {
    measurer.textContent = input.value || input.placeholder;
    input.style.width = `${measurer.offsetWidth + 10}px`;
  };

  input.addEventListener('input', updateWidth);

  updateWidth();

  input.addEventListener('blur', () => {
    document.body.removeChild(measurer);
  });
}

const inputs = document.querySelectorAll('.calculator-field');
inputs.forEach(autoResizeInput);
