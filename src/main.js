import { navigate } from "./scripts/navigation.js";
import { buildCalendar } from "./scripts/calendar.js";
import { initializeWorkouts, toggleComplete } from "./scripts/workout.js";
import { initHomeView } from "./home.js";
import { addTodayWorkout } from "./scripts/calendar.js";
//import { login, logout, loginWithGoogle, register } from "../backend/controllers/userController.js";

let currentDate = new Date();

document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll("nav button");
  function toggleButtons(enabled) {
    buttons.forEach((b) => { 
      if(b.id !== "login") b.disabled = enabled;
      if(b.id === "login") b.disabled = !enabled;
    });
  }
  toggleButtons(true);

    initHomeView();
    document
        .getElementById("loginButton")
        .addEventListener("click", () => {
            //login();
            navigate("homeView");
            toggleButtons(false);
        });

    document
        .getElementById("register")
        .addEventListener("click", () => {
            //register();
            navigate('registrationView');
        });
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
    document
        .getElementById("logoutButton")
        .addEventListener("click", () => {
            //logout();
            navigate('loginView');
            toggleButtons(true);
            document.getElementById("loginUsername").value = '';
            document.getElementById("loginPassword").value = '';
    });

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        if (username && password) {
            alert(`Welcome, ${username}!`);
            navigate("homeView");
            initHomeView();
            toggleButtons(false);
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