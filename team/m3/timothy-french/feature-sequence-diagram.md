# Fitness Profile Feature Sequence Diagram

## Feature Description
The Fitness Profile feature allows a user to enter characterisitcs about themselves such as height, weight, self-assessed cardio and weight-lifting levels, as well as three of their current fitness goals. This allows users to get an overall sense of where they start their fitness journey and as they the use the application, they can see their current fitness 'attributes'. 

## Sequence Diagram
```mermaid
sequenceDiagram
    actor User
    participant Fitness Profile Page
    participant HTML
    participant main.js
    participant profile.js
    participant Fitness Profile Repository Service
    participant EventHub
    
    %% User interacts with UI
    User->>Fitness Profile Page: Click on 'Fitness Profile' button to navigate to the page
    Fitness Profile Page->>profile.js: Initialize page, check for existing profile
    profile.js->>Fitness Profile Repository Service: calls loadFitnessProfileFromDB()
    
    %% Display existing profile (if available)
    Fitness Profile Repository Service->>profile.js: returns profile data
    profile.js->>HTML: Display profile data (if available)

    %% User inputs new data
    User->>HTML: Enters new fitness profile data (height, weight, etc.)
    
    %% User saves profile
    User->>HTML: Clicks 'Save Profile' Button
    HTML->>EventHub: publish saveProfileClicked event
    EventHub->>profile.js: listen for saveProfileClicked event
    
    %% Save profile logic
    profile.js->>HTML: Retrieve user inputs from form fields
    profile.js->>Fitness Profile Repository Service: saveFitnessProfile(profileData)
    Fitness Profile Repository Service->>profile.js: Confirms profile has been saved
    
    %% Reload and display updated profile
    profile.js->>Fitness Profile Repository Service: calls loadFitnessProfileFromDB() to get updated data
    Fitness Profile Repository Service->>profile.js: returns updated profile data
    profile.js->>main.js: Pass updated profile data
    main.js->>HTML: Display updated profile data to user
    profile.js->>EventHub: publish FitnessProfileSaved event
   
