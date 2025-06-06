// Números
var num = 20;
var pi = 3.14;
var exponencial = 2e10;
console.log(num);
console.log(pi);
console.log(exponencial);

// Operadores aritméticos
var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 21 % 2;
console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

// Operadores aritméticos em strings
var somaString = '100' + 50;
console.log(somaString);

var subtracaoString = '100' - 50;
console.log(subtracaoString);

var multiplicacaoString1 = '100' * '2';
console.log(multiplicacaoString1);

var multiplicacaoString1 = '200' * 2;
console.log(multiplicacaoString1);

var divisaoString1 = '25' / '5';
console.log(divisaoString1);

var divisaoString2 = '10' / 5;
console.log(divisaoString2);

var divisaoString3 = 'Comprei 10' / 2;
console.log(divisaoString3);
console.log(isNaN(divisaoString3));

// Ordem importa
var total1 = 20 + 5 * 2;
var total2 = (20 + 5) * 2;
var total3 = (20 / 2) * 5;
var total4 = 10 + 10 * 2 + 20 / 2;
console.log(total1, total2, total3, total3);

// Operadores aritméticos unários
var x = 0,
  y = 5;
console.log(`Valor de x = ${x++}`);
console.log(`Valor de x = ${x}`);
console.log(`Valor de x = ${++x}`);

console.log(`Valor de y = ${y--}`);
console.log(`Valor de y = ${y}`);
console.log(`Valor de y = ${--y}`);

var idade = '20';
var idadeComLetras = '20 anos';
var val = 10;
console.log(+idade);
console.log(-idade + 10);
console.log(+idadeComLetras - 10);
