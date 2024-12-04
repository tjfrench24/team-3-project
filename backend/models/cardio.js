// import to define data types of columns in database table 
const {DataTypes} = require('sequelize');
/// connect to SQLite database 
const sequelize = require('../database/sequelize');

// create the Cardio model 
const Cardio = sequelize.define('Cardio', {
  // cardio name input 
  cardio: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  // duration input 
  duration: {
    type: DataTypes.FLOAT,
    allowNull: false,  
    validate: {
      min: 0.1,  
    },
  },
  // distance input 
  distance: {
    type: DataTypes.FLOAT,
    // may not be a type of cardio in which distance is traveled (ex. jumping rope)
    allowNull: true,  
    validate: {
      min: 0.1,  
    },
  },
});

module.exports = Cardio;