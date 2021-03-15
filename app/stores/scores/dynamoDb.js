// https://www.npmjs.com/package/dynamodb

var dynamoDb = require('dynamodb');
const Joi = require('joi');
dynamoDb.AWS.config.loadFromPath('./aws/credentials.json');

const hashKey = (user) => `/users/${user}/scores`;
const rangeKey = (user) => `/users/${user}`;

var scoreEntity = dynamoDb.define('entity', {
    hashKey: 'partition_key',
    rangeKey: 'sort_key',
    schema: {
        score: Joi.number()
    }
})

scoreEntity.config({tableName: 'entity'});

/**
 * 
 * @param {string} userName 
 * @returns score: Number
 */
exports.getScores = function (userName) {
    let score;
    
    scoreEntity.get(hashKey(userName), function (err, result) {
        if (err) {
            console.log(err)
            // do not throw, let manager decide what to do
            score = null;
        } else {
            score = result.get('score');
        }
    })

    return score;
}
