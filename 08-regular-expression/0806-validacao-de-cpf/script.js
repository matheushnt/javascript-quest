import ValidacaoCPF from './validar-cpf.js';

const cpf = document.querySelector('#cpf');
const validacaoCPF = new ValidacaoCPF(cpf);

console.log(validacaoCPF.formatar('123 456 789 10'));
