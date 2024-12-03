// import to define data types of columns in database table 
const {DataTypes} = require('sequelize');
/// connect to SQLite database 
const sequelize = require('../databse/sequelize');

// create the workout model 
const Workout = sequelize.define('Workout', {
  // workout name input 
  workout: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  // # reps input 
  reps: {
    type: DataTypes.INTEGER,
    allowNull: false,  
    validate: {
      min: 1,  
    },
  },
  // # of sets input 
  sets: {
    type: DataTypes.INTEGER,
    allowNull: false,  
    validate: {
      min: 1,  
    },
  },
});

module.exports = Workout;