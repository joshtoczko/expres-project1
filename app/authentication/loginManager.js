const tokenManager = require('./tokenManager');

exports.handleLogin = (username, res) => {
    // TODO: IDP authentication

    tokenManager.getToken(username, res);
}