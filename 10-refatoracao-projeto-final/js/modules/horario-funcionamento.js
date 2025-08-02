export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  getDadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  getDataAtual() {
    this.dataAtual = new Date();
    this.hoje = this.dataAtual.getDay();
    this.horaAtual = this.dataAtual.getUTCHours() - 3;
  }

  estaAberto() {
    const isDiaFuncionamento = this.diasSemana.indexOf(this.hoje) !== -1;
    const isAberto = this.horaAtual >= this.horarioSemana[0] && this.horaAtual < this.horarioSemana[1];

    return isDiaFuncionamento && isAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.class.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.getDadosFuncionamento();
      this.getDataAtual();
      this.ativaAberto();
    }

    return this;
  }
}
