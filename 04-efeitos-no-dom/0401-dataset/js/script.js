let div = document.querySelector('div');
// Funciona corretamente as demais seleções
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="black"]');
console.log(Object.prototype.toString.call(div));
console.log(div.dataset);

// JS transforma o nome dado ao atributo e a prop. Ao attr, é adicionado o traço (-). Para a prop, é adotado o padrão camelCase
div.dataset.totalHeight = 1000;

delete div.dataset.width;

console.log(div.dataset);
