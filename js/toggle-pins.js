'use strict';

window.togglePins = (function () {
  var pins = document.querySelectorAll('.pin');
  var ACTIVE_PIN_CLASS_NAME = 'pin--active';

  // активируем пин
  function activatePin(evt, map) {
    var target = evt.target;
    while (target !== map) {
      if (target.classList.contains('pin')) {
        removeActivePin();
        window.showCard.showDialog();
        target.classList.add(ACTIVE_PIN_CLASS_NAME);
        return;
      }
      target = target.parentNode;
    }
  }

  // деактивируем пин и закрываем диалог
  function deactivatePin() {
    removeActivePin();
    window.showCard.hideDialog();
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
