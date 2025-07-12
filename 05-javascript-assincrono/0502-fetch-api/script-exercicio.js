/*
Utilizando a API https://viacep.com.br/ws/${CEP}/json/
crie um formulário onde o usuário pode digitar o cep
e o endereço completo é retornado ao clicar em buscar
*/
const btn = document.querySelector('.btn');
const divResposta = document.querySelector('.resposta');

function buscarCEP(cep) {
  const cepUsuario = fetch(`https://viacep.com.br/ws/${cep}/json/`);
  cepUsuario
    .then(res => res.text())
    .then(res => {
      divResposta.innerText = res;
    });
}

function handleClick(e) {
  e.preventDefault();
  const inputValue = e.target.previousElementSibling.value;
  buscarCEP(inputValue);
}

btn.addEventListener('click', handleClick);

/*
Utilizando a API https://blockchain.info/ticker
retorne no DOM o valor de compra da bitcoin e reais.
atualize este valor a cada 30s
*/
const divPrecoBTC = document.querySelector('.preco-btc');

function fetchBTC() {
  fetch('https://blockchain.info/ticker')
    .then(res => res.json())
    .then(res => {
      divPrecoBTC.innerText = 'R$ ' + res.BRL.buy;
    });
}

// setInterval(fetchBTC, 30000);
fetchBTC();

/*
Utilizando a API https://api.chucknorris.io/jokes/random
retorne uma piada randomica do chucknorris, toda vez que
clicar em próxima
*/

const p = document.querySelector('.piada');
const btnPiada = document.querySelector('.proxima-piada');

function fetchPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(res => (p.innerText = res.value));
}

btnPiada.addEventListener('click', fetchPiada);
