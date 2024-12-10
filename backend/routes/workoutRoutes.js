import express from 'express';
import WorkoutController from '../controllers/workoutController.js'; 

class WorkoutRoutes {
  constructor() {
    this.router = express.Router(); 
    this.initializeRoutes(); 
  }

  initializeRoutes() {
    // get route to get all workouts 
    this.router.get("/workouts", async (req, res) => {
      await WorkoutController.getAllWorkouts(req, res);
    });

    // post route to add a workout 
    this.router.post("/workout", async (req, res) => {
      await WorkoutController.addWorkout(req, res);
    });
 
    // delete route to clear all workouts 
    this.router.delete("/workouts", async (req, res) => {
      await WorkoutController.clearWorkouts(req, res);
    });
  }

  getRouter() {
    return this.router;
  }
}

export default new WorkoutRoutes().getRouter();