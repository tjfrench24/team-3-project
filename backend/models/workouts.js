// import to define data types of columns in database table 
import {DataTypes} from 'sequelize'
/// connect to SQLite database 
import {sequelize} from '../database/sequelize.js';

// create the workout model 
const Workout = sequelize.define('Workout', {
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // workout name input 
  workout: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,  
  },
  // weight input 
  weight: {
    type: DataTypes.FLOAT,
    // can be a workout such as pull-ups, which can be weighted or unweighted
    // weight can't be null, but it can be 0. 
    allowNull: false,
  },
  muscleRate:{
    type:DataTypes.FLOAT
  },
  totalCalories:{
    type: DataTypes.INTEGER
  },
  date:{
    type:DataTypes.DATE,
    defaultValue:DataTypes.NOW
  }
  
  // # reps input
  /*reps: {
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
  },*/
});

export default Workout