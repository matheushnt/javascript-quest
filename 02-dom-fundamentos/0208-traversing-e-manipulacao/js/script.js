const animaisDescricao = document.querySelector('.animais-descricao');
console.log(animaisDescricao.innerText); // Texto, sem tags
console.log(animaisDescricao.innerHTML); // HTML interno
console.log(animaisDescricao.outerHTML); // Todo o HTML do elemento

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
h1.innerText = '<p>Novo texto</p>'; // A tag vai como texto
h2.innerHTML = '<p>Novo texto</p>'; // A tag é renderizada

// Navegar pelo DOM
const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista.parentElement); // Retorna o pai
console.log(animaisLista.parentElement.parentElement); // Retorna o pai do pai
console.log(animaisLista.previousElementSibling); // Retorna o elemento anterior
console.log(animaisLista.nextElementSibling); // Retorna o próximo elemento

console.log(animaisLista.children); // HTMLCollection com os filhos
console.log(animaisLista.children[0]);
console.log(animaisLista.children[animaisLista.children.length - 1]);

const primeiroLi = animaisLista.querySelector('li');
const ultimoLi = animaisLista.querySelector('li:last-child');
console.log(primeiroLi, ultimoLi);

console.log(animaisLista.childNodes);
console.log(animaisLista.firstChild);
console.log(animaisLista.lastChild);

console.log(animaisLista.previousSibling);
console.log(animaisLista.nextSibling);

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
contato.appendChild(animaisLista); // Move lista para o final de contato
contato.insertBefore(animaisLista, titulo); // Insere a lista antes do título
contato.removeChild(animaisLista); // Remove título de contato
contato.replaceChild(animaisLista, titulo); // Substitui título po lista

const animais = document.querySelector('.animais');
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título Criado';
novoH1.classList.add('titulo');
animais.appendChild(novoH1);

/*
const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
-> titulo, titulo2 e novoTitulo são iguais, aponta para o mesmo elemento
*/

const faq = document.querySelector('.faq');
const cloneH1 = h1.cloneNode(true); // true sinaliza para incluir os filhos
faq.appendChild(cloneH1);
