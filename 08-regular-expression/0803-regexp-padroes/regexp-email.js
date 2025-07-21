const regexpEmail = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
];

for (const email of emails) {
  console.log(email, email.match(regexpEmail));
}
