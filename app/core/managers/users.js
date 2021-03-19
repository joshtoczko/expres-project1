const store = require("../stores/dynamoDb/users")

exports.get = (id, res) => {
    store.get(id, res);
}

exports.create = (username, res) => {
    store.create(username, res);
}