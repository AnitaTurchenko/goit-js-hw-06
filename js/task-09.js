function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
});