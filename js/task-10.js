function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и
//  нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
const controlsEl = document.querySelector('#controls');
const input = document.querySelector('#controls > input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('#boxes');

create.addEventListener('click', createHandler);
destroy.addEventListener('click', destroyBoxes);

function createHandler(amount) {
  amount = Number(input.value);

  return createBoxes(amount);
}

let boxSize = 30;

function createBoxes(amount) {
  const boxElements = [];

  for (let i = 0; i < amount; i++) {
    const boxMarkup = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxSize += 10;
    boxElements.push(boxMarkup);
  }

  boxes.insertAdjacentHTML('beforeend', boxElements.join(''));
}

function destroyBoxes() {
  boxes.innerHTML = '';
  boxSize = 30;
}
