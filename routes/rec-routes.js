var db = require("../models");


// 

// get all existing top 3 routes.
// render all existing top 3 informations through handlebars.
// 

module.exports = function(app) {
    app.get("/api/category", function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      db.List.findAll({}).then(function(dbList) {
        res.json(dbList);
      });
    });














};