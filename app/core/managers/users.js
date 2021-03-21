const store = require("../stores/dynamoDb/users")

exports.get = (id, res) => {
    store.get(id, res);
}

exports.create = (username, res) => {
    store.create(username, res);
}

exports.exists = (username, res) => {
    store.getUserByUsername(username, (user) => {
        if (user) {
            res({
                exists: true,
                ...user
            })
        } else {
            res({
                exists: false
            })
        }
    });
}