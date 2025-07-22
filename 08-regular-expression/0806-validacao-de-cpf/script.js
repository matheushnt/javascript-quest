import ValidacaoCPF from './validar-cpf.js';

const cpf = document.querySelector('#cpf');
const validacaoCPF = new ValidacaoCPF(cpf).iniciar();
