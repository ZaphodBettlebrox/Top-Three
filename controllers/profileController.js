var db = require("../models");

const express= require('express');
const router = express.Router();

//route to show profile info
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.User.findAll({
            raw: true
        }).then(function (data) {
            db.User.findOne({
                raw: true,
                where: {
                    id : req.session.user.id
                }
            }
            ).then(function (singledata){

                console.log(JSON.stringify(singledata))
                var hbsObject = {
                    User: data,
                    singleUser: singledata
                };
                res.render("profile", hbsObject);
            })
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

// route to update profile url.
router.post("/setprofileurl", function (req, res) {
    db.User.update(
        {
            profileurl: req.body.profileurl
        },
        {
            where: {
                id: req.session.user.id
            }
        })
        .then(function (Userdb){
            console.log(Userdb)
            res.json(Userdb);
        });

})



//route to delete your account




//route account to view user's recommendation



//route account to view liked recs



module.exports = router