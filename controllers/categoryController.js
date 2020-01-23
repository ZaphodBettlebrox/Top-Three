var db = require("../models");
const express = require('express');
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.List.findAll({
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
                list: data
            };
            res.render("category", hbsObject);
        });
});


module.exports = router;