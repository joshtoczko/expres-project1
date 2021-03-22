const jwt = require('jsonwebtoken');
const expJwt = require('express-jwt');
const { SSMClient, GetParameterCommand } = require('@aws-sdk/client-ssm');
const app = require('../app');

var thisSecret = 'Redacted';

const getSecret = async (res) => {
    const ssmClient = new SSMClient({ region: 'us-east-1' });
    const params = {
        Name: 'dev-express-project1-jwt-secret',
        WithDecryption: true
    };

    const command = new GetParameterCommand(params);

    // ssmClient.send(command, (err, data) => {
    //     if (err) res(err, null);
    //     res(null, data.Parameter.Value);
    // });
    const secret = await (ssmClient.send(command));
    thisSecret = secret.Parameter.Value;
    res(null, thisSecret);
    return thisSecret;
}

exports.getToken = (username, res) => {
    getSecret((err, secret) => {
        jwt.sign({ username: username }, secret, {
            expiresIn: '6h'
        }, (err, enc) => {
            if (err) res(err, null);
            res(null, enc);
        })
    });
}
