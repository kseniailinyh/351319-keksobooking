'use strict';

window.showCard = (function () {
  var DIALOG_VISIBILITY_CLASS_NAME = 'invisible';

  function show(dialog, onHideCallback) {
    dialog.classList.remove(DIALOG_VISIBILITY_CLASS_NAME);
    document.addEventListener('keydown', onHideCallback);
  }

  function hide(dialog, onHideCallback) {
    dialog.classList.add(DIALOG_VISIBILITY_CLASS_NAME);
    document.removeEventListener('keydown', onHideCallback);
  }

  return {
    show: show,
    hide: hide
  };
})();
