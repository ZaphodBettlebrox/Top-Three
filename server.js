
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
var session = require("express-session");
require('dotenv').config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var exphbs = require("express-handlebars");
var foo = {
  json: function(context) {return JSON.stringify(context)}
}

app.engine("handlebars", exphbs({ defaultLayout: "main", helpers:foo }));
app.set("view engine", "handlebars");
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true,cookie:{maxAge: 7200000} }));


const authRoute = require("./controllers/authorization")
app.use("/login", authRoute); 


const htmlRoutes = require("./controllers/htmlController");
app.use("/", htmlRoutes);


const profileRoutes = require("./controllers/profileController");
app.use("/profile", profileRoutes);


const recRoutes = require("./controllers/recController");
app.use("/rec", recRoutes);

// HELPER false saves Data, true deletes from server
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
})
})


