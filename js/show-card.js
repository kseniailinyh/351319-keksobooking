'use strict';

window.showCard = function (element, className, func) {
  // удаляем у элемента класс и навешиваем событие по нажатию клавиши
  element.classList.remove(className);
  document.addEventListener('keydown', func);

  function show(dialog, onHideCallback) {

  }

  function hide() {
  	
  }

  return {
  	show: show,
  	hide: hide
  }
};
