const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const dotenv = require("dotenv");

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

        // User.findOrCreate({ id: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        console.log("check user");
        console.log(profile);
        // User.findOne({ userId: profile.id })
        //     .then(dbModel => {
        //         if (!dbModel) {

        //             console.log("create user");
        //             User.create({
        //                 name: profile._json.name,
        //                 portrait: profile.photos[0].value,
        //                 userId: profile.id
        //             })
        //                 .then(dbModel => console.log(dbModel))
        //                 .catch(err => console.log(err));
        //         }
        //     })
        //     .catch(err => console.log(err));

        // console.log(profile);
        cb(null, profile);
    }
));

module.exports = passport