export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  function animaNumeros() {
    numeros.forEach((numero) => {
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
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {
    attributes: true,
  });
}
