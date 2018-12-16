const UserAuth = require('../types/user').UserAuth;

module.exports = {
    authUser: {
        type: UserAuth,
        resolve:  (_, args, context, info) => {
            // return null
        }
    }
}
