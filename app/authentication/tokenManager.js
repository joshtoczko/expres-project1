const jwt = require('jsonwebtoken');
const expJwt = require('express-jwt');
const { SSMClient, GetParameterCommand } = require('@aws-sdk/client-ssm');
const app = require('../app');

var thisSecret = 'Redacted';

exports.getSecret = async (res) => {
    const ssmClient = new SSMClient({ region: 'us-east-1' });
    const params = {
        Name: 'dev-express-project1-jwt-secret',
        WithDecryption: true
    };

    const command = new GetParameterCommand(params);

    const secret = await (ssmClient.send(command));

    if (secret.Parameter.Value === 'REDACTED') {
        res('an error has occurred', null);
    }

    thisSecret = secret.Parameter.Value;
    res(null, thisSecret);
    return thisSecret;
}

exports.getToken = (username, res) => {
    this.getSecret((err, secret) => {
        jwt.sign({ username: username }, secret, {
            expiresIn: '6h'
        }, (err, enc) => {
            if (err) res(err, null);
            res(null, enc);
        })
    });
}
