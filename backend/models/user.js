import { Sequelize, DataTypes } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: 'authentication.sqlite',
});

// Create a new instance of Sequelize
// In this case, we are using SQLite as our database
// and storing the database in memory for testing purposes.
// const sequelize = new Sequelize("sqlite::memory:");

// Define the User model
const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING },
  googleId: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "user" }, // Roles: 'user', 'admin'
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
