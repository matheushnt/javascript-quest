const carro = {
  marca: 'Marca',
  preco: 0,
};

const honda = carro;
honda.marca = 'Honda';
honda.preco = 2000;

const fiat = carro;
console.log(carro, honda, fiat);

// honda e fiat apontam para o mesmo objeto: carro. Quaisquer modificações em honda ou fiat também, vai impactar no objeto original, consequentemente, nas demais variáveis que o possuem.

function Carro() {
  this.marca = 'Marca';
  this.preco = 2000;
}

const hyundai = new Carro();
hyundai.marca = 'Hyundai';
const nissan = new Carro();

function Moto(marca, ano, preco) {
  const taxa = 0.1;
  const precoFinal = preco + preco * taxa;

  this.marca = marca;
  this.ano = ano;
  this.preco = precoFinal;
}

const moto1 = new Moto('Kawasaki', 2025, 27000);
console.log(moto1.ano);

const moto2 = new Moto('Yamaha', 2020, 25000);
console.log(moto2.preco);
