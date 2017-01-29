'use strict';

var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
var dialogClose = dialog.querySelector('.dialog__close');

// навешиваем каждому пину событие
for (var i = 0; i < pins.length; i++) {
  clickControl(pins[i]);
}

// навешиваем событие по клику на крестик
dialogClose.addEventListener('click', function () {
  // по клику на крестик закрываем диалог, то есть добавляем класс .invisible
  dialog.classList.add('invisible');
  // идем по всем пинам и удаляем у всех .pin--active
  for (var j = 0; j < pins.length; j++) {
    pins[j].classList.remove('pin--active');
  }
});

function clickControl(element) {
  // добавляем событие, которое по клику будет переключать пины
  element.addEventListener('click', function () {
    togglePin(element);
  });
}

function togglePin(element) {
  // идем по пинам и удаляем у всех .pin--active
  for (var n = 0; n < pins.length; n++) {
    pins[n].classList.remove('pin--active');
  }
  // делаем текущий пин активным — добавляем ему .pin--active
  element.classList.add('pin--active');
  // показываем диалоговое окошко
  dialog.classList.remove('invisible');
}

var title = document.querySelector('#title');
var titleValidation = {
  required: true,
  minLength: 30,
  maxLength: 100
};
setValidation(title, titleValidation);

var price = document.querySelector('#price');
var priceValidation = {
  required: true,
  min: 1000,
  max: 1000000
};
setValidation(price, priceValidation);

var address = document.querySelector('#address');
var addressValidation = {
  required: true
};
setValidation(address, addressValidation);

function setValidation(element, validation) {
  // идем по свойствам объекта validation, проверяем, есть ли в объекте такое свойство,
  // если да, присваиваем его значение соответствующему свойству элемента формы
  for (var prop in validation) {
    if (validation.hasOwnProperty(prop)) {
      element[prop] = validation[prop];
    }
  }
}

var time = document.querySelector('#time');
var timeout = document.querySelector('#timeout');

// при изменении значения поля time в timeout выделяется такое же и наоборот
syncTime(time, timeout);
syncTime(timeout, time);

function syncTime(select1, select2) {
  select1.addEventListener('change', function () {
    select2.value = select1.value;
  });
}

var type = document.querySelector('#type');

price.addEventListener('change', function () {
  if (price.value < 1000) {
    type.value = 'Лачуга';
  } else if (price.value < 10000) {
    type.value = 'Квартира';
  } else {
    type.value = 'Дворец';
  }
});

var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');

roomNumber.addEventListener('change', function () {
  if (roomNumber.value === '1') {
    capacity.value = 'не для гостей';
  } else {
    capacity.value = '3';
  }
});
