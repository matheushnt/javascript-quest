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
const options = {
  method: 'POST',
  body: JSON.stringify({
    titulo: 'Aula de JavaScript',
    tempo: '18min',
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(res => console.log(res));
