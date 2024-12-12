import { Sequelize, DataTypes } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

export const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: 'authentication.sqlite',
});

// Create a new instance of Sequelize

// Define the User model
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING },
  // googleId: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "admin" }, // Roles: 'user', 'admin'
  height: { type: DataTypes.STRING },
  weight: { type: DataTypes.STRING },
  cardioLevel: { type: DataTypes.STRING },
  liftingLevel: { type: DataTypes.STRING },
  goal1: { type: DataTypes.STRING },
  goal2: { type: DataTypes.STRING },
  goal3: { type: DataTypes.STRING },
});

//Create the table if it doesn't exist
sequelize.sync({force: true}).then(() => {
  console.log("Database synced");
}).catch(err => console.error("error syncing database: ", err));

// Export the User model for use in other files
export default User;
