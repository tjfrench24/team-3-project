# Workout recommendation Feature Sequence Diagram

## Feature Description
This feature helps users to see their training programs and recommended exercises. And it contains, the movements trained, the number of sets and a brief description of the movements trained. Each training movement has a calorie consumption, and when the user finishes a movement, he can click finish, and then he can see the total consumption of today's exercise.But right now it's a beginner's version, and it's not set up to provide the logic correctly. So now when clicking on today's date, a training program with preset values appears

## Sequence Diagram
```mermaid
sequenceDiagram
    actor User
    participant Calendar
    participant ExercisePlan
    
    User->>Calendar: Click on the date in the calendar
    Calendar->>ExercisePlan: Navigate to Exercise Plan Page
    
    ExercisePlan-->>User: Display Exercise List with Details
    Note over ExercisePlan: Shows:<br/>1. Exercise Names<br/>2. Required Sets<br/>3. Descriptions<br/>4. Estimated Calories
    
    User->>ExercisePlan: Perform Exercises
    User->>ExercisePlan: Click "Finish" Button
    
    ExercisePlan->>ExercisePlan: Calculate Total Calories and save the workout data
    ExercisePlan-->>User: Display Total calories consumed
