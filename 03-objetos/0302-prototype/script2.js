const pais = 'Brasil';
const cidade = new String('Fortaleza');

console.log(typeof pais);
console.log(typeof pais.__proto__);
console.log(typeof cidade);

console.log(pais.charAt(0));
console.log(cidade.charAt(0));

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo', 'Papagaio', 'Jabuti'];
console.log(listaAnimais);

const listaItens = document.querySelectorAll('li');
console.log(listaItens);

const listaItens1 = Array.prototype.slice.call(listaItens);
const listaItens2 = Array.from(listaItens);

console.log(Object.getOwnPropertyNames(Array));

const carro = {
  marca: 'Ford',
  ano: 2025,
  dirigir: function () {
    return true;
  },
};
