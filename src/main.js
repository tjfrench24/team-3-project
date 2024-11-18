import { navigate } from "./scripts/navigation.js";
import { buildCalendar } from "./scripts/calendar.js";
import { initializeWorkouts, toggleComplete } from "./scripts/workout.js";
import { initHomeView } from "./home.js";
import { addTodayWorkout, buildCalendar } from "./scripts/calendar.js";

let currentDate = new Date();

document.addEventListener("DOMContentLoaded", () => {
    initHomeView();
    document
        .getElementById("login")
        .addEventListener("click", () => navigate("loginView"));
    document
        .getElementById("home")
        .addEventListener("click", () => {
          navigate("homeView");
          initHomeView();
        });
    document
        .getElementById("calendar")
        .addEventListener("click", () => navigate("calendarView", currentDate, buildCalendar));
    document
        .getElementById("graph")
        .addEventListener("click", () => navigate("graphView"));
    document
        .getElementById("profile")
        .addEventListener("click", () => navigate("profileView"));

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username && password) {
            alert(`Welcome, ${username}!`);
            navigate("homeView");
            initHomeView();
        } else {
            alert("Please enter both username and password.");
        }
        });
    }

    document.getElementById("prevMonth").addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        buildCalendar(currentDate);
    });
    document.getElementById("nextMonth").addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        buildCalendar(currentDate);
    });

    window.toggleComplete = toggleComplete;
    addTodayWorkout()
    navigate("loginView");
});
