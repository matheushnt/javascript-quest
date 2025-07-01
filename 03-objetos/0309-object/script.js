const pessoa = new Object({
  nome: 'Matheus',
  idade: 20,
});

console.log(pessoa);

const carro = {
  init: function (marca, nome, ano) {
    this.marca = marca;
    this.nome = nome;
    this.ano = ano;
  },
  rodas: 4,
  acelerar: function () {
    return `${this.marca} acelerou. VRUM VRUM VRUM!!!`;
  },
  buzinar: function () {
    return `${this.marca} buzinou. BI BI!!!`;
  },
};

const toyota = Object.create(carro);
console.log(toyota);
toyota.marca = 'Toyota';
toyota.nome = 'Corolla';
toyota.ano = 2025;
console.log(toyota);

const ferrari = Object.create(carro);
ferrari.init('Ferrari', 'Purosangue', 2025);
console.log(ferrari);

/* Object.assign(): adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo */

const funcoesAutomovel = {
  acelerar: function () {
    return 'acelerou. VRRUUUMMM!!!';
  },
  frear: function () {
    return 'freiou. SCREEECH!!!';
  },
  buzinar: function () {
    return 'buzinou. BIIII!!!!';
  },
};

const motoKawasaki = {
  rodas: 2,
  capacete: true,
};

const carroPorsche = {
  rodas: 4,
  portaMalas: true,
};

Object.assign(motoKawasaki, funcoesAutomovel);
Object.assign(carroPorsche, funcoesAutomovel, carro);
console.log(motoKawasaki, carroPorsche);

/*
Object.defineProperties() adiciona ao alvo novas propriedades. A diferença aqui é a
possibilidade de serem definidas as características dessas propriedades
*/
const bike = {};
Object.defineProperties(bike, {
  rodas: {
    value: 2,
    configurable: false, // Não pode ser deleteda ou modifcada
    writable: true, // Pode ser modificada
    enumerable: false, // Não será enumerada em loops
  },
});

console.log(bike);
delete bike.rodas;
console.log(bike);

bike.rodas = 4;
console.log(bike);

const caminhao = {
  rodas: 6,
};
Object.defineProperties(caminhao, {
  rodas: {
    get: function () {
      return this._rodas;
    },
    set: function (value) {
      this._rodas = value;
    },
  },
});

console.log(caminhao);
caminhao.rodas = 8;
