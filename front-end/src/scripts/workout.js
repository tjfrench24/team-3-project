export const workouts = [
  { name: "press-up", sets: "4 sets of 12 reps", description: "Maintain standard posture", calories: 120 },
  { name: "squat", sets: "4 sets of 12 reps", description: "Feet shoulder width apart", calories: 150 },
  { name: "flat support", sets: "4 sets of 30 seconds", description: "Keep your body straight", calories: 80 },
];
let totalCalories = 0;
//initialize exercise plan
export function initializeWorkouts() {
  const workList = document.getElementById("workout-list");
  workList.innerHTML = '';
  //add every exercise plan
  workouts.forEach(exercise =>{
  let e = document.createElement("div")
    e.className = "workout-item"
    e.innerHTML = `
    <h3>${exercise.name} (${exercise.calories} calories)</h3>
    <p>${exercise.sets}</p>
    <p>${exercise.description}</p>
    <button onclick="toggleComplete(this, ${exercise.calories})">Finish</button>
  `;
  workList.appendChild(e)
  });
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
