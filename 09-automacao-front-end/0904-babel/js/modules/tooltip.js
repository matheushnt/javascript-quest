export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function criarTooltipBox(elemento) {
    const tooltipBox = document.createElement('div');
    const texto = elemento.getAttribute('aria-label');
    tooltipBox.innerText = texto;
    tooltipBox.classList.add('tooltip');
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseLeave = {
    handleEvent: function () {
      this.tooltipBox.remove();
      this.elemento.removeEventListener('mouseleave', onMouseLeave);
      this.elemento.removeEventListener('mousemove', onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent: function (event) {
      this.tooltipBox.style.top = event.pageY + 25 + 'px';
      this.tooltipBox.style.left = event.pageX + 25 + 'px';
    },
  };

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + 'px';
    tooltipBox.style.left = event.pageX + 'px';

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.elemento = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver);
  });
}
