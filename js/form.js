'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');

(function initPinClicks() {
  // навешиваем каждому пину событие по клику
  for (var i = 0; i < pins.length; i++) {
    pins[i].addEventListener('click', function (pin) {
      return function () {
        removeActivePin();
        pin.classList.add('pin--active');
        dialog.classList.remove('invisible');
      };
    }(pins[i])
    );
  }
})();

// навешиваем событие по клику на крестик
dialogClose.addEventListener('click', function () {
  // по клику на крестик закрываем диалог, то есть добавляем класс .invisible
  dialog.classList.add('invisible');
  // и убираем активный пин
  removeActivePin();
});

function removeActivePin() {
  for (var i = 0; i < pins.length; i++) {
    pins[i].classList.remove('pin--active');
  }
}

var price = document.querySelector('#price');
var time = document.querySelector('#time');
var timeout = document.querySelector('#timeout');
var type = document.querySelector('#type');
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');

// при изменении значения поля time в timeout выделяется такое же и наоборот
syncTime(time, timeout);
syncTime(timeout, time);

function syncTime(select1, select2) {
  select1.addEventListener('change', function () {
    select2.value = select1.value;
  });
}

// если менятся цена, получаем для нее тип жилья
price.addEventListener('change', function () {
  type.value = getHouseTypeByPrice(price.value);
});

function getHouseTypeByPrice(priceOfHouse) {
  if (priceOfHouse < 1000) {
    return 'Лачуга';
  } else if (priceOfHouse < 10000) {
    return 'Квартира';
  } else {
    return 'Дворец';
  }
}

roomNumber.addEventListener('change', function () {
  if (roomNumber.value === '1') {
    capacity.value = 'не для гостей';
  } else {
    capacity.value = '3';
  }
});
