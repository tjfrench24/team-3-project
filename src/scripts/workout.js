const API_URL = "http://localhost:3001";

// Fetch and display workouts
async function fetchWorkouts(planId) {
  const res = await fetch(`${API_URL}/workouts?planId=${planId}`);
  const workouts = await res.json();

  const content = document.getElementById("workout-content");
  content.innerHTML = workouts.map(workout => `
    <div class="exercise-item">
      <h3>${workout.name} (${workout.calories} calories)</h3>
      <p>${workout.sets}</p>
      <button onclick="addToSelected('${workout.name}', '${workout.sets}', ${workout.calories})">Add</button>
    </div>
  `).join("");
}

// Save workouts
async function saveWorkout() {
  const exercises = Array.from(document.getElementsByClassName("selected-exercise")).map(exercise => ({
    name: exercise.querySelector("h3").textContent.split(" (")[0],
    sets: exercise.querySelector("p").textContent,
  }));

  const data = {
    workout: exercises,
    weight: document.getElementById("userWeight").value,
    muscleRate: document.getElementById("muscleRate").value,
    totalCalories: document.getElementById("calories-count").textContent,
  };

  const res = await fetch(`${API_URL}/workouts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Workout saved successfully!");
  } else {
    alert("Failed to save workout.");
  }
}