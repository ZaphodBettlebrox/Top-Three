const express= require('express');
const router = express.Router();


//first page that will load.  If user has account and logs in it will take them to the entry page.
router.get("/",function(req,res){
    if(req.session.user) {
        res.render("entry",req.session.user);
    }else {
        res.render("login");
    }
})


//render entry page
router.get("/entrypage", function(req, res){
    res.render("entry")
})



module.exports = router

