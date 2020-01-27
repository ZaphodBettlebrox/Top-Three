const express = require('express');
const router = express.Router();


//first page that will load.  If user has account and logs in it will take them to the entry page.
router.get("/", function (req, res) {
    if (req.session.user) {
        res.render("entry", req.session.user);
    } else {
        res.render("login");
    }
})



//render entry page
router.get("/entrypage", function (req, res) {
    if (req.session.user) {
        res.render("entry", req.session.user);
    } else {
        // alert("You need to login")
        res.render("login");
    }
});

//render viewUserRec html
router.get("/userRec", function (req, res) {
    if (req.session.user) {
        res.render("userRec", req.session.user);
    } else {
        // alert("You need to login")
        res.render("login");
    }
});

//render viewUserRec html
router.get("/allUserRec", function (req, res) {
    if (req.session.user) {
        res.render("allUserRec", req.session.user);
    } else {
        res.render("login");
    }
});

module.exports = router