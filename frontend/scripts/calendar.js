const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function createGridCell(content = "", ...classes) {
  const cell = document.createElement("div");
  cell.classList.add("grid-item", ...classes);

  if (content) {
    // Create the header container
    const header = document.createElement("div");
    header.classList.add("grid-item-header");

    // Create a span for the day number
    const dayNumber = document.createElement("span");
    dayNumber.textContent = content;
    dayNumber.classList.add("day-number");

    // Create the "New Entry" button
    const button = document.createElement("button");
    button.textContent = "+";
    button.classList.add("new-entry-btn");

    // Append day number and button to the header
    header.appendChild(dayNumber);
    header.appendChild(button);

    // Append the header to the cell
    cell.appendChild(header);
  }

  return cell;
}


const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function buildCalendar(date) {
  const numCols = 7;
  const numRows = 6;
  const theGrid = document.getElementById("theGrid");
  const monthYearDisplay = document.getElementById("monthYearDisplay");

  const month = date.getMonth();
  const year = date.getFullYear();
  const today = new Date();

  monthYearDisplay.textContent = `Workouts for ${monthNames[month]} ${year}`;

  // Clear existing grid content
  theGrid.innerHTML = "";

  // Add days of the week headers
  daysOfWeek.forEach(day => {
    const dayHeader = document.createElement("div");
    dayHeader.textContent = day;
    dayHeader.classList.add("grid-item", "day-header");
    theGrid.appendChild(dayHeader);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add leading empty cells
  for (let i = 0; i < firstDay; i++) {
    theGrid.appendChild(createGridCell("", "empty"));
  }

  // Add day cells
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = createGridCell(day);
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add("current-date");
    }
    theGrid.appendChild(cell);
  }

  // addForm();
}


export function addTodayWorkout() {
  document.getElementById("theGrid").addEventListener("click", (e) => {
    if (e.target.classList.contains("grid-item") && !e.target.classList.contains("empty")) {
      document.getElementById("calendarView").style.display = "none";
      document.getElementById("workoutView").style.display = "block";
    }
  });
}

// function addForm() {
//   const today = new Date().toISOString().split('T')[0];
//   const formContainer = document.createElement("div");
//   formContainer.id = "calendarSidebar";
//   formContainer.innerHTML = `
//     <h2>Today's Workout</h2>
//     <form id="dynamicCalendarEntryForm">
//         <label for="dynamicEntryDate">Date:</label>
//         <input type="date" id="dynamicEntryDate" name="dynamicEntryDate" value="${today}" required><br>
//         <label for="dynamicWorkoutDetails">Workout Details:</label>
//         <textarea id="dynamicWorkoutDetails" name="dynamicWorkoutDetails" rows="4" cols="50"></textarea><br>
//         <button type="submit">Add Entry</button>
//     </form>
//   `;
//   document.body.appendChild(formContainer);
// }