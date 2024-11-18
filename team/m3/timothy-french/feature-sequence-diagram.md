# Fitness Profile Feature Sequence Diagram

## Feature Description
The Fitness Profile feature allows a user to enter characterisitcs about themselves such as height, weight, self-assessed cardio and weight-lifting levels, as well as three of their current fitness goals. This allows users to get an overall sense of where they start their fitness journey and as they the use the application, they can see their current fitness 'attributes'. 

## Sequence Diagram
```mermaid
sequenceDiagram
   actor User
    participant Fitness Profile Page 
    participant HTML
    participant profile.js
    participant Fitness Profile Repository Service
    participant EventHub
    
    User->>Fitness Profile Page: Click on 'Fitness Profile' button to navigate to the page
    profile.js->>Fitness Profile Repository Service: calls loadFitnessProfileFromDB()

    User->>HTML: user enters their information into each of the fields described above from the form in HTML file
    User->>HTML: clicks 'Save Profile' Button
    HTML->>EventHub: saveProfileClicked event
    EventHub->>profile.js: listener for Save Profile button

    profile.js->>HTML: get user inputs from form 
    profile.js->>Fitness Profile Repository Service: call saveFitnessProfile(profileData)
    Fitness Profile Repository Service ->> profile.js: call loadFitnessProfileFromDB()
    profile.js->>HTML: display profile data to user
