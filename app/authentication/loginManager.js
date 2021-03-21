const tokenManager = require('./tokenManager');

exports.handleLogin = (username, res) => {
    tokenManager.getToken(username, res);
}