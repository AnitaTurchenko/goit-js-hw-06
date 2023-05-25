const formEl = document.querySelector(".login-form");
const submitEl = formEl.lastElementChild;

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert(`Заповніть всі форми`);
    }
    const user = {
        email: email.value,
        password: password.value,
    };
 console.log(user);
 formEl.reset();
};  