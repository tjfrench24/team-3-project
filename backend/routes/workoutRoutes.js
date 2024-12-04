// handle HTTP requests with express package 
const express = require('express');
// import workoutController 
const workoutController = require('../controllers/workoutController');  
// import middleware for validation 
const workoutValidation = require('../middleware/workoutValidation');  

// create router to handle route requests 
const router = express.Router();

// POST route to create a new workout and add to the database 
router.post('/', workoutValidation.validateLogWorkout, workoutController.logWorkout);

// GET route to get all workouts from the database 
router.get('/', workoutController.getAllWorkouts);

// DELETE route to remove a workout from the database by its id. 
router.delete('/:id', workoutValidation.validateDeleteWorkout, workoutController.deleteWorkout);

// GET route to get workout lifetime total sets and reps of each workout
router.get('/summary', workoutController.getWorkoutSummary);

// export the router 
module.exports = router;