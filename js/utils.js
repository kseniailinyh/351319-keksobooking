'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  function isKeyboardEvent(evt) {
    return typeof evt.keyCode !== 'undefined';
  }

  function isEnterKeyCode(evt) {
    return isKeyboardEvent(evt) && evt.keyCode === ENTER_KEY_CODE;
  }

  function isEscKeyCode(evt) {
    return isKeyboardEvent(evt) && evt.keyCode === ESC_KEY_CODE;
  }

  return {
    isEnterKeyCode: isEnterKeyCode,
    isEscKeyCode: isEscKeyCode
  };
})();
