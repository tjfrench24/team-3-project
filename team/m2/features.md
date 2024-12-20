
# Features

## Randomize Calendar
This feature allows users to track their workouts and calorie intake on a daily basis. Users can input their workout routines and dietary details, which helps in maintaining a consistent record of their fitness activities. The calendar view provides an overview of their progress, ensuring they stay on top of their fitness goals by visually organizing their routines and diet.

**Assigned To**: Alan/Liz/Kyle

**Points**: 5

**Points(Kyle)**: 3

**Point Justification (Kyle Calendar Enhancements)**: The implementation of the calendar enhancements was a complex task that required meticulous attention to detail. I ensured the navigation functionality was intuitive and the design remained user-friendly. This feature is integral to the overall user experience, facilitating effective planning and organization of fitness activities. The thorough testing and debugging process ensured a smooth and error-free user interface.

## Progress Graph
This feature introduces a visual representation of the user's fitness progress over time, using dynamic graphs and charts. Users can now visually track improvements in various metrics such as weight, muscle mass, and endurance. This visual aid empowers users to make informed decisions about their workout and diet plans based on clear, data-driven insights.

**Points**: 4

**Point Justification**: Developing the Progress Graph involved integrating the Chart.jslibrary and configuring it to accurately display fitness metrics. The process was challenging due to the need for precise data handling and graphical representation. Despite encountering and overcoming several technical hurdles, I successfully delivered a feature that adds substantial value to the application by enhancing user engagement and motivation through visual progress tracking.

**Assigned To**: Kyle


## Fitness Profile Page 
**Description**: This feature collects essential data from users such as height, weight, weight-lifting level, cardio level, and the user's fitness goals. Gathering this data is crucial for tailoring personalized workout and diet plans, enabling the app to provide specific and relevant recommendations to each user based on their unique profile. Users are able to update their profile and goals as they make progress in their fitness journey. When the page is loaded, data is retrieved from IndexedDB and displayed on the page if the user has already saved their profile in a previous session. If not, when the user enters their information and presses the "Save Profile" button, the inputs are saved in IndexedDB and retrieved to be displayed. 

**Points**: 4

**Point Justification**: I found this feature very challenging to implement. However, this feature is not entirely complete. I spent a lot of my time on Milestone 3 creating this feature, writing a decent amount of code with a lot of working parts, but I could not figure out why the saved profile information does not render correctly when the information is saved. I spent a lot of time and effort trying to figure out how to fix this problem, but was unable to before the deadline. I could try to fix this before starting my part of the next milestone. 

**Team Member**: Timothy French

## Buttons and Pages of Application 
**Description**: Added and styled buttons that will be clicked to change pages in the application. Also added home page and fitness profile page to application for a more well-rounded application.

**Points**: 1

**Team Member**: Timothy French

## Applicaton Navigation 
**Description**: Provides way for user to nagivate throughout the app. This feature starts the application at the login page. Then, the user can click the Home, Calendar, Progress Graph, and Fitness Profile buttons to navigate throughout the application. This also allows the correct information to be rendered when each page is loaded. (This feature does not include the code to require login and direct you to the home page after. That is a separate feature). 

**Points**: 2

**Team Member**: Timothy French

## Navigation Enablement
**Description**: This feature disables all other views before the user has logged in and enables them once the user has entered both their username and password and logged in. A log out button sends it back to the login page and disables the other views.

**Points**: 2

**Team Member**: Megan Greene

## Basal Metabolism Calculator
This feature calculates the user's basal metabolism rate (BMR) by considering their age, weight, height, and exercise frequency. Understanding the BMR helps in determining the daily calorie requirements for the user, which is foundational for creating effective diet and exercise plans tailored to their fitness goals.

**Assigned To**: Liz

## Dietary Plan Generator
Based on the user's basal metabolism and fitness goals (such as muscle building, fat loss, or body shaping), this feature provides a detailed diet plan. It includes the recommended intake of key nutrients like fat, carbohydrates, dietary fiber, and protein, tailored to support the user's specific goals and daily calorie needs.

**Assigned To**: Liz

## Workout Recommendation
This feature suggests workout programs that are customized to the user's fitness goals and exercise capacity. It considers user preferences and aversions to certain exercises, helping to prevent injuries and ensure that the workout plans are enjoyable and sustainable. The recommendations adjust based on user progress and feedback.

**Assigned To**: Justin

## Login Page
A secure login page that allows users to access their personalized fitness dashboard. It ensures that user data is protected and provides a gateway to the app's features, keeping personal information safe while offering a smooth user experience.

**Assigned To**: Megan

## APIs for Workout Tips
This feature integrates external APIs to generate varied and effective workout tips. It enriches the user's fitness journey by providing access to a wide range of exercise routines and fitness advice, helping users stay motivated and informed.

**Assigned To**: Rishabh

## Community and Social Sharing:
This feature allows users to share their progress, workout routines, and achievements with a community within the app for motivation and accountability.

**Assigned To**: Rishabh

## Multi-Device Access
Users can access their fitness data and plans across multiple devices such as mobiles, laptops, smartwatches, etc. Which ensures seamless continuity in their fitness journey.

## Personalized Goal Setting
Users can set specific, measurable, and time bound fitness goals, such as weight loss, muscle gain, or improved cardiovascular endurance. The app will then generate a customized plan to help the user achieve their objectives.

**Assigned To**: Megan
