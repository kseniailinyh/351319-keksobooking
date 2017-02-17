'use strict';

window.initializePins = (function () {
  var map = document.querySelector('.tokyo__pin-map');
  var dialogClose = document.querySelector('.dialog__close');
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');
  var ACTIVE_PIN_CLASS_NAME = 'pin--active';
  var DIALOG_VISIBILITY_CLASS_NAME = 'invisible';

  // активируем пин
  function activatePin(evt, map, onCardClose) {
    var target = evt.target;

    while (target !== map) {
      if (target.classList.contains('pin')) {
        removeActivePin();
        window.showCard(dialog, DIALOG_VISIBILITY_CLASS_NAME, deactivatePinByEsc);
        target.classList.add(ACTIVE_PIN_CLASS_NAME);
        target.blur();
        if (typeof onCardClose === 'function') {
          onCardClose(target);
        }
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

  // делаем пины неактивными
  function removeActivePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove(ACTIVE_PIN_CLASS_NAME);
    }
  }

  // прячем диалог, плюс убираем событие по нажатию esc
  function hideDialog() {
    dialog.classList.add(DIALOG_VISIBILITY_CLASS_NAME);
    document.removeEventListener('keydown', deactivatePinByEsc);
  }

  // если нажали esc, закрываем диалог
  function deactivatePinByEsc(evt) {
    if (window.utils.isEscKeyCode(evt)) {
      deactivatePin();
    }
  }

  // ставим фокус на элемент
  function focusOpenButton (element) {
    element.focus();
  }

  // навешиваем событие по клику на карту
  map.addEventListener('click', function (evt) {
    activatePin(evt, map);
  });

  // навешиваем событие по нажатию enter на карту, возвращаем фокус
  map.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      activatePin(evt, map, focusOpenButton);
    }
  });

  // навешиваем событие по клику на крестик диалога
  dialogClose.addEventListener('click', function (evt) {
    deactivatePin();
  });

  // навешиваем событие по нажатию enter на крестик диалога, когда он в фокусе
  dialogClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      deactivatePin();
    }
  });

})();
