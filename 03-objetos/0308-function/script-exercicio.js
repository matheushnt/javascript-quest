// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const qtdeCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acc, paragr) => {
    return (acc += paragr.innerText.length);
  },
  0
);
console.log(qtdeCaracteres);

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
function criarElementoHTML(tag, classe, conteudo) {
  const novaTag = document.createElement(tag);
  if (classe) {
    novaTag.classList.add(classe);
  }
  if (conteudo) {
    novaTag.innerHTML = conteudo;
  }

  return novaTag;
}

console.log(criarElementoHTML('div', 'container', 'Meu container'));
console.log(criarElementoHTML('p', 'conteudo', 'Isso é um novo parágrafo'));
console.log(criarElementoHTML('p', 'conteudo'));
console.log(criarElementoHTML('p'));
console.log(criarElementoHTML('section', null, 'olá'));

/*
Crie uma nova função utilizando a anterior como base
essa nova função deverá sempre criar h1 com a
classe titulo. Porém o parâmetro conteudo continuará dinâmico
*/
const criarH1 = criarElementoHTML.bind(null, 'h1', 'titulo');
criarH1('Esse é o meu novo Título H1');
criarH1('Esse é o meu mais novo Título H1');
