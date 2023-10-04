const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

updateCounterValue();