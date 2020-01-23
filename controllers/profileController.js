var db = require("../models");

const express= require('express');
const router = express.Router();

//route to show profile info
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.User.findAll({
            raw: true
        })
        .then(function (data) {
            // let burgerarray = [];
            // for (let index = 0; index < data.length; index++) {
            //     // console.log(data[index].dataValues);
            //     console.log("----------------");
            //     burgerarray.push(data[index].dataValues)
            // }
            // console.log(burgerarray)
          
            var hbsObject = {
                User: data
            };
            res.render("profile", hbsObject);
        });
});



//route to update profile info
router.put("/:id", function (req, res) {
    // console.log(req.body.id)
    db.User.update(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            bio: req.body.bio
        },
        {
            where: {
                id: req.body.id
            }
        })
        .then(function (Userdb) {
            console.log(Userdb)
            res.json(Userdb);
        });
});



//route to delete your account




//route account to view user's recommendation



//route account to view liked recs



module.exports = router