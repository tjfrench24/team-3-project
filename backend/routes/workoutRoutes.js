import express from "express";
import { getWorkouts, saveWorkout } from "./workoutController.js";

const router = express.Router();

// Fetch all workouts by planId
router.get("/workouts", getWorkouts);

// Save a new workout
router.post("/workouts", saveWorkout);

export default router;