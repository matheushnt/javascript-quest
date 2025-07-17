/*
Reescreva a função utilizando valores iniciais de parâmetros com ES6

function createButton(background, color) {
  background = background || 'blue';
  if (color === undefined) {
    color = 'red';
  }
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
}

const redButton = createButton();
*/

function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton();
const blackButton = createButton('#222', 'white');

// Utilize o método push para inserir as frutas ao final de comidas.
const frutasArray = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
comidas.push(...frutasArray);
console.log(comidas);
