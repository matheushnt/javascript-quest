// Retorne um número aleatório entre 1050 e 2000
const numAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(numAleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(', ');
let maiorNumero = Number.parseInt(numerosArray[0]);
for (let i = 0; i < numerosArray.length; i++) {
  const num = Number.parseInt(numerosArray[i]);
  if (num > maiorNumero) {
    maiorNumero = num;
  }
}
console.log(maiorNumero);

// Crie uma função para limpar os preços e retornar os números com
// centavos arredondados depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
let somaTotal = 0;

function limparPreco(preco) {
  let cleanPreco = Number.parseFloat(preco.toUpperCase().replace('R$', '').trim().replace(',', '.'));
  cleanPreco = +cleanPreco.toFixed(2); // Sinal de mais (+) também converte para número
  return cleanPreco;
}

listaPrecos.forEach((preco) => {
  somaTotal += limparPreco(preco);
});

console.log(somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
