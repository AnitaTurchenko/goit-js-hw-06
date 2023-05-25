const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
    const lengthEl = +textInput.getAttribute("data-length");

    if (lengthEl === event.currentTarget.value.length) {
        textInput.classList.remove("invalid"); 
        textInput.classList.add("valid");
    }
    else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }  
});