import { navigate } from "./scripts/navigation.js";
import { addTodayWorkout, buildCalendar } from "./scripts/calendar.js";
import { initializeWorkouts, toggleComplete } from "./scripts/workout.js";
import { initHomeView } from "./home.js";

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
            login();
            //navigate("homeView");
            toggleButtons(false);
        });

    document
        .getElementById("register")
        .addEventListener("click", () => {
            //register();
            navigate('registrationView');
        });
    document
        .getElementById("registerButton")
        .addEventListener("click", () => {
            register();
        })
    
    document
        .getElementById("home")
        .addEventListener("click", () => {
          navigate("homeView");
          initHomeView();
        });
    document
        .getElementById("saveProfileButton")
        .addEventListener("click", () => {
            saveProfile();
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
            logout();
    });

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        if (username && password) {
            alert(`Welcome, ${username}!`);
            //navigate("homeView");
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
    initializeWorkouts();
    addTodayWorkout();
    buildCalendar(currentDate);
    navigate("loginView");


    async function register() {
        const username = document.getElementById("registerUsername").value;
        const password = document.getElementById("registerPassword").value;
        const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if(response.status === 200) navigate("loginView");
        console.log(JSON.stringify(data, null, 2));
        alert(data.message);
    }

    async function login() {
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        console.log(username, password)
        const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        const message = JSON.parse(data.message);

        //assigne fitness profile values based on database data
        document.getElementById("height").value = message.height;
        document.getElementById("weight").value = message.weight;
        document.getElementById("cardioLevel").value = message.cardioLevel;
        document.getElementById("liftingLevel").value = message.liftingLevel;
        document.getElementById("goal1").value = message.goal1;
        document.getElementById("goal2").value = message.goal2;
        document.getElementById("goal3").value = message.goal3;
        if(response.status === 200) navigate("homeView");
    }

    async function logout() {
        const response = await fetch("/logout");
        const data = await response.json();
        if(response.status === 200) {
            navigate("loginView");
            toggleButtons(true);
            document.getElementById("loginUsername").value = '';
            document.getElementById("loginPassword").value = '';
        }
        console.log(JSON.stringify(data, null, 2));
        alert(data.message);
    }

    // save fitness profile
    async function saveProfile() {
        // create object to send back to frontend
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;
        const cardioLevel = document.getElementById("cardioLevel").value;
        const liftingLevel = document.getElementById("liftingLevel").value;
        const goal1 = document.getElementById("goal1").value;
        const goal2 = document.getElementById("goal2").value;
        const goal3 = document.getElementById("goal3").value;

        // create fetch request
        const response = await fetch("http://localhost:3001/saveProfile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ height, weight, cardioLevel, liftingLevel, goal1, goal2, goal3 }),
        });
        const data = await response.json();
    }

});
