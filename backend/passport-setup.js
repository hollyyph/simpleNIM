const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    //User.findById(id, function(err, user) {
    done(null, user);
    //});
});

passport.use(new GoogleStrategy({
        clientID: "30081492270-826n6g67as44kcje8c0t0f6tkb3fcb4r.apps.googleusercontent.com",
        clientSecret: "VNDioPWgV4IUCI-eQaR6Ldt3",
        callbackURL: "http://localhost:5000/google/callback" //url the user get redirect after login google
    },
    function(accessToken, refreshToken, profile, done) {
        // use the profile info (mainly profile id) to check if the user is registered in ur db
        //User.findOrCreate({ googleId: profile.id }, function(err, user) {
        return done(null, profile);
        //})
    }
))