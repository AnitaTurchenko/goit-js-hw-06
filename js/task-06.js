const textInput = document.querySelector("#validation-input");
const lengthEl = +textInput.getAttribute("data-length");

textInput.addEventListener("blur", (event) => {
    if (lengthEl === event.currentTarget.value.length) {
        textInput.classList.remove("invalid"); 
        textInput.classList.add("valid");
    }
    else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }  
});