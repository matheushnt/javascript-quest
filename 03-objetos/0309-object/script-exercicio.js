// Crie uma função que verifique corretamente o tipo de dado
function verificarTipoDado(dado) {
  return Object.prototype.toString.call(dado);
}

const dado1 = 'Meu nome é Matheus';
const dado2 = ['Joaquim', 36];
const dado3 = { nome: 'Fernanda', idade: 29 };

console.log(verificarTipoDado(dado1));
console.log(verificarTipoDado(dado2));
console.log(verificarTipoDado(dado3));

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {};
Object.defineProperty(quadrado, 'lados', {
  value: 4,
  configurable: false,
});

quadrado.lados = 8;
console.log(quadrado);
delete quadrado.lados;
console.log(quadrado);

// Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333',
};

Object.freeze(configuracao);

// Liste o nome de todas as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
