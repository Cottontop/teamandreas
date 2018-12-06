var express = require('express');
var router = express.Router();

const campaigns = require("../lib/campaigns").campaigns;

/* GET home page. */
router.get('/', function(req, res, next) {
	const campaignJSON = JSON.stringify(campaigns[Math.floor(Math.random() * Math.floor(campaigns.length))]);
	const campaign = campaigns[Math.floor(Math.random() * Math.floor(campaigns.length))];
	res.render('index',{campaign: campaignJSON, noJson: campaign});
});

module.exports = router;
