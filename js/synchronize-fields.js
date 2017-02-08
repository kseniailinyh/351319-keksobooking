'use strict';

window.synchronizeFields = function (element1, element2, array1, array2, property) {
  element1.addEventListener('change', function () {
    var index = array1.indexOf(element1.value);
    element2[property] = array2[index];
  });
};
