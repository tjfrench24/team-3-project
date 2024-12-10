// import to define data types of columns in database table 
//const {DataTypes} = require('sequelize');
import { Sequelize, DataTypes } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

// import sequelize from '../database/sequelize.js';
// import { DataTypes } from '../database/sequelize.js';
/// connect to SQLite database 
//const sequelize = require('../database/sequelize');

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: 'authentication.sqlite',
});

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


export default Workout;