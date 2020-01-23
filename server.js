
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const categoryRoutes = require("./controllers/categoryController");
app.use("/category", categoryRoutes);


const htmlRoutes = require("./controllers/htmlController");
app.use("/", htmlRoutes);


const profileRoutes = require("./controllers/profileController");
app.use("/profile", profileRoutes);


const recRoutes = require("./controllers/recController");
app.use("/rec", recRoutes);





db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);

})
})
