'use strict';

window.synchronizeFields = function (element1, element2, array1, array2, property) {
  element1.addEventListener('change', function () {
    var i = 0;
    while (array1[i] !== element1.value) {
      i++;
    }
    element2[property] = array2[i];
    console.log('ура!');
  });
};
