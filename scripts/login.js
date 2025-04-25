const USERNAME = "admin";
const PASSWORD = "emmanueluc4162";

function authLogin() {
    const user = document.getElementById("username").value.toLowerCase();
    const pass = document.getElementById("password").value;

    if (user == USERNAME && pass == PASSWORD) {
        window.location.href = "main.html"
    } else {
        document.getElementById("error").textContent = "Incorrect username or password. Please try again . . .";
    }
}