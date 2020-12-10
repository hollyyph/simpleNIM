const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express(); //create express app

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(morgan('dev'));
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

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
app.get("/", (req, res) => {
    res.json({ message: "Welcome to simplenim application by Holly." });
});

require("./app/routes/simplenim.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});