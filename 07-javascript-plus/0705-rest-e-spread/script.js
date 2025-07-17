function perimetro(lado, totalLados) {
  totalLados = totalLados || 4;
  return lado * totalLados;
}

// Valor padrão para o parâmetro
function area(lado = 3) {
  return lado ** 2;
}

// Array-like arguments
function cumprimentar(msg, nome) {
  console.log(arguments);

  const argArray = Array.from(arguments);
  console.log(argArray);
  argArray.forEach(arg => console.log(arg));

  return `${msg}${nome}`;
}

console.log(cumprimentar('Seja bem-vindo, ', 'Matheus'));

// Operador Rest
function exibirParametros(...listaParametros) {
  listaParametros.forEach(param => console.log(param));
}

exibirParametros(1, 2, 3, 4, 5, 'Olá', true, false, null, undefined, [], {});

function parametros(param1, param2, ...parametros) {
  console.log(param1, param2, parametros);
}

parametros('Eu sou o Param 1', 'Já eu sou o Param 2', 1, 2, 3, 4, 5, 6, 7, 8);
// arguments é um array-like, já o Rest é um Array

// Operador Spread
const frutas = ['banana', 'abacaxi', 'maçã'];
const legumes = ['cenoura', 'batata'];

const alimentos = [...frutas, ...legumes];

console.log(alimentos);

const anunciarGanhadores = (premio, ...ganhadores) => {
  ganhadores.forEach(ganhador => {
    console.log(`${ganhador} ganhou ${premio}`);
  });
};

const ganhadores = ['Matheus', 'João', 'Carla', 'Joaquim', 'Fernanda', 'Julia'];
anunciarGanhadores('1000 reais', ...ganhadores);

const numeros = [2, 4, 4532, 1212, 113, 878, 976, 321, 2133];
const maiorNumero = Math.max(...numeros);
console.log(maiorNumero);

const botoes = document.querySelectorAll('button');
//const botoesArray = Array.from(botoes);
// A linha de cima pode ser reescrita da maneira da linha de baixo
const botoesArray = [...botoes];
console.log(botoes, botoesArray);
