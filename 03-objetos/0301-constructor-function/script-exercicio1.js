// Com a maneira abaixo, não é possível criar objetos reutilizáveis

/*
const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add('ativo');
  },
};
*/

function Dom(seletor) {
  this.seletor = seletor;

  this.element = function () {
    return document.querySelector(this.seletor);
  };

  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}

const ul = new Dom('ul');
ul.element();
ul.ativar();

const ultimoLi = new Dom('li:last-child');
ultimoLi.ativar('ativo');
