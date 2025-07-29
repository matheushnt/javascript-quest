export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  criarTooltipBox(elemento) {
    const tooltipBox = document.createElement('div');
    const texto = elemento.getAttribute('aria-label');
    tooltipBox.innerText = texto;
    tooltipBox.classList.add('tooltip');
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Move a tooltip com base no estilos de acordo com a posição do mouse
  onMouseMove(e) {
    this.tooltipBox.style.top = e.pageY + 25 + 'px';

    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = e.pageX + 25 + 'px';
    }
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) {
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach(tooltip => tooltip.addEventListener('mouseover', this.onMouseOver));
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }

    return this;
  }
}
