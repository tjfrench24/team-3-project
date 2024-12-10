import { Sequelize, DataTypes } from "sequelize";


const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", 
});

const Workout = sequelize.define("Workout", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  workout: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

class _SQLiteWorkoutModel {
  constructor() {}

  async init(fresh = false) {
    await sequelize.authenticate();
    await sequelize.sync({ force: fresh });

    if (fresh) {
      await this.create({ workout: "Pushups"});
      await this.create({ workout: "Squats"});
    }
  }

  async create(workout) {
    return await Workout.create(workout);
  }

  async read(id = null) {
    if (id) {
      return await Workout.findByPk(id);
    }
    return await Workout.findAll();
  }

  async update(workout) {
    const workoutToUpdate = await Workout.findByPk(workout.workoutid);
    if (!workoutToUpdate) {
      return null;
    }
    await workoutToUpdate.update(workout);
    return workoutToUpdate;
  }

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