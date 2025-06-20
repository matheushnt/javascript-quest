const img = document.querySelector('img');

/*
img.addEventListener('click', () => {
  console.log('click na imagem');
});
*/

// Ou

function callback(event) {
  console.log('click na imagem');
  console.log(event);
}
img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget); // Elemento na qual foi selecionado
  console.log(event.target); // Onde o clique ocorreu
  console.log(event.type); // Tipo de evento
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event.currentTarget);
  console.log(this); // Também retorna o elemento na qual foi selecionado
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

/*
h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);
*/

function handleKeyboard(event) {
  if (event.key === 'a') {
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keypress', handleKeyboard);

/*
O método addEventListener é adicionado à um único elemento.
Para adicionar em elementos de uma lista é necessário um loop.
*/

const imgs = document.querySelectorAll('img');

function handleImgs(event) {
  imagem = event.currentTarget;
  console.log(imagem.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImgs);
});
