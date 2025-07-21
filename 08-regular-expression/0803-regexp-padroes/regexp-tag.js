const regexpTag = /<\/?[\w\s="']+\/?/gi; // ou /(?<=<\/?)[\w]+/gi

const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>',
];

for (const tag of tags) {
  console.log(tag, tag.match(regexpTag));
}
