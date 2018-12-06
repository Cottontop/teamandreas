var express = require('express');
var router = express.Router();

const campaigns = require("../lib/campaigns").campaigns;

/* GET home page. */
router.get('/', function(req, res, next) {
	const campaignJSON = campaigns[Math.floor(Math.random() * Math.floor(campaigns.length))];
	res.render('index',{campaign: campaignJSON});
});

module.exports = router;
