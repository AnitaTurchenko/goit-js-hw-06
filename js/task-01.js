const items = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const titleEl = item.firstElementChild;
  const itemsOfLists = item.lastElementChild;
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${itemsOfLists.length}`);
});