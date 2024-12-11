import express from "express";
import passport from "../auth/passport.js";
import {
    loginWithGoogle,
    register,
    login,
    logout,
    saveProfile,
    googleAuthCallback,
    getAdminArea,
    getProfile,
} from "../controllers/userController.js";
import { isAuthenticated, authorizeRole } from "../auth/middleware.js";


const router = express.Router();


//Routes for registration and login
router.post("/register", register);
router.post("/loginWithGoogle", loginWithGoogle);
router.post("/login", login);
router.get("/logout", logout);
router.post("/saveProfile", saveProfile);


//Google Auth routes
router.post(
    "/auth/google",
    passport.authenticate("google", {scope: ["profile"]})
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/"}),
    googleAuthCallback
); 

//Protected routes
router.get("/admin", isAuthenticated, authorizeRole("admin"), getAdminArea);
router.get("/profile", isAuthenticated, getProfile);

export default router;  