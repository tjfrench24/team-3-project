import express from "express";
import session from "express-session";
import passport from "./auth/passport.js";
import sessionRoute from "./routes/sessionRoute.js";
import path from 'path';
// handle HTTP requests with express package 
// handle request data with middleware 
import bodyParser from 'body-parser';
import workoutRoutes from './routes/workoutRoutes.js'
import cardioRoutes from './routes/cardioRoutes.js'
// import routes 
// const workoutRoutes = require('./routes/workoutRoutes');
// const cardioRoutes = require('./routes/cardioRoutes');
// import sequelize instance 
import db from './database/sequelize.js';
//const db = require('./database/sequelize');

//create instance of express 
const app = express();

// Configure static file serving
app.use(express.static("public"));

// Configure the Express application
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure session management.
// This is required to persist the login session across requests.
// The session data is stored in memory by default, but you can also
// store it in a database or a cache for better scalability.
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and restore authentication state, if any, from the
// session. This allows you to keep a user's authentication state across
// requests.
app.use(passport.initialize());
app.use(passport.session());

// Use routes from routes.js
app.use("/", sessionRoute);

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
app.listen(3000, () => {
  console.log('Running server on port 3000');
});

export default app;