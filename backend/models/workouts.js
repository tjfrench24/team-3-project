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
  // weight input 
  weight: {
    type: DataTypes.INTEGER,
    // can be a workout such as pull-ups, which can be weighted or unweighted
    // weight can't be null, but it can be 0. 
    allowNull: false,
  },
  // # reps input
  reps: {
    type: DataTypes.INTEGER,
    allowNull: false,  
    validate: {
      // must be at least 1 rep 
      min: 1,  
    },
  },
  // # of sets input 
  sets: {
    type: DataTypes.INTEGER,
    allowNull: false,  
    validate: {
      // must be at least 1 set 
      min: 1,  
    },
  },
});

module.exports = Workout;