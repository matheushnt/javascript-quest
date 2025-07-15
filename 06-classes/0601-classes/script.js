function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.backgroundColor = this.background;

  return buttonElement;
};

const button = new Button('Clique aqui', 'blue');
console.log(button);

class ButtonElement {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }

  element() {
    const btnElement = document.createElement('button');
    btnElement.innerText = this.text;
    btnElement.style.backgroundColor = this.background;
    return btnElement;
  }

  appendTo(target) {
    const targetElement = document.querySelector(target);
    console.log(targetElement);
    targetElement.appendChild(this.element());
  }
}

const btnElement = new ButtonElement('Comprar', '#CDCDCD');
btnElement.appendTo('body');

class Pessoa {
  static nome = 'John Doe';
  static idade = 45;
  static sexo = 'M';

  constructor(dados) {
    this.dados = dados;
  }

  static exibirDados() {
    console.log(`${Pessoa.nome}, ${Pessoa.idade}, ${Pessoa.sexo}`);
  }

  exibirDados() {
    console.log(this.dados);
  }
}

const dados = {
  nome: 'Matheus',
  idade: 20,
  sexo: 'M',
};

const pessoa1 = new Pessoa(dados);
pessoa1.exibirDados();
Pessoa.exibirDados();

class Carro {
  constructor(nome, marca, ano) {
    this.nome = nome;
    this.marca = marca;
    this.ano = ano;
  }

  static newCarro(nome) {
    return new Carro(nome, 'Toyota', 2025);
  }
}

const carro = Carro.newCarro('Corolla');
console.log(carro);
