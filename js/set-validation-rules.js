'use strict';

window.setValidationRules = function (element, rules) {
  // идем по rules, проверяем, есть ли в объекте такое свойство,
  // если да, устанавливаем атрибуту элемента соответствующее значение
  for (var property in rules) {
    if (rules.hasOwnProperty(property)) {
      element.setAttribute(property, rules[property]);
    }
  }
};
