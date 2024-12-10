//const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize";
// create sequelize instance
const sequelize = new Sequelize({ 
  dialect: 'sqlite',     // database is sqlite 
  storage: './database.sqlite', // shows where to create the database file 
});

//module.exports = sequelize;
export default sequelize;  