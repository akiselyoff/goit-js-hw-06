function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const currentColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = getRandomHexColor();
}
