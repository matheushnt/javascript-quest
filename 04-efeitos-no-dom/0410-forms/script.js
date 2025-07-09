const form = document.forms;

console.log(form[0]);
console.log(form[0].elements);
console.log(form[0][1]);
console.log(form[0].email); // Retorno igual a linha de cima

const formContato = document.forms[0];
const spanTexto = document.querySelector('.texto');

function handleChange(event) {
  const target = event.target;

  if (!target.checkValidity()) {
    target.classList.add('invalido');
    formContato.nome.setCustomValidity('O campo Nome é totalmente necessário');
    target.nextElementSibling.innerText = target.validationMessage;
  }

  // document.body.style.backgroundColor = target.value; input color

  if (target.checked) {
    console.log(target.value);
  }
}

formContato.addEventListener('change', handleChange);
