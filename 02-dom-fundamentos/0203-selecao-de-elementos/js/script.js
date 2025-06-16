const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const ul = document.getElementsByTagName('ul');
console.log(ul);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const primeiroLinkInterno = document.querySelector('[href^="#"]');
console.log(primeiroLinkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
console.log(animaisImg[5]);

// Diferença entre HTMLCollection e NodeList
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);
// HTMLCollection atualiza de maneira dinâmica, enquanto NodeList não
// Os dois são Array-like, parecem um array mas não são. forEach só existe apenas em NodeList

gridSectionNode.forEach(function (item, index) {
  console.log(item, index);
});

const arrayGridSection = Array.from(gridSectionHTML);
console.log(arrayGridSection);

arrayGridSection.forEach(function (item, index) {
  console.log(item, index);
});
