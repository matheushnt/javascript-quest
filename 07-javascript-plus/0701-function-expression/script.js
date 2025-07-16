// Function declaration
function somar(x, y) {
  console.log(x + y);
}

somar(2, 5);

// Function Expression
const subtrair = function (x, y) {
  console.log(x - y);
};

subtrair(9, 3);

const dividir = (x, y) => {
  console.log(x / y);
};

dividir(10, 5);

const multiplicar = (x, y) => console.log(x * y);

multiplicar(5, 8);

const dizerOla = () => console.log('Olá, Mundo!');

dizerOla();

// Immediately Invoked Function Expression - IIFE
const instrumento = 'Violão';

(function () {
  const instrumento = 'Guitarra';
  console.log(instrumento);
})();

console.log(instrumento);
