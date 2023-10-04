document.addEventListener('DOMContentLoaded', function () {
  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');
  const body = document.body;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  changeColorButton.addEventListener('click', function () {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });
});
