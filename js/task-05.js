const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', e => {
  if (e.currentTarget.value.trim()) {
    outputEl.textContent = e.currentTarget.value;
  } else {
    outputEl.textContent = 'Anonymous';
  }
});
