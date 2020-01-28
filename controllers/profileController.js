var db = require("../models");

const express= require('express');
const router = express.Router();

//route to show profile info
// Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//     db.User.findOne({
//         raw: true,
//         //attributes: ['id', 'firstname'],
//         where: {
//             id : req.session.user.id
//         },
//         include: [
//             {model: db.List}
//         ]
//     }
//     ).then(function (userData){
//         console.log("profile controller js/")
//         console.log(JSON.stringify(userData))
//         console.log(userData)

//         db.UserRec.findAll({
//             raw:true,
//             where: {
//                 ListId
//             }
//         })

//         var hbsObject = {
//             User: userData
//         };
//         res.render("profile", hbsObject);
//     })
// });



router.get("/", function (req, res) {
    db.User.findOne({
        raw: true,
        where: {
            id : req.session.user.id
        }
    }
    ).then(function (userData){
        // console.log("profile controller js/")
    
        db.UserRec.findAll({
            raw:true,
            where: {
                UserId : req.session.user.id
            },
            include: [{model: db.List}]
        }).then(function(recData){
            console.log("rec data incoming");

            // the below is needed because findAll creates a list with an additional dictionary inside of it.
            // Therefore a for loop was needed to pull out the deeper array.
            recData = recData.map((e,i)=>{
                let caroCount ={
                    0: "one",
                    1: "two",
                    2: "three",
                    3: "four",
                    4: "five",
                    5: "six",
                    6: "seven",
                    7: "eight",
                    8: "nine",
                    9: "ten",
                    10: "eleven",
                    11: "twelve",
                    12: "thirteen",
                    13: "fourteen",
                    14: "fifteen",
                    15: "sixteen",
                    16: "seventeen",
                    17: "eighteen",
                    18: "nineteen",
                    19: "twenty"
                };
                return {
                    rec_img: e.rec_img,
                    body : e.body,
                    id : e.id,
                    category : e["List.category"],
                    ListId: e.ListId,
                    caroselNumString:caroCount[i]
                }
            }) 


                    var hbsObject = {
                        User: userData,
                        Recos: recData
                    };
                    // res.json(hbsObject)
                    res.render("profile", hbsObject);
        })

    })
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
                id: req.session.user.id
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



//route to delete your rec
router.post("/delete", function (req, res){
    console.log("gothere to delete");
    console.log(req.body);
    db.UserRec.destroy(
    {
        where: {
        id: Number(req.body.id)
        }
    }
    ).then (function (Userdb){
    console.log("rec removed")
    res.redirect("/")

    })
});



module.exports = router