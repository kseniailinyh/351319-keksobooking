'use strict';

window.initializePins = function () {
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');
  var dialogClose = dialog.querySelector('.dialog__close');
  var map = document.querySelector('.tokyo__pin-map');
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  map.addEventListener('click', function (evt) {
    eventHandler(evt);
  });

  map.addEventListener('keydown', function (evt) {
    if (isActivateEvent(evt)) {
      eventHandler(evt);
    }
  });

  function eventHandler(evt) {
    var target = evt.target;
    while (target !== map) {
      if (target.classList.contains('pin')) {
        activatePin(target);
        return;
      }
      target = target.parentNode;
    }
  }

  // сначала удаляем у всех pin--active, показываем диалог и добавляем к текущему pin--active
  function activatePin(activePin) {
    removeActivePin();
    showDialog();
    activePin.classList.add('pin--active');
  }

  // проверяем, было ли нажатие на enter
  function isActivateEvent(evt) {
    return evt.keyCode === ENTER_KEY_CODE;
  }

  // если было нажатие на esc, прячем setup
  function setupKeydownHandler(evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      removeActivePin();
      hideDialog();
    }
  }

  function showDialog() {
    dialog.classList.remove('invisible');
    document.addEventListener('keydown', setupKeydownHandler);
  }

  function hideDialog() {
    dialog.classList.add('invisible');
    document.removeEventListener('keydown', setupKeydownHandler);
  }

  // навешиваем событие по клику на крестик
  dialogClose.addEventListener('click', function (evt) {
    hideDialog();
    removeActivePin();
  });

  // навешиваем событие по нажатию enter на крестик, когда он в фокусе
  dialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      hideDialog();
      removeActivePin();
    }
  });

  function removeActivePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove('pin--active');
    }
  }
}();
