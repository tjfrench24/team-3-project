import { fitnessProfileService } from '../services/FitnessProfileRepositoryService.js';

document.addEventListener("DOMContentLoaded", () => {
    // event listener for saving profile
    // loads profile data after it is saved 
  document.getElementById('saveProfileButton').addEventListener('click', saveProfile);
  loadProfileData();
});

// Save the profile data
function saveProfile() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const cardioLevel = document.getElementById('cardioLevel').value;
    const liftingLevel = document.getElementById('liftingLevel').value;
    const goal1 = document.getElementById('goal1').value;
    const goal2 = document.getElementById('goal2').value;
    const goal3 = document.getElementById('goal3').value;
  
    const profileData = {
      height: height,
      weight: weight,
      cardioLevel: cardioLevel,
      liftingLevel: liftingLevel,
      goal1: goal1,
      goal2: goal2,
      goal3: goal3
    };

    fitnessProfileService.saveFitnessProfile(profileData);
    loadProfileData();
}
  
// Load the profile data
function loadProfileData() {
    const profileData = fitnessProfileService.loadFitnessProfileFromDB();
    const profileDisplay = document.getElementById('profileDisplay');
  
    profileDisplay.innerHTML = '';
  
    if (profileData) {
      const height = document.createElement('p');
      height.innerHTML = `<strong>Height (ft/in):</strong> ${profileData.height}`;
        
      const weight = document.createElement('p');
      weight.innerHTML = `<strong>Weight (lbs):</strong> ${profileData.weight}`;
  
      const cardioLevel = document.createElement('p');
      cardioLevel.innerHTML = `<strong>Cardio Level:</strong> ${profileData.cardioLevel}`;
  
      const liftingLevel = document.createElement('p');
      liftingLevel.innerHTML = `<strong>Weight-Lifting Level:</strong> ${profileData.liftingLevel}`;

      const goalsTitle = document.createElement('p');
      goalsTitle.innerHTML = '<strong>Goals:</strong>';
  
      const goalsList = document.createElement('ul');

      profileDisplay.appendChild(height);
      profileDisplay.appendChild(weight);
      profileDisplay.appendChild(cardioLevel);
      profileDisplay.appendChild(liftingLevel);
      profileDisplay.appendChild(goalsTitle);
      profileDisplay.appendChild(goalsList);
  
      const goal1 = document.createElement('li');
      goal1.textContent = profileData.goal1;
  
      const goal2 = document.createElement('li');
      goal2.textContent = profileData.goal2;
  
      const goal3 = document.createElement('li');
      goal3.textContent = profileData.goal3;
  
      goalsList.appendChild(goal1);
      goalsList.appendChild(goal2);
      goalsList.appendChild(goal3);
    } else {
      profileDisplay.innerHTML = 'No profile data found.';
    }
}
