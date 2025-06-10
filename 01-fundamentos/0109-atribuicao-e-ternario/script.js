// Operadores de Atribuição
var x = 5;
var y = 10;

console.log((x += y));
console.log((x -= y));
console.log((x *= y));
console.log((x /= y));
console.log((x %= y));
console.log((x **= y));

// Operador Ternário
// condição ? true : false
var idade = 20;
var maiorDeIdade = idade >= 18 ? 'Maior de idade' : 'Não é maior de idade';

console.log(maiorDeIdade);

// if abreviado
var possuiCNH = true;
if (possuiCNH) console.log('Possui habilitação para dirigir');
else console.log('Não possui habilitação para dirigir');

// prettier-ignore
if (possuiCNH)
  console.log('Está habilitado para dirigir');
else
  console.log('Não está habilitado para dirigir');

/*
Exercícios
Some 500 ao valor de scroll abaixo,
atribuindo o novo valor a scrollTela
*/
var scrollTela = 1000;
scrollTela += 500;
console.log(scrollTela);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;
console.log(darCredito);
