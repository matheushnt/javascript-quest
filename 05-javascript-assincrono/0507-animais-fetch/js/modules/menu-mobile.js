import outsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) {
    function openMenu() {
      menuButton.classList.add('ativo');
      menuList.classList.add('ativo');

      outsideClick(menuList, eventos, () => {
        menuButton.classList.remove('ativo');
        menuList.classList.remove('ativo');
      });
    }

    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
