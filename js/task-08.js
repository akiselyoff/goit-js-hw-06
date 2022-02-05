const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email && password) {
    // const formData = new FormData(event.currentTarget);  alternative getting form fields
    // return formData;
    console.dir({ email, password });

    // return { email, password };
  } else {
    alert('все поля должны быть заполнены');
  }

  form.reset();
}
