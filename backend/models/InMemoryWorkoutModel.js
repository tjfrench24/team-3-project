class _InMemoryWorkoutModel {
    static workoutid = 1;
    constructor() {
      this.workouts = [];
    }
  
    async create(workout) {
      workout.id = _InMemoryWorkoutModel.workoutid++;
      this.workouts.push(workout);
      return workout;
    }
  
    async read(id = null) {
      if (id) {
        return this.workouts.find((workout) => workout.id === id);
      }
      return this.workouts;
    }
  
    async update(workout) {
      const index = this.workouts.findIndex((w) => w.id === workout.id);
      this.workouts[index] = workout;
      return workout;
    }
  
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

InMemoryWorkoutModel.create({ workout: "Pushups" });
InMemoryWorkoutModel.create({ task: "Squats"});
  
  const InMemoryWorkoutModel = new _InMemoryWorkoutModel();
  export default InMemoryWorkoutModel;