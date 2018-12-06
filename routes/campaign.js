var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/campaign', function(req, res, next) {
  res.send('respond with a resource');
  //req.querystring.id;
	res.render('campaign');
});

module.exports = router;
