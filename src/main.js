// main.js
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login");
    const homeButton = document.getElementById("home");
    const loginForm = document.getElementById("loginForm");

    const loginView = document.getElementById("loginView");
    const homeView = document.getElementById("homeView");

    // Initially show the login view
    loginView.style.display = "block";
    homeView.style.display = "none";

    // Handle login form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple validation check (for demo purposes)
        if (username && password) {
            alert(`Welcome, ${username}!`);
            // Redirect to the home view
            loginView.style.display = "none";
            homeView.style.display = "block";
        } else {
            alert("Please enter both username and password.");
        }
    });

    // Navigation button to go back to login
    loginButton.addEventListener("click", () => {
        loginView.style.display = "block";
        homeView.style.display = "none";
    });

    // Navigation button to go to home
    homeButton.addEventListener("click", () => {
        loginView.style.display = "none";
        homeView.style.display = "block";
    });
});