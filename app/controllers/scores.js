var manager = require('../core/scores/manager')

exports.getScores = function() {
  //call core code to return scores
  let scores = manager.getScores()
  //return rendered view
  return scores;
}