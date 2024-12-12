class _InMemoryWorkoutModel {
    static workoutid = 1;
    constructor() {
      this.workouts = [];
    }
  
    // create a new workout and return 
    async create(workout) {
      workout.id = _InMemoryWorkoutModel.workoutid++;
      this.workouts.push(workout);
      return workout;
    }
  
    // read a workout by its id and return 
    async read(id = null) {
      if (id) {
        return this.workouts.find((workout) => workout.id === id);
      }
      return this.workouts;
    }
  
    // update a workout by its id and return 
    async update(workout) {
      const index = this.workouts.findIndex((w) => w.id === workout.id);
      this.workouts[index] = workout;
      return workout;
    }
  
    // delete a workout by its id 
    async delete(workout = null) {
      if (workout === null) {
        this.workouts = [];
        return;
      }
  
      const index = this.workouts.findIndex((w) => w.id === workout.id);
      this.workouts.splice(index, 1);
      return workout;
    }
  }

// initialize with example workouts 
//const InMemoryWorkoutModel = new _InMemoryWorkoutModel();
// InMemoryWorkoutModel.create({ workout: "Pushups" });
// InMemoryWorkoutModel.create({ workout: "Squats"});
  
export default _InMemoryWorkoutModel;