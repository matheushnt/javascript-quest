// O método forEach() executa uma dada função em cada elemento de um array
const imgs = document.querySelectorAll('img');
imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Com Array.from(), é possível tranformar um array-like em array
const titulos = document.getElementsByClassName('titulo');
console.log(titulos);
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Arrow Function é uma sintaxe moderna. Porém, não pode ser utilizada como método
imgs.forEach((item, index, array) => {
  console.log(item, index, array);
});

let c = 0;
imgs.forEach(() => {
  console.log(c++);
});

imgs.forEach(() => console.log(c++));
