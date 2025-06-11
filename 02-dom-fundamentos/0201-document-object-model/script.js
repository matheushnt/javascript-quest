/*
Document Object Model (Modelo de Objeto de Documento)
É uma interface que representa documentos HTML e XML através de objetos,
permitindo a manipulação e a navegação dos elementos do documento.
*/

// window é o objeto global do browser. Possui diferentes propriedades e métodos
console.log(window);

console.log(window.innerHeight);
console.log(window.innerWidth);

window.alert('Olá, Mundo!');
window.confirm('Estou interagindo com o DOM');
window.prompt('Qual é o seu nome?');

const href = window.location.href;
const link = 'http://127.0.0.1:5500/02-dom-fundamentos/0201-document-object-model/';
if (href === link) {
  console.log('Estamos na home');
} else {
  console.log('Estamos em outra página');
}

// Objetos principais: window e document
alert('Olá novamente, Mundo!');
const tituloPrincipal = document.querySelector('h1');
console.log(tituloPrincipal);

/*
Node
Toda tag HTML é representada por um objeto, e esse objeto herda de Element, o objeto Node (Pai, ou principal)
*/

console.log(tituloPrincipal.innerText);

const h1Classes = tituloPrincipal.classList;
console.log(h1Classes);

console.log(tituloPrincipal.offsetHeight);

tituloPrincipal.addEventListener('click', function () {
  console.log(`Clicou em ${tituloPrincipal}`);
});

// Pequeno exercício: Como encontrar a linguagem do Navegador
console.log(navigator.language);
