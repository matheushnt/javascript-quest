export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    const valor = Number.parseInt(numero.innerText);
    let contador = 0;
    const incremento = Math.floor(valor / 100);
    const timer = setInterval(() => {
      contador += incremento;
      numero.innerText = contador;
      if (contador > valor) {
        numero.innerText = valor;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }

  // Função ocorre quando mutações acontecem
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }

    return this;
  }
}
