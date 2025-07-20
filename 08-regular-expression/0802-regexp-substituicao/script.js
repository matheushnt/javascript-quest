/* Referência da Seleção: com $& durante o momento da substituição, podemos fazer uma referência à seleção */
let regexp = /Java/g;
console.log('PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script'));

/*
Grupo de Captura
É possível definirmos diferentes grupos de captura, que poderão ser
referenciados durante a substituição. Basta envolvermos um grupo entre ()
parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.
*/
regexp = /(\w+)@[\w.]+/g;
console.log('matheus@email.com.br'.replace(regexp, '$1@gmail.com'));

/* Mais de um Grupo: é possível definir quantos grupos de captura quisermos */
regexp = /(\w+),\s(\w+)/g;
console.log(
  `
  Henrique, Matheus
  Ferreira, Marcus
  Silva, Daniel
  Pereira, Jonas
  `.replace(regexp, '$2 $1'),
);

/*
Mais do que Apenas Captura
Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição
*/
regexp = /(ta)+/gi;
console.log('Tatata, tata, ta'.replace(regexp, 'Pá'));
// Ignorar Captura: procura qualquer sequência de ta
regexp = /(?:ta)+/gi;
console.log('Tatata, tata, ta'.replace(regexp, 'Pá'));

/*
Positive Lookahead
Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente.
Apesar de utilizar () parênteses o positive lookahead não captura grupo
*/
regexp = /\d(?=px)/g;
console.log('2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X'));

/*
Negative Lookahead
Faz a seleção dos itens não possuírem o padrão dentro de (?!) à sua frente.
*/
regexp = /\d(?!px)/g;
console.log('2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X'));
