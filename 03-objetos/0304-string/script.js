const comida = 'Pizza';
const agua = new String('Água');
console.log(comida, agua);

const tamanho = agua.length; // Retorna a quantidade de caracteres
console.log(tamanho);

let frase = 'A melhor comida é Lasanha';
console.log(frase[0], frase[frase.length - 1]); // Retorna o caract. de acordo com o índice. O mesmo acontece abaixo
console.log(frase.charAt(0), frase.charAt(frase.length - 1));

frase = 'A melhor linguagem é ';
let linguagem = 'JavaScript';
const fraseFinal = frase.concat(linguagem); // Concatena uma str com outra str
console.log(fraseFinal);

const fruta = 'Banana';
const frutas = 'Melancia, Banana, Abacaxi';
console.log(frutas.includes(fruta)); // Procura pela str dentro de outra str. A procura é case sensitive
console.log(fruta.includes(frutas));
console.log(frutas.includes(fruta, 10));
console.log(frutas.includes(fruta, 11));

console.log(fruta.startsWith('Ba')); // Verfica se começa com a str passada
console.log(fruta.startsWith('ba'));
console.log(fruta.endsWith('Na')); // Verfica se termina com a str passada
console.log(fruta.endsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';
console.log(transacao1.slice(0, 3)); // Corta a str de acordo com os valores de start e end.
console.log(transacao1.slice(2, 8));
console.log(transacao1.slice(5, 7));
console.log(transacao2.slice(0, -5));
console.log(transacao2.slice(3, -5));
console.log(transacao2.slice(-10));
console.log(transacao3.slice(-2));
console.log(transacao3.slice(8));
console.log(transacao3.slice(5));

linguagem = 'Python';
console.log(linguagem.substring(2, 5)); // Também corta a str de acordo com os valores de start e end
console.log(linguagem.substring(2, 6));
console.log(linguagem.substring(0, linguagem.length));
console.log(linguagem.substring(1, 4));
console.log(linguagem.substring(1));
console.log(linguagem.substring(3));
console.log(linguagem.substring(-1)); // Não funciona tão bem com valores negativos

const animal = 'Arara';
console.log(animal.indexOf('a')); // Retorna o index da str, assim que achar o primeiro resultado ele já retorna o valor
console.log(animal.indexOf('r'));
console.log(animal.indexOf('ra'));
console.log(animal.indexOf('ar'));
console.log(animal.lastIndexOf('a')); // No caso do lastIndexOf ele retorna o último resultado
console.log(animal.lastIndexOf('r'));
console.log(animal.lastIndexOf('ra'));
console.log(animal.lastIndexOf('ar'));

const precos = ['R$ 99', 'R$ 199', 'R$ 12000'];
// Aumenta o tamanho da str para o valor passado. Também pode adicionar um caract. especial para preencher
precos.forEach((preco) => {
  console.log(preco.padStart(10, '-'));
});
precos.forEach((preco) => {
  console.log(preco.padEnd(10, '-'));
});
console.log(precos[0].padStart(12, '=-'));
console.log(precos[2].padEnd(12, '=-'));
