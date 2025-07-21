const regexpCEP = /\d{5}[\s-]?\d{3}/g;

const ceps = ['00000-000', '00000 000', '00000000'];

for (const cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}
