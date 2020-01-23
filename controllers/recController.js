var db = require("../models");

const express= require('express');
const router = express.Router();
// 


//get render the create rec page
router.get("/newRec", function(req, res) {
  res.render("createRec")
});



//get request for products of that category
router.get("/grablist/:category", function(req, res) {
  db.Product.findAll({
    where: {
      category: req.params.category
    }
  }).then(data=>{
    res.json(data);
  })
});

//post request to insert new list






router.get("/", function(req, res) {
  db.List.findAll({}).then(function(dbList) {
    res.json(dbList);
  });
});
// 1 specific category, multiple user lists. THIS will need to be a join.
router.get("/api/:id", function(req,res){
  // time to join and include the proper top 3 search params.
  db.List.findAll({}).then(function(dbList2){
    res.json(dbList2);
    res.render(dbList2);
  })
})

module.exports = router