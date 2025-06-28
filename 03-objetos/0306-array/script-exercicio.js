const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
/*
Remova o primeiro valor de comidas e coloque em uma variável
Remova o último valor de comidas e coloque em uma variável
Adicione 'Arroz' ao final da array
Adicione 'Peixe' e 'Batata' ao início da array
*/
const primElemento = comidas.shift();
const ultElemento = comidas.pop();
comidas.push('Arroz');
comidas.splice(0, 0, 'Peixe', 'Batata');
console.log(primElemento, ultElemento, comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
/*
Arrume os estudantes em ordem alfabética
Inverta a ordem dos estudantes
Verifique se Joana faz parte dos estudantes
Verifique se Juliana faz parte dos estudantes
*/
estudantes.sort();
console.log(estudantes);
const estudantesInvertidos = estudantes.reverse();
console.log(estudantes);
if (estudantes.includes('Joana')) console.log('Joana faz parte dos estudantes');
else console.log('Joana não faz parte dos estudantes');
if (estudantes.includes('Juliana')) console.log('Juliana faz parte dos estudantes');
else console.log('Juliana não faz parte dos estudantes');

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

const esportivos = ['Ferrari', 'Lamborghini', 'Porsche', 'McLaren'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneEsportivos = esportivos.slice();
const ultEsportivo = esportivos.pop();
console.log(cloneEsportivos, ultEsportivo);
