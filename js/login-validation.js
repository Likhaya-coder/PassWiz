function validateForm() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var emailValue = email.value;
    var passwordValue = password.value;
    
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;

    var isValid = true;

    if (emailRegex.test(emailValue)) {
        email.style.borderBottom = "2px solid green";
    } else {
        email.style.borderBottom = "2px solid red";
        isValid = false;
    }

    if (passwordRegex.test(passwordValue)) {
        password.style.borderBottom = "2px solid green";
    } else {
        password.style.borderBottom = "2px solid red";
        isValid = false;
    }

    if (isValid) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password format");
    }

    return isValid;
}