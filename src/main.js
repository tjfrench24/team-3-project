const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDate = new Date();

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
      buildCalendar(currentDate);
    }
  }

  // Event listeners for all page buttons
  document
    .getElementById("login")
    .addEventListener("click", () => navigate("loginView"));
  document
    .getElementById("home")
    .addEventListener("click", () => navigate("homeView"));
  document
    .getElementById("calendar")
    .addEventListener("click", () => navigate("calendarView"));
  document
    .getElementById("graph")
    .addEventListener("click", () => navigate("graphView"));
  document
    .getElementById("profile")
    .addEventListener("click", () => navigate("profileView"));

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
};

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  buildCalendar(currentDate);
});
document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  buildCalendar(currentDate);
});

// Function to build the calendar grid
const buildCalendar = (date) => {
  const numCols = 7,
    numRows = 5,
    theGrid = document.getElementById("theGrid");
  const monthYearDisplay = document.getElementById("monthYearDisplay");
  const month = date.getMonth();
  const year = date.getFullYear();
  monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

  // Clear existing grid items
  while (theGrid.firstChild) {
    theGrid.removeChild(theGrid.firstChild);
  }

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = numCols * numRows;
  const today = new Date();

  for (let i = 0; i < firstDay; i++) {
    let emptySquare = document.createElement("div");
    emptySquare.classList.add("grid-item");
    theGrid.appendChild(emptySquare);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    let square = document.createElement("div");
    let text = document.createTextNode(day);
    square.appendChild(text);
    square.classList.add("grid-item");
    square.classList.add("white");

    // Highlight the current date
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    ) {
      square.classList.add("current-date");
    }
    theGrid.appendChild(square);
  }
  // Fill in remaining empty cells to complete the grid
  const remainingCells = totalCells - firstDay - daysInMonth;
  for (let i = 0; i < remainingCells; i++) {
    let emptySquare = document.createElement("div");
    emptySquare.classList.add("grid-item");
    theGrid.appendChild(emptySquare);
  }
};
