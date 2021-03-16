var express = require('express');
var router = express.Router();
var controller = require('../controllers/scores')

router.get('/', function(req, res, next) {
  controller.getScores((value) => res.send(value))
});

router.post('/', function (req, res, next) {
  
})

module.exports = router;