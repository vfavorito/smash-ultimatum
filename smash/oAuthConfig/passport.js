const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const CharData = require("../client/src/utils/SmashCharacters.json");
const CharArray = CharData.characters
const dotenv = require("dotenv");

const User = require("../models/user");

dotenv.config();

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser((user, done) => {
    return done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: process.env.GoogleID,
    clientSecret: process.env.GoogleSecret,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log("in googlestrategy");
        User.findOne({ userId: profile.id })
            .then(dbModel => {
                if (!dbModel) {

                    console.log("create user");
                    User.create({
                        name: profile._json.name,
                        portrait: profile.photos[0].value,
                        userId: profile.id,
                        characterStats:CharArray.map((character) => {return({name:character.name,wins:0,losses:0})}),
                        ironManStats:{wins:0,losses:0},
                        tourneyStats:{wins:0,losses:0}
                    })
                        .then(dbModel => console.log(dbModel))
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
        cb(null, profile);
    }
));

module.exports = passport