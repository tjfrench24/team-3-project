export function navigate(viewId, currentDate, callback) {
    document.querySelectorAll(".view").forEach((view) => {
      view.style.display = "none";
    });
  
    const requestedView = document.getElementById(viewId);
    if (requestedView) {
      requestedView.style.display = "block";
    } else {
      console.error(`View not found: ${viewId}`);
    }
  
    if (viewId === "calendarView" && callback) {
      callback(currentDate);
    }
  }
  