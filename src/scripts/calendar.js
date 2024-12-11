// Array containing the names of the months
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

// Function to build the calendar grid based on the given date
export function buildCalendar(date) {
  const numCols = 7,  // Number of columns (days of the week)
        numRows = 5,  // Number of rows (weeks in a month)
        theGrid = document.getElementById("theGrid");
  const monthYearDisplay = document.getElementById("monthYearDisplay");
  const month = date.getMonth();
  const year = date.getFullYear();
  
  // Display the current month and year
  monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

  // Remove any existing children from the grid
  while (theGrid.firstChild) {
      theGrid.removeChild(theGrid.firstChild);
  }

  // Determine the first day of the month and the number of days in the month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = numCols * numRows;

  // Add empty squares for the days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
      const emptySquare = document.createElement("div");
      emptySquare.classList.add("grid-item");
      theGrid.appendChild(emptySquare);
  }

  // Add squares for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
      const square = document.createElement("div");
      square.textContent = day;
      square.classList.add("grid-item", "white");  // Add classes for styling
      theGrid.appendChild(square);
  }

  // Add empty squares to fill the rest of the grid
  const remainingCells = totalCells - firstDay - daysInMonth;
  for (let i = 0; i < remainingCells; i++) {
      const emptySquare = document.createElement("div");
      emptySquare.classList.add("grid-item");
      theGrid.appendChild(emptySquare);
  }
}

// Function to add an event listener for today's workout
export function addTodayWorkout() {
  let grid = document.getElementById("theGrid");

  // Add event listener to the grid to switch views on click
  grid.addEventListener("click", e => {
      document.getElementById("calendarView").style.display = 'none';
      document.getElementById("workoutView").style.display = 'block';
  });
}
