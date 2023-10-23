document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    var email = this.querySelector('input[name="email"]').value;
    var password = this.querySelector('input[name="password"]').value;

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    if (!password) {
        alert("Please enter your password.");
        return;
    }

    // If both fields are filled, you can submit the form
    this.submit();
});

// Validation for the Sign Up form
document.querySelector(".signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = this.querySelector('input[name="username"]').value;
    var email = this.querySelector('input[name="email"]').value;
    var password = this.querySelector('input[name="password"]').value;
    var confirmPassword = this.querySelector('input[name="confirm password"]').value;

    if (!username) {
        alert("Please enter a username.");
        return;
    }

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    if (!password) {
        alert("Please enter a password.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and confirm password do not match.");
        return;
    }

    // If all fields are filled and passwords match, you can submit the form
    this.submit();
});