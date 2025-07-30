export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      const spanBitcoin = document.querySelector(target);
      spanBitcoin.innerText = (1000 / json.BRL.buy).toFixed(5);
    })
    .catch(erro => console.log(Error(erro)));
}
