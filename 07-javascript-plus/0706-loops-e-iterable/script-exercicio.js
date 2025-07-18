// Crie 4 li's na página. Utilizando o for...of adicione uma classe a cada li
const liElements = document.querySelectorAll('li');

for (const li of liElements) {
  li.classList.add('ativo');
}

// Utilize o for...in para listar todos as propriedades e valores do objeto window
for (const keyProp in window) {
  console.log(`${keyProp}: ${window[keyProp]}`);
}
