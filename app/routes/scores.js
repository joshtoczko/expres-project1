var express = require('express');
var router = express.Router();
var controller = require('../controllers/scores')

router.get('/', function(req, res, next) {
  res.send(controller.getScores());
});

router.post('/', function (req, res, next) {
  
})

module.exports = router;