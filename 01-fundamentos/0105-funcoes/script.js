// Function declaration

function imprimirMensagem() {
  console.log('Olá, Mundo!');
}

imprimirMensagem();

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(7));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);
console.log(pi);

/*
Parâmetros e Argumentos
Ao criar uma função, você pode definir parâmetro.
Ao executar uma função, você pode passar argumentos.
*/

function calcularIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(calcularIMC(77, 1.68));
console.log(calcularIMC(110, 1.95));
console.log(calcularIMC(55, 1.6));

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Você gosta do mar';
  } else if (cor === 'verde') {
    return 'Você gosta de plantas';
  } else {
    return 'Você não tem cor favorita';
  }
}

console.log(corFavorita('azul'));
console.log(corFavorita('verde'));
console.log(corFavorita());

/*
Argumentos podem ser funções
Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
*/

addEventListener('click', function () {
  console.log('Olá, programador!!!');
});

/*
Funções anônimas são aquelas em que o nome da função não é definido, escritas como function () {} ou () => {}.
*/

/*
Quando não é definido o return, ela irá retornar undefined.
*/

function somar(x, y) {
  console.log(x + y);
}

somar(10, 25);
console.log(somar(7, 3));

/*
Valores retornados
Um função pode retornar qualquer tipo de dado e até outras funções.
*/

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Preencha um número';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(90));
console.log(terceiraIdade(25));
console.log(terceiraIdade('18'));

// Não é uma boa prática uma função retornar valores de diferentes tipos

/*
Escopo
Variáveis e funções definidas dentro de um bloco {}
não são visíveis fora dele.
*/

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(12));
console.log(totalPaises);

/*
Escopo léxico
Funções conseguem acessar variáveis que foram criadas no contexto pai
*/

var faculdade = 'ADS';
function exibirDados() {
  var nome = 'Matheus';
  var idade = 28;
  function exibirMaisDados() {
    var endereco = 'Fortaleza, CE';
    idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${faculdade}`;
  }
  return exibirMaisDados();
}

console.log(exibirDados());

/*
Hoisting
Antes de executar uma função, o JS "move" todas
as funções declaradas para a memória
*/

multiplicar(5, 10);

function multiplicar(x, y) {
  const multi = x * y;
  console.log(multi);
}

// Exercícios
// 1º Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}

console.log(isTruthy(10));
console.log(isTruthy(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
function calcularPerimetro(valorLado) {
  return `O Quadrado possui ${valorLado * 4}cm de Perímetro`;
}

console.log(calcularPerimetro(6));
console.log(calcularPerimetro(3));

// Crie uma função que retorne o seu nome completo
function exibirNomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(exibirNomeCompleto('Matheus', 'Nunes'));

// Crie uma função que verifica se um número é par
function isPar(num) {
  if (num % 2 === 0) {
    return `${num} é par`;
  } else {
    return `${num} é ímpar`;
  }
}

console.log(isPar(4));
console.log(isPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDoValor(valor) {
  const tipoValor = typeof valor;
  return tipoValor;
}

console.log(tipoDoValor(10));
console.log(tipoDoValor('abc'));
console.log(tipoDoValor(true));
console.log(tipoDoValor(function () {}));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  console.log('Matheus Henrique');
});
