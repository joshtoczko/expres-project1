// https://www.npmjs.com/package/dynamodb

import { AWS, define } from 'dynamodb';
AWS.config.loadFromPath('./aws/credentials.json');

const hashKey = (userId) => `/users/id/${userId}`;

const user = define('user', {
    hashKey: 'UserId',
    schema: {
        User: 'S'
    }
});

user.config({ tableName: 'entity' });

export function get(userId, response) {
    user.get(hashKey(userId), 'user', (err, result) => {
        if (err) {
            console.log(err);
            response(err);
        } else {
            response(result.get('User.UserName').toString());
        }
    });
}
