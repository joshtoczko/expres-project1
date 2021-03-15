var store = require('../../stores/scores/interface')

/**
 * Get user score
 * @param {object} user 
 * @returns {number} score
 */
exports.getScores = function(user) {
    return store.getScores(user);
}