var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('authors', {word:'dirka'})
});

module.exports = router;
