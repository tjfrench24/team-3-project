# Calendar Feature Sequence Diagram

## Feature Description
The Calendar feature allows users to track their workouts, meals, and goal deadlines. It provides an interactive calendar where users can navigate through previous and next months and see the current date highlighted for better organization and planning of their fitness activities.

## Sequence Diagram
```mermaid
sequenceDiagram
   actor User
    participant Calendar Page 
    participant HTML
    participant calendar.js
    participant Calendar Repository Service
    participant EventHub
    
    User->>Calendar Page: Click on 'Calendar' button to navigate to the page calendar.js->>Calendar Repository Service: call loadCalendarData()

    User->>HTML: navigate to previous or next month 
    HTML->>EventHub: monthChangeClicked event 
    EventHub->>calendar.js: listener for month change

    calendar.js->>HTML: update calendar view 
    calendar.js->>Calendar Repository Service: saveCalendarState() 
    Calendar Repository Service ->> calendar.js: loadCalendarData() 
    calendar.js->>HTML: display calendar data to user