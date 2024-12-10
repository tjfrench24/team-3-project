import ModelFactory from "../model/ModelFactory.js";

class WorkoutController {
  constructor() {
    ModelFactory.getModel().then((model) => {
      this.model = model; 
    });
  }
  
  // get all workouts 
  async getAllWorkouts(req, res) {
      const workouts = await this.model.read();
      res.json({ workouts });
  }

  // add a new workout 
  async addWorkout(req, res) {
    try {
      if (!req.body || !req.body.workout || !req.body.duration) {
        return res.status(400).json({ error: "Workout description is required." });
      }

      // Create the new workout object with a unique ID
      const workout = await this.model.create(req.body);

      console.log(`New Workout: ${workout.id} - ${workout.workout}`);

       // Send back the created workout as the response
      return res.status(201).json(workout);
    } catch (error) {
      // Log any unexpected errors and send a server error response
      console.error("Error adding workout:", error);
      return res
        .status(500)
        .json({ error: "Failed to add workout. Please try again." });
  }
  }

  // clear all workouts 
   async clearWorkouts(req, res) {
    await this.model.delete();
    res.json(await this.model.read());
  }
}

export default new WorkoutController();