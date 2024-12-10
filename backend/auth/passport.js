import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "../models/user.js";

//Load environment variables from a .env file
dotenv.config();


//Google OAuth strategy
//Used to authenticate users with gmail account
//Requires client ID and client secret
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
         
        //called when user is authenticated with Google,
        //profile info is passed to function and should either
        //create a new user in the database or retrieve existing
        async (accessToken, refreshToken, profile, done) => {
            let user = await User.findOne({ where: { googleId: profile.id } });
            if (!user) {
                user = await User.create({
                    googleId: profile.id,
                    username: profile.displayName,
                    role: "admin",
                });
            }
            done(null, user);
        }
    )
);

// This function is called when user authenticated with Google
// Serializes the user's ID and passes it to done callback
// ID is stored in the session and used to retrieve the user object
// in subsequent requests
passport.serializeUser((user, done) => done(null, user.id));

//called to retrieve the user object from the session
//deserializes users id and passes it to done callback
//user obj is then available in req.user property in request handler
passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user);
});

export default passport;