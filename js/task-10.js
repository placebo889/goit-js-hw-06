const input = document.querySelector('#input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
