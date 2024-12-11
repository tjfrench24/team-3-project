import express from "express";
import {
    register,
    login,
    logout,
    saveProfile,
} from "../controllers/userController.js";

const router = express.Router();

//Routes for registration and login
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/saveProfile", saveProfile);


export default router;  