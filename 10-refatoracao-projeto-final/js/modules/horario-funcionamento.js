export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  const dataAtual = new Date();
  const hoje = dataAtual.getDay();
  const horaAtual = dataAtual.getHours();
  const isDiaFuncionamento = diasSemana.indexOf(hoje) !== -1;
  const isAberto = horaAtual >= horarioSemana[0] && horaAtual < horarioSemana[1];

  if (isDiaFuncionamento && isAberto) {
    funcionamento.classList.add('aberto');
  }
}
