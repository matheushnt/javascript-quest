const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
  elemento: btn,
  text: function (valor) {
    this.elemento.innerText = valor;
  },
  backgroundColor: function (valor) {
    this.elemento.style.backgroundColor = valor;
  },
  color: function (valor) {
    this.elemento.style.color = valor;
  },
  height: function (valor) {
    this.elemento.style.height = valor + 'px';
  },
  width: function (valor) {
    this.elemento.style.width = valor + 'px';
  },
  border: function (valor) {
    this.elemento.style.border = valor;
  },
  borderRadius: function (valor) {
    this.elemento.style.borderRadius = valor + 'px';
  },
  fontFamily: function (valor) {
    this.elemento.style.fontFamily = valor;
  },
  fontSize: function (valor) {
    this.elemento.style.fontSize = valor + 'rem';
  },
};

function handleChange(e) {
  const nome = e.target.name;
  const valor = e.target.value;

  handleStyle[nome](valor);

  showCSS();
}

function showCSS() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';<span></span>');
}

controles.addEventListener('change', handleChange);
