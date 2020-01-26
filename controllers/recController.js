var db = require("../models");

const express = require('express');
const router = express.Router();
// 

//get render the create rec page
router.get("/newRec", function (req, res) {
  res.render("createRec")
});


//get userRec data with this route
router.get("/", function (req, res){
  db.UserRec.findAll({raw:true}).then(data => {
    res.json(data);
  })
})


//get request for products of that category
router.get("/grablist/:category", function (req, res) {
  db.Product.findAll({
    where: {
      category: req.params.category
    }
  }).then(data => {
    res.json(data);
  })
});

//post request to insert new list
router.post("/", function (req, res) {
  console.log("req/")
  // console.log(req)
  // console.log(req.body)
  db.List.create({
    category: req.body.category,
    //need to FIX THIS
    UserId: req.session.user.id
  }).then(dbList => {
    console.log(dbList.id,'listid')
    db.UserRec.create({
      ListId: dbList.id,
      ProductId: req.body.recOne.ProductId,
      body: req.body.recOne.body,
      rec_img: req.body.recOne.rec_img,
      UserId: req.session.user.id
    }).then(dbRec => {
      console.log(dbList.id,'listid')
      db.UserRec.create({
        ListId: dbList.id,
        ProductId: req.body.recTwo.ProductId,
        body: req.body.recTwo.body,
        rec_img: req.body.recTwo.rec_img,
        UserId: req.session.user.id
      }).then(dbRec => {
        console.log(dbList.id,'listid')
        db.UserRec.create({
          ListId: dbList.id,
          ProductId: req.body.recThree.ProductId,
          body: req.body.recThree.body,
          rec_img: req.body.recThree.rec_img,
          UserId: req.session.user.id
        }).then(data=>{
          res.json(data)
        })
      })
    })
  })
})


//create post for creating new product
router.post("/newProd", function (req, res) {
  console.log("rec/newProd at recController.js");
  console.log(req.body)
    db.Product.create({
      p_name: req.body.p_name,
      category: req.body.category,
    }).then(data=>{
      res.json(data)
    })
})


//grabs all the list and joins with user rec
router.get("/test", function (req, res) {
  db.List.findAll({
    include:[db.UserRec]
  }).then(function (dbList) {
    res.json(dbList);
  });
});


// 1 specific category, multiple user lists. THIS will need to be a join.
router.get("/api/:id", function (req, res) {
  // time to join and include the proper top 3 search params.
  db.List.findAll({}).then(function (dbList2) {
    res.json(dbList2);
    res.render(dbList2);
  })
})

module.exports = router