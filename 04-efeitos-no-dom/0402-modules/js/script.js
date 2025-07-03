import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import * as testes from './modules/script-testes.js';

testes.testar();
testes.novoTeste();
console.log(testes.senha);

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
