const doc = fetch('./doc.txt');
console.log(doc);

const conteudo = document.querySelector('.conteudo');

// text()
doc
  .then(resolucao => resolucao.text())
  .then(body => {
    conteudo.innerText = body;
  });

// json()
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

    const titulo = div.querySelector('h1');

    document.querySelector('h1').innerText = titulo.innerText;
  });

const printTela = fetch('./screenshot.png');

// blob()
printTela
  .then(response => response.blob())
  .then(response => {
    const blobURL = URL.createObjectURL(response);
    console.log(blobURL);

    const img = document.querySelector('img');
    img.setAttribute('src', blobURL);
  });

// clone()
const macapaCEP = fetch('https://viacep.com.br/ws/68908125/json/');
macapaCEP
  .then(response => {
    const response2 = response.clone();
    response.text().then(text => console.log(text));
    response2.json().then(json => console.log(json));
    console.log(response);
  })
  .then(response => console.log(response));

macapaCEP.then(res => {
  console.log(res);
  res.headers.forEach(console.log);
});

// .status retorna o code status da requisição e .ok retorna true se foi com sucesso a requisição ou false caso contrário
const docs = fetch('./docs.txt');
docs.then(res => {
  if (res.status === 404) {
    console.log('Página não existe!');
  } else {
    console.log('Página existe!!!');
  }
});

// A prop url retorna a URL da req. e a prop type retorna o tipo da resposta
docs.then(res => console.log(res.type));
docs.then(res => console.log(res.url));

const fetchGoogle = fetch('https://www.google.com');
fetchGoogle.then(res => console.log(res.type));

macapaCEP.then(res => console.log(res.type));
macapaCEP.then(res => console.log(res.url));
