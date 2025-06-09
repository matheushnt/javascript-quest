var nome = 'Matheus';

console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

var altura = 1.68;

console.log(altura.toString());
console.log(altura.toFixed());

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

function somar(a, b) {
  return a + b;
}

console.log(somar.length);

var btn = document.querySelector('.btn');
btn.classList.add('azul');
btn.addEventListener('click', function () {
  btn.classList.add('ativo');
});

console.log(btn.innerText);

/*
Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM

Web APIs fornecem métodos e propriedades que permitem interação JS e Browser
*/

// Exercícios
// nomeie 3 propriedades ou métodos de strings
var animal = 'cachorro';

console.log(animal.length);
console.log(animal.includes('cho'));
console.log(animal.toUpperCase());

// nomeie 5 propriedades ou métodos de elementos do DOM
var novoBtn = document.querySelector('.novo-btn');

console.log(novoBtn.innerText);
console.log(novoBtn.innerHTML);
novoBtn.classList.add('ativo');
console.log(novoBtn.id);
novoBtn.style.backgroundColor = 'black';
novoBtn.style.color = 'white';
novoBtn.style.padding = '12px';

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
navigator.clipboard.writeText('Olá, Mundo!');
