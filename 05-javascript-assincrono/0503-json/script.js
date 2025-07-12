fetch('./dados.json')
  .then(res => res.json())
  .then(res => {
    res.forEach(item => {
      console.log(item.aula);
    });
  });

// Objeto JSON
// parse(): transforma uma str que se parece com JSON em um objeto JavaScript
fetch('./dados.json')
  .then(res => res.text())
  .then(res => {
    console.log(res);
    const JSONFinal = JSON.parse(res);
    console.log(JSONFinal);
  });

// stringfy(): transforma um objeto JavaScript em uma str que se parece com um JSON
const configs = {
  player: 'Vimeo',
  tempo: '12min',
  aula: 'JavaScript Assíncrono',
  velocidade: '1x',
};
const strConfigs = JSON.stringify(configs);
console.log(strConfigs);

localStorage.configs = JSON.stringify(configs);
console.log(JSON.parse(localStorage.configs));
