var express = require('express');
var router = express.Router();

/* GET demo page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Event Hubs Demo' });
});

module.exports = router;
