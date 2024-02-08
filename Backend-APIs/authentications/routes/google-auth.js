const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const router = express.Router();

// Initialize passport
router.use(passport.initialize());

// Set up Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: 'http://localhost:3000/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        // Handle user profile data here, e.g., save to the database
        return done(null, profile);
    }
));

// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect or respond as needed
        res.redirect('/dashboard');
    }
);

// Protected route example
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Welcome to your dashboard!');
    } else {
        res.redirect('/auth/google');
    }
});

module.exports = router;