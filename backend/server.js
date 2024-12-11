// Server.js
import express from 'express';
import WorkoutRoutes from './routes/workoutRoutes.js';
import CardioRoutes from './routes/cardioRoutes.js'; 

class Server {
  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.setupRoutes();
  }

  // Configure middleware for static files and JSON parsing
  configureMiddleware() {
    // Serve static files from frontend
    this.app.use(express.static('../frontend'));

    // Parse JSON bodies with a limit of 10mb
    this.app.use(express.json({ limit: '10mb' }));
  }

  // Setup routes
  setupRoutes() {
    // Set up routes for workouts and cardio
    this.app.use('/v1/workouts', WorkoutRoutes);
    this.app.use('/v1/cardio', CardioRoutes); 
  }

  // Start the server on a specified port
  start(port = 3000) {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}

// Initialize and start the server
console.log('Starting server...');
const server = new Server();
server.start();