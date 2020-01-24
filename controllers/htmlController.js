const express= require('express');
const router = express.Router();

router.get("/entry", function(req, res){
    res.render("entry", {
        success:true
    })
})

// router.get("/rec", function(req, res) {
//     res.render("rec", {
//         success:true
//     })
// })

module.exports = router

