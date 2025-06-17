const listaAnimais = document.querySelector('.animais-lista');
console.log(listaAnimais);

const listaAnimaisHeight1 = listaAnimais.clientHeight; // height + padding
console.log(listaAnimaisHeight1);

const listaAnimaisHeight2 = listaAnimais.offsetHeight; // height + padding + border
console.log(listaAnimaisHeight2);
// OBS: também existe offsetWidth

const listaAnimaisHeight3 = listaAnimais.scrollHeight; // height total, mesmo dentro de scroll
console.log(listaAnimaisHeight3);

const section = document.querySelector('.animais');
console.log(section);

// Distância entre o topo do elemento e o topo da página
const sectionDistanciaTopo = section.offsetTop;
console.log(sectionDistanciaTopo);

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
const sectionDistanciaCantoEsquerdo = section.offsetLeft;
console.log(sectionDistanciaCantoEsquerdo);

const rect = section.getBoundingClientRect();
console.log(rect);
console.log(rect.width);
console.log(rect.height);
console.log(rect.top);

console.log(
  window.innerWidth, // Width da janela
  window.outerWidth, // Soma dev tools também
  window.innerHeight, // Height da janela
  window.outerHeight, // Soma a barra de endereço
  window.pageXOffset, // Distância total do scroll horizontal
  window.pageYOffset // Distância totla do scroll vertical
);

const primeiroH2Rect = document.querySelector('.animais h2').getBoundingClientRect();
console.log(primeiroH2Rect);

if (primeiroH2Rect.top < 0) {
  console.log('Passou do elemento');
}

const small = window.matchMedia('(max-width: 600px)');
console.log(small);

if (small.matches) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}
