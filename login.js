// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     let isValid = true;

    
//     const username = document.getElementById('username').value;
//     const usernameError = document.getElementById('usernameError');
//     if (username === '') {
//         usernameError.style.display = 'block';
//         isValid = false;
//     } else {
//         usernameError.style.display = 'none';
//     }

    
//     const password = document.getElementById('password').value;
//     const passwordError = document.getElementById('passwordError');
//     if (password === '') {
//         passwordError.style.display = 'block';
//         isValid = false;
//     } else {
//         passwordError.style.display = 'none';
//     }

//     if (isValid) {
//         alert('Login successful');
//     }
// });
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Validate Email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern

    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate Password
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password === '') {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        // Here you can handle the login logic, like sending the data to the server
        alert('Login successful');
    }
});