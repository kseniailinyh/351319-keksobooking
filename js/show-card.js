'use strict';

window.showCard = function (element, className, func) {
  var DIALOG_VISIBILITY_CLASS_NAME = 'invisible';


  function onHide() {

  }

  function show(dialog, onHideCallback) {
    dialog.classList.remove(DIALOG_VISIBILITY_CLASS_NAME);
    document.addEventListener('keydown', func);
  }

  function hide(dialog) {
    dialog.classList.add(DIALOG_VISIBILITY_CLASS_NAME);
  }

  return {
    show: show,
    hide: hide
  };
};
