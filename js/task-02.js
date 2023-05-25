const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  let element = document.createElement("li");
  element.classList = "item";
  element.textContent = ingredient;
  ingredientsEl.append(element);
})
