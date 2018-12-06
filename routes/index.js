var express = require('express');
var router = express.Router();

const campaigns = require("../lib/campaigns").campaigns;

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index',{campaign: JSON.stringify(campaigns[Math.floor(Math.random() * Math.floor(campaigns.length))])});
});

module.exports = router;
