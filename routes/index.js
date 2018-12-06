var express = require('express');
var router = express.Router();

const campaigns = require("../lib/campaigns");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
