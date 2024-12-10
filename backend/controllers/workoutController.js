import ModelFactory from "../model/ModelFactory.js";

class WorkoutController {
  constructor() {
    ModelFactory.getModel().then((model) => {
      this.model = model; 
    });
  }
  
  async getAllWorkouts(req, res) {
      const workouts = await this.model.read();
      res.json({ workouts });
  }

  async addWorkout(req, res) {
    try {
      if (!req.body || !req.body.workout || !req.body.duration) {
        return res.status(400).json({ error: "Workout description is required." });
      }

      const workout = await this.model.create(req.body);

      console.log(`New Workout: ${workout.id} - ${workout.workout}`);

      return res.status(201).json(workout);
    } catch (error) {
      console.error("Error adding workout:", error);
      return res
        .status(500)
        .json({ error: "Failed to add workout. Please try again." });
  }
  }

   async clearTasks(req, res) {
    await this.model.delete();
    res.json(await this.model.read());
  }
}

export default new WorkoutController();