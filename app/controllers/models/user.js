const { verify } = require('../../core/models/user');
var coreUserModel = require('../../core/models/user');
/**
 * creates user object
 * @param {string} userName 
 * @param {number} userId 
 */
exports.create = (userName, userId) => ({userName: userName, userId: userId});
/**
 * Verifies user is valid
 * @param {user object} user 
 * @returns true if all properties exist and is not null
 */
exports.verify = (user) => user && user.userName && user.userId;
exports.convert = function (user) {
    if (verify(user)) {
        return coreUserModel.create(user.userName, user.userId);
    }

    throw new Exception('could not convert api model to core');
}