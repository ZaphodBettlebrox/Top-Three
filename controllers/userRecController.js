var db = require("../models");

const express = require('express');
const router = express.Router();
// 



//grabs all the list and joins with user rec
router.get("/", function (req, res) {
    res.render("userRec")
  });

module.exports = router