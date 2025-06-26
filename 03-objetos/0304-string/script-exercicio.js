/*
Utilizando o foreach na array abaixo,
some os valores de Taxa e os valores de Recebimento
*/
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let somaTaxa = 0;
let somaRecebimento = 0;
transacoes.forEach((transacao) => {
  const desc = transacao.descricao.toLowerCase();
  const valor = +transacao.valor.replace('R$ ', ''); // Transforma em número

  if (desc.includes('taxa')) {
    somaTaxa += valor;
  }

  if (desc.includes('recebimento')) {
    somaRecebimento += valor;
  }
});
console.log(somaTaxa, somaRecebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';');
console.log(transportesArray);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const HTMLArray = html.split('span');
console.log(HTMLArray);
const HTMLNovo = HTMLArray.join('a');
console.log(HTMLNovo);

// Retorne o último caracter da frase
frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoesBancarias = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];
let totalTaxas = 0;
transacoesBancarias.forEach((transacao) => {
  const transacaoLimpa = transacao.trim().toUpperCase();
  if (transacaoLimpa.includes('TAXA')) {
    totalTaxas++;
  }
});
console.log(totalTaxas);
