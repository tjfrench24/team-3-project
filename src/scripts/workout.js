// workout.js
import { workoutData } from './workoutData.js';

let totalCalories = 0;

async function saveWorkoutDatabase(data){
  try{
    console.log('Sending data',data)
    let response = await fetch("http://localhost:5000/workouts/save",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    })
    if(response.ok){
      alert("success saved to database")
    }
    else{
      throw new Error('Save failed')
    }
  }
  catch(error){
    console.error('Error',error)
    alert('Save failed')
  }
}

function showWorkout(planId){
 let content = document.getElementById('workout-content');
 content.innerHTML = '';
 let exercises = workoutData[planId];
 exercises.forEach(exercise => {
   let div = document.createElement('div');
   div.className = 'exercise-item';
   div.innerHTML = `
     <h3>${exercise.name} (${exercise.calories} calories)</h3>
     <p>${exercise.sets}</p>
     <button onclick="addToSelected('${exercise.name}', '${exercise.sets}', ${exercise.calories})">add</button>
   `;
   content.appendChild(div);
 });
 initializeWorkouts();
}

function removeFromSelected(button,calories){
 button.parentElement.remove();
 totalCalories -= calories;
 document.getElementById('calories-count').textContent = totalCalories;
}

function addToSelected(name,sets,calories){
 let selectedList = document.getElementById('selected-exercises');
 let exerciseDiv = document.createElement('div');
 exerciseDiv.className = 'selected-exercise';
 exerciseDiv.innerHTML = `
   <h3>${name} (${calories} calories)</h3>
   <p>${sets}</p>
   <button onclick="removeFromSelected(this, ${calories})">delete</button>
 `;
 selectedList.appendChild(exerciseDiv);
 totalCalories += calories;
 document.getElementById('calories-count').textContent = totalCalories;
}

export function toggleComplete(id) {
 let menu = document.getElementById(id);
 menu.classList.toggle("active");
}

export function initializeWorkouts() {
 if (!document.getElementById('selected-exercises')) {
   const selectedList = document.createElement('div');
   selectedList.id = 'selected-exercises';
   selectedList.className = 'selected-exercises';
   document.getElementById('workout-container').appendChild(selectedList);
 }
}

function saveWorkout(){
 let exercisesList = document.getElementById('selected-exercises');
 let exercises = [];
 let exerciseItems = exercisesList.getElementsByClassName('selected-exercise');
 for(let item of exerciseItems){
   exercises.push({
     name: item.querySelector('h3').textContent,
     sets: item.querySelector('p').textContent
   });
 }
 let data = {
   workout: exercises,
   weight: document.getElementById('userWeight').value,
   muscleRate: document.getElementById('muscleRate').value,
   totalCalories: totalCalories
 };
 alert('Save success')
 saveWorkoutDatabase(data)
}

window.toggleMenu = toggleComplete;
window.showWorkout = showWorkout;
window.addToSelected = addToSelected;
window.removeFromSelected = removeFromSelected;
window.saveWorkout = saveWorkout;