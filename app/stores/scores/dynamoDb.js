// https://www.npmjs.com/package/dynamodb

var dynamoDb = require('dynamodb');
const Joi = require('joi');
dynamoDb.AWS.config.loadFromPath('./aws/credentials.json');

const hashKey = (userName) => `/users/${userName}/scores/`;
const rangeKey = (userName) => `/users/${userName}`;

const primaryKey = (userName) => ({
    hashKey: hashKey(userName),
    rangeKey: rangeKey(userName)
});

var scoreEntity = dynamoDb.define('entity', {
    hashKey: 'partition_key',
    rangeKey: 'sort_key',
    schema: {
        score: Joi.number()
    }
});

scoreEntity.config({tableName: 'entity'});

/**
 * 
 * @param {string} userName 
 * @returns score: Number
 */
exports.getScores = function (userName) {
    let pk = primaryKey(userName);
    
    scoreEntity.get(pk.hashKey, pk.rangeKey, function (err, result) {
        if (err) {
            console.log(err)
            // do not throw, let manager decide what to do
            score = null;
        } else {
            return result.get('score');
        }
    })
}
