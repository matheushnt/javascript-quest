// console.log(window.history);

// Vai para a página anterior
// window.history.back();

// Vai para a próxima página
// window.history.forward();

// Adiciona uma entrada à pilha de histórico de sessão do navegador
// window.history.pushState(null, null, 'investidores.html');

//window.history.pushState(null, null, 'sobre.html');

// window.addEventListener('popstate', () => console.log('Pop State aqui'));

const links = document.querySelectorAll('a');

const replaceContent = text => {
  const newHTML = document.createElement('div');
  newHTML.innerHTML = text;

  const oldContent = document.querySelector('.content');
  const newContent = newHTML.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHTML.querySelector('title').innerText;
};

const fetchPage = async url => {
  document.querySelector('.content').innerHTML = 'Carregando';
  const pageResponse = await fetch(url);
  const pageResponseText = await pageResponse.text();

  replaceContent(pageResponseText);
};

const handleClick = e => {
  e.preventDefault();
  window.history.pushState(null, null, e.target.href);
  fetchPage(e.target.href);
};

window.addEventListener('popstate', () => fetchPage(window.location.href));

links.forEach(link => link.addEventListener('click', handleClick));
