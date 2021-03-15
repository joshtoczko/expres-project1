var express = require('express');
var router = express.Router();
var controller = require('../controllers/scores')

router.get('/', function(req, res, next) {
  res.send(controller.getScores());
});

module.exports = router;