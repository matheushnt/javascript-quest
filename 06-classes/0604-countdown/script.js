import Countdown from './countdown.js';

const tempoAteONatal = new Countdown('24 December 2025 23:59:59 GMT-0300');
const tempoAteOAnoNovo = new Countdown('31 December 2025 23:59:59 GMT-0300');

console.log(tempoAteONatal._futureDate);
console.log(tempoAteONatal._actualDate);
console.log(tempoAteONatal._timeStampDiff);
console.log(tempoAteONatal.days);
console.log(tempoAteONatal.hours);
console.log(tempoAteONatal.minutes);
console.log(tempoAteONatal.seconds);
console.log(tempoAteONatal.total);

setInterval(() => console.log(tempoAteOAnoNovo.total), 1000);
