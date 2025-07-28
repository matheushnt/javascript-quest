export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(res => res.json())
    .then(json => {
      const spanBitcoin = document.querySelector('.bitcoin-valor');
      spanBitcoin.innerText = (1000 / json.BRL.buy).toFixed(5);
    })
    .catch(erro => console.log(Error(erro)));
}
