/*
Const
Mantém o escopo no bloco, impede a redeclaração e
também a modificação do valor da variável
*/

const mes = 'dezembro';
// mes = 'janeiro'; erro: tentou modificar o valor
// const semana; erro: declarou sem semana

const data = {
  dia: 10,
  mes: 'junho',
  ano: 2025,
};

data.ano = 2026;
console.log(data.ano);
// data = 'janeiro'; erro: tentou modificar o valor

/*
Mantém o escopo no bloco, impede a redeclaração,
mas permite a modificação do valor da variável.
*/

let ano;
ano = 2025;
ano++;
console.log(ano);

// let ano = 2026; erro, redeclarou a variável
