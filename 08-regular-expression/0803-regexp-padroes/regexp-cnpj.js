const regexpCNPJ = /\d{2}[.-]?(\d{3}[.-]?){2}\/?\d{4}[.-]?\d{2}/g;

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
];

for (const cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ));
}
