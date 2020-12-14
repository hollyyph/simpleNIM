const express = require("express");
const fs = require('fs')
const path = require('path')
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const passport = require('passport');
const cookieSession = require("cookie-session");
require('./passport-setup');

const app = express(); //create express app

const homepageURL = "http://localhost:8081/";

var corsOptions = {
    origin: "http://localhost:8081"
};

//Create a write stream (in append mode)
var accessLogSteam = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// Setup the logger
app.use(morgan('dev'))

app.use(morgan('combined', { stream: accessLogSteam }))

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//
app.use(cookieSession({
    name: 'simplenim-session',
    keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.sendStatus(401);
    }
}

//middleware functions for oauth
app.use(passport.initialize()); //authentification process
app.use(passport.session()); //session to authenticate

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//sync method to syncronize the db using sequelize
const db = require("./app/models");

db.sequelize.sync();

//in the dev
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route GET request
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to simplenim application by Holly." });
// });

app.get("/", (req, res) => { //ubah taro di frontend(?)
    res.send("You are not logged in!");
});

app.get("/failed", (req, res) => {
    res.send("You FAILED to login!");
});

app.get("/good", isLoggedIn, (req, res) => {
    // Identitas user yang login akan ditampilkan di console
    console.log(`Welcome ${req.user._json.name} ! (email: ${req.user._json.email} )    \n\nRedirecting to Home Page. Open this link if you're not redirected in 5 seconds ${homepageURL}`)
        // User langsung diredirect ke halaman utama
    res.redirect(homepageURL);
});

require("./app/routes/simplenim.routes")(app);

// to login using google account
app.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/good'); //keknya diubah jadi home aja
    });


app.get('/logout', (req, res) => {
        req.session = null;
        req.logout();
        res.redirect('/');
    })
    // set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});