const passportRouter = require("express").Router();
const passport = require("../oAuthConfig/passport");

passportRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
);

passportRouter.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        console.log("in route auth/google/callback")
        res.redirect("http://localhost:3000/");
        // dashboard instead of /User
    });

module.exports = passportRouter;