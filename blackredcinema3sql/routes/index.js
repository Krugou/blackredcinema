var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('movies');
  });
  router.get('/tietosuoja', function(req, res, next) {
    res.render('./partials/tietosuoja');
  });
  module.exports = router;