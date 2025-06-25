// Verifica se existe um objeto ou uma prop/método
const isExiste = typeof NodeList !== 'undefined' ? 'Existe' : 'Não existe';
console.log(isExiste);
const isTrue = typeof NodeList.eowowu !== 'undefined' ? 'Existe' : 'Não existe';
console.log(isTrue);

//Exercícios
// Liste 5 objetos nativos
const listaObjetosNativos = [Object, Array, Function, String, Number];

// Liste 5 objetos do browser
const listaObjetosBrowser = [NodeList, HTMLCollection, HTMLElement, Location, KeyboardEvent];
