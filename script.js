const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let formIsValid = true;

  inputs.forEach(input => {
    const errorSpan = input.nextElementSibling;

    if (input.value.trim() === '') {
      input.classList.add('error');
      errorSpan.textContent = 'Campo obrigatório';
      formIsValid = false;
    } else {
      input.classList.remove('error');
      errorSpan.textContent = '';
    }
  });

  if (formIsValid) {
    alert('Formulário enviado com sucesso!');
    form.reset();
  }
});
