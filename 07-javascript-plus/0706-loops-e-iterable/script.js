// Iterable é um objeto que possui o método [Symbol.iterator]
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/').then(({ headers }) => console.log(headers));

// Loop for...of
for (const fruta of frutas) {
  console.log(fruta);
}

for (const char of frase) {
  console.log(char);
}

const buttons = document.querySelectorAll('button');
for (btn of buttons) {
  btn.style.color = 'blue';
}

console.log(...buttons);
// OBS: for...of funciona apenas em objetos iteráveis

// Loop for...in: retorna a chave de todas as props enumeradas (exceto símbolos) de um objeto
const carro = {
  nome: 'Corolla',
  marca: 'Toyota',
  ano: 2025,
};

Object.defineProperty(carro, 'rodas', {
  value: 'Liga leve',
  enumerable: false,
});

for (key in carro) {
  console.log(`${key}: ${carro[key]}`);
}

const pessoas = ['Matheus', 'José', 'Renato', 'Augusto', 'Ricardo'];
for (const i in pessoas) {
  console.log(`${i}: ${pessoas[i]}`);
}

const button = document.querySelector('button');
const buttonStyle = getComputedStyle(button);

for (const style of buttonStyle) {
  console.log(style);
}

for (const style in buttonStyle) {
  console.log(`${style}: ${buttonStyle[style]}`);
}

// Loop do...while
let i = 0;
do {
  console.log(i++);
} while (i <= 20);
