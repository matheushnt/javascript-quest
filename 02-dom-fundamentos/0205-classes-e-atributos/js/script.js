const menu = document.querySelector('.menu');
console.log(menu);

console.log(menu.className); // Retorna uma string com o nome das classes
console.log(menu.classList);

menu.classList.add('ativo', 'azul');
console.log(menu);

menu.classList.remove('azul');
console.log(menu);

menu.classList.toggle('verde'); // Adiciona verde
menu.classList.toggle('verde'); // Remove verde
console.log(menu);

const isAtivo = menu.classList.contains('ativo'); // Retorna true ou false
if (isAtivo) {
  console.log('Menu está ativo');
} else {
  console.log('Menu não está ativo');
}

const animais = document.querySelector('.animais');
console.log(animais.attributes[1]); // Retorna um array-like com todos os attrs de um elemento

const img = document.querySelector('img');
console.log(img);

const srcImg = img.getAttribute('src'); // Pega o attr do elemento
console.log(srcImg);

// Adiciona um novo atributo ou atualiza caso já exista
img.setAttribute('alt', 'Imagem de uma raposa olhando para cima');
img.setAttribute('title', 'Raposa');
console.log(img.getAttribute('alt'));

const possuiAtributoTitle = img.hasAttribute('title');
if (possuiAtributoTitle) {
  console.log('Possui o atributo title');
} else {
  console.log('Possui o atributo title');
}

/*
Read Only vs Writable
animais.className = 'azul';
animais.className += ' vermelho';

animais.attributes = 'class="ativo"'; // Não funciona, read only
*/
