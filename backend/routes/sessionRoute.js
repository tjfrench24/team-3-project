import express from "express";
import {
    register,
    login,
    logout,
    getProfile,
    saveProfile,
} from "../controllers/userController.js";
import { isAuthenticated, authorizeRole } from "../auth/authMiddleware.js";

const router = express.Router();

//Routes for registration and login
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/saveProfile", saveProfile);

router.get("/admin", isAuthenticated, authorizeRole("admin"));
router.get("/profile", isAuthenticated, getProfile);

export default router;  