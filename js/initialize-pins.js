'use strict';

window.initializePins = (function () {
  var map = document.querySelector('.tokyo__pin-map');
  var dialogClose = document.querySelector('.dialog__close');

  // навешиваем событие по клику на карту
  map.addEventListener('click', function (evt) {
    window.togglePins.activatePin(evt, map);
  });

  // навешиваем событие по нажатию enter на карту
  map.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      window.togglePins.activatePin(evt, map);
    }
  });

  // навешиваем событие по клику на крестик диалога
  dialogClose.addEventListener('click', function (evt) {
    window.togglePins.deactivatePin();
  });

  // навешиваем событие по нажатию enter на крестик диалога, когда он в фокусе
  dialogClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      window.togglePins.deactivatePin();
    }
  });

})();
