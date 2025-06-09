/*
Array
É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

Acesse um elemento do array utilizando <nome-array>[n] -> n sendo o index do elemento.
*/

var videoGames = ['Switch', 'PS5', 'XBox'];

console.log(videoGames[0]);
console.log(videoGames[2]);

ultimoItem = videoGames.pop();
console.log(ultimoItem);

videoGames.push('PS4');
console.log(videoGames);

console.log(videoGames.length);

/*
Loops é uma estrutura de controle que permite repetir um bloco de código um número específico de vezes, com base em uma condição.
É uma ferramenta essencial para iterar sobre arrays, objetos ou executar tarefas repetidas de forma controlada.
*/

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// Possui três partes: início, condição e incremento

var c = 0;
while (c < 10) {
  console.log(c);
  c++;
}
// For loop é mais comumente utilizado

// Acessando itens de um array com loops
var frutas = ['maçã', 'uva', 'banana', 'laranja', 'abacaxi', 'ameixa'];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

var carros = [
  'corolla',
  'onix',
  'hb20',
  'hilux',
  '208',
  'kwid',
  'civic',
  'city',
];

// Instrução break interrompe o laço, impedindo as próximas iterações
for (var i = 0; i < carros.length; i++) {
  if (carros[i] === '208') {
    break;
  }
  console.log(carros[i]);
}

/*
forEach
forEach é método que executa uma função para cada item do Array.
É uma forma simples de utilizarmos um loop com arrays (ou array-like)
*/
var nomes = ['John', 'João', 'Marcus', 'Joaquim', 'Mário', 'Robson'];

nomes.forEach(function (item, index) {
  console.log(`${index} - Olá, meu nome é ${item}`);
});

// forma alternativa de escrever o for loop
var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
// Não é muito aconselhável escrever dessa forma

/*
Exercícios
Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002
Interaja com a array utilizando um loop, para mostrar
no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
*/
var titulosCopaDoMundoBrasil = [1959, 1962, 1970, 1994, 2002];
for (var i = 0; i < titulosCopaDoMundoBrasil.length; i++) {
  console.log(`O Brasil ganhou a Copa de ${titulosCopaDoMundoBrasil[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutasArr = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (var i = 0; i < frutasArr.length; i++) {
  console.log(frutasArr[i]);
  if (frutasArr[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimoItem = frutasArr[frutasArr.length - 1];
console.log(ultimoItem);
