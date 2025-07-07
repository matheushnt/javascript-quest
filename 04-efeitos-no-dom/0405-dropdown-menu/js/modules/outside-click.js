export default function outsideClick(elemento, eventos, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!elemento.hasAttribute(outside)) {
    eventos.forEach((evento) => {
      html.addEventListener(evento, handleOutsideClick);
    });
    elemento.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {
    if (!elemento.contains(event.target)) {
      elemento.removeAttribute(outside);
      eventos.forEach((evento) => {
        html.removeEventListener(evento, handleOutsideClick);
      });
      callback();
    }
  }
}
