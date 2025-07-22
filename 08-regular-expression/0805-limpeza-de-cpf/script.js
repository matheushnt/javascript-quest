const listaCPFs = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
};

const limparCPF = cpf => cpf.replace(/\D/g, '');

const construirCPF = cpf => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

const formatarCPFs = cpfs => cpfs.map(limparCPF).map(construirCPF);

const exibirCPFSFormatados = listaCPF => {
  const cpfs = elementsInnerText(listaCPFs);
  const cpfsFormatados = formatarCPFs(cpfs);

  listaCPF.forEach((item, index) => (item.innerText = cpfsFormatados[index]));
};

exibirCPFSFormatados(listaCPFs);

// Reflexão: vale a pena sacrificar legibilidade por concisão?
