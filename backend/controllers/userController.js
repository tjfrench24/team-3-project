import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/user.js";
import cors from 'cors';

// Load environment variables
dotenv.config();

//Helper
const factoryResponse = (status, message) => ({ status, message });

const existsUser = async (username) => {
    const user = await User.findOne({ where: { username }});
    return user;
};

// Registration route
// Creates a new user in the database
export const register = async (req, res) => {
    //check if username taken
    if (await existsUser(username))
        return res.status(400).json(factoryResponse(400, `Username ${username} already exists`));

    const hash = await bcrypt.hash(password, 10);
    await User.create({ username, password: hash});
    res.json(factoryResponse(200, "Registration successful"));
    console.log("User registered successfully");
};

// Login route: checks credentials and logs them in
export const login = async (req, res, next) => {
    console.log("Entered backend login");
    
    const { username, password } = req.body;
    console.log(username);
    console.log(password)
    const user = await User.findOne({ where: { username }});
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json(factoryResponse(401, "Invalid login"));
    }
    console.log(`found user ${user}`);

    // Log user in using req.login() function provided by passport
    // establishes login session for the user
    req.login(user, (err) => 
        err ? next(err) : res.json(factoryResponse(200, "Login successful"))
    );

};

// logout route
export const logout = (req, res) => {
    req.logout(function (err) {
        if(err) {
            res.json(factoryResponse(500, "Logout failed"));
            return;
        }
        res.json(factoryResponse(200, "Logout successful"));
    });
};

export const loginWithGoogle = (req, res) => {
    res.redirect("/auth/google");
};


// Google auth callback route
// Called by google after user has authenticated
export const googleAuthCallback = (req, res) => {
    res.redirect("/");
};

// Admin area route
export const getAdminArea = (req, res) => {
    res.json(factoryResponse(200, "Welcome to the admin area"));
};

//Profile route
export const getProfile = (req, res) => {
    res.json(factoryResponse(200, `Welcome, ${req.user.username}`));
  };