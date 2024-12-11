import express from "express";
import passport from "../auth/passport.js";
import {
    loginWithGoogle,
    register,
    login,
    logout,
    googleAuthCallback,
    getAdminArea,
    getProfile,
} from "../controllers/userController.js";
import { isAuthenticated, authorizeRole } from "../auth/middleware.js";

class SessionRoutes {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Routes for registration and login
    this.router.post("/register", register);
    this.router.post("/loginWithGoogle", loginWithGoogle);
    this.router.post("/login", login);
    this.router.get("/logout", logout);

    // Google Auth routes
    this.router.get(
      "/auth/google",
      passport.authenticate("google", { scope: ["profile"] })
    );

    this.router.get(
      "/auth/google/callback",
      passport.authenticate("google", { failureRedirect: "/" }),
      googleAuthCallback
    );

    // Protected routes
    this.router.get("/admin", isAuthenticated, authorizeRole("admin"), getAdminArea);
    this.router.get("/profile", isAuthenticated, getProfile);
  }

  getRouter() {
    return this.router;
  }
}

export default new SessionRoutes().getRouter();