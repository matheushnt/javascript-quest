// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
const paragrafosArray = Array.from(paragrafos);

paragrafosArray.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
paragrafosArray.forEach((item) => console.log(item.innerText));

/*
Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);

*/

const imgsArray = Array.from(document.querySelectorAll('img'));

imgsArray.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgsArray.forEach(() => {
  console.log(i++);
});

imgsArray.forEach(() => i++);
console.log(i);
