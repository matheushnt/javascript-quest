/*
Quando o usuário clicar nos links internos do site,
adicione a classe ativo ao item clicado e remova dos
demais itens caso eles possuam a mesma. Previna
o comportamento padrão desses links
*/
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinkInterno(event) {
  event.preventDefault();

  for (let i = 0; i < linksInternos.length; i++) {
    if (linksInternos[i].classList.contains('ativo')) {
      linksInternos[i].classList.remove('ativo');
    }
  }

  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((item) => {
  item.addEventListener('click', handleLinkInterno);
});

/*
Selecione todos os elementos do site começando a partir do body,
ao clique mostre exatamente quais elementos estão sendo clicados
Depois, ao invés de mostrar no console, remova o elemento que está sendo clicado,
o método remove() remove um elemento
*/
const elementos = document.querySelectorAll('body *');
console.log(elementos);

function handleElemento(event) {
  // console.log(event.target); // Etapa 1
  event.target.remove(); // Etapa 2
}

elementos.forEach((item) => {
  item.addEventListener('click', handleElemento);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('texto-ampliado');
  }
}

window.addEventListener('keypress', handleClickT);
