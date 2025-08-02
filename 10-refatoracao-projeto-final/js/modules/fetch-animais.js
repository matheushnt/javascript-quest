import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  const criarDivAnimais = animal => {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  };

  const adicionarDivAnimais = animal => {
    const animalDiv = criarDivAnimais(animal);
    numerosGrid.appendChild(animalDiv);
  };

  const animarAnimaisNumeros = () => {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  };

  const obterDadosAnimais = async () => {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach(animal => adicionarDivAnimais(animal));

      animarAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  };

  return obterDadosAnimais();
}
