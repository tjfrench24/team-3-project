import express from 'express';
import WorkoutController from '../controllers/workoutController.js'; 

class WorkoutRoutes {
  constructor() {
    this.router = express.Router(); 
    this.initializeRoutes(); 
  }

  initializeRoutes() {
    this.router.get("/workouts", async (req, res) => {
      await WorkoutController.getAllWorkouts(req, res);
    });

    this.router.post("/workout", async (req, res) => {
      await WorkoutController.addWorkout(req, res);
    });
 
    this.router.delete("/workouts", async (req, res) => {
      await WorkoutController.clearWorkouts(req, res);
    });
  }

  getRouter() {
    return this.router;
  }
}

export default new WorkoutRoutes().getRouter();