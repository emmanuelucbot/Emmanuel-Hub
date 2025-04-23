const USERNAME = "admin";
const PASSWORD = "emmanueluc4162";

function authLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user == USERNAME && pass == PASSWORD) {
        document.getElementById("login").classList.add("hidden");
        document.getElementById("members").classList.remove("hidden");
        loadMembers();
    } else {
        document.getElementById("error").textContent = "Incorrect username or password. Please try again . . .";
    }
}