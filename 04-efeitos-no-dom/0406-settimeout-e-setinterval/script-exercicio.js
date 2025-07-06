// Mude a cor da tela para azul e depois para vermelho a cada 2s.
let corAtual = 'blue';
const limparIntervalo = setInterval(callbackInterval, 2000);

let contadorSegundos = 0;

function callbackInterval() {
  console.log(contadorSegundos);
  const body = document.body;
  body.style.backgroundColor = corAtual;

  if (corAtual === 'blue') {
    body.style.backgroundColor = 'red';
    corAtual = 'red';
  } else {
    body.style.backgroundColor = 'blue';
    corAtual = 'blue';
  }

  contadorSegundos += 2000;

  if (contadorSegundos > 10000) {
    clearInterval(limparIntervalo);
  }
}

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  i = 0;
  tempo.innerText = 0;
}

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);
