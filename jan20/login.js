window.onload = function () {
    var form = document.getElementById('Loginform');
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('pswd');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var loginForm = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };
        if (validateForm(loginForm)) {
            // Proceed with form submission or further processing
            console.log('Form is valid');
        }
    });
};
function validateForm(form) {
    if (!validateUsername(form.username)) {
        alert('Username should not be empty and must be more than 2 characters.');
        return false;
    }
    if (!validateEmail(form.email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (!validatePassword(form.password)) {
        alert('Password must be at least 6 characters long.');
        return false;
    }
    return true;
}
function validateUsername(username) {
    return username.length > 2;
}
function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
function validatePassword(password) {
    return password.length >= 6;
}
