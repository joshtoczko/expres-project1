var dynamoDb = require('./dynamoDb')

exports.getScores = function () {
    return dynamoDb.getScores()
}