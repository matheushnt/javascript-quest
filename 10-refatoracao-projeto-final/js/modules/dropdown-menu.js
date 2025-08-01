import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'ativo';

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => element.classList.remove('ativo'));
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(evento => {
        menu.addEventListener(evento, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();

      return this;
    }
  }
}
