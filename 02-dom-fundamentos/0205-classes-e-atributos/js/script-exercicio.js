// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu li a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
for (let i = 1; i < itensMenu.length; i++) {
  itensMenu[i].classList.remove('ativo');
}

// Verifique se as imagens possuem o atributo alt
const imgsAnimais = document.querySelectorAll('.animais img');
imgsAnimais.forEach((item) => {
  if (item.hasAttribute('alt')) {
    console.log('Imagem possui o atributo alt');
  } else {
    console.log('Imagem não possui atributo alt');
  }
});

// Modifique o href do link externo no menu
const linkExternoMenu = document.querySelector('.menu li:last-child a');
console.log(linkExternoMenu);
linkExternoMenu.setAttribute('href', 'https://www.linkedin.com/in/matheushnt/'); // Ou acessar diretamente a prop href e alterar o valor
