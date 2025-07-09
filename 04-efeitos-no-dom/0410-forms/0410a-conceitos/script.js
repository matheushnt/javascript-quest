const form = document.forms;

console.log(form[0]);
console.log(form[0].elements);
console.log(form[0][1]);
console.log(form[0].email); // Retorno igual a linha de cima

const formContato = document.forms[0];
const dados = {};

function handleChange(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}

formContato.addEventListener('change', handleChange);
