# Login page Feature Sequence Diagram

## Feature Description
This feature ensures that when the user is on the log in page, they can not view the other pages. This is a small feature that just makes the app more cohesive and more like a real app, which does not allow access unless logged in. Once the user logs in they can no longer navigate back out to the login page unless they click the log out button.  


## Diagram
```mermaid
sequenceDiagram
    actor User
    participant LoginPage
    participant HomePage
    participant NavigationBar
    
    User->>LoginPage: Enter Username and Password
    User->>LoginPage: Click "Log In" Button
    
    LoginPage->>NavigationBar: Disable Login Button, Enable Other Buttons
    Note over NavigationBar: Login Button Disabled, Other Buttons Enabled
    
    LoginPage->>HomePage: Navigate to Home Page
    HomePage-->>User: Display Home Page
    
    User->>NavigationBar: Click on Home Button
    NavigationBar->>HomePage: Navigate to Home Page
    
    User->>NavigationBar: Click on Calendar Button
    NavigationBar->>HomePage: Navigate to Calendar View
    Note over NavigationBar: Calendar Button is Enabled
    
    User->>NavigationBar: Click on Progress Button
    NavigationBar->>HomePage: Navigate to Progress Graph View
    Note over NavigationBar: Progress Button is Enabled
    
    User->>NavigationBar: Click on Profile Button
    NavigationBar->>HomePage: Navigate to Profile View
    Note over NavigationBar: Profile Button is Enabled
    
    User->>NavigationBar: Click "Log Out" Button
    NavigationBar->>NavigationBar: Disable All Buttons
    NavigationBar->>LoginPage: Navigate to Login Page
    Note over NavigationBar: All Buttons Disabled, Login Button Enabled