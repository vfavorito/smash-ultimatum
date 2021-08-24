const passportRouter = require("express").Router();
const passport = require("../oAuthConfig/passport");
const isAuthenticated = require("../oAuthConfig/isAuthenticated")

passportRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
);

passportRouter.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect("https://smash-ultimatum.herokuapp.com/dashboard");
        // dashboard instead of /User
    });

passportRouter.get("/User", isAuthenticated, (req, res) => {
    res.json(req.user);
});

module.exports = passportRouter;