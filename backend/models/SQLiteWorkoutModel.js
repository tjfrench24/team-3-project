import { Sequelize, DataTypes } from "sequelize";

// create new Sequelize instance 
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", 
});

// define the Workout model 
const Workout = sequelize.define("Workout", {
  id: {
    // create an id for the workout 
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  workout: {
    // define workout as a string and make it required 
    type: DataTypes.STRING,
    allowNull: false,
  },
});

class _SQLiteWorkoutModel {
  constructor() {}

  async init(fresh = false) {
    await sequelize.authenticate();
    await sequelize.sync({ force: fresh });

    // show how a new workout would appear in the database
    if (fresh) {
      await this.create({ workout: "Pushups"});
      await this.create({ workout: "Squats"});
    }
  }

  // create a new workout 
  async create(workout) {
    return await Workout.create(workout);
  }

  // read workout by the id 
  async read(id = null) {
    if (id) {
      return await Workout.findByPk(id);
    }
    return await Workout.findAll();
  }

  // update a workout by the id 
  async update(workout) {
    const workoutToUpdate = await Workout.findByPk(workout.workoutid);
    if (!workoutToUpdate) {
      return null;
    }
    await workoutToUpdate.update(workout);
    return workoutToUpdate;
  }

  // delete a workout by the id 
  async delete(workout = null) {
    if (workout === null) {
      await Workout.destroy({ truncate: true });
      return;
    }
    await Workout.destroy({ where: { workoutid: workout.workoutid } });
    return workout;
  }
}

const SQLiteWorkoutModel = new _SQLiteWorkoutModel();
export default SQLiteWorkoutModel;