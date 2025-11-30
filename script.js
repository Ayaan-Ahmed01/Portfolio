// contact.js - Contact Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Name validation
        if (name === "") {
            alert("Name must not be empty.");
            return;
        }

        // Email validation
        if (!email.includes("@")) {
            alert("Please enter a valid email containing '@'.");
            return;
        }

        // Message validation
        if (message.length < 10) {
            alert("Your message must be at least 10 characters long.");
            return;
        }

        // If all validations pass
        alert("Thanks! Your response has been recorded.");
        form.reset(); 
    });
});
