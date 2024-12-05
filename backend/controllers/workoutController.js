// import the Workout model 
const Workout = require('../models/Workouts');

// function to create a new workout
const logWorkout = async (req, res) => {
  const {workout, weight, reps, sets} = req.body;
  // create a new workout in the database
  const newWorkout = await Workout.create({workout, weight, reps, sets});
  // 201 indicates success in creating a new workout 
  res.status(201).json(newWorkout);
};

// function for deleting a workout by id 
const deleteWorkout = async (req, res) => {
  const {id} = req.params;  
  // delete the workout by ID
  const deletedWorkout = await Workout.destroy({where: {id}});
  // show message if the workout doesn't exist 
  if (!deletedWorkout) return res.status(404).json({message: 'Workout does not exist'});
  // message to show workout was deleted (200 used because message is included, something is retrieved)
  res.status(200).json({message: 'Workout deleted successfully'});
};

// function to get all workouts from the database
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.findAll();
  // 200 indicates success in retrieivng workouts 
  res.status(200).json(workouts);
};

// function to aggregate all reps and sets for each workout to show lifetime totals
const getWorkoutSummary = async (req, res) => {
  const summary = await Workout.findAll({
    attributes: [
      // get total sets for specific workout 
      [sequelize.fn('sum', sequelize.col('sets')), 'totalSets'], 
      // get total reps for specific workout 
      [sequelize.fn('sum', sequelize.col('reps')), 'totalReps'], 
    ],
    // only want to see data from database 
    raw: true,
  });
  // 200 indicates success in retrieving workout summary
  res.status(200).json(summary);
};

module.exports = {
  logWorkout,
  deleteWorkout,
  getAllWorkouts,
  getWorkoutSummary,
};