const manager = require('../core/managers/users');

exports.get = (id, res) => {
    manager.get(id, res);
}

exports.create = ({ username: username }, res) => {
    manager.create(username, res);
}