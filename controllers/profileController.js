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
            recData = recData.map(e=>{
                return {
                    rec_img: e.rec_img,
                    body : e.body,
                    category : e["List.category"]
                }
            }) 
            
                    var hbsObject = {
                        User: userData,
                        Recos: recData
                    };
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
router.delete("/delete", function (req, res){
    db.User.destroy({
        profileurl: req.body.profileurl
    },
    {
        where: {
        id: req.session.user.id
        }
    });
})



//route account to view user's recommendation



//route account to view liked recs



module.exports = router