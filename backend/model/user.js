import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// Create a new instance of Sequelize
// In this case, we are using SQLite as our database
// and storing the database in memory for testing purposes.
// const sequelize = new Sequelize("sqlite::memory:");

// Define the User model
const User = sequelize.define("User", {
  id: { type: DataTypes.UUID, default: DataTypes.UUIDV4, primaryKey: true },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING },
  googleId: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "user" }, // Roles: 'user', 'admin'
});

// Create the table if it doesn't exist
await sequelize.sync();

// // Add a test user that can be used in the login screen.
// const [user, created] = await User.findOrCreate({
//   where: { username: "test" },
//   defaults: { password: "test" }
// });

// Export the User model for use in other files
export default User;