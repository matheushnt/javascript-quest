const form = document.forms;

console.log(form[0]);
console.log(form[0].elements);
console.log(form[0][1]);
console.log(form[0].email); // Retorno igual a linha de cima

const formContato = document.forms[0];
const spanTexto = document.querySelector('.texto');

function handleKeyUp(event) {
  console.log(event.target.value);
  spanTexto.innerText = event.target.value;
}

formContato.addEventListener('change', handleKeyUp);
