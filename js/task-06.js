const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlur);

function onBlur(event) {
  if (
    Number(event.currentTarget.dataset.length) ===
    event.currentTarget.value.length
  ) {
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.add('invalid');
  }
}
