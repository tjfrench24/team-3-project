import { DataTypes } from 'sequelize';
import sequelize from "../database/sequelize.js";

const Progress = sequelize.define('Progress', {
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  muscleMass: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

export default Progress;
