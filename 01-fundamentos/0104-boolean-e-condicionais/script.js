if (true) {
  console.log('É verdadeiro');
}

var isBrasileiro = true;
if (isBrasileiro) {
  console.log('É brasileiro');
} else {
  console.log('Não é brasileiro');
}

var titulos;
var isPalmeirense = true;
if (isPalmeirense) {
  var titulos = 11;
}
console.log(titulos);

var possuiDoutorado = false;
var possuiGraduacao = false;
if (possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}

// Falsy = Valores que retorna false em uma expressão
if (false) {
}
if (0) {
}
if (NaN) {
}
if (null) {
}
if (undefined) {
}
if ('') {
}

// Todo o resto é truthy
var x = 1;
if (x) {
  console.log('Valor verdadeiro');
} else {
  console.log('Valor falso');
}

if (true) {
  console.log('1º Expressão booleana verdadeira');
}
if (1) {
  console.log('2º Expressão booleana verdadeira');
}
if (' ') {
  console.log('3º Expressão booleana verdadeira');
}
if ('matheus') {
  console.log('4º Expressão booleana verdadeira');
}
if (-5) {
  console.log('5º Expressão booleana verdadeira');
}
if ({}) {
  console.log('6º Expressão booleana verdadeira');
}

// Operador lógico de negação: !
if (!true) {
}
if (!1) {
}
if (!'') {
}
if (!' ') {
}
if (!undefined) {
}
if (!!null) {
}
if (!!'') {
}
if (!!' ') {
}

var xpto = 200;
if (!!xpto) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// Dica: você pode utilizar o !! para verificar se uma expressão é truthy ou falsy

// Operadores de comparação
var a = 50,
  b = 25,
  c = 100,
  d = 100;
console.log(a > b);
console.log(b > a);
console.log(c > d, d > c);
console.log(b < a);
console.log(c >= d);
console.log(a <= d);

console.log(10 == 10);
console.log(10 == '10');
console.log(10 === 10);
console.log(10 === '10');
console.log(10 != 15);
console.log(10 != '10');
console.log(10 !== '10');

// Operadores lógicos
// operador && (e/AND)
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log('Gato' && 'Cão');
console.log(5 - 5 && 5 + 5);
console.log('Gato' && false);
console.log(5 >= 5 && 3 < 6);
// Se ambos os valores forem true, ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
var condicional = 5 - 5 && 5 + 5;
if (condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
}

// Operador || (ou/OR)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log('Gato' || 'Cão');
console.log(5 - 5 || 5 + 5);
console.log('Gato' || false);
console.log(5 >= 5 || 3 < 6);
// Retorna o primeiro valor true que encontrar
var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

// Switch
var corFavorita = 'Roxo';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o Sol.');
    break;
  case 'Roxo':
    console.log('Olhe para as lavandas.');
    break;
  default:
    console.log('Cor desconhecida.');
}
