function areaQuadrado(lado) {
  return lado ** 2;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4');

console.log(areaQuadrado(5));
console.log(perimetroQuadrado(2));

/* Propriedades */
function somar(a, b) {
  return a + b;
}

console.log(somar.length); // Retorna a qtde de parâmetros
console.log(somar.name); // Retorna o nome da função (str)

/* Métodos */
// call(): executa a função, sendo possível passarmos uma nova referência ao this da mesma
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar('Matheus'));
console.log(cumprimentar.call(null, 'Ricardo'));

function exibirDadosCarro(velocidade) {
  console.log(this);
  console.log(`${this.nome} ${this.ano} ${velocidade}`);
}

exibirDadosCarro();
window.nome = 'Honda';
window.ano = 2020;
exibirDadosCarro('300 Km/h');
exibirDadosCarro.call({ nome: 'Ford', ano: 2025 }, '260 Km/h');

/* this: o valor de this faz referência ao obj criado durante a construção do obj (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call() */
let carros = ['Honda', 'Nissan', 'Toyota'];
const frutas = ['maçã', 'uva', 'abacaxi'];

carros.forEach((item) => console.log(item));

carros.forEach.call(carros, (item) => console.log(`Chamada com call(): ${item}`));

carros.forEach.call(frutas, (item) => console.log(`1º Mudança de referência: ${item}`));

frutas.forEach.call(carros, (item) => console.log(`2º Mudança de referência: ${item}`));

function DOM(seletor) {
  this.elemento = document.querySelector(seletor);
}

DOM.prototype.addClasse = function (classe) {
  console.log(this);
  this.elemento.classList.add(classe);
};

const lista = new DOM('ul');
lista.addClasse('ativo');
console.log(lista);

const li = {
  elemento: document.querySelector('li'),
};

DOM.prototype.addClasse.call(li, 'ativo');

Array.prototype.mostrarThis = function () {
  console.log(this);
};

frutas.mostrarThis();

Array.prototype.pop.call(frutas);
console.log(frutas);

// É muito útil utilizar Array.prototype.algumMetodo.call() em objetos que se parecem com um array (array-like)

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  3: 'Item 4',
  4: 'Item 5',
  length: 5,
};

const elementosLi = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(elementosLi, (item) => {
  return item.classList.contains('ativar');
});

console.log(filtro);

/* apply(): funciona como o call(), a única diferença é que os argumentos da função são passados através de um array */
const numeros = [45, 2345, 5687, 123, 352, 875, 12, 67, 0, 235346, 12331, 432, 355, 2, 232];
console.log(Math.max.call(null, numeros));
console.log(Math.max.apply(null, numeros));

/* Diferente de call() e apply(), não irá executar a função mas sim retornar a mesma com o novo contexto de this */
const params = document.querySelectorAll('p');

const filtragem = Array.prototype.filter.bind(params, (item) => {
  return item.classList.contains('ativar');
});

console.log(filtragem());
const $ = document.querySelectorAll.bind(document, 'p');
console.log($());

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda);
console.log(acelerarHonda(300, 50));

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);
console.log(imc(1.8, 70));
console.log(imc180(70));
