// https://www.npmjs.com/package/dynamodb

const { AWS, define, types } = require('dynamodb');
const Joi = require('joi');
const { v4: uuid } = require('uuid');
AWS.config.loadFromPath('./aws/credentials.json');

const hashKey = (id) => `/users/id/${id}`;
const hashKeyUsername = (username) => `/users/username/${username}`
const rangeKey = 'user';

const Schema = define('user', {
    hashKey: 'entityId',
    rangeKey: 'entityType',
    timestamps: true,
    schema: {
        entityId: Joi.string(),
        entityType: Joi.string(),
        user: {
            userName: Joi.string()
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
            res(result?.get('user')?.toString());
        }
    });
}

exports.getUserByUsername = (username, res) => {
    Schema.get(hashKeyUsername(username), rangeKey, (err, result) => {
        if (err) {
            console.log(err);
            return res(err);
        }

        const user = result?.get('user');

        if (user) return res(user);

        return res(null);
    })
}

exports.create = (username, res) => {
    const userObj = (entityId) => ({
        entityId: entityId,
        entityType: rangeKey,
        user: {
            userName: username
        }
    });

    const byId = userObj(hashKey(uuid()));
    const byUsername = userObj(hashKeyUsername(username));

    Schema.create([byId, byUsername], (err, ent) => {
        if (err) return res(500);
        res(`Create user for ${ent[0].get('user')?.userName}`);
    });
}
