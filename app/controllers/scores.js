var manager = require('../core/scores/manager')
var apiUser = require('./models/user')

exports.getScores = function() {
  //call core code to return scores
  let scores = manager.getScores(apiUser.create('jtoczko', '1'))
  //return rendered view
  return scores;
}