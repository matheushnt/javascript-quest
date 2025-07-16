function createButton(text) {
  // Prop fica privada e impossibilitada de ser acessada, a não ser que a retorne
  const senha = 'apufvhaprv[q';

  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;

    return buttonElement;
  }

  return Object.freeze({
    text,
    element,
  });
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

console.log(btnComprar.element(), btnVender.element());
console.log(btnComprar.senha);

function Pessoa(nome) {
  // ou if (!new.target)) ES6
  if (!(this instanceof Pessoa)) {
    return new Pessoa(nome);
  }

  this.nome = nome;
}

const programador = Pessoa('Matheus');
console.log(programador);
