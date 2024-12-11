import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// A WorkoutCalendarEntry belongs to a User.
const workoutCalendarEntry = sequelize.define("WorkoutCalendarEntry", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    workoutDetails: { type: DataTypes.TEXT, allowNull: true }
});

// Create the table if it doesn't exist
await sequelize.sync();

export default workoutCalendarEntry;