// Server.js
import express from "express";
import WorkoutRoutes from "./routes/workoutRoutes.js";
import CardioRoutes from "./routes/cardioRoutes.js";
import session from "express-session";
import sessionRoute from "./routes/sessionRoute.js";
import ProgressRoutes from "./routes/progressRoutes.js";
import cors from "cors";
import passport from "passport";

// class Server {
//   constructor() {
//     this.app = express();
//     this.app.use(cors());
//     this.configureMiddleware();
//     this.setupRoutes();
//     this.app.use(
//       //configure session management
//       session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false,
//       })
//     );

//     this.app.use(passport.initialize());
//     this.app.use(passport.session());
    
//     // Error handling middleware
//     this.app.use((err, req, res, next) => {
//       console.error(err.stack);
//       res.status(500).json({ message: "Something went wrong!" });
//     });
//   }

//   // Configure middleware for static files and JSON parsing
//   configureMiddleware() {
//     // Serve static files from frontend
//     this.app.use(express.static("../src"));

//     // Parse JSON bodies with a limit of 10mb
//     this.app.use(express.json({ limit: "10mb" }));
//   }

//   // Setup routes
//   setupRoutes() {
//     // Set up routes for workouts and cardio
//     this.app.use("/v1/workouts", WorkoutRoutes);
//     this.app.use("/v1/cardio", CardioRoutes);
//     this.app.use("/", sessionRoute);
//     this.app.use("/v1/progress", ProgressRoutes);
//   }

//   // Start the server on a specified port
//   start(port = 3001) {
//     this.app.listen(port, () => {
//       console.log(`Server started on port ${port}`);
//     });
//   }
// }

// // Initialize and start the server
// console.log("Starting server...");
// const server = new Server();
// server.start();

//export default app;

const app = express();
app.use(express.static("../src"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//configure session management
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", sessionRoute);
app.use("/v1/workouts", WorkoutRoutes);
app.use("/v1/cardio", CardioRoutes);
app.use("/", sessionRoute);
app.use("/v1/progress", ProgressRoutes);

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
