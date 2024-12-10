// handle HTTP requests with express package 
//const express = require('express');
import { validateDeleteWorkout, validateLogWorkout } from '../middleware/workoutValidation.js';
import { getAllWorkouts, deleteWorkout, getWorkoutSummary, logWorkout } from '../controllers/workoutController.js';
import express from 'express';
// import workoutController 
//const workoutController = require('../controllers/workoutController');  
import workoutController from '../controllers/workoutController.js';
// import middleware for validation 
//const workoutValidation = require('../middleware/workoutValidation');  
import workoutValidation from '../middleware/workoutValidation.js';

// create router to handle route requests 
const router = express.Router();

// POST route to create a new workout and add to the database 
router.post('/', validateLogWorkout, logWorkout);

// GET route to get all workouts from the database 
router.get('/', getAllWorkouts);

// DELETE route to remove a workout from the database by its id. 
router.delete('/:id', validateDeleteWorkout, deleteWorkout);

// GET route to get workout lifetime total sets and reps of each workout
router.get('/summary', getWorkoutSummary);

// export the router 
// module.exports = router;
export default router;  