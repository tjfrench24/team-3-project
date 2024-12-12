import Workout from "./SQLiteWorkoutModel.js";

export const getWorkouts = async (req, res) => {
  const planId = req.query.planId || "default";
  const workouts = await Workout.findAll({ where: { planId } });
  res.json(workouts);
};

export const saveWorkout = async (req, res) => {
  const { workout } = req.body;

  if (!workout || !Array.isArray(workout)) {
    return res.status(400).json({ error: "Invalid workout data." });
  }

  try {
    const savedWorkouts = await Promise.all(workout.map(w => Workout.create(w)));
    res.status(201).json(savedWorkouts);
  } catch (error) {
    res.status(500).json({ error: "Failed to save workout." });
  }
};