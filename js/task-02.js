const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const arr = [];

ingredients.forEach(el => {
  const listItem = document.createElement('li');
  listItem.classList.add('.item');
  listItem.textContent = el;
  arr.push(listItem);
});

ingredientsList.append(...arr);
console.log(ingredientsList);
