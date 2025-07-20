const regexpCPF = /(?:\d{3}[\s.-]?){3}\d{2}/g;

const cpfs = ['000.000.000-00', '000-000-000-00', '000.000.000.00', '000000000-00', '000 000 000 00', '00000000000'];

for (const cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF));
}
