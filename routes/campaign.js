var express = require('express');
var router = express.Router();

const campaigns = require("../lib/campaigns").campaigns;
/* GET users listing. */
router.get('/', function(req, res, next) {
  let id = req.query.id;
  console.log("id ",id);
  let fin = {};
  campaigns.forEach( c => {
  	fin[c.id] = c;
  });
  res.render('campaign', {campaign: fin[id]});

});

module.exports = router;
