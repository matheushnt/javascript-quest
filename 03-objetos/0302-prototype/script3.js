/*
Crie uma função construtora de Contas Bancárias
Deve conter número da conta corrente, agência e banco
Crie um método no protótipo que retorne
os dados completo da conta
*/
function ContaBancaria(contaCorrente, agencia, banco) {
  this.contaCorrente = contaCorrente;
  this.agencia = agencia;
  this.banco = banco;

  this.exibirDados = function () {
    return `Conta Corrente: ${this.contaCorrente}, Agência: ${this.agencia}, Banco: ${this.banco}`;
  };
}

const conta1 = new ContaBancaria('88063-7', '4099', 'Itaú');
console.log(conta1.exibirDados());

/*
Liste os métodos acessados por
dados criados com NodeList,
HTMLCollection, Document
*/
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name); // HTMLLIElement

li.click;
console.log(li.click.constructor.name); // Function

li.innerText;
console.log(li.innerText.constructor.name); // String

li.value;
console.log(li.value.constructor.name); // Number

li.hidden;
console.log(li.hidden.constructor.name); // Boolean

li.offsetLeft;
console.log(li.offsetLeft.constructor.name); // Number

li.click();
console.log(li.click()); // li.click.constructor.name resulta em undefined

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name); // Apesar de ser um Boolean, resulta em uma string
