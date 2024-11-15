let totalCalories = 0;

export function initializeWorkouts() {
  const workouts = [
    { name: "press-up", sets: "4 sets of 12 reps", description: "Maintain standard posture", calories: 120 },
    { name: "squat", sets: "4 sets of 12 reps", description: "Feet shoulder width apart", calories: 150 },
    { name: "flat support", sets: "4 sets of 30 seconds", description: "Keep your body straight", calories: 80 },
  ];

  const workoutList = document.getElementById("workout-list");
  if (!workoutList) return;

  workoutList.innerHTML = "";
  workouts.forEach((workout) => {
    const workoutItem = document.createElement("div");
    workoutItem.className = "workout-item";
    workoutItem.innerHTML = `
      <h3>${workout.name} (${workout.calories} calories)</h3>
      <p>${workout.sets}</p>
      <p>${workout.description}</p>
      <button onclick="toggleComplete(this, ${workout.calories})">Finish</button>
    `;
    workoutList.appendChild(workoutItem);
  });
}

export function toggleComplete(button, calories) {
  const workoutItem = button.parentElement;
  workoutItem.classList.toggle("completed");
  if (workoutItem.classList.contains("completed")) {
    button.textContent = "Not yet";
    totalCalories += calories;
  } else {
    button.textContent = "Finish";
    totalCalories -= calories;
  }
  document.getElementById("calories-count").textContent = totalCalories;
}
