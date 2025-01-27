interface LoginForm {
    username: string;
    email: string;
    password: string;
}

window.onload = () => {
    const form = document.getElementById('Loginform') as HTMLFormElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('pswd') as HTMLInputElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const loginForm: LoginForm = {
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

function validateForm(form: LoginForm): boolean {
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

function validateUsername(username: string): boolean {
    return username.length > 2;
}

function validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validatePassword(password: string): boolean {
    return password.length >= 6;
}