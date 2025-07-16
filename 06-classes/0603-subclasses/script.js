class Veiculo {
  constructor(ano) {
    this.ano = ano;
  }

  acelerar() {
    console.log('VRUUUMMM!!!');
  }
}

class Moto extends Veiculo {
  exibirCilindradas() {
    console.log('800 cilindradas');
  }
}

class Carro extends Veiculo {
  exibirCavalos() {
    console.log('575 cavalos');
  }
}

const veiculoQualquer = new Veiculo(2000);
const suzukiSrad1000 = new Moto(2020);
const mustangGT = new Carro(2025);

console.log(veiculoQualquer, suzukiSrad1000, mustangGT);

class VeiculoAquatico extends Veiculo {
  acelerar() {
    // console.log('SPLAAAASHHH');
    super.acelerar();
  }
}

const jetSki = new VeiculoAquatico(2019);
jetSki.acelerar();

class VeiculoAereo extends Veiculo {
  constructor(ano, companhia) {
    super(ano); // herança das props da classe pai
    this.companhia = companhia;
  }

  acelerar() {
    console.log('SWOOOOSH');
  }
}

const embraer = new VeiculoAereo(2020, 'LATAM');
embraer.acelerar();
