/* Literal: faz uma busca pelo caractere */
let palavra = 'JavaScript';
let regexp = /J/;
let novaPalavra = palavra.replace(regexp, 'B');
console.log(novaPalavra);

regexp = /Java/; // Procura: "J" seguido de "a", "v" e "a"
novaPalavra = palavra.replace(regexp, 'Type');
console.log(novaPalavra);

// Flag g: procura todas as ocorrências do caractere
regexp = /a/g;
novaPalavra = palavra.replace(regexp, 'i');
console.log(novaPalavra);

// Flag i (insensitive): procura todo "PE", "Pe", "pE" e "pe"
regexp = /Pe/gi;
let palavras = 'Perdeu perdido PERDIDAMENTE';
const novasPalavras = palavras.replace(regexp, 'Ba');
console.log(novasPalavras);

/* Character Class: procura por um ou outro caractere */
regexp = /[ai]/gi;
let frase = 'Um dia, Pipo decidiu sair da casinha e se aventurar pela floresta.';
console.log(frase.replace(regexp, 'u'));

// Seleciona tudo: caracteres, espaços e pontuações
regexp = /./gi;
// Seleciona apenas pontos (.)
regexp = /\./gi; // ou /[.]/gi;

// Um ou outro
regexp = /Bra[sz]il/g;
console.log('Brasil é com z: Brazil'.replace(regexp, 'Prazer'));

// Busca por itens de a à z
regexp = /[a-z]/g;
console.log('JavaScript é a linguagem.'.replace(regexp, '0'));

// Busca por itens de a à z e A à Z
regexp = /[a-zA-Z]/g;
console.log('JavaScript é a linguagem.'.replace(regexp, '1'));

// Busca por números de 0 à 9
regexpNumero = /[0-9]/g;
console.log('123.333.333-33'.replace(regexpNumero, 'X'));

/* Negar: nega caracteres, ou seja, selecione tudo exceto esse caractere */
regexp = /[^a-z]/g;
console.log('Brasil é com z: Brazil'.replace(regexp, ' '));

/* Ponto: . seleciona qualquer caractere, menos quebras de linha.*/
regexp = /./g;
console.log('JavaScript é a linguagem do momento.'.replace(regexp, '0'));

/*
OBS: Caracteres especiais podem ser escapados usando \, assim este não terá mais a sua função especial e será tratado como literal. São caracteres especiais: +*?^$\.[]{}()|/
*/

regexp = /\./g;
console.log('999.222.222.11'.replace(regexp, '-'));

/* Word: O \w seleciona qualquer caractere alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_] */
regexp = /\w/g;
console.log('Guarda-chuva $R 23,00.'.replace(regexp, '-'));

/* Not Word: O \W seleciona tudo o que não for caractere alfanumérico e o underline. É a mesma coisa que [^A-Za-z0-9_]. */
regexp = /\W/g;
console.log('Guarda-chuva R$ 23,00.'.replace(regexp, '-'));

/* Digit: O \d seleciona qualquer dígito. É a mesma coisa que [0-9] */
regexp = /\d/g;
console.log('+55 (85) 4002-8922'.replace(regexp, 'X'));

/* Not Digit: O \D seleciona tudo o que não for dígito. É a mesma coisa que [^0-9] */
regexp = /\D/g;
console.log('+55 (85) 4002-8922'.replace(regexp, ''));

/* Whitespace: O \s seleciona qualquere espaço em branco, isso inclui espaços, tabs, quebra de linhas */
regexp = /\s/g;
console.log('+55 (8   5) 40 02-8   92 2'.replace(regexp, ''));

/* Not Whitespace: O \S seleciona qualquer caractere que não for espaço em branco */
regexp = /\S/g;
console.log('+55 (21) 2222-  2222  '.replace(regexp, 'x'));
// OBS: /[\s\S]/g irá selecionar tudo

/*
Quantificador: É possível selecionar caracteres seguidos, como /bbb/g seleciona
apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora,
está fazendo uma seleção completa e não caractere por caractere
*/
regexp = /aaaa/g;
let regexpAlt = /a{4}/g;
console.log('Vaaaai ali por favor.'.replace(regexp, 'a'));

/*
Quantificador Min e Max: Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando
aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir
duas ou mais vezes.
*/
// Procura dígitos seguidos de 2 à 3
regexp = /\d{2,3}/g;
console.log('222.333.222.42'.replace(regexp, 'X'));

// Procura: letras seguidos com 1 caracter ou mais
const regexpLetras = /\w{1,}/g;
console.log('A melhor linguagem é JavaScript'.replace(regexpLetras, 'X'));

/* Mais (+): O sinal de + significa que será selecionado quando existir pelo menos uma ou mais ocorrências */
// Procura dígitos em ocorrência de um ou mais
regexp = /\d+/g;
console.log('222.333.222.42'.replace(regexp, 'X'));

// Começa d seguido por uma ou mais letras
regexp = /d\w+/g;
console.log('Dígitos, dados, desenhos, Dito, d'.replace(regexp, 'X'));

/* Asterisco (*): O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências */
// Começa com d, seguido por zero ou mais letras
regexp = /d\w*/g;
console.log('Dígitos, dados, desenhos, Dito, d'.replace(regexp, 'X'));

/* Opcional (?): O sinal ? significa que o caracter é opcional, pode ou não existir */
regexp = /regexp?/g;
console.log('Qual é o certo, regexp ou regex?'.replace(regexp, 'Regular Expression'));

/* Alternado (|): O sinal | irá selecionar um ou outro */
regexp = /java|php/gi;
console.log('PHP e Java são linguagens diferentes'.replace(regexp, 'X'));

/* Word Boundary \b: O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w */
// Procura java (case insensitive)
regexp = /java/gi;
console.log('Java não é JavaScript.'.replace(regexp, 'X'));

// Procura java (case insensitive)
const regexpBoundary = /\bjava\b/gi;
console.log('Java não é JavaScript.'.replace(regexpBoundary, 'X'));

// Procura dígitos em sequência, que estejam isolados
let regexpDigito = /\b\d+\b/gi;
console.log('O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X'));
console.log('11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'));

/* Not Word Boundary \B: É o contrário do \b */
regexpDigito = /\B\d+\B/gi;
console.log('11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'));

/* Anchor Beginning (^): a busca deve começar no início da linha */
regexp = /^\w+/g;
console.log('andre@origamid.com'.replace(regexp, 'X'));
console.log('contato@origamid.com'.replace(regexp, 'X'));
console.log('Rua Malote Katropa'.replace(regexp, 'X'));

/* Anchor End: a busca deve iniciar no final da linha */
regexp = /\w+$/gm;
console.log(
  `andre@origamid.com
  contato@origamid.com
  Rua Castelo da Realeza`.replace(regexp, 'X'),
);
// Flag m: multiline

/* Line Feed: seleciona o final da linha, quando criamos uma nova */
regexp = /\n/g;
console.log(`andre@origamid.com\ncontato@origamid.com`.replace(regexp, '---'));
console.log(
  `andre@origamid.com
contato@origamid.com`.replace(regexp, 'X'),
);

/* Unicode: seleciona o caractere unicode, de acordo com o código passado em \uXXXX */
regexp = /\u0040|\u00A9/g;
console.log('andre@origamid.com ©'.replace(regexp, '---'));
