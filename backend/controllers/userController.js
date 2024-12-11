import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/user.js";

// Load environment variables
dotenv.config();

//Helper
const factoryResponse = (status, message) => ({ status, message });

let user = {}

const existsUser = async (username) => {
    const user = await User.findOne({ where: { username }});
    return user;
};

// Registration route
// Creates a new user in the database
export const register = async (req, res) => {
    //check if username taken
    const { username, password } = req.body; 
    // if (await existsUser(username))
    //     return res.status(400).json(factoryResponse(400, `Username ${username} already exists`));

    const hash = await bcrypt.hash(password, 10);
    await User.create({ username, password: hash});
    res.json(factoryResponse(200, "Registration successful"));
    console.log("User registered successfully");
};

// Login route: checks credentials and logs them in
export const login = async (req, res, next) => {    
    const { username, password } = req.body;
    user = await User.findOne({ where: { username }});
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json(factoryResponse(401, "Invalid login"));
    }
    console.log(`found user ${user}`);

    // Log user in using req.login() function provided by passport
    // establishes login session for the user
    req.login(user, (err) => 
        err ? next(err) : res.json(factoryResponse(200, user))
    );
};

export const saveProfile = async (req, res) => {
    console.log("entered save Profile");
    const { height, weight, cardioLevel, liftingLevel, goal1, goal2, goal3 } = req.body; 
    // if (await existsUser(username))
    //     return res.status(400).json(factoryResponse(400, `Username ${username} already exists`));
    user.height = height
    user.weight = weight
    user.cardioLevel = cardioLevel
    user.liftingLevel = liftingLevel
    user.goal1 = goal1
    user.goal2 = goal2
    user.goal3 = goal3


    await user.save();
    res.json(factoryResponse(200, "profile save successful"));
};

// logout route
export const logout = (req, res) => {
    req.logout(function (err) {
        if(err) {
            res.json(factoryResponse(500, "Logout failed"));
            return;
        }
        user = {}
        res.json(factoryResponse(200, "Logout successful"));
    });
};

export const loginWithGoogle = (req, res) => {
    res.redirect("/auth/google");
};

//Profile route
export const getProfile = (req, res) => {
    res.json(factoryResponse(200, `Welcome, ${req.user.username}`));
  };