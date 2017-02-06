'use strict';

window.setValidation = function (element, validation) {
  // идем по свойствам объекта validation, проверяем, есть ли в объекте такое свойство,
  // если да, присваиваем его значение соответствующему свойству элемента формы
  for (var prop in validation) {
    if (validation.hasOwnProperty(prop)) {
      element[prop] = validation[prop];
    }
  }
};
