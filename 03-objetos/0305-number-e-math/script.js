const ano = 2018;
const preco = new Number(99);

const valor1 = 4 - 'abc';
console.log(Number.isNaN(valor1)); // Verifica se é NaN

const valor2 = 5;
const valor3 = 1.125;
console.log(Number.isInteger(valor2), Number.isInteger(valor3)); // Verifica se é inteiro

const valor4 = '100';
const valor5 = '155.99';
const valor6 = '210,30';
const valor7 = '   120 reais';
const valor8 = 'R$ 100';
console.log(
  Number.parseInt(valor4), // Converte str em int
  Number.parseInt(valor5),
  Number.parseFloat(valor6), // Converte str em float
  Number.parseFloat(valor7),
  Number.parseInt(valor8)
);

const valor9 = 187.27;
console.log(valor9.toFixed()); // Arredonda o número com base no total de casas decimais do argumento
console.log(valor9.toFixed(1));
console.log(valor9.toFixed(2));
console.log(valor9.toFixed(3));

const valor10 = 2.99;
console.log(valor10.toString()); // Converte o número em str

let valor11 = 59.99;
valor11 = valor11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Formata o número de acordo com a língua e opções passadas
console.log(valor11);
let valor12 = 29.9;
valor12 = valor12.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
console.log(valor12);

console.log(Math.PI); // Valor de PI
console.log(Math.E); // Valor de Euler

console.log(Math.abs(-3)); // Retorna o valor absoluto (positivo)

console.log(Math.ceil(3.14)); // Arrendonda para cima

console.log(Math.floor(3.14)); // Arrendonda para baixo
console.log(Math.floor(3.14)); // Retorna o valor arredondado para o int mais próximo

console.log(Math.round(5.4)); // Retorna o valor arredondado para o int mais próximo
console.log(Math.round(5.7));
console.log(Math.round(5.5));

console.log(Math.trunc(187.8769)); // Retorna a parte inteira da entrada, removendo quaisquer dígitos fracionários
console.log(Math.trunc(7.857839));

console.log(Math.random()); // Retorna um número aleatório entre 0 e 1.

console.log(Math.round(Math.random() * 100)); // entre 0 e 100
console.log(Math.round(Math.random() * 500)); // entre 0 e 500

// Número random entre um MAX e MIN
const minimo = 32;
const maximo = 72;
console.log(Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
console.log(Math.floor(Math.random() * (89 - 21 + 1)) + 21);

console.log(Math.min(3, 45, 9, 2, 90, 0.12)); // Retorna o menor entre zero ou mais números
console.log(Math.max(3, 45, 9, 2, 90, 0.12)); // Retorna o maior entre zero ou mais números
