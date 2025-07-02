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

/* Object.assign(): adiciona ao alvo as props e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo */

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
Object.defineProperties() adiciona ao alvo novas props. A diferença aqui é a
possibilidade de serem definidas as características dessas props
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

/*
Object.getOwnPropertyDescriptors(): lista todos os métodos e props de um objeto, com as suas devidas configurações
*/
console.log(Object.getOwnPropertyDescriptors(Array));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));
console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight')); // Verifica apenas uma propriedade do obj

const contaBancaria = {
  numConta: '1066117-4',
  agencia: '0532',
  banco: 'Banco do Brasil',
};

/* Object.keys(): retorna uma array com as chaves de todas as props diretas e enumeráveis do objeto */
console.log(Object.keys(contaBancaria));
console.log(Object.keys(Array)); // As props não são enumeráveis

/* Object.values(): retorna uma array com os valores do objeto */
console.log(Object.values(contaBancaria));
console.log(Object.values(Array)); // As props não são enumeráveis, consequentemente os valores não são acessíveis

/* Object.entries(): retorna uma array com array's contendo a chave e o valor */
console.log(Object.entries(contaBancaria));
console.log(Object.entries(Object));

/* Object.getOwnPropertyNames(): Retorna um array com todas as props diretas do objeto (não retorna as do protótipo) */
console.log(Object.getOwnPropertyNames(contaBancaria));
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));

/* Object.getPrototypeOf(): retorna o protótipo do objeto */
console.log(Object.getPrototypeOf(contaBancaria));
console.log(Object.getPrototypeOf(Array));
console.log(Object.getPrototypeOf(''));

/* Object.is(): verifica se os objetos são iguais e retorna true ou false */
const fruta1 = ['banana', 'uva'];
const fruta2 = ['banana', 'uva'];
const fruta3 = fruta2;
console.log(Object.is(fruta1, fruta2));
console.log(Object.is(fruta2, fruta3));

const produto = {
  nome: 'Mesa de Escritório',
  preco: 599.99,
  estoque: 75,
};

/* Object.freeze(): impede qualquer mudança nas props */
Object.freeze(produto);
produto.preco = 799.99;
produto.avaliacoes = '4,5 estrelas';
console.log(produto);

/* Object.seal() previne a adição de novas props e impede que as atuais sejam deletadas */
Object.seal(produto);
produto.categoria = 'móveis';
produto.nome = 'Máquina de Lavar';
delete produto.nome;
console.log(produto);

/* Object.preventExtensions() previne a adição de novas props, porém permite deletar as existentes */
Object.preventExtensions(produto);
produto.dimensoes = ['200cm', '80cm'];
delete produto.nome;
console.log(produto);

console.log(Object.isFrozen(produto));
console.log(Object.isSealed(produto));
console.log(Object.isExtensible(produto));

/* Prop constructor: retorna a função construtora */
console.log(''.constructor);
console.log(Number(2).constructor);
console.log(true.constructor);
console.log([].constructor);
console.log({}.constructor);

/* hasOwnProperty(): verifica se existe ou não a prop no obj */
console.log(Array.hasOwnProperty('map'));
console.log(Array.prototype.hasOwnProperty('map'));

/* propertyIsEnumerable(): verifica se a prop é enumerável */
console.log(Array.prototype.propertyIsEnumerable('map'));
console.log(window.propertyIsEnumerable('innerHeight'));

/* isPrototypeOf(): verifica se é o protótipo do valor passado */
console.log(Array.prototype.isPrototypeOf([1, 2, 3, 4, 5]));
console.log(String.prototype.isPrototypeOf('Matheus')); // É uma str primitiva
console.log(String.prototype.isPrototypeOf(new String('Matheus'))); // É uma str criada por obj String

/* typeof não é a melhor maneira de descobrir o tipo do objeto */
const nome = 'Matheus';
const idade = 20;
const dados = ['Matheus', 20];
const dadosCompletos = {
  nome,
  idade,
  sexo: 'M',
};
const exibirDados = function () {
  return dadosCompletos;
};

console.log(nome.toString());
console.log(idade.toString());
console.log(dados.toString());
console.log(dadosCompletos.toString());
console.log(exibirDados.toString());

console.log(typeof dados);
console.log(Object.prototype.toString.call(dados));

console.log(typeof dadosCompletos);
console.log(Object.prototype.toString.call(dadosCompletos));

console.log(typeof idade);
console.log(Object.prototype.toString.call(idade));

console.log(typeof nome);
console.log(Object.prototype.toString.call(nome));

console.log(typeof exibirDados);
console.log(Object.prototype.toString.call(exibirDados));
