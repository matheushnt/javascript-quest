let regexp = /\w+/gi;
regexp = new RegExp('\\w+', 'gi');

let frase = 'JavaScript nasceu na Web em 1995';
console.log(frase.replace(regexp, 'X'));

// Propriedades
console.log(regexp.flags, regexp.global, regexp.ignoreCase, regexp.multiline, regexp.source);

// Métodos
regexp = /Java/gi;
frase = `Java e JavaScript são linguagens diferentes. Java possui tipagem forte
e estática, enquanto JavaScript possui tipagem fraca e dinâmica`;

console.log(regexp.lastIndex);
regexp.test(frase);
console.log(regexp.lastIndex);
regexp.test(frase);
console.log(regexp.lastIndex);
regexp.test(frase);
console.log(regexp.lastIndex);
regexp.test(frase);
console.log(regexp.lastIndex);
regexp.test(frase);
console.log(regexp.lastIndex);

// Com loop é mais elegante
let c = 1;
while (regexp.test(frase)) {
  console.log(`Match: ${c}, Índice: ${regexp.lastIndex}`);
  c++;
}

regexp = /Script/gi;
frase = 'JavaScript, Go, TypeScript, Python, CoffeeScript, Java';

console.log(regexp.exec(frase));
console.log(regexp.exec(frase));
console.log(regexp.exec(frase));
console.log(regexp.exec(frase));

let regexpResult;
while ((regexpResult = regexp.exec(frase)) !== null) {
  console.log(regexpResult[0]);
}
