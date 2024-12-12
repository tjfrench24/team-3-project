// Function to navigate between different views
export function navigate(viewId, currentDate, callback) {
  // Hide all elements with the class "view"
  document.querySelectorAll(".view").forEach((view) => {
      view.style.display = "none";
  });

  // Show the requested view by its ID
  const requestedView = document.getElementById(viewId);
  if (requestedView) {
      requestedView.style.display = "block";
  } else {
      console.error(`View not found: ${viewId}`);  // Log an error if the view is not found
  }

  // If the requested view is "calendarView" and a callback function is provided, execute the callback with the current date
  if (viewId === "calendarView" && callback) {
      callback(currentDate);
  }
}
