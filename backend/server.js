// handle HTTP requests with express package 
const express = require('express');
// handle request data with middleware 
const bodyParser = require('body-parser');
// import routes 
const workoutRoutes = require('./routes/workoutRoutes');
const cardioRoutes = require('./routes/cardioRoutes');
// import sequelize instance 
const db = require('./database/sequelize');

//create instance of express 
const app = express();

// use bodyParser middleware with json method 
app.use(bodyParser.json()); 

// set up routes
app.use('/workouts', workoutRoutes);
app.use('/cardio', cardioRoutes); 

// connect to the database
db.sync()
  .then(() => console.log('Connected to database'))
  .catch(e => console.log('Error connecting to the database:', e));

// start the server
app.listen(5000, () => {
  console.log('Running server on port 5000');
});