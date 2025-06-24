function teste() {
  return 1 + 1;
}

console.log(typeof teste.prototype);

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.abracar = function () {
    return this.nome + ' abraçou';
  };
}

console.log(Pessoa.prototype);

Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
};
Pessoa.prototype.nadar = function () {
  return this.nome + ' nadou';
};

const pessoa1 = new Pessoa('Matheus', 20);

console.log(Pessoa.prototype);
console.log(pessoa1);
console.log(pessoa1.abracar());
console.log(pessoa1.nadar());
console.log(Pessoa.prototype);
console.log(pessoa1.__proto__.nadar());
