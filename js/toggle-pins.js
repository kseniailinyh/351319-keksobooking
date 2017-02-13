'use strict';

window.togglePins = (function () {
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');

  var DIALOG_VISIBILITY_CLASS_NAME = 'invisible';
  var ACTIVE_PIN_CLASS_NAME = 'pin--active';
  
  // если нажали esc, закрываем диалог
  function deactivatePinByEsc(evt) {
    if (window.utils.isEscKeyCode(evt)) {
      deactivatePin();
    }
  }

  // активируем пин
  function activatePin(evt, map) {
  	var target = evt.target;
      while (target !== map) {
        if (target.classList.contains('pin')) {
          removeActivePin();
          showDialog();
          target.classList.add(ACTIVE_PIN_CLASS_NAME);
          return;
        }
        target = target.parentNode;
      }
  }

  // деактивируем пин и закрываем диалог
  function deactivatePin() {
    removeActivePin();
    hideDialog();
  }

  // показываем диалог, плюс навешиваем событие по нажатию esc
  function showDialog() {
    dialog.classList.remove(DIALOG_VISIBILITY_CLASS_NAME);
    document.addEventListener('keydown', deactivatePinByEsc);
  }

  // прячем диалог, плюс убираем событие по нажатию esc
  function hideDialog() {
    dialog.classList.add(DIALOG_VISIBILITY_CLASS_NAME);
    document.removeEventListener('keydown', deactivatePinByEsc);
  }

  // делаем пины неактивными
  function removeActivePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove(ACTIVE_PIN_CLASS_NAME);
    }
  }

  return {
    activatePin: activatePin,
    deactivatePin: deactivatePin
  };

})();
