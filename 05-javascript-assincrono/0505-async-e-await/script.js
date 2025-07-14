async function getProdutos() {
  try {
    const responseProdutos = await fetch('./produtos.json');
    const produtosText = await responseProdutos.text();

    document.body.innerText = produtosText;
  } catch (error) {
    console.log('Erro: ' + error);
  }
}

getProdutos();

async function getClientes() {
  const responseClientes = fetch('./clientes.json');
  const clientesJSON = await (await responseClientes).json();

  console.log(clientesJSON);
}

getClientes();
