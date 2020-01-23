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




//route to delete your account



module.exports = router