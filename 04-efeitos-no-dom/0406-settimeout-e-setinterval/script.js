function cumprimentar(msg) {
  console.log(msg);
}

setTimeout(cumprimentar, 1000, 'Olá, Matheus');

setTimeout(() => {
  console.log('Olá, Mundo!');
}, 500);

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 500 * i);
}

const btn = document.querySelector('button');

function handleClick() {
  setTimeout(() => {
    this.classList.add('ativo');
    console.log(this);
  });
}
// OBS: o this de setTimeout é window

btn.addEventListener('click', handleClick);

function printOla() {
  console.log('Olá para você');
}

setInterval(printOla, 1000);

let i = 0;
setInterval(() => {
  console.log(i++);
}, 2000);

let cont = 0;
const limparIntervalo = setInterval(() => {
  console.log(`Contador: ${cont++}`);
  if (cont > 20) {
    clearInterval(limparIntervalo);
  }
}, 500);
