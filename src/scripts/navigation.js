export function navigate(viewId, currentDate, callback) {
    document.querySelectorAll(".view").forEach((view) => {
      view.style.display = "none";
    });
  
    const requestedView = document.getElementById(viewId);
    if (requestedView) {
      requestedView.style.display = "block";
    }
  
    if (viewId === "calendarView" && callback) {
      callback(currentDate);
    }
  }
  