let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

const onIncrement = () => {
  counterValue = Number(counter.textContent);
  counterValue++;
  counter.textContent = counterValue;
};
const onDecrement = () => {
  counterValue = Number(counter.textContent);
  counterValue--;

  counter.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrement);
incrementBtn.addEventListener('click', onIncrement);
