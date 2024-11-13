document.addEventListener("DOMContentLoaded", () => {
    function navigate(viewId) {
        // Hide all views
        document.querySelectorAll(".view").forEach((view) => {
            view.style.display = "none";
        });

        // Show requested view
        const requestedView = document.getElementById(viewId);
        if (requestedView) {
            requestedView.style.display = "block";
        }

        // Build the calendar when calendarView is shown
        if (viewId === "calendarView") {
            build();
        }
    }

    // Event listeners for all page buttons
    document.getElementById("login").addEventListener("click", () => navigate("loginView"));
    document.getElementById("home").addEventListener("click", () => navigate("homeView"));
    document.getElementById("calendar").addEventListener("click", () => navigate("calendarView"));
    document.getElementById("graph").addEventListener("click", () => navigate("graphView"));
    document.getElementById("profile").addEventListener("click", () => navigate("profileView"));

    // Handle login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent page reload
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Simple validation
            if (username && password) {
                alert(`Welcome, ${username}!`);
                // Navigate to the home view after successful login
                navigate("homeView");
            } else {
                alert("Please enter both username and password.");
            }
        });
    }

    // Start with the login view
    navigate("loginView");
});

// Function to print clicked grid item
const printMe = (i, j) => {
    console.log("You clicked on (" + (i + 1) + ", " + (j + 1) + ")");
    let day = j+1+(i*7)
    if(day===1){
        document.querySelectorAll(".view").forEach((view)=>{
            view.style.display = "none"
        })
        let workoutView = document.getElementById("workoutView")
        if(workoutView){
            workoutView.style.display = "block"
        }
    }
    document.getElementById("selected-date").textContent = `Day ${day}`
    initializeWorkouts()
};

// Function to build the calendar grid
const build = () => {
    const numCols = 7,
        numRows = 5,
        theGrid = document.getElementById("theGrid");

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let square = document.createElement("div");
            let day = 7 * i + j;
            let text = document.createTextNode(String(day % 31 + 1));
            square.appendChild(text);

            square.classList.add("grid-item");
            square.classList.add("white");
            square.onclick = function () {
                printMe(i, j);
            };
            theGrid.appendChild(square);
        }
    }
};

//Function to build the workout
function initializeWorkouts(){
    const workouts = [
        {
            name: "press-up",
            sets: "4 sets of 12 reps",
            description: "Maintain standard posture",
            calories: 120 
        },
        {
            name: "squat",
            sets: "4 sets of 12 reps",
            description: "Feet shoulder width apart",
            calories: 150
        },
        {
            name: "flat support",
            sets: "4 sets of 30 seconds",
            description: "Keep your body straight",
            calories: 80
        }
    ];

    const workoutList = document.getElementById('workout-list');
    if(!workoutList){
        return
    }
    workoutList.innerHTML = ''
    workouts.forEach(workout => {
        let workoutItem = document.createElement('div');
        workoutItem.className = 'workout-item';
        workoutItem.innerHTML = `
            <h3>${workout.name} (${workout.calories} calories)</h3>
            <p>${workout.sets}</p>
            <p>${workout.description}</p>
            <button onclick="toggleComplete(this, ${workout.calories})">Finish</button>
        `;
        workoutList.appendChild(workoutItem);
    });
};
//Function for calculate calories
let totalCalories = 0;
window.toggleComplete = function(button, calories) {
    const workoutItem = button.parentElement;
    workoutItem.classList.toggle('completed');
    if(workoutItem.classList.contains('completed')) {
        button.textContent = 'Not yet';
        totalCalories += calories; 
    } else {
        button.textContent = 'Finish';
        totalCalories -= calories;
    }
    document.getElementById('calories-count').textContent = totalCalories;
}