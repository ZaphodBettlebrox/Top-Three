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




// //grabbing a user's list and joining user rec to it.  Need to also pull in product
router.get("/grablistproduct/:id", function (req,res) {
  db.List.findOne({
    where:{
      id: req.params.id,
    },
    include:[{model:db.UserRec, include:[{model: db.Product}]},
    {model: db.User}]
  }).then(function (dbList) {
    res.json(dbList);
  });
})


//get list data joined with user table by category
router.get("/grabuser/:category", function (req, res) {
  console.log(req.params.category)
  db.List.findAll({
    include:[db.User],
    where: {
      category: req.params.category
    }
  }).then(data => {
    res.json(data);
  })
});


module.exports = router