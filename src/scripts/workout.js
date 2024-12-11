export const workouts = [
  { name: "press-up", sets: "4 sets of 12 reps", description: "Maintain standard posture", calories: 120, date: "2024-12-10" },
  { name: "squat", sets: "4 sets of 12 reps", description: "Feet shoulder width apart", calories: 150, date: "2024-12-15" },
  { name: "flat support", sets: "4 sets of 30 seconds", description: "Keep your body straight", calories: 80, date: "2024-12-08" },
];

let totalCalories = 0;
//Initialize exercise plan
export function initializeWorkouts(filteredWorkouts = []) {
  const workList = document.getElementById("workout-list");
  workList.innerHTML = ''; // Clear previous workouts

  // Check if there are workouts for the selected date
  if (filteredWorkouts.length > 0) {
    filteredWorkouts.forEach((exercise) => {
      let e = document.createElement("div");
      e.className = "workout-item";
      e.innerHTML = `
        <h3>${exercise.name} (${exercise.calories} calories)</h3>
        <p>${exercise.sets}</p>
        <p>${exercise.description}</p>
        <button onclick="toggleComplete(this, ${exercise.calories})">Finish</button>
      `;
      workList.appendChild(e);
    });
  } else {
    workList.innerHTML = "<p>No workouts scheduled for this day.</p>";
  }
}

export function toggleComplete(button, calories) {
  let workoutItem = button.parentElement;
  workoutItem.classList.toggle("completed");
  if (workoutItem.classList.contains("completed")) {
    button.textContent = "Not yet";
    totalCalories = totalCalories+ calories;
  } else {
    button.textContent = "Finish";
    totalCalories = totalCalories- calories;
  }
  document.getElementById("calories-count").textContent = totalCalories;
}
window.toggleComplete = toggleComplete
