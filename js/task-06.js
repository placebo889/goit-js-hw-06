const input = document.getElementById('validation-input');

input.addEventListener('blur', function() {
  const desiredLength = parseInt(input.getAttribute('data-length'), 10);
  const inputValue = input.value;

  if (inputValue.length === desiredLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});