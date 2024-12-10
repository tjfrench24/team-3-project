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
  
  export function buildCalendar(date) {
    const numCols = 7,
      numRows = 5,
      theGrid = document.getElementById("theGrid");
    const monthYearDisplay = document.getElementById("monthYearDisplay");
    const month = date.getMonth();
    const year = date.getFullYear();
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
  
    while (theGrid.firstChild) {
      theGrid.removeChild(theGrid.firstChild);
    }
  
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = numCols * numRows;
  
    for (let i = 0; i < firstDay; i++) {
      const emptySquare = document.createElement("div");
      emptySquare.classList.add("grid-item");
      theGrid.appendChild(emptySquare);
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      const square = document.createElement("div");
      square.textContent = day;
      square.classList.add("grid-item", "white");
      theGrid.appendChild(square);
    }
  
    const remainingCells = totalCells - firstDay - daysInMonth;
    for (let i = 0; i < remainingCells; i++) {
      const emptySquare = document.createElement("div");
      emptySquare.classList.add("grid-item");
      theGrid.appendChild(emptySquare);
    }
  }
  export function addTodayWorkout(){
    let grid = document.getElementById("theGrid")
    grid.addEventListener("click",e=>{
      document.getElementById("calendarView").style.display = 'none'
      document.getElementById("workoutView").style.display = 'block'
    })
  }