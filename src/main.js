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


    // Start with the login view
    navigate("loginView");
});

const printMe = (i, j) => {
    console.log("You clicked on (" + (i + 1) + ", " + (j + 1) + ")");
  };
  
const build = () => {
    const numCols = 7,
    numRows = 5,
    theGrid = document.getElementById("theGrid");
  
    for (let i = 0; i < numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            let square = document.createElement("div");
            let day = 7 * i + j
            let text = document.createTextNode(String(day % 31 + 1));
            square.appendChild(text);

            square.classList.add("grid-item")
            square.classList.add("white")
            square.onclick = function() {
            }
            theGrid.appendChild(square);
        } 
    }
};
  