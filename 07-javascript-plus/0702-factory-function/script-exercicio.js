function $$(selectedElements) {
  const elements = document.querySelectorAll('button');

  function hide() {
    elements.forEach(element => (element.style.display = 'none'));

    return this;
  }

  function show() {
    elements.forEach(element => (element.style.display = 'initial'));

    return this;
  }

  function on(onEvent, callback) {
    elements.forEach(element => element.addEventListener(onEvent, callback));

    return this;
  }

  function addClass(className) {
    elements.forEach(element => element.classList.add(className));

    return this;
  }

  function removeClass(className) {
    elements.forEach(element => element.classList.remove(className));

    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btns = $$();
btns.hide();
btns.show();

const handleClick = event => {
  console.log(event.target);
};

btns.on('click', handleClick);

btns.addClass('ativo');
btns.removeClass('ativo');
