/*
Transforme o objeto abaixo em uma Constructor Function

const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  },
};
*/
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function () {
    console.log(`${this.nome} andou`);
  };
}

const pessoa1 = new Pessoa('Joaquim', 20);
pessoa1.andar();

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa2 = new Pessoa('João', 20);
const pessoa3 = new Pessoa('Maria', 25);
const pessoa4 = new Pessoa('Bruno', 15);

/*
Crie uma Constructor Function (Dom) para manipulação
de listas de elementos do dom. Deve conter as seguintes
propriedades e métodos:
 - elements, retorna NodeList com os elementos selecionados
 - addClass(classe), adiciona a classe a todos os elementos
 - removeClass(classe), remove a classe a todos os elementos
*/
function DOM(elemento) {
  this.element = elemento;
  this.elements = document.querySelectorAll(this.element);

  this.addClass = function (classe) {
    this.elements.forEach((item) => {
      item.classList.add(classe);
    });
  };

  this.removeClass = function (classe) {
    this.elements.forEach((item) => {
      item.classList.remove(classe);
    });
  };
}

const lista = new DOM('li');
console.log(lista.element);
console.log(lista.elements);
lista.addClass('ativo');
lista.removeClass('ativo');

const elementUl = new DOM('ul');
console.log(elementUl.element);
console.log(elementUl.elements);
