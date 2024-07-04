const form = document.getElementById("reservation__form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("reservation__form-status");
    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
			setTimeout(() => {
                status.classList.add("fade-out");
            }, 1000);
            setTimeout(() => {
                status.innerHTML = "";
                status.classList.remove("fade-out");
            }, 2000);
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
        }
    } catch {
        status.innerHTML = "Oops! There was a problem submitting your form";
    }
}
form.addEventListener("submit", handleSubmit);

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address!");
        email.classList.add("form-validate");
        emailError.textContent = "Please enter a valid email address!";
        emailError.classList.add("active");
    } else {
        email.setCustomValidity("");
        email.classList.remove("form-validate");
        emailError.textContent = "";
        emailError.classList.remove("active");
    }
});

const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

phone.addEventListener("input", () => {
    const phoneRegex = /^\+?[0-9\s\-\(\)]+$/;
    const minLength = 10;
    const maxLength = 15;

    if (!phoneRegex.test(phone.value) || phone.value.length < minLength || phone.value.length > maxLength) {
        phone.setCustomValidity("Please enter a valid phone number!");
        phone.classList.add("form-validate");
        phoneError.textContent = `Please enter a valid phone number!`;
        phoneError.classList.add("active");
    } else {
        phone.setCustomValidity("");
        phone.classList.remove("form-validate");
        phoneError.textContent = "";
        phoneError.classList.remove("active");
    }
});


const datetime = document.getElementById("datetime");
const datetimeError = document.getElementById("datetimeError");

datetime.addEventListener("input", () => {
    const datetimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

    if (!datetimeRegex.test(datetime.value)) {
        datetime.setCustomValidity("Please enter a valid date and time in the format YYYY-MM-DD HH:MM!");
        datetime.classList.add("form-validate");
        datetimeError.textContent = "Please enter a valid date and time in the format YYYY-MM-DD HH:MM!";
        datetimeError.classList.add("active");
    } else {
        datetime.setCustomValidity("");
        datetime.classList.remove("form-validate");
        datetimeError.textContent = "";
        datetimeError.classList.remove("active");
    }
});





