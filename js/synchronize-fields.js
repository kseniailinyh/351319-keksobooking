'use strict';

window.synchronizeFields = function (element1, element2, array1, array2, syncCallback) {
  element1.addEventListener('change', function () {
    var index = array1.indexOf(element1.value);
    syncCallback(element2, array2[index]);
  });
};
