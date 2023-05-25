function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesArray = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = document.querySelector("input").value;
  createBoxes(amount);
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${i * 10 + 30}px`;
    box.style.height = `${i * 10 + 30}px`;
    box.classList.add('box');

    boxesArray.appendChild(box);
  }; 
};

function destroyBoxes() {
  boxesArray.innerHTML = "";
};
