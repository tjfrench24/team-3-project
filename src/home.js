import { navigate } from "./scripts/navigation.js";

// Mock data - This would come from a backend
const mockData = {
  todaysWorkout: {
    completed: 2,
    total: 4,
    calories: 350
  },
  weeklyProgress: {
    workouts: 5,
    totalMinutes: 180,
    caloriesBurned: 1200
  },
  upcomingWorkouts: [
    { name: "Morning Cardio", time: "Tomorrow, 7:00 AM", duration: "30 min" },
    { name: "Strength Training", time: "Tomorrow, 5:00 PM", duration: "45 min" },
    { name: "Yoga Session", time: "Wednesday, 8:00 AM", duration: "60 min" }
  ],
  recentAchievements: [
    { icon: "🏃", title: "5K Run Complete", date: "Today" },
    { icon: "💪", title: "New Strength Record", date: "Yesterday" },
    { icon: "🎯", title: "Week Goal Achieved", date: "2 days ago" }
  ]
};

export function initHomeView() {
  const homeView = document.getElementById("homeView");
  if (!homeView) return;

  // Clear existing content
  homeView.innerHTML = `
    <div class="home-container">
      <h1>Welcome to your home dashboard!</h1>
      <p>This app is intended to help maintain your fitness goals, whatever they may be, and organize your workouts. 
          To check your calendar for upcoming workouts, click the calendar button at the top of the page! To keep an
          eye out on your progress and see how you're doing, check out your progress page with the Progress Graph button. If you want to see 
          your fitness profile and take a look at some stats and your goals and fitness levels, head on over to the Fitness 
          Profile page with the button. We want to create easy, helpful workout schedules fit to your needs so you don't have to! Our goal is to provide 
          a quick, simple interface so that you can meet all your goals as seamlessly as possible. We invite you to be your
          best self and conquer your fitness goals.
      </p>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Today's Progress</h3>
          <div class="value">${mockData.todaysWorkout.completed}/${mockData.todaysWorkout.total} Workouts</div>
          <div>${mockData.todaysWorkout.calories} calories burned</div>
        </div>
        <div class="stat-card">
          <h3>This Week</h3>
          <div class="value">${mockData.weeklyProgress.workouts} Workouts</div>
          <div>${mockData.weeklyProgress.totalMinutes} minutes total</div>
        </div>
        <div class="stat-card">
          <h3>Calories Burned</h3>
          <div class="value">${mockData.weeklyProgress.caloriesBurned}</div>
          <div>This week</div>
        </div>
      </div>

      <div class="sections-grid">
        <div class="section-card">
          <h2>Upcoming Workouts</h2>
          <ul class="workout-list">
            ${mockData.upcomingWorkouts.map(workout => `
              <li class="workout-item">
                <div>
                  <strong>${workout.name}</strong>
                  <div>${workout.time}</div>
                </div>
                <div>${workout.duration}</div>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="section-card">
          <h2>Recent Achievements</h2>
          <ul class="achievement-list">
            ${mockData.recentAchievements.map(achievement => `
              <li class="achievement-item">
                <span class="achievement-icon">${achievement.icon}</span>
                <div>
                  <div><strong>${achievement.title}</strong></div>
                  <div>${achievement.date}</div>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initHomeView();
});