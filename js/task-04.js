let valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;

decrementBtn.addEventListener("click", handlerSmallerValue);
incrementBtn.addEventListener("click", handlerBiggerValue);


function handlerBiggerValue() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

function handlerSmallerValue() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};