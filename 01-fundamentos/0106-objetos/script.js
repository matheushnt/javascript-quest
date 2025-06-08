/*
Objetos:
Conjunto de variáveis e funções, que são chamadas de propriedades e métodos
*/

var pessoa = {
  nome: 'Matheus',
  idade: 20,
  sexo: 'M',
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.sexo);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado ** 2;
  },
  perimetro() {
    return this.lados ** 2;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(8));
console.log(quadrado.perimetro(4));

// Objetos servem para organizar o código em pequenas partes reutilizáveis

var pi = Math.PI;
var numAleatorio = Math.random();

console.log(pi, numAleatorio);

var carro = {};
var moto = {};

console.log(typeof carro, typeof moto);

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
};

menu.backgroundColor = '#FE0';

var bg = menu.backgroundColor;

console.log(bg);

menu.padding = 8;

console.log(menu.padding);

menu.esconderMenu = function () {
  console.log('Menu escondido');
};

menu.esconderMenu();

// this irá fazer uma referência ao próprio objeto

menu.metadeHeight = function () {
  return this.height / 2;
};

console.log(menu.metadeHeight());

/*
Protótipo e Herança
O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo
*/

var conta = {
  saldo: 800,
};

console.log(conta.hasOwnProperty('saldo'));
console.log(conta.hasOwnProperty('limite'));

// hasOwnProperty é um método de Object

//Exercícios

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;

/*
Crie um objeto de um cachorro que represente um labrador,
preto com 10 anos, que late ao ver um homem
*/
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Au au!';
    }
  },
};

console.log(cachorro.latir('mulher'));
console.log(cachorro.latir('homem'));
