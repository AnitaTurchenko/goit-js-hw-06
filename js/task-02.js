const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");
let elements = [];
ingredients.forEach(ingredient => {
  let element = document.createElement("li");
  element.classList = "item";
  element.textContent = ingredient;
  elements.push(element);
});
ingredientsEl.append(...elements);
