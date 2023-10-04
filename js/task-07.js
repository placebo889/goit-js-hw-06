const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');
const initialFontSize = fontSizeControl.value + 'px';

textElement.style.fontSize = initialFontSize;
fontSizeControl.addEventListener('input', function() {
  const fontSize = fontSizeControl.value + 'px';
  textElement.style.fontSize = fontSize;
});
