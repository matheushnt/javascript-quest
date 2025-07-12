/* Exemplos de APIs */
fetch('https://api.github.com/users/matheushnt')
  .then(res => res.json())
  .then(res => console.log(res));

fetch('https://api.github.com/users/matheushnt/followers')
  .then(res => res.json())
  .then(res => console.log(res));

// Hypertext Transfer Protocol é o protocolo utilizado para enviarmos/recebermos arquivos e dados na Web
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  .then(res => console.log(res));

/*
url e method:
Uma requisição HTTP é feita através de uma URL. O método padrão é o
GET, mas existem outros como POST, UPDATE, DELETE, HEADER e mais
*/
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url, { method: 'GET' })
  .then(res => res.json())
  .then(res => console.log(res));

const options = {
  method: 'POST',
  body: JSON.stringify({
    titulo: 'Aula de JavaScript',
    tempo: '18min',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(res => console.log(res));

fetch(url, { method: 'HEAD' }).then(res => res.headers.forEach(console.log));

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    titulo: 'Aula de Python',
    tempo: '40min',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(res => res.json())
  .then(res => console.log(res));

fetch('https://jsonplaceholder.typicode.com/posts/1/', { method: 'HEAD' }).then(res => console.log(res.headers));

// CORS
fetch('https://www.google.com/').then(res => console.log(res));
fetch('https://cors-anywhere.herokuapp.com/https://www.google.com')
  .then(res => res.text())
  .then(res => console.log(res));
