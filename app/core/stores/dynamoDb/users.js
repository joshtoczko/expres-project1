// https://www.npmjs.com/package/dynamodb

const { AWS, define, types } = require('dynamodb');
const Joi = require('joi');
const { v4: uuid } = require('uuid');
AWS.config.loadFromPath('./aws/credentials.json');

const hashKey = (id) => `/users/id/${id}`;
const rangeKey = 'user';

const Schema = define('user', {
    hashKey: 'EntityId',
    rangeKey: 'EntityType',
    timestamps: true,
    schema: {
        EntityId: Joi.string(),
        EntityType: Joi.string(),
        User: {
            UserName: Joi.string()
        }
    }
});

Schema.config({ tableName: 'entity' });

exports.get = (id, res) => {
    Schema.get(hashKey(id), rangeKey, (err, result) => {
        if (err) {
            console.log(err);
            res(err);
        } else {
            res(result?.get('User')?.toString());
        }
    });
}

exports.create = (username, res) => {
    const userObj = {
        EntityId: hashKey(uuid()),
        EntityType: rangeKey,
        User: {
            UserName: username
        }
    }

    Schema.create(userObj, (err, ent) => {
        if (err) res(500);
        res(`Create user for ${ent.get('User')?.UserName}`);
    });
}
