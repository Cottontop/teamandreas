var express = require('express');
var router = express.Router();

const campaigns = require("../lib/campaigns").campaigns;

/* GET home page. */
router.get('/', function(req, res, next) {
	let randomNumber = Math.floor(Math.random() * Math.floor(campaigns.length));
	const campaignJSON = JSON.stringify(campaigns[randomNumber]);
	const campaign = campaigns[randomNumber];
	res.render('index',{campaign: campaignJSON, noJson: campaign});
});

module.exports = router;
