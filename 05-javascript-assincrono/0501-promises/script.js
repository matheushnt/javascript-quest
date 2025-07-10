const promessa = new Promise((resolve, reject) => {
  let condicao = true;

  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'Matheus', idade: 20 });
    }, 3000);
  } else {
    reject(Error('Um erro ocorreu na promise'));
  }
});

const retorno = promessa
  .then((resolucao) => {
    console.log(resolucao);
    resolucao.sexo = 'M';
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
    resolucao.possuiFaculdade = true;
    return resolucao;
  })
  .then(
    (resolucao) => {
      console.log(resolucao);
      resolucao.contato = '85999999999';
      return resolucao;
    },
    (rejeitada) => {
      console.log('Método catch');
      console.log(rejeitada);
    }
  )
  .finally(() => {
    console.log('Acabou tudo!!!');
  });

setTimeout(() => console.log(retorno), 4000);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Login Efetuado!');
  }, 3000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados!');
  }, 1500);
});

// const carregouTudo = Promise.all([login, dados]);

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  setTimeout(() => console.log(resolucao), 4000);
});
