let regexp = /\w+/gi;
regexp = new RegExp('\\w+', 'gi');

let frase = 'JavaScript nasceu na Web em 1995';
console.log(frase.replace(regexp, 'X'));

/* Propriedades */
console.log(regexp.flags, regexp.global, regexp.ignoreCase, regexp.multiline, regexp.source);

/* Métodos */
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

const regexpComG = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const resultado1 = frase.match(regexpComG);
const resultado2 = frase.match(regexpSemG);

console.log(resultado1, resultado2);

console.log(frase.split(', '));
console.log(frase.split(/Script/g));

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;
const regexpTags = /(?<=<\/?)\w+/g;

console.log(tags.split(regexpTags).join('div'));
console.log(tags.replace(regexpTags, 'div'));
console.log(tags.replace(/<li/g, '$& class="ativo"'));

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexpEmail = /(\w+@)([\w.]+)/g;
console.log(emails.replace(regexpEmail, '$1gmail.com'));

const emailResult = emails.replace(regexpEmail, (...args) => {
  console.log(args);
  return '$1hotmail.com';
});

const emailUsuarios = `
joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
matheus@email.com`;

// OBS: CÓDIGO NADA OTIMIZADO, COM OBJETIVO DE SER PURAMENTE DEMONSTRATIVO
const emailUsuariosResult = emailUsuarios.replace(regexpEmail, (...args) => {
  console.log(args);

  if (args[2] === 'homail.com.br') {
    return args[1] + 'hotmail.com.br';
  } else if (args[2] === 'ggmail.com.br') {
    return args[1] + 'gmail.com.br';
  } else if (args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br';
  } else {
    return args[0];
  }
});

console.log(emailUsuariosResult);
