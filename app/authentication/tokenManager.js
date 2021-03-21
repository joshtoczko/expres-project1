const jwt = require('jsonwebtoken');
const { SSMClient, GetParameterCommand } = require('@aws-sdk/client-ssm');

const getSecret = (res) => {
    const ssmClient = new SSMClient({ region: 'us-east-1' });
    const params = {
        Name: 'dev-express-project1-jwt-secret',
        WithDecryption: true
    };

    const command = new GetParameterCommand(params);

    ssmClient.send(command, (err, data) => {
        if (err) res(err, null);
        res(null, data.Parameter.Value);
    });
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
