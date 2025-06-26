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

frase = 'vrum ';
console.log(frase.repeat(3)); // Repete a str n vezes

let itens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
itens = itens.replace('Bermudas', 'Casacos'); // Troca parte da str por outra.
console.log(itens);
itens = itens.replace(/[ ]+/g, ', '); // Podemos utilizar uma regular expression ou um valor direto
console.log(itens);

let marcaCarros = 'Honda Nissan Mitsubishi Subaru Toyota Mazda';
marcaCarros = marcaCarros.split(' '); // Divide a str de acordo com o padrão passado e retorna uma array.
console.log(marcaCarros);

let pecaRoupas = 'Camisas Bonés Calças Bermudas Vestidos Saias';
pecaRoupas = pecaRoupas.split('s ');
console.log(pecaRoupas);

let marcaSapatos = 'Nike Adidas Puma Fila Asics';
marcaSapatos = marcaSapatos.split('P');
console.log(marcaSapatos);

let nomes = 'João Caio André Josias Joaquim';
nomes = nomes.split('');
console.log(nomes);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
console.log(htmlArray);
console.log(htmlNovo);

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';
console.log(sexo1.toLowerCase() == 'feminino'); // Retorna a str em letras maiúsculas
console.log(sexo2.toLowerCase() === 'feminino');
console.log(sexo3.toLowerCase() === 'feminino');
console.log(sexo1.toUpperCase() === 'FEMININO'); // Retorna a str em letras minúsculas
console.log(sexo2.toUpperCase() === 'FEMININO');
console.log(sexo3.toUpperCase() === 'FEMININO');
// OBS: Bom para verificarmos input de usuários

const valor = '  R$ 23.00   ';
console.log(valor.trim()); // Remove espaço em branco do início e final de uma str
console.log(valor.trimStart()); // Apenas do início
console.log(valor.trimEnd()); // Apenas do final
