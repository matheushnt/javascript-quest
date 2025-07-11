const doc = fetch('./doc.txt');
console.log(doc);

const conteudo = document.querySelector('.conteudo');

doc
  .then(resolucao => resolucao.text())
  .then(body => {
    conteudo.innerText = body;
  });

const endereco = fetch('https://viacep.com.br/ws/60011170/json/');
endereco
  .then(response => response.json())
  .then(response => {
    conteudo.innerText = response.bairro;
  });

const style = fetch('./style.css');
style
  .then(response => response.text())
  .then(response => {
    const style = document.createElement('style');
    style.innerHTML = response;
    conteudo.appendChild(style);
  });

const paginaSobre = fetch('./sobre.html');
const div = document.createElement('div');

paginaSobre
  .then(response => response.text())
  .then(response => {
    console.log(response);
    div.innerHTML = response;
    console.log(div);

    const titulo = div.querySelector('h1');
    console.log(titulo);

    document.querySelector('h1').innerText = titulo.innerText;
  });
