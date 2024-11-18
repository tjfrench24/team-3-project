# Workout Tracking Calendar Page

## Feature Description
This feature allows users to track their workouts and calorie consumption in an easily digestable calendar entry format

## Sequence Diagram
```mermaid
sequenceDiagram
    participant User as User
    participant Calendar as Calendar Page
    participant Entry as Calendar Entry
    participant WorkoutForm as Workout/Calorie Form
    participant Server as Server (Data Storage)

    User->>Calendar: Open Calendar Page
    Calendar->>User: Display Calendar with Entries

    User->>Entry: Double-click on Calendar Entry
    Entry->>User: Show Edit Option

    User->>WorkoutForm: Enter Workout and Calorie Information
    WorkoutForm->>User: Display Fields for Workout and Calorie Input

    User->>WorkoutForm: Submit Workout and Calorie Info
    WorkoutForm->>Server: Save Workout and Calorie Data
    Server->>WorkoutForm: Confirm Data Saved
    WorkoutForm->>User: Display Confirmation (Data Saved)

    User->>Calendar: View Updated Calendar Entry
    Calendar->>User: Show Updated Entry (with Workout and Calorie Info)
