document.addEventListener("DOMContentLoaded", () => {
    // Registration
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const users = JSON.parse(localStorage.getItem("users") || "[]");
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration successful! Please login.");
            window.location.href = "index.html";
        });
    }

    // Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const user = users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                alert("Login successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password.");
            }
        });
    }
});
