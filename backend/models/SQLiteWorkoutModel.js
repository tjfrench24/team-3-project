import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const Workout = sequelize.define("Workout", {
  name: { type: DataTypes.STRING, allowNull: false },
  sets: { type: DataTypes.STRING, allowNull: false },
  calories: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.STRING },
  planId: { type: DataTypes.STRING, allowNull: true },
});

export default Workout;