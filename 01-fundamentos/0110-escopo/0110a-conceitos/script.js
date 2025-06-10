// 'use strict';

/*
Escopo de Função
Variáveis declaradas dentro de funções não podem ser acessadas fora das mesmas.
*/

function mostrarCarro() {
  var carro = 'jetta';
  console.log(carro);
}

mostrarCarro();
// console.log(carro); // erro, is not defined
// Escopo evita conflito entre nomes

/*
Variáveis Globais (ERRO)
Declarar variáveis sm a palavra-chave const, let ou var, cria uma variável que pode ser
acessada em qualquer escopo (global). Isso é um erro.
*/

function exibirMensagem() {
  msg = 'Olá, Mundo!';
  console.log(msg);
}

exibirMensagem();
console.log(msg);
// 'user strict' impede isso

/*
Escopo de Função (Pai)
Variáveis declaradas no escopo pai da função, conseguem ser acessadas pela
*/

var nome = 'Emanuel';

function mostrarNome() {
  var frase = `Meu nome é ${nome}`;
  console.log(frase);
}

mostrarNome();
console.log(nome);

/*
Escopo de Bloco
Variáveis criadas com var, vazam o bloco. Por isso a introdução do ES6,
a melhor forma de declararmos uma variável é utilizando const ou let,
pois elas respeitam o escopo de bloco.
*/

if (true) {
  var brinquedo = 'Pista da HotWheels';
  console.log(brinquedo);
}

console.log(brinquedo);

// Var vaza mesmo quando a condição é falsa
if (false) {
  var fruta = 'banana';
  console.log(fruta);
}

console.log(fruta); // undefined

// Com const
if (true) {
  const moto = 'CG 150';
  console.log(moto);
}

// console.log(moto); erro: is not defined

{
  var cachorro = 'Laika';
  let gato = 'Puma';
}

console.log(cachorro);
// console.log(gato); erro: is not defined

// For com let
var i = 50;
for (let i = 0; i < 10; i++) {
  console.log(`Num: ${i}`);
}

console.log(i * 10);
