const carro = {
  nome: 'Corolla',
  marca: 'Toyota',
  ano: 2025,
};

const { nome, marca, ano } = carro;

console.log(nome, marca, ano);

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML'],
    },
    fisicas: {
      cadernos: ['Caderno 1'],
    },
  },
};

// const { livros, videos } = cliente.compras.digitais;

const {
  digitais,
  fisicas,
  digitais: { livros, videos },
} = cliente.compras;

console.log(digitais, fisicas, livros, videos);

const pessoa = {
  nome: 'Matheus',
  idade: 20,
  email: 'matheus@email.com',
};

const { nome: nomePessoa, idade: idadePessoa, email = 'email@gmail.com' } = pessoa;
// OBS: caso a prop não exista no obj., é possível adicionar um valor padrão

console.log(nomePessoa, email);

// Arrays
const frutas = ['banana', 'maçã', 'uva'];

const [primeira, segunda, terceira, quarta = 'abacaxi'] = frutas;

console.log(primeira, segunda, terceira, quarta);

const [primeiroItem, segundoItem, terceiroItem] = ['Item 1', 'Item 2', 'Item 3'];

// O código acima é o mesmo que o código abaixo
/*
const primeiroItemo = 'Item 1';
const segundoItem = 'Item 2';
const terceiroItem = 'Item 3';
*/

// Destructuring em parâmetros de funções
function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

window.addEventListener('keypress', handleKeyboard);
