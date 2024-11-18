# Login page and Home page Feature Sequence Diagram

## Feature Description
This feature provides a complete flow from the login process to the homepage, ensuring a smooth user experience. The login page includes input fields for username and password, along with a login button. After entering valid credentials and clicking the login button, the user is navigated to the homepage. The homepage displays workout stats, progress, upcoming workouts, and achievements. Users can access different sections via the navigation bar and perform quick actions like starting a workout or viewing their schedule. Logging out will disable navigation and redirect the user back to the login page.


## Diagram
```mermaid
sequenceDiagram
    actor User
    participant LoginPage
    participant HomePage
    participant NavigationBar
    participant WorkoutView
    participant CalendarView
    participant GraphView

    User->>LoginPage: Enter Username
    User->>LoginPage: Enter Password
    User->>LoginPage: Click "Log In" Button
    LoginPage->>HomePage: Navigate to Home Page
    HomePage-->>User: Display Today's Progress, Weekly Stats, Upcoming Workouts, Achievements
    
    User->>NavigationBar: Click "Home" Button
    NavigationBar->>HomePage: Navigate to Home Page
    
    User->>HomePage: Click "Start Workout" Button
    HomePage->>WorkoutView: Navigate to Workout View
    
    User->>HomePage: Click "View Schedule" Button
    HomePage->>CalendarView: Navigate to Calendar View

    User->>HomePage: Click "Check Progress" Button
    HomePage->>GraphView: Navigate to Progress Graph View
    
    User->>NavigationBar: Click "Log Out" Button
    NavigationBar->>LoginPage: Navigate to Login Page
    Note over LoginPage: User logged out, navigation disabled