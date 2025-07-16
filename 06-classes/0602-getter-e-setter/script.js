const pessoa = {
  get nome() {
    return this._nome || 'João';
  },
  set nome(novoNome) {
    return (this._nome = novoNome);
  },
};

console.log(pessoa.nome);
console.log((pessoa.nome = 'Matheus'));

// O método com set pode apenas modificar outras propriedades do objeto
const frutas = {
  lista: [],
  set addFruta(fruta) {
    this.lista.push(fruta);
  },
};

frutas.addFruta = 'banana';
frutas.addFruta = 'abacaxi';

console.log(frutas);

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  get element() {
    const type = this._elementType || 'button';
    const btn = document.createElement(type);
    btn.innerText = this.text;
    btn.style.color = this.color;

    return btn;
  }

  set element(type) {
    return (this._elementType = type);
  }
}

const blueButton = new Button('Comprar', 'blue');
console.log(blueButton);

blueButton._elementType = 'div';
