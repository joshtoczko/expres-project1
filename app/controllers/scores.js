var manager = require('../core/scores/manager')
var apiUser = require('./models/user')

exports.getScores = function(response) {
  //call core code to return scores
  return manager.getScores(apiUser.create('jtoczko', '1'), response);
}