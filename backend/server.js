// handle HTTP requests with express package 
//const express = require('express');
import express from 'express';
// handle request data with middleware 
//const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
// import routes 
//const workoutRoutes = require('./routes/workoutRoutes');
import workoutRoutes from './routes/workoutRoutes.js';
//const cardioRoutes = require('./routes/cardioRoutes');
//import cardioRoutes from './routes/cardioRoutes'
// import sequelize instance 
//const db = require('./database/sequelize');
import { sequelize } from './database/sequelize.js';
//create instance of express 
const app = express();
app.use((req,res,next)=>{
  console.log(`${req.method} ${req.url}`);
  next();
})
app.use(express.static('../../src'))
// use bodyParser middleware with json method 
app.use(bodyParser.json()); 

// set up routes
app.use('/workouts', workoutRoutes);
//app.use('/cardio', cardioRoutes); 

// connect to the database
sequelize.sync()
  .then(() => console.log('Connected to database'))
  .catch(e => console.log('Error connecting to the database:', e));

// start the server
app.listen(3000, () => {
  console.log('Running server on port 5000');
});