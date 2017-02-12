'use strict';

window.utils = (function () {
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');

  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  // если нажали esc, закрываем диалог
  function deactivatePinByEsc(evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      deactivatePin();
    }
  }

  // деактивируем пин и закрываем диалог
  function deactivatePin() {
    removeActivePin();
    hideDialog();
  }

  // показываем диалог, плюс навешиваем событие по нажатию esc
  function showDialog() {
    dialog.classList.remove('invisible');
    document.addEventListener('keydown', deactivatePinByEsc);
  }

  // прячем диалог, плюс убираем событие по нажатию esc
  function hideDialog() {
    dialog.classList.add('invisible');
    document.removeEventListener('keydown', deactivatePinByEsc);
  }

  // делаем пины неактивными
  function removeActivePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove('pin--active');
    }
  }

  return {
    // проверяем, нажали ли enter
    isActivationEvent: function (evt) {
      return evt.keyCode === ENTER_KEY_CODE;
    },
    // активируем пин
    activatePin: function (evt, map) {
      var target = evt.target;
      while (target !== map) {
        if (target.classList.contains('pin')) {
          removeActivePin();
          showDialog();
          target.classList.add('pin--active');
          return;
        }
        target = target.parentNode;
      }
    },
    // деактивируем пин
    deactivatePin: deactivatePin
  };

})();
