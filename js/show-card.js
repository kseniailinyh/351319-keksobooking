'use strict';

window.showCard = (function () {
  var dialog = document.querySelector('.dialog');
  var DIALOG_VISIBILITY_CLASS_NAME = 'invisible';

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

  // если нажали esc, закрываем диалог
  function deactivatePinByEsc(evt) {
    if (window.utils.isEscKeyCode(evt)) {
      window.togglePins.deactivatePin();
    }
  }

  return {
    showDialog: showDialog,
    hideDialog: hideDialog,
    deactivatePinByEsc: deactivatePinByEsc
  };

})();
