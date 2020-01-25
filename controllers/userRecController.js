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

// //display all users's list in a specific category  
// router.get("/userlist", function (req,res) {
//   db.
// })



// //display a specific user's personal and list  
// router.get("/", function (req,res) {
//   db.
// })



//get request for user of that category
router.get("/grabuser/:category", function (req, res) {
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