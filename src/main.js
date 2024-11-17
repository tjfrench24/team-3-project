import { navigate } from "./scripts/navigation.js";
import { buildCalendar } from "./scripts/calendar.js";
import { initializeWorkouts, toggleComplete } from "./scripts/workout.js";

let currentDate = new Date();

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((b) => { 
    if(b.id === "login") b.disabled = false;
  });

  document
    .getElementById("login")
    .addEventListener("click", () => navigate("loginView"));
  document
    .getElementById("home")
    .addEventListener("click", () => navigate("homeView"));
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
        buttons.forEach((b) => { //enables each button if user has logged in
          if(b.id !== "login") b.disabled = false;
          if(b.id === "login") b.disabled = true;
        });
        alert(`Welcome, ${username}!`);
        navigate("homeView");
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

  navigate("loginView");
});
