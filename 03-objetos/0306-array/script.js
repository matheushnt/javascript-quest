let instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

console.log(dados[0]);
console.log(dados[1][2].cor);
console.log(dados[2]('Matheus'));

const carros = new Array('Corola', 'Mustang', 'Honda');
console.log(carros);
carros[0] = 'Mitsubishi';
console.log(carros);
carros[3] = 'Nissan';
console.log(carros);
carros[20] = 'Subaru';
console.log(carros);
console.log(carros.length); // Retorna o tamanho do Array

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li); // Transforma em um Array
console.log(li, arrayLi);

// Array-like:
const obj = {
  0: 'Matheus',
  1: 'João',
  2: 'José',
  length: 3,
};

const objArray = Array.from(obj);
console.log(obj);
console.log(objArray);

console.log(Array.isArray(obj)); // Verifica se é um Array
console.log(Array.isArray(objArray));

// A palavra chave new não é necessária para utilizar o construtor Array
const array1 = Array.of(10);
const array2 = Array.of(1, 2, 3, 4);
const array3 = new Array(5); // 5 espaços vazios
const array4 = Array(10); // Também vazios
const array5 = Array(1, 2, 3, 4, 5);
console.log(array1, array2, array3, array4, array5);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

console.log(frutas[0].length);
console.log(frutas[1].length);
console.log(frutas[2].length);
console.log(frutas[2][0].length);

/* Métodos modificadores */
instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); // Organiza pelo Unicode
console.log(instrumentos);

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
console.log(idades);

const marcas = ['Ford', 'Chevrolet', 'Kia'];
marcas.unshift('Honda', 'Hyundai'); // Adiciona no início do array
console.log(marcas);
marcas.push('Renault', 'Volskwagen'); // Além de adicionar ao final do array, também retorna o length
console.log(marcas);

const primeiroElemento = marcas.shift(); // Remove o primeiro elemento da array e retorna o mesmo
const ultimoElemento = marcas.pop(); // Remove o último elemento da array e retorna o mesmo
console.log(primeiroElemento, ultimoElemento);

marcas.reverse();
console.log(marcas);
