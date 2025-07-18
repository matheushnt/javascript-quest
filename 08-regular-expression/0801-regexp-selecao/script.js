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

// Seleciona tudo: caracteres, espaços e pontuações.
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

/* Negar */
regexp = /[^a-z]/g;
console.log('Brasil é com z: Brazil'.replace(regexp, ' '));
