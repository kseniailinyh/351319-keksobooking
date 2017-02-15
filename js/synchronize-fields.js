'use strict';

window.synchronizeFields = function (element1, element2, array1, array2, property) {
  function changePropertyValue() {
    // если первый элемент изменился, находим соответствующее ему значение
    // в массиве значений второго и присваиваем значение второму элементу
    var index = array1.indexOf(element1.value);
    element2[property] = array2[index];
  }

  element1.addEventListener('change', changePropertyValue);
};
