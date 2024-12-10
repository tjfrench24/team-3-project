//const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize";
// create sequelize instance
const sequelize = new Sequelize({ 
  dialect: 'sqlite',     // database is sqlite 
  storage: './database.sqlite', // shows where to create the database file 
});

sequelize.sync().then(() => {
  console.log("Database synced");
}).catch(err => console.error("error syncing database: ", err));

//module.exports = sequelize;
export default sequelize;  