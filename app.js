
function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "admin" && password === "password123") {
        alert("Добро пожаловать, " + username + "!");
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Неправильное имя пользователя или пароль.";
        error.style.display = "block";
    }
}
