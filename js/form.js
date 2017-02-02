'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

(function initPinClicks() {
  // навешиваем каждому пину событие по клику и по нажатию enter
  for (var i = 0; i < pins.length; i++) {
    pins[i].addEventListener('click', function (pin) {
      return function () {
        initPinEvent(pin);
      };
    }(pins[i])
    );

    pins[i].addEventListener('keydown', function (pin, evt) {
      return function () {
        alert('ok');
        if (isActivateEvent(evt)) {
          initPinEvent(pin);
        }
      };
    }(pins[i])
    );
  }
})();

function initPinEvent(activePin) {
  removeActivePin();
  showDialog();
  activePin.classList.add('pin--active');
}

// проверяем, было ли нажатие на enter
function isActivateEvent(evt) {
  return evt.keyCode === ENTER_KEY_CODE;
}

// если было нажатие на esc, прячем setup
function setupKeydownHandler(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    removeActivePin();
    hideDialog();
  }
}

function showDialog() {
  dialog.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
}

function hideDialog() {
  dialog.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
}

// навешиваем событие по клику на крестик
dialogClose.addEventListener('click', function (evt) {
  hideDialog();
  removeActivePin();
});

// навешиваем событие по нажатию enter на крестик, когда он в фокусе
dialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    hideDialog();
    removeActivePin();
  }
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
