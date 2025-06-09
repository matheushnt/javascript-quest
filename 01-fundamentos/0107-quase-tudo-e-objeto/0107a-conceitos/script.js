/*
O que é um objeto no JS?
Em JavaScript, objeto é uma estrutura que armazena
pares chave-valor (propriedades e métodos).
*/

var pessoa = {
  nome: 'Matheus',
  falar() {
    console.log('Olá!');
  },
};

/*
Tipos que não são objetos: string, number, boolean, null, undefined, symbol, bigint
Tipos que são objetos: Object, Array, Function, Date, RegExp, etc.
*/

var nome = 'Matheus';
console.log(nome.toUpperCase());

/*
O JavaScript automaticamente converte o valor primitivo temporariamente em um objeto wrapper da classe String.

Por baixo dos panos:
*/
var nome = new String('Matheus').toUpperCase();

/*
Esse processo é chamado de Boxing. Funciona igual para Number, Boolean, etc.

Quase tudo = porque alguns tipos não são objetos de jeito nenhum: null e undefined e primitivos (mas possuem Boxing)
*/

var n = 42;
n.nome = 'Matheus';
console.log(n.nome); // undefined
