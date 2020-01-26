var db = require("../models");

const express = require('express');
const router = express.Router();

//route to display userRec page
router.get("/", function (req, res) {
    res.render("userRec")
  });



//grabs all the list and joins with user rec
router.get("/test", function (req, res) {
  db.List.findAll({
    include:[db.User]
  }).then(function (dbList) {
    res.json(dbList);
  });
});




// //display a specific user's product and list  
router.get("/grablistproduct/:id/:category", function (req,res) {
  db.UserRec.findAll({
    include: [{model: db.List}],
    include: [{model: db.Product}],
    where:{
      UserId: req.params.id,
      category: req.params.category
    }
  }).then(function (dbList) {
    res.json(dbList);
  });
})



//get list data joined with user table by category
router.get("/grabuser/:category", function (req, res) {
  console.log(req.params.category)
  db.List.findAll({
    include:[db.User],
    include:[db.List],
    include:[db.Product],
    where: {
      category: req.params.category
    }
  }).then(data => {
    res.json(data);
  })
});



module.exports = router