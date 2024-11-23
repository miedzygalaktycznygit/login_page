document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("form");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");
    const tekst = document.getElementById("tekst");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (form) {
        form.addEventListener("submit", function(event) {
            if (!emailPattern.test(emailInput.value)) {
                event.preventDefault();
                emailInput.style.border = "1px solid red";
                emailInput.style.background = "rgba(221, 161, 161, 0.651)";
                emailInput.style.color = "red";
                message.style.display = "block";
            } else {
                localStorage.setItem('email', emailInput.value);
            }
        });
    }

    if (tekst) {
        const email = localStorage.getItem('email');
        if (email) {
            tekst.innerHTML = "A confirmation email has been sent to " + email + ". Please open it and click the button inside to confirm your subscription.";
        }
    }
});