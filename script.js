const signUpForm = document.querySelector(".sign-up__form");
const signUpInput = document.querySelector(".sign-up__input");
const signUpCard = document.querySelector(".sign-up");
const successCard = document.querySelector(".success");
const successEmail = document.querySelector(".success__email");
const successButton = document.querySelector(".success__button");


signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = signUpInput.value.trim();
    if (!isValidEmail(email)) {
        showError();
        return;
    }
    showSuccess(email);
});

signUpInput.addEventListener('input', hideError);

successButton.addEventListener('click', (event) => {
    showForm();
    signUpForm.reset();
    signUpInput.focus();
});


function isValidEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}


function showError() {
    signUpForm.classList.add("sign-up__form--error");
}

function hideError() {
    signUpForm.classList.remove("sign-up__form--error");
}


function showSuccess(email) {
    successEmail.textContent = email;
    signUpCard.hidden = true;
    successCard.hidden = false;
}

function showForm() {
    signUpCard.hidden = false;
    successCard.hidden = true;
}
