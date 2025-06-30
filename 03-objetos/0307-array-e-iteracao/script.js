/* forEach(): A função de callback é executada para cada item do array */
const carros = ['Kwid', 'Mobi', 'Uno'];
carros.forEach((item, index, array) => {
  // array[index] = 'teste'; -> Modifica o array original
  console.log(item.toUpperCase(), index, array);
});
console.log(carros);

/* Arrow function */
const LIs = document.querySelectorAll('li');
LIs.forEach((li) => li.classList.add('ativo'));
console.log(LIs);

/* map(): retorna um novo array com valores atualizados de acordo com o return de cada iteração */
const frutas = ['maçã', 'pêra', 'manga', 'laranja'];
const frutasUpperCase = frutas.map((item, index, array) => {
  console.log(item, index, array);
  return item.toUpperCase();
});
console.log(frutasUpperCase);

const numeros = [1, 2, 3, 4, 5];
const numerosX2 = numeros.map((n) => n * 2);
console.log(numerosX2);
// OBS 1: caso não seja retornado nenhum valor explícito, por padrão, retorna undefined
// OBS 2: se o objetivo é modificar o itens de um array e obter um novo array com
// essas alterações,usa-se map(), caso contrário, usa-se forEach()

const aulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];
const tempoAulas = aulas.map((aula) => aula.min);
console.log(tempoAulas);

function nomeAulas1(aula) {
  return aula.nome;
}

const nomeAulas2 = function (aula) {
  return aula.nome;
};

const nomeAulas3 = (aula) => {
  return aula.nome;
};

const arrayNomeAulas1 = aulas.map(nomeAulas1);
console.log(arrayNomeAulas1);

const arrayNomeAulas2 = aulas.map(nomeAulas2);
console.log(arrayNomeAulas2);

const arrayNomeAulas3 = aulas.map(nomeAulas3);
console.log(arrayNomeAulas3);

/* Função reduce(): reduz um array a um único valor. Ela itera sobre cada elemento do array, aplicando uma função de callback e acumulando o resultado em um único valor, que é o resultado final da redução */
const impares = [1, 3, 5, 7, 9];
const reduceImpares = impares.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
});
console.log(reduceImpares);

const listaNumeros = [10, 8, 12, 76, 20, 1, 100, 87, 23, 90];
const maiorNumero = listaNumeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
}, 0);
console.log(maiorNumero);

const objAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});
console.log(objAulas);

const frutasRight = frutas.reduceRight((acc, fruta) => {
  return acc + ' ' + fruta;
});
console.log(frutasRight);

const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);
console.log(frutasLeft);

/* some(): se pelo menos um return da iteração for truthy, ele retorna true */
const possuiFruta = frutas.some((item) => {
  return item === 'manga';
});
console.log(possuiFruta);

/* every(): se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false */
const nomes = ['João', 'Kayk', 'Gabriel', undefined];
const everyNomes = nomes.every((nome) => {
  console.log(nome);
  return nome;
});
console.log(everyNomes);

const pares = [2, 4, 6, 8, 10];
const everyPares = pares.every((n) => n % 2 === 0);
console.log(everyPares);
