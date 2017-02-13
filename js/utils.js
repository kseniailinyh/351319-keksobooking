'use strict';

window.utils = {
  ENTER_KEY_CODE: 13,
  ESC_KEY_CODE: 27,
  isEnterKeyCode: function (evt) {
    return evt.keyCode === this.ENTER_KEY_CODE;
  },
  isEscKeyCode: function (evt) {
    return evt.keyCode === this.ESC_KEY_CODE;
  }
};
