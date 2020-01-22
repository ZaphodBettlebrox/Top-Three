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
        res.render(entry.html);
      });
    });

 // This is just the show page. Doesn't need to create or delete. 
    // app.post("/api/category", function(req, res) {
    // db.List.create(req.body).then(function(dbList) {
    //     res.json(dbList);
    //     });
    // });

    // app.delete("/api/category/:id", function(req, res) {
    //     db.List.destroy({
    //         where: {
    //         id: req.params.id
    //         }
    //     }).then(function(dbList) {
    //         res.json(dbList);
    //     });
    // });

};