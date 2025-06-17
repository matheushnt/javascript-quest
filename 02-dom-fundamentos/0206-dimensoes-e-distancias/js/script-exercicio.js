// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('.animais-lista img');
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
let somaLarguraImgs = 0;
const imagens = document.querySelectorAll('img');
imagens.forEach((item) => {
  somaLarguraImgs += item.getBoundingClientRect().width;
});
console.log(somaLarguraImgs);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksMenu = document.querySelectorAll('.menu a');
linksMenu.forEach((item) => {
  const width = item.clientWidth;
  const height = item.clientHeight;
  console.log(width, height);
  if (width >= 48 && height >= 48) {
    console.log('Possui o mínimo recomendado pelo Google');
  } else {
    console.log('Não possui o mínimo recomendado pelo Google');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const telaMobile = window.matchMedia('(max-width: 720px)');
if (small.matches) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
